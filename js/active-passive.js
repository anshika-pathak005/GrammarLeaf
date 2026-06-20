(function () {
    const groups = [
        { id: 'present', label: 'Present Tense' },
        { id: 'past', label: 'Past Tense' },
        { id: 'future', label: 'Future Tense' },
    ];

    const isAvoid = (rule) =>
        rule.toLowerCase().includes('not commonly') ||
        rule.toLowerCase().includes('rarely');

    function buildCard(item) {
        const noteHtml = item.note
            ? `<div class="ap-card__note">
           <i data-lucide="info" width="14" height="14"></i>
           <span>${item.note}</span>
         </div>`
            : '';

        return `
      <div class="ap-card">
        <div class="ap-card__header">
          <span class="ap-card__tense">${item.tense}</span>
          <span class="ap-card__rule ${isAvoid(item.rule) ? 'ap-card__rule--avoid' : ''}">
            ${item.rule}
          </span>
        </div>
        <div class="ap-card__body">
          <div class="ap-col">
            <div class="ap-col__label ap-col__label--active">
              <i data-lucide="arrow-right-circle" width="13" height="13"></i>
              Active Voice
            </div>
            <div class="ap-col__structure">${item.active.structure}</div>
            <div class="ap-col__example">${item.active.example}</div>
          </div>
          <div class="ap-col">
            <div class="ap-col__label ap-col__label--passive">
              <i data-lucide="arrow-left-circle" width="13" height="13"></i>
              Passive Voice
            </div>
            <div class="ap-col__structure">${item.passive.structure}</div>
            <div class="ap-col__example">${item.passive.example}</div>
          </div>
        </div>
        ${noteHtml}
      </div>`;
    }

    fetch('../data/active-passive.json')
        .then(r => r.json())
        .then(data => {
            const container = document.getElementById('ap-content');

            groups.forEach(group => {
                const items = data.filter(d => d.group === group.id);

                const groupEl = document.createElement('div');
                groupEl.innerHTML = `
          <div class="group-header">
            <h2>${group.label}</h2>
            <div class="group-header__line"></div>
          </div>
          ${items.map(buildCard).join('')}
        `;
                container.appendChild(groupEl);
            });

            lucide.createIcons();
        });
})();