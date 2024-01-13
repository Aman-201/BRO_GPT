import React from "react";
import { Home_Button } from "../components";
function Home()
{
    return (

      // <button className="rounded-full bg-blue-500">Save Changes</button>

        <div className=" w-screen bg-green-900 h-screen mx-0">
         
        <h1 className="bg-green-700 rounded-3xl  w-3/5 text-slate-400 text-lime-200 mx-auto relative top-40 font-sans text-7xl py-8">Welcome to Bro-GPT</h1>
      
        <Home_Button name="chat with Bro" link="/bro-chat" />
        <Home_Button name="Bro Translator" link="/bro-translate"/>
        <Home_Button name="Bro solver" link="/bro-solver" />
       
        </div>
    );
}
export default Home;