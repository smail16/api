
import { useState } from 'react';
import './App.css';
import League from './components/league/League';
import datas from './data.json';
import Axios from 'axios'
function App() {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
console.log(data)
const handelSubmit=()=>{
  
  console.log('handle')
  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
    params: {Category: 'soccer', Timezone: '-7'},
    headers: {
      'X-RapidAPI-Key': '8613f86237mshf4071302895485ep1bcb79jsna96954a44027',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };
  if(!loading){
     Axios.request(options).then(function (response) {
    console.log(response.data);
    setData(response.data)
    setLoading(false)
  }).catch(function (error) {
    console.error(error);
    setLoading(false)

  });
  }
  setLoading(true)
 

}
  return (
    <div className='App'>
     <button onClick={handelSubmit}>see live score</button>

      {data?
      data.Stages.map(el=>
      <div>
         <League el={el}/>
      </div>
        ) : <></>}

      
    </div>
  );
}

export default App;
