import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosAPI = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default AxiosAPI;
