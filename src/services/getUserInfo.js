const request = username => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        username: data.login,
        name: data.name,
        company: data.company,
        location: data.location,
        bio: data.bio,
        numRepos: data.public_repos,
        img: data.avatar_url,
        url: data.html_url,
        numFollowers: data.followers,
        numFollowing: data.following,
        repos_url: data.repos_url
      };
    });
};

export const getUserInfo = username => request(`/${username}`);
