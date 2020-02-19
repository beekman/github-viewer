import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './UserRepos.css';
import { selectRepos } from '../../selectors/reposSelector';
// import { fetchIssues } from '../../actions/issuesActions';
// import { fetchPullRequests } from '../../actions/pullRequestsActions';

function UserRepos() {
  const state = useSelector(state => state);
  const repos = selectRepos(state);
  // const dispatch = useDispatch();

  // const handleClick = repo => {
  //   dispatch(fetchPullRequests(repo));
  //   dispatch(fetchIssues(repo));
  // };

  if(!repos) {
    return (
      <p></p>
    );
  }

  const repoList = repos.map(repo => (
    <li key={repo.id}>
      <div>
        <h3>{repo.name}</h3>
        {/* <a onClick={handleClick(repo.name)}>Pull Requests and Issues</a> */}
        <p>{repo.description}</p>
        <a href={repo.url}>{repo.url}</a>
      </div>
    </li>
  ));

  return (
    <>
      {repoList.length > 0 &&
        <section className={styles.UserRepos}>
          <h2>Repos:</h2>
          <ul className={styles.RepoList}>
            {repoList}
          </ul>
        </section>
      }
    </>
  );
}

export default UserRepos;
