import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
// import {Bro_Chat,Bro_Solver,Bro_Translate} from '../Pages/index.js'
import Bro_Chat from '../Pages/Bro_Chat.jsx'
import Bro_Solver from '../Pages/Bro_Solver.jsx'
import Bro_Translate from '../Pages/Bro_Translate.jsx'
import {Home_Button} from '../components'
import Home from '../Pages/Home.jsx'
// const router=createBrowserRouter([
//  { 
//   path :'/',
//   element :<App/>,
//   Children:[
//     {
//       path:'/',
//       element:(<Home/>)
//     },
//     {

//       path:'/bro-chat',
//       element:(<Bro_Chat />)
//     },
//     {
//       path:'/bro-translate',
//       element:<Bro_Translate />
//     },
//     {
//       path:'/bro-solver',
//       element:<Bro_Solver />
//     },

//   ]}
// ]);

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/bro-solver',
        element:(
         
            <Bro_Solver />
         
        )
      },
      {
        path:'/bro-chat',
        element:(
         
            <Bro_Chat />
       
        )
      },
      {
        path:'/bro-translate',
        element:(
            <Bro_Translate />
        )
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
