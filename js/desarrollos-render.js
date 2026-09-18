(function () {
  const list = document.getElementById('progreso-list');
  if (!list) return;

  if (!desarrollos.length) {
    const empty = document.createElement('p');
    empty.className = 'progreso-empty';
    empty.textContent = 'Todavía no hay features completadas. ¡Sé el primero!';
    list.appendChild(empty);
    return;
  }

  desarrollos.forEach(function (item) {
    const row = document.createElement('div');
    row.className = 'progreso-item';

    const feature = document.createElement('span');
    feature.className = 'progreso-feature';
    feature.textContent = item.feature || '';
    row.appendChild(feature);

    const autor = document.createElement('span');
    autor.className = 'progreso-autor';
    autor.textContent = item.autor || '';
    row.appendChild(autor);

    if (item.commit) {
      const commit = document.createElement('a');
      commit.href = GITHUB_REPO_URL + '/commit/' + item.commit;
      commit.target = '_blank';
      commit.rel = 'noopener';
      commit.className = 'progreso-commit';
      commit.textContent = item.commit;
      row.appendChild(commit);
    } else {
      const commit = document.createElement('span');
      commit.className = 'progreso-commit';
      row.appendChild(commit);
    }

    if (item.jiraUrl) {
      const link = document.createElement('a');
      link.href = item.jiraUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'progreso-jira';
      link.textContent = 'Ver ticket Jira';
      row.appendChild(link);
    } else {
      const pending = document.createElement('span');
      pending.className = 'progreso-jira progreso-jira-pending';
      pending.textContent = 'Sin ticket Jira';
      row.appendChild(pending);
    }

    list.appendChild(row);
  });
})();
