import React from "react";
import { Home_Button } from "../components";
function Home()
{
    return (

      // <button className="rounded-full bg-blue-500">Save Changes</button>

        <div className=" w-full">
         
        <h1 className="bg-blue-500">Welcome to Bro-GPT</h1>
      
        <Home_Button name="chat with Bro" link="/bro-chat" />
        <Home_Button name="Bro Translator" link="/bro-translate"/>
        <Home_Button name="Bro solver" link="/bro-solver" />
       
        </div>
    );
}
export default Home;