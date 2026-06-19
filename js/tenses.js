(function () {
    const groups = [
        { id: 'present', label: 'Present Tense' },
        { id: 'past', label: 'Past Tense' },
        { id: 'future', label: 'Future Tense' },
    ];

    fetch('../data/tenses.json')
        .then(r => r.json())
        .then(tenses => {
            const tree = document.getElementById('tense-tree');

            groups.forEach(group => {
                const groupTenses = tenses.filter(t => t.group === group.id);

                // Build helping verb chips for a tense
                function hvChips(tense) {
                    if (!tense.helpingVerbs || !tense.helpingVerbs.length) return '';
                    return tense.helpingVerbs
                        .map(hv => `<span class="tense-card__hv">${hv.verb}</span>`)
                        .join('');
                }

                // First identification point as intro
                function intro(tense) {
                    if (Array.isArray(tense.identification)) return tense.identification[0] || '';
                    return tense.identification || '';
                }

                const section = document.createElement('div');
                section.className = 'tense-group';
                section.innerHTML = `
          <div class="tense-group__header">
            <h2>${group.label}</h2>
            <div class="tense-group__header-line"></div>
            <span class="tense-group__count">${groupTenses.length} types</span>
          </div>
          <div class="tense-grid">
            ${groupTenses.map(t => `
              <a href="tense-detail.html?id=${t.id}" class="tense-card">
                <div class="tense-card__name">${t.name}</div>
                <div class="tense-card__intro">${intro(t)}</div>
                <div class="tense-card__hvs">
                  ${hvChips(t)}
                </div>
              </a>
            `).join('')}
          </div>
        `;
                tree.appendChild(section);
            });

            lucide.createIcons();
        });
})();