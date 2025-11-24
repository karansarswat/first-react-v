import axios from 'axios'
import { useState } from 'react'

const App = () => {
 const [data, setData] = useState([]);
 const getData = async () => {
   const res = await axios.get('https://jsonplaceholder.typicode.com/users');
   setData(res.data);
  //  console.log(res.data);
 }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {
          data.map(function(elem , idx){
            return <h3>
              {elem.name} , {idx}
            </h3>
          })
        }a
      </div>
    </div>
  )
}

export default App