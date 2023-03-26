import React from 'react';
import './css/index.css';

import useJsonFetch from './hooks/useJsonFetch';

function Hook ({ url }) {
  const[data, isLoading, hasError] = useJsonFetch(url)
  return (
    <div className="App">
      <p>{data && data.status}</p>
      <p>{isLoading && 'Is Loading'}</p>
      <p>{hasError && 'Has Error'}</p>
    </div>
  );
}

export default function App() {
  return (
  <div>
    <Hook url={process.env.REACT_APP_DATA_URL} />
    <hr />
    <Hook url={process.env.REACT_APP_ERROR_URL} />
    <hr />
    <Hook url={process.env.REACT_APP_LOADING_URL} />
    <hr />
  </div>
  )
}