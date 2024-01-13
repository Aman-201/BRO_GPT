import React from "react";
import {useNavigate} from 'react-router-dom'
function Home_Button({name,link}){
    console.log(link)
    const navigate=useNavigate();
    return (<button className=" rounded-full bg-lime-600 text-2xl mx-5 my-5 px-5 py-2 text-slate-400 text-lime-200 font-sans relative top-44" onClick={()=>{console.log(link); return navigate(link)}}>{name}</button>);
}
export default Home_Button;