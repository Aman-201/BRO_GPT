import React from "react";
import {useNavigate} from 'react-router-dom'
function Home_Button({name,link}){
    console.log(link)
    const navigate=useNavigate();
    return (<button className="rounded-full bg-blue-500/100" onClick={()=>{console.log(link); return navigate(link)}}>{name}</button>);
}
export default Home_Button;