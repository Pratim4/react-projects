// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
// import { ToastContainer, toast } from 'react-toastify';

function App() {
  let [city,setCity]=useState('');
  let [wDetails,setWdetails]=useState()
  let [isLoading, setIsLoading]=useState(false)
  let [counter,setCounter]=useState(1)
  let getData=(event)=>{
    setIsLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=7dd6ec3543dad4a6db972027199166b5`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      if(finalRes.cod==="404"){
        setWdetails(undefined)
      }
      else{

        setWdetails(finalRes)
      }
      setIsLoading(false)
    })
    event.preventDefault();
    setCity('')
  }
  let changeCounter=()=>{
    setCounter(counter+1)
  }

  useEffect(()=>{
    console.log('welcome to my website')
  },[counter])
  return (
    <div className='w-[100%] h-[100vh] bg-[#455d7a]'>
      {/* {counter} */}
      {/* <button onClick={changeCounter}>Count</button> */}
      <div className='max-w-[1320px] mx-auto'>
        <h1 className="text-[40px] font-bold py=[5opx] text-white">Weather Application</h1>
        <form onSubmit={getData}>

        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='w-[300px] h-[40px] pl-3' placeholder='City Name' /> <button className="bg-[#f95959] h-[40px]">Search</button>

        </form>
        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] relative">
          <img src="https://i.gifer.com/ZKZg.gif" alt="gtr" width={100} className={`absolute left-[40%] ${isLoading ? "" : 'hidden'} `}/>
          {
          wDetails!==undefined
          ?
          <>
          
          <h3 className="font-bold text-[30px] text-center">{wDetails.name}<span className="bg-[yellow] ">{wDetails.sys.country}</span></h3>
          <h2 className="font-bold text-[40px] text-center">{Math.floor(wDetails.main.temp)}°C</h2>
          <div className='container mx-auto'>
          <img src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`} alt="get" width={200} className='mx-auto' flex-1 />

          </div>
          <p className='text-[30px] font-bold text-center'>{wDetails.weather[0].description}</p>
          

          </>
          :
          'No Data Found'
            
          }
        </div>
      </div>
    </div>

  );
}
export default App;
