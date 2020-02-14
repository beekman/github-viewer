const request = username => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getGithubUserInfo = username => request(`/${username}`);
