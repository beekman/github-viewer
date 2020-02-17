export const getRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.url,
        issues: repo.issues_url,
        pulls: repo.pulls_url
      }));
    });
};
