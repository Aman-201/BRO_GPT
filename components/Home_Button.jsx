import React from "react";
import {useNavigate} from 'react-router-dom'
function Home_Button({name}){
    const navigate=useNavigate();
    return (<>
    <button className="rounded-full " onClick={()=>navigate('/bro-chat')}>{name}</button>
    </>);
}
export default Home_Button;