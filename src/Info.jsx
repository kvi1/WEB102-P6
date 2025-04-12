import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Left from './components/Left';
import './App.css';

const Info = () => {
  const { date } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`);
      const result = await response.json();
      setData(result);
      console.log(result);
    };

    getData();
  }, [date]);

  if (!data) return <p>Loading...</p>;



  return (
    <div className="test">
      <div className="leftbar">
        <Left />
      </div>
      <div className = "table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Fact</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.date}</td>
            <td>{data.title}</td>
            <td>{data.explanation}</td>
            <td>
              {data.url && (
                <img src={data.url} alt={data.title} width="200" />
              )}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Info;
