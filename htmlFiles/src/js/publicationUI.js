/**
 * Publication UI Manager
 * Handles modal creation, form display, and user interactions for CRUD operations
 */

class PublicationUI {
  constructor(crudManager) {
    this.crud = crudManager;
    this.currentType = null;
    this.currentId = null;
    this.isEditMode = false;
  }

  // ==================== MODAL CREATION ====================
  createModal() {
    // Remove existing modal if any
    const existing = document.getElementById('publicationModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'publicationModal';
    modal.setAttribute('tabindex', '-1');
    modal.innerHTML = `
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">Add Publication</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger d-none" id="modalError"></div>
            <form id="publicationForm">
              <div id="formFields"></div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" id="saveButton">Save</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Attach save handler
    document.getElementById('saveButton').addEventListener('click', () => this.handleSave());
    
    return new bootstrap.Modal(modal);
  }

  // ==================== FORM BUILDERS ====================
  normalizePeopleList(value) {
    if (!Array.isArray(value)) return value || '';
    return value
      .map((person) => (typeof person === 'string' ? person : (person?.name || person?.email || '')))
      .map((s) => String(s).trim())
      .filter(Boolean)
      .join(', ');
  }

  getJournalFields(data = {}) {
    return `
      <div class="mb-3">
        <label class="form-label">Title *</label>
        <input type="text" class="form-control" id="title" value="${data.title || ''}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Journal *</label>
        <input type="text" class="form-control" id="journal" value="${data.journal || ''}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Authors * <small>(comma-separated)</small></label>
        <input type="text" class="form-control" id="authors" value="${this.normalizePeopleList(data.authors) || (data.authors || '')}" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Publication Date</label>
          <input type="date" class="form-control" id="publicationDate" value="${data.publicationDate || ''}">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Year</label>
          <input type="text" class="form-control" id="year" value="${data.year || ''}">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Volume</label>
          <input type="text" class="form-control" id="volume" value="${data.volume || ''}">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Quartile</label>
          <input type="text" class="form-control" id="quartile" value="${data.quartile || ''}">
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">DOI</label>
        <input type="text" class="form-control" id="doi" value="${data.doi || ''}">
      </div>
    `;
  }

  getConferenceFields(data = {}) {
    return `
      <div class="mb-3">
        <label class="form-label">Title *</label>
        <input type="text" class="form-control" id="title" value="${data.title || ''}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Conference *</label>
        <input type="text" class="form-control" id="conference" value="${data.conference || ''}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Authors * <small>(comma-separated)</small></label>
        <input type="text" class="form-control" id="authors" value="${this.normalizePeopleList(data.authors) || (data.authors || '')}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Location *</label>
        <input type="text" class="form-control" id="location" value="${data.location || ''}" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Year *</label>
          <input type="number" class="form-control" id="year" value="${data.year || ''}" required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Pages *</label>
          <input type="text" class="form-control" id="pages" value="${data.pages || ''}" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Indexing *</label>
          <input type="text" class="form-control" id="indexing" value="${data.indexing || ''}" required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">DOI *</label>
          <input type="text" class="form-control" id="doi" value="${data.doi || ''}" required>
        </div>
      </div>
    `;
  }

  getPatentFields(data = {}) {
    return `
      <div class="mb-3">
        <label class="form-label">Title *</label>
        <input type="text" class="form-control" id="title" value="${data.title || ''}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Type</label>
        <input type="text" class="form-control" id="type" value="${data.type || ''}">
      </div>
      <div class="mb-3">
        <label class="form-label">Grant Number</label>
        <input type="text" class="form-control" id="grantNo" value="${data.grantNo || ''}">
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Grant Date</label>
          <input type="date" class="form-control" id="grantDate" value="${data.grantDate || ''}">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Publication Date</label>
          <input type="date" class="form-control" id="publicationDate" value="${data.publicationDate || ''}">
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Inventors <small>(comma-separated names)</small></label>
        <input type="text" class="form-control" id="inventors" value="${this.normalizePeopleList(data.inventors) || (data.inventors || '')}" placeholder="e.g., John Doe, Jane Smith">
        <small class="text-muted d-block">Enter inventor names separated by commas</small>
      </div>
    `;
  }

  getBookFields(data = {}) {
    return `
      <div class="mb-3">
        <label class="form-label">Title *</label>
        <input type="text" class="form-control" id="title" value="${data.title || ''}" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Authors * <small>(comma-separated)</small></label>
        <input type="text" class="form-control" id="authors" value="${this.normalizePeopleList(data.authors) || (data.authors || '')}" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Publisher</label>
          <input type="text" class="form-control" id="publisher" value="${data.publisher || ''}">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Year</label>
          <input type="number" class="form-control" id="year" value="${data.year || ''}">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">ISBN</label>
          <input type="text" class="form-control" id="isbn" value="${data.isbn || ''}">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Scopus</label>
          <input type="text" class="form-control" id="scopus" value="${data.scopus || ''}">
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">DOI</label>
        <input type="text" class="form-control" id="doi" value="${data.doi || ''}">
      </div>
    `;
  }

  // ==================== PUBLIC METHODS ====================
  showCreateModal(type) {
    this.currentType = type;
    this.currentId = null;
    this.isEditMode = false;

    const modal = this.createModal();
    const titles = {
      'journal': 'Add Journal Paper',
      'conference': 'Add Conference Paper',
      'patent': 'Add Patent',
      'book': 'Add Book/Chapter'
    };

    const fieldBuilders = {
      'journal': this.getJournalFields,
      'conference': this.getConferenceFields,
      'patent': this.getPatentFields,
      'book': this.getBookFields
    };

    document.getElementById('modalTitle').textContent = titles[type] || 'Add Publication';
    document.getElementById('formFields').innerHTML = fieldBuilders[type].call(this);
    
    modal.show();
  }

  showEditModal(type, id, data) {
    this.currentType = type;
    this.currentId = id;
    this.isEditMode = true;

    const modal = this.createModal();
    const titles = {
      'journal': 'Edit Journal Paper',
      'conference': 'Edit Conference Paper',
      'patent': 'Edit Patent',
      'book': 'Edit Book/Chapter'
    };

    const fieldBuilders = {
      'journal': this.getJournalFields,
      'conference': this.getConferenceFields,
      'patent': this.getPatentFields,
      'book': this.getBookFields
    };

    document.getElementById('modalTitle').textContent = titles[type] || 'Edit Publication';
    document.getElementById('formFields').innerHTML = fieldBuilders[type].call(this, data);
    
    modal.show();
  }

  async handleSave() {
    const errorDiv = document.getElementById('modalError');
    const saveBtn = document.getElementById('saveButton');
    
    errorDiv.classList.add('d-none');
    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';

    try {
      const formData = this.collectFormData();
      
      if (this.isEditMode) {
        await this.crud.update(this.currentType, this.currentId, formData);
      } else {
        await this.crud.create(this.currentType, formData);
      }

      // Close modal and reload publications
      bootstrap.Modal.getInstance(document.getElementById('publicationModal')).hide();
      
      if (typeof window.loadAllPublications === 'function') {
        window.loadAllPublications();
      }
      
      alert(`${this.isEditMode ? 'Updated' : 'Created'} successfully!`);
    } catch (error) {
      errorDiv.textContent = error.message;
      errorDiv.classList.remove('d-none');
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Save';
    }
  }

  collectFormData() {
    const data = {};
    const form = document.getElementById('publicationForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      const value = input.value.trim();
      if (value) {
        data[input.id] = value;
      }
    });
    
    return data;
  }

  async confirmDelete(type, id, title) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await this.crud.delete(type, id);
      
      if (typeof window.loadAllPublications === 'function') {
        window.loadAllPublications();
      }
      
      alert('Deleted successfully!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
}

// Make it globally available
window.PublicationUI = PublicationUI;
