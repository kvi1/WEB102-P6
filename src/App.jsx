import { useState, useEffect } from 'react'
import './App.css'
import Left from './components/Left'
import Table from './components/Table'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([])
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(1);
  const [factsN, setFactsN] = useState(10);



  const getData = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=2024-01-01&end_date=2024-01-10&api_key=${apiKey}`);
    const data = await response.json();
    const only2024 = data.filter(item => item.date.startsWith('2024'));
    setData(only2024);
  }

  useEffect(() => {
    getData();
  }, [])

  const handleChangeYear = async() => {
    setYear(year);
    const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${year}-01-01&end_date=${year}-01-10&api_key=${apiKey}`);
    const data = await response.json();
    const onlyYear = data.filter(item => item.date.startsWith(year))
    setData(onlyYear);
    setFactsN(13);
  }

  const handleChangeMonth = async() => {
    setMonth(month);
    const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${year}-${month}-01&end_date=${year}-${month}-10&api_key=${apiKey}`);
    const data = await response.json();
    const onlyMonth = data.filter(item => item.date.startsWith(`${year}-${month}`));
    setData(onlyMonth);
    setFactsN(12);
  }



  return (
    <>
    <div className = "leftbar">
    <Left/>
    </div>
    <div className = "controls">
      <div className = "h3-row">
      <h3>Year : {year}</h3>
      <h3>Month: {month}</h3>
      <h3>Number of Facts: {factsN}</h3>
      </div>
      <div className = "filters">
      <p>Filter By Year</p>
      <input 
      type = "text"
      placeholder = "Year (XXXX Format)"
      value = {year}
      onChange = {(e) => setYear(e.target.value)}/>
      <button onClick = {handleChangeYear}>Search</button>
      <p>Filter By Year</p>
      <input 
      type = "text"
      placeholder = "Month (XX Format)"
      value = {month}
      onChange = {(e) => setMonth(e.target.value)}/>
      <button onClick = {handleChangeMonth}>Search</button>
      </div>
      </div>
    <div className = "table">
    <Table data = {data}/>
    </div>
    </>
  )
}

export default App
