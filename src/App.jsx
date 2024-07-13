import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlenght] = useState(8)
  const [Numberallowed ,setNumberallowed]=useState(false)
  const [Charallowed,setCharallowed]=useState(false)
  const [password,setpassword]=useState("")


  const passwordref=useRef(null)

  const copyclibbord=()=>{
    passwordref.current?.select()
   // passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)

  }
const passwordGenerator=useCallback(()=>{
let pass=""
let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(Numberallowed) str+="1234567890"
if(Charallowed) str+="~!@#$%^&*(){}_+?/"
for(let i=0;i<=length;i++){
  const char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char);
}
setpassword(pass);

},[length,Numberallowed,Charallowed,setpassword])


useEffect(()=>{
  passwordGenerator();
},[length,Numberallowed,Charallowed,setpassword])
  return (
    <>
<div className="w-full h-full text-xl text-white flex justify-center items-center">
<div className="container w-[700px] h-fit  bg-slate-600 border rounded-md ">
password Generator

  <div className="serchbox flex my-4 ">
    <input type="text" name="text" id="search" value={password} readOnly className='w-[550px] rounded-l-md h-10 ml-4 text-orange-400 outline-none p-2' ref={passwordref}/>
    <button type="submit" className=' bg-orange-400 w-20 rounded-r-xl' onClick={copyclibbord}>Copy</button>
  </div>

  <div className='flex w-full justify-evenly text-orange-400 my-4'>
    <div className='flex gap-2'>
      <input type="range" name="range" id="range" min={8} max={100} onChange={(e)=>{setlenght(e.target.value)}} /> 
      <label>length:{length}</label>
    </div>

    <div className='flex gap-2 items-center'>
      <input type='checkbox' name="number" id="number" className='w-4 h-4' onChange={(e)=>{setNumberallowed((prev)=>!prev)}}/> 
      <label>Numbers</label>
    </div>

    <div className='flex gap-2 items-center'>
      <input type="checkbox" name="Character" id="Character" className='w-4 h-4' onChange={(e)=>{setCharallowed((prev)=>!prev)}}/> 
      <label>Character</label>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default App
