export const getIssues = username => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/issues`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
