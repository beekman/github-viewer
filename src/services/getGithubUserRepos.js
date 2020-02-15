const request = username => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/repos`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getGithubUserRepos = username => request(`/${username}/repos`);
