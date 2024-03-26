import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[records, setRecords] = useState([])
  useEffect (()=>{
    fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(data => setRecords(data.results))
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1>Students Records</h1> 
      {records.map(student => (
        <li key={student.url}>
          <div className='main-div'>
          <div className="datas">
            <p><b>Name :  </b> {student.name}</p> 
            <p><b>Gender :</b>  {student.gender}</p>
            <p><b>Birth Year : </b>  {student.birth_year}</p>
            <p><b>Height :  </b>{student.height}</p>
          </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default App
