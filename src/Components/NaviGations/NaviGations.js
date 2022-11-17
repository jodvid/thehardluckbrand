import React from "react";
import './NaviGations.css';
import hlb from "./logo.jpg";
import { Outlet } from "react-router-dom";
import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';


const Home = (logo) => {
    const props = {
        
      items: [
        {
          text: 'Gallery',
          link: '/Gallery'
        },
        {
          text: 'Shop',
          link: '/Shop'
        },
        {
          text: 'Contact',
          link: '/Contact'
        }
      ],
      
      logo: {
        text: '{hlb}',
        img: hlb,
        link: "/"
      },
    //   float: true,
      style: {
        barStyles: {
          background: 'white'
          
        },
        sidebarStyles: {
          background: 'white',
          buttonColor: 'black'
        },  
        linkStyles: {
            color: 'black'
        },
        logoStyles: {
            width: '100px',
            color: 'white'
        },             
      }
    }
    return (
      <div className="home">
          <Navbar {...props}/>
          
          <Outlet/>
      </div>
    )
  }


export default Home;

