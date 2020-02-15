const request = (username, repo) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/${repo}/pulls`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getGithubRepoPullRequests = (username, repo) => request(`users/${username}/${repo}/pulls`);
