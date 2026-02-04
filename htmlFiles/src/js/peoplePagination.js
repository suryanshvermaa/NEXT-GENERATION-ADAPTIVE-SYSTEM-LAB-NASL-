// Classic script (no modules) so it can be used from any static HTML page.
// Usage:
//   document.addEventListener('DOMContentLoaded', () => {
//     initPeoplePagination({ designation: 'BTech', limit: 10 });
//   });

(function (global) {
  /** @param {string} html */
  function escapeHtml(html) {
    return String(html ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  /** @param {any} value */
  function safeText(value) {
    return escapeHtml(value == null ? '' : String(value));
  }

  /** @param {{ designation: string, containerSelector?: string, limit?: number }} opts */
  function initPeoplePagination(opts) {
    const designation = opts && opts.designation ? String(opts.designation) : '';
    const containerSelector = (opts && opts.containerSelector) || '.cards-container';
    const limit = Math.max(1, parseInt(String((opts && opts.limit) || 10), 10) || 10);

    const apiBase = global && global.NASL && global.NASL.API_BASE ? global.NASL.API_BASE : '';
    if (!apiBase) {
      // config.js not loaded?
      console.error('window.NASL.API_BASE is missing. Did you include /js/config.js?');
    }

    const container = document.querySelector(containerSelector);
    if (!container) {
      console.error(`People container not found: ${containerSelector}`);
      return;
    }
    if (!designation) {
      container.innerHTML = '<p class="text-danger">Missing designation.</p>';
      return;
    }

    // Build a pager right after the container.
    const pager = document.createElement('div');
    pager.className = 'd-flex justify-content-between align-items-center gap-2 flex-wrap my-4';
    pager.innerHTML = `
      <button class="btn btn-outline-secondary" type="button" data-people-prev>Prev</button>
      <div class="text-muted" data-people-info>Page 1</div>
      <button class="btn btn-outline-secondary" type="button" data-people-next>Next</button>
    `;

    // Avoid duplicating pager if init is called twice.
    const existingPager = container.nextElementSibling;
    if (!existingPager || !existingPager.hasAttribute('data-people-pager')) {
      pager.setAttribute('data-people-pager', 'true');
      container.insertAdjacentElement('afterend', pager);
    }

    const pagerEl = container.nextElementSibling && container.nextElementSibling.hasAttribute('data-people-pager')
      ? container.nextElementSibling
      : pager;

    const prevBtn = pagerEl.querySelector('[data-people-prev]');
    const nextBtn = pagerEl.querySelector('[data-people-next]');
    const infoEl = pagerEl.querySelector('[data-people-info]');

    let page = 1;
    let isLastPage = false;
    let activeAbort = null;
    let inFlight = false;

    function setButtons() {
      if (prevBtn) prevBtn.disabled = page <= 1 || inFlight;
      if (nextBtn) nextBtn.disabled = isLastPage || inFlight;
      if (infoEl) infoEl.textContent = `Page ${page}${isLastPage ? ' (last)' : ''}`;
    }

    function setLoading(loading) {
      inFlight = loading;
      if (infoEl) infoEl.textContent = loading ? `Loading page ${page}…` : `Page ${page}${isLastPage ? ' (last)' : ''}`;
      setButtons();
    }

    function renderPeople(people) {
      container.innerHTML = '';

      if (!people || people.length === 0) {
        container.innerHTML = '<p class="text-muted">No profiles found.</p>';
        return;
      }

      people.forEach((user) => {
        const card = document.createElement('div');
        card.className = 'card-box';

        const profileImage = user && user.profileImage ? user.profileImage : '/assets/default-avatar.svg';
        const name = user && user.name ? user.name : 'Unnamed';
        const about = user && user.about ? user.about : 'No description provided.';
        const id = user && user.id != null ? user.id : '';

        card.innerHTML = `
          <div class="card-image-wrapper">
            <img src="${escapeHtml(profileImage)}" alt="${escapeHtml(name)}" class="card-image" />
          </div>
          <div class="card-description">
            <h3>${safeText(name) || 'Unnamed'}</h3>
            <p>${safeText(about) || 'No description provided.'}</p>
          </div>
          <div class="card-action">
            <a href="../users/personal.html?userId=${encodeURIComponent(String(id))}" class="btn view-profile-btn">View Profile</a>
          </div>
        `;

        container.appendChild(card);
      });
    }

    async function load() {
      // Abort previous load if user clicks quickly.
      try {
        if (activeAbort) activeAbort.abort();
      } catch {
        // ignore
      }
      activeAbort = new AbortController();

      setLoading(true);

      const params = new URLSearchParams();
      params.set('designation', designation);
      params.set('page', String(page));
      params.set('limit', String(limit));

      const url = `${apiBase}/api/user/getPeople?${params.toString()}`;

      try {
        const res = await fetch(url, { signal: activeAbort.signal });
        const json = await res.json().catch(() => ({}));

        if (!res.ok) {
          const msg = json && json.message ? json.message : 'Failed to fetch people';
          throw new Error(`${msg} (HTTP ${res.status})`);
        }

        const people = json && json.data && Array.isArray(json.data.people) ? json.data.people : [];

        // Heuristic: if we got fewer than limit, there are no more pages.
        isLastPage = people.length < limit;

        // If user goes past last page, step back.
        if (people.length === 0 && page > 1) {
          page -= 1;
          isLastPage = true;
          setLoading(false);
          setButtons();
          return;
        }

        renderPeople(people);
      } catch (err) {
        if (err && err.name === 'AbortError') return;
        console.error('Error loading people:', err);
        container.innerHTML = `<p class="text-danger">${escapeHtml(err.message || 'Failed to load profiles.')}</p>`;
        isLastPage = true;
      } finally {
        setLoading(false);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (page <= 1) return;
        page -= 1;
        isLastPage = false;
        load();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (isLastPage) return;
        page += 1;
        load();
      });
    }

    setButtons();
    load();
  }

  global.initPeoplePagination = initPeoplePagination;
})(window);
