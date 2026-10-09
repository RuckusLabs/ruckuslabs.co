// Browser fallback only: prescription decoding and import confirmation belong to the app.
(function () {
  const params = new URLSearchParams(window.location.search);
  const section = document.querySelector('main').dataset.shareKind === 'section';
  const title = params.get(section ? 'name' : 'title');
  const count = Number(params.get('count'));
  const payload = params.get('p') || window.location.hash.slice(1);
  const label = section ? 'Section' : ({strength: 'Strength', cardio: 'Cardio', custom: 'Custom', somatic: 'Soma'}[params.get('type')] || 'Workout');
  document.getElementById('type-label').textContent = label;
  if (title) {
    document.getElementById('template-title').textContent = title;
    document.title = title + ' | Somatic';
  }
  if (Number.isInteger(count) && count > 0) {
    const noun = section ? (count === 1 ? 'session' : 'sessions') : (count === 1 ? 'movement' : 'movements');
    document.getElementById('template-meta').textContent = count + ' ' + noun;
  }
  const open = document.getElementById('open-btn');
  if (payload && /^[A-Za-z0-9_-]+$/.test(payload)) {
    // A custom-scheme handoff also works after Safari has opened a same-domain page.
    open.href = 'somatic://' + (section ? 'section' : 'import') + '#' + payload;
    open.hidden = false;
  } else {
    document.getElementById('share-status').textContent = 'This link is missing a valid prescription. Ask the sender to share it again.';
  }
  document.getElementById('loading').style.display = 'none';
  document.getElementById('content').style.display = '';
})();
