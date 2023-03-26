import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function DataComponent ({ url }) {
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
    <DataComponent url={process.env.REACT_APP_DATA_URL} />
    <hr />
    <DataComponent url={process.env.REACT_APP_ERROR_URL} />
    <hr />
    <DataComponent url={process.env.REACT_APP_LOADING_URL} />
    <hr />
  </div>
  )
}