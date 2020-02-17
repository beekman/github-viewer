export const getPullRequests = (username, repo) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/${repo}/pulls`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(pull => ({
        id: pull.id,
        title: pull.title,
        state: pull.state,
        url: pull.html_url
      }));
    });
};
