const list = document.querySelector('#starred-list');

async function loadStarredRepos() {
  try {
    const response = await fetch('events.json');
    if (!response.ok) {
      throw new Error('Unable to load starred repositories.');
    }

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      list.innerHTML = '<li class="error">No starred repositories found.</li>';
      return;
    }

    list.innerHTML = repos
      .map(
        (repo) => `
          <li class="starred-item">
            <a href="${repo.url}" target="_blank" rel="noreferrer">${repo.name}</a>
            <p class="repo-description">${repo.description}</p>
            <div class="repo-meta">
              <span><span class="language-dot"></span>${repo.language}</span>
              <span>⭐ ${repo.stars.toLocaleString()}</span>
            </div>
          </li>
        `
      )
      .join('');
  } catch (error) {
    list.innerHTML = `<li class="error">${error.message}</li>`;
  }
}

loadStarredRepos();
