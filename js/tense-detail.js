(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  const groupLabel = {
    present: 'Present Tense',
    past: 'Past Tense',
    future: 'Future Tense',
  };

  const cardVariant = (index) => ['pos', 'neg', 'yn', 'wh'][index] || 'pos';

  function buildBreadcrumb(tense) {
    return `
      <nav class="breadcrumb">
        <a href="tenses.html">Tenses</a>
        <i data-lucide="chevron-right" width="13" height="13"></i>
        <span style="color:var(--c-700)">${groupLabel[tense.group]}</span>
        <i data-lucide="chevron-right" width="13" height="13"></i>
        <span style="color:var(--c-100)">${tense.name}</span>
      </nav>`;
  }

  function buildHeader(tense) {
    return `
      <div class="detail-header">
        <span class="label">${groupLabel[tense.group]}</span>
        <h1>${tense.name}</h1>
      </div>`;
  }

  function buildRecognition(items) {
    const rows = items.map(text => `
      <div class="recognition-item">${text}</div>
    `).join('');
    return `
      <div class="section">
        <div class="section__title">
          <i data-lucide="scan-text" width="15" height="15"></i> Recognition
        </div>
        <div class="recognition-list">${rows}</div>
      </div>`;
  }

  function buildHelpingVerbs(hvList) {
    const pills = hvList.map(hv => `
      <div class="hv-pill">
        <span class="hv-pill__verb">${hv.verb}</span>
        <span class="hv-pill__used">${hv.usedWith}</span>
      </div>
    `).join('');
    return `
      <div class="section">
        <div class="section__title">
          <i data-lucide="zap" width="15" height="15"></i> Helping Verbs
        </div>
        <div class="helping-verbs">${pills}</div>
      </div>`;
  }

  function buildUses(uses) {
    const tags = uses.map(u => `<span class="use-tag">${u}</span>`).join('');
    return `
      <div class="section">
        <div class="section__title">
          <i data-lucide="list-checks" width="15" height="15"></i> Uses
        </div>
        <div class="uses-list">${tags}</div>
      </div>`;
  }

  function buildSentenceCard(st, index) {
    const variant = cardVariant(index);

    const noteHtml = st.note && st.note.length
      ? `<div class="note-box">
           <span class="note-label">Note</span>
           ${st.note.map(n => `<span class="note-text">${n}</span>`).join('')}
         </div>`
      : '';

    const examples = st.examples.map(ex => `
      <div class="example-item">
        <span class="example-bullet"></span>
        <span class="example-text">${ex}</span>
      </div>
    `).join('');

    return `
      <div class="sentence-card sentence-card--${variant}">
        <div class="sentence-card__header">
          <span class="sentence-card__type-dot"></span>
          <span class="sentence-card__name">${st.name}</span>
        </div>
        <div class="sentence-card__body">
          <div>
            <div class="structure-label">Structure</div>
            <div class="structure-formula">${st.structure}</div>
          </div>
          ${noteHtml}
          <div>
            <div class="examples-label">Examples</div>
            ${examples}
          </div>
        </div>
      </div>`;
  }

  function buildSentenceTypes(sentenceTypes) {
    // Split into two rows of 2
    const row1 = sentenceTypes.slice(0, 2);
    const row2 = sentenceTypes.slice(2, 4);

    const renderGrid = (items, startIndex) => `
      <div class="sentence-grid">
        ${items.map((st, i) => buildSentenceCard(st, startIndex + i)).join('')}
      </div>`;

    return `
      <div style="margin-bottom:14px">
        <div class="section__title" style="padding:0 2px;margin-bottom:12px">
          <i data-lucide="layout-grid" width="15" height="15"></i> Sentence Types
        </div>
        ${renderGrid(row1, 0)}
        ${row2.length ? renderGrid(row2, 2) : ''}
      </div>`;
  }

  function buildNav(tenses, currentId) {
    const groupTenses = tenses.filter(t => t.group === tenses.find(x => x.id === currentId).group);
    const idx = groupTenses.findIndex(t => t.id === currentId);
    const prev = groupTenses[idx - 1];
    const next = groupTenses[idx + 1];

    const prevHtml = prev
      ? `<a href="tense-detail.html?id=${prev.id}" class="tense-nav__prev">
           <div class="tense-nav__dir"><i data-lucide="arrow-left" width="13" height="13"></i> Previous</div>
           <div class="tense-nav__name">${prev.name}</div>
         </a>`
      : `<div class="tense-nav__placeholder"></div>`;

    const nextHtml = next
      ? `<a href="tense-detail.html?id=${next.id}" class="tense-nav__next">
           <div class="tense-nav__dir">Next <i data-lucide="arrow-right" width="13" height="13"></i></div>
           <div class="tense-nav__name">${next.name}</div>
         </a>`
      : `<div class="tense-nav__placeholder"></div>`;

    return `
      <div class="tense-nav">${prevHtml}${nextHtml}</div>
      <a href="tenses.html" class="back-link">
        <i data-lucide="arrow-left" width="14" height="14"></i> Back to all tenses
      </a>`;
  }

  function render(tense, allTenses) {
    document.title = `${tense.name} - GrammarLeaf`;

    const html = [
      buildBreadcrumb(tense),
      buildHeader(tense),
      buildRecognition(tense.identification),
      tense.helpingVerbs && tense.helpingVerbs.length ? buildHelpingVerbs(tense.helpingVerbs) : '',
      tense.uses && tense.uses.length ? buildUses(tense.uses) : '',
      buildSentenceTypes(tense.sentenceTypes),
      buildNav(allTenses, tense.id),
    ].join('');

    document.getElementById('content').innerHTML = html;
    lucide.createIcons();
  }

  fetch('../data/tenses.json')
    .then(r => r.json())
    .then(allTenses => {
      const tense = allTenses.find(t => t.id === id);
      if (!tense) {
        document.getElementById('content').innerHTML =
          `<p class="muted">Tense not found. <a href="tenses.html" style="color:var(--c-400)">Go back</a></p>`;
        return;
      }
      render(tense, allTenses);
    });
})();
