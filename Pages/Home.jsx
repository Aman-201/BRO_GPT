import React from "react";
import { Home_Button } from "../components";
function Home()
{
    return (
        <div>
         <div>
        <h1 className='bg-indigo-500'>Welcome to Bro-GPT</h1>
      </div>
        <Home_Button name="chat with Bro" />
        <Home_Button name="Bro Translator" />
        <Home_Button name="Bro solver" />
        </div>
    );
}
export default Home;