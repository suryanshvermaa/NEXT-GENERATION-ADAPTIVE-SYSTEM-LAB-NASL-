/**
 * Publication CRUD Operations Manager
 * Handles Create, Read, Update, Delete for all publication types
 * Designed to easily integrate permission checks in the future
 */

class PublicationCRUD {
  constructor() {
    this.apiBase = window.NASL?.API_BASE || 'http://localhost:3000';
  }

  // ==================== PERMISSION CHECK (Future Implementation) ====================
  /**
   * Check if user has permission to perform action
   * Currently returns true for all, modify this when implementing permissions
   */
  canCreate(type) {
    // TODO: Implement role-based permission check
    // Example: return user.role === 'ADMIN' || user.role === 'ALUMNI';
    return true;
  }

  canUpdate(type, itemId) {
    // TODO: Implement ownership or role check
    // Example: return item.createdBy === user.id || user.role === 'ADMIN';
    return true;
  }

  canDelete(type, itemId) {
    // TODO: Implement ownership or role check
    // Example: return item.createdBy === user.id || user.role === 'ADMIN';
    return true;
  }

  // ==================== UTILITY METHODS ====================
  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }

  getEndpoint(type) {
    const endpoints = {
      'journal': '/api/journal-paper',
      'conference': '/api/conference-paper',
      'patent': '/api/patent',
      'book': '/api/book',
      'bookChapter': '/api/book-chapter'
    };
    return endpoints[type] || '';
  }

  // ==================== CREATE OPERATIONS ====================
  async createJournal(data) {
    if (!this.canCreate('journal')) {
      throw new Error('You do not have permission to create journal papers');
    }

    const body = {
      title: data.title,
      journal: data.journal,
      authors: data.authors, // comma-separated string
      volume: data.volume || null,
      year: data.year ? parseInt(data.year) : null,
      quartile: data.quartile || null,
      doi: data.doi || null
    };

    // If omitted, backend defaults publicationDate to now.
    if (data.publicationDate) {
      body.publicationDate = data.publicationDate;
    }

    const response = await fetch(`${this.apiBase}/api/journal-paper/create`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(body)
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to create journal paper');
    }
    return result;
  }

  async createConference(data) {
    if (!this.canCreate('conference')) {
      throw new Error('You do not have permission to create conference papers');
    }

    const response = await fetch(`${this.apiBase}/api/conference-paper/create`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        title: data.title,
        conference: data.conference,
        authors: data.authors,
        location: data.location || null,
        year: data.year ? parseInt(data.year) : null,
        pages: data.pages || null,
        indexing: data.indexing || null,
        doi: data.doi || null
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to create conference paper');
    }
    return result;
  }

  async createPatent(data) {
    if (!this.canCreate('patent')) {
      throw new Error('You do not have permission to create patents');
    }

    const response = await fetch(`${this.apiBase}/api/patent/create`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        title: data.title,
        type: data.type || null,
        grantNo: data.grantNo || null,
        grantDate: data.grantDate || null,
        publicationDate: data.publicationDate || null,
        inventors: data.inventors || ''
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to create patent');
    }
    return result;
  }

  async createBook(data) {
    if (!this.canCreate('book')) {
      throw new Error('You do not have permission to create books');
    }

    const response = await fetch(`${this.apiBase}/api/book/create`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        title: data.title,
        authors: data.authors,
        publisher: data.publisher || null,
        scopus: data.scopus || null,
        doi: data.doi || null,
        isbn: data.isbn || null,
        year: data.year ? parseInt(data.year) : null
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to create book');
    }
    return result;
  }

  async createBookChapter(data) {
    if (!this.canCreate('bookChapter')) {
      throw new Error('You do not have permission to create book chapters');
    }

    const response = await fetch(`${this.apiBase}/api/book-chapter/create`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        chapterTitle: data.chapterTitle,
        bookTitle: data.bookTitle,
        authors: data.authors,
        publisher: data.publisher || null,
        year: data.year ? parseInt(data.year) : null,
        scopus: data.scopus || null,
        doi: data.doi || null,
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to create book chapter');
    }
    return result;
  }

  // ==================== UPDATE OPERATIONS ====================
  async updateJournal(id, data) {
    if (!this.canUpdate('journal', id)) {
      throw new Error('You do not have permission to update this journal paper');
    }

    const response = await fetch(`${this.apiBase}/api/journal-paper/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        id: id, // Controller expects id in body
        title: data.title,
        journal: data.journal,
        authors: data.authors,
        publicationDate: data.publicationDate || null,
        volume: data.volume || null,
        year: data.year ? parseInt(data.year) : null,
        quartile: data.quartile || null,
        doi: data.doi || null
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to update journal paper');
    }
    return result;
  }

  async updateConference(id, data) {
    if (!this.canUpdate('conference', id)) {
      throw new Error('You do not have permission to update this conference paper');
    }

    const response = await fetch(`${this.apiBase}/api/conference-paper/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        id: id,
        title: data.title,
        conference: data.conference,
        authors: data.authors,
        location: data.location || null,
        year: data.year ? parseInt(data.year) : null,
        pages: data.pages || null,
        indexing: data.indexing || null,
        doi: data.doi || null
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to update conference paper');
    }
    return result;
  }

  async updatePatent(id, data) {
    if (!this.canUpdate('patent', id)) {
      throw new Error('You do not have permission to update this patent');
    }


    const response = await fetch(`${this.apiBase}/api/patent/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        id: id,
        title: data.title,
        type: data.type || null,
        grantNo: data.grantNo || null,
        grantDate: data.grantDate || null,
        publicationDate: data.publicationDate || null,
        inventors: data.inventors || ''
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to update patent');
    }
    return result;
  }

  async updateBook(id, data) {
    if (!this.canUpdate('book', id)) {
      throw new Error('You do not have permission to update this book');
    }

    const response = await fetch(`${this.apiBase}/api/book/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        id: id,
        title: data.title,
        authors: data.authors,
        publisher: data.publisher || null,
        scopus: data.scopus || null,
        doi: data.doi || null,
        isbn: data.isbn || null,
        year: data.year ? parseInt(data.year) : null
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to update book');
    }
    return result;
  }

  async updateBookChapter(id, data) {
    if (!this.canUpdate('bookChapter', id)) {
      throw new Error('You do not have permission to update this book chapter');
    }

    const response = await fetch(`${this.apiBase}/api/book-chapter/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({
        chapterTitle: data.chapterTitle,
        bookTitle: data.bookTitle,
        authors: data.authors,
        publisher: data.publisher || null,
        year: data.year ? parseInt(data.year) : null,
        scopus: data.scopus || null,
        doi: data.doi || null,
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to update book chapter');
    }
    return result;
  }

  // ==================== DELETE OPERATIONS ====================
  async deleteJournal(id) {
    if (!this.canDelete('journal', id)) {
      throw new Error('You do not have permission to delete this journal paper');
    }

    const response = await fetch(`${this.apiBase}/api/journal-paper/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to delete journal paper');
    }
    return result;
  }

  async deleteConference(id) {
    if (!this.canDelete('conference', id)) {
      throw new Error('You do not have permission to delete this conference paper');
    }

    const response = await fetch(`${this.apiBase}/api/conference-paper/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to delete conference paper');
    }
    return result;
  }

  async deletePatent(id) {
    if (!this.canDelete('patent', id)) {
      throw new Error('You do not have permission to delete this patent');
    }

    const response = await fetch(`${this.apiBase}/api/patent/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to delete patent');
    }
    return result;
  }

  async deleteBook(id) {
    if (!this.canDelete('book', id)) {
      throw new Error('You do not have permission to delete this book');
    }

    const response = await fetch(`${this.apiBase}/api/book/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to delete book');
    }
    return result;
  }

  async deleteBookChapter(id) {
    if (!this.canDelete('bookChapter', id)) {
      throw new Error('You do not have permission to delete this book chapter');
    }

    const response = await fetch(`${this.apiBase}/api/book-chapter/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to delete book chapter');
    }
    return result;
  }

  // ==================== GENERIC METHODS ====================
  async create(type, data) {
    const methods = {
      'journal': this.createJournal.bind(this),
      'conference': this.createConference.bind(this),
      'patent': this.createPatent.bind(this),
      'book': this.createBook.bind(this),
      'bookChapter': this.createBookChapter.bind(this)
    };
    
    const method = methods[type];
    if (!method) {
      throw new Error(`Unknown publication type: ${type}`);
    }
    
    return await method(data);
  }

  async update(type, id, data) {
    const methods = {
      'journal': this.updateJournal.bind(this),
      'conference': this.updateConference.bind(this),
      'patent': this.updatePatent.bind(this),
      'book': this.updateBook.bind(this),
      'bookChapter': this.updateBookChapter.bind(this)
    };
    
    const method = methods[type];
    if (!method) {
      throw new Error(`Unknown publication type: ${type}`);
    }
    
    return await method(id, data);
  }

  async delete(type, id) {
    const methods = {
      'journal': this.deleteJournal.bind(this),
      'conference': this.deleteConference.bind(this),
      'patent': this.deletePatent.bind(this),
      'book': this.deleteBook.bind(this),
      'bookChapter': this.deleteBookChapter.bind(this)
    };
    
    const method = methods[type];
    if (!method) {
      throw new Error(`Unknown publication type: ${type}`);
    }
    
    return await method(id);
  }
}

// Make it globally available
window.PublicationCRUD = PublicationCRUD;
