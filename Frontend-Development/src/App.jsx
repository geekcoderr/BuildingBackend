import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [sDetails,addStudent] = useState([])

  useEffect(()=>{
    axios.get('/api/sdata')
    .then(response=>{
      addStudent(response.data);
    })
    .catch(error=>{
      console.error('Error Fetching data : ',error);
    })
  });

  return (
    <>
     <h1>Welcome to Shiv kripa balaji</h1>
      <h4>Student Total : {sDetails.length}</h4>
      <br />
    <ul>
      {sDetails.map((data,initial)=>(
        <div key={data.id}>
          <li>Name ~ {data.name}</li>
          <li>Phone-Number ~ {data.phone}</li>
        </div>
      ))}
    </ul>
    </>
  )
}

export default App
