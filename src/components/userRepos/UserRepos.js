import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingRepos, selectRepos } from '../../selectors/reposSelector';
import styles from './UserRepos.css';
import { isLoadingIssues, selectIssues } from '../../selectors/issuesSelector';
import { selectRepoPullRequests, isRepoPullRequestsLoading } from '../../selectors/pullRequestsSelector';
import { fetchIssues } from '../../actions/issuesActions';
import { fetchPullRequests } from '../../actions/pullRequestsActions';

function UserRepos(){
  const dispatch = useDispatch();
  const reposLoading = useSelector(isLoadingRepos);
  const repos = useSelector(selectRepos);

  const handleClick = repo => {
    dispatch(fetchPullRequests(repo));
    dispatch(fetchIssues(repo));
  };
  const repoList = repos.map(repo => (
    <li key={repo.id}>
      <div>
        <h3>{repo.name}</h3>
        <button onClick={handleClick(repo.name)}>Examine PRs and Issues</button>
      </div>
      <p>{repo.description}</p>
      <a href={repo.url}>{repo.url}</a>
    </li>
  ));

  return (
    <>
      {repoList.length > 0 &&
      <section>
        <h2>Repos:</h2>
        <ul className={styles.RepoList}>
          {repoList}
        </ul>
      </section>   }
    </>
  );
}

export default UserRepos;
