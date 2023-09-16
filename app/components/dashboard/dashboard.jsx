"use client"
import React, { useState, useEffect } from "react";

import Leaverequest from '../leaverequestform/Requestform'
import { redirect } from "next/navigation";
import Leavestatus from '../leavestatus/leavestatus'
import { useSession } from "next-auth/react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Dashboard(){
  const { data: session } = useSession();
  if (!session) redirect("/");
  const regnum= session?.user?._doc.regnum;
  const role=session?.user?._doc.role;

  
  return (

    <div>
<nav className="navbar navbar-expand-lg navbar-dark nav-color">
          <redirect className="navbar-brand" to="/dashboard">
           
          </redirect>
          <img src="" className="logo md-1" alt="SRMIST" />

          <h2>Welcome to application {name}</h2>
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-link">
              <redirect href="">
                <i className="fa-solid fa-user"></i>
              </redirect >
              <div className="flex-box">
                <span className="reg">{regnum}(Student)</span>
                <button onClick={e => logout(e)} className="btn btn-primary">
            Logout
          </button>
              </div>
            </li>
          </ul>
        </nav>
        <h3 className="head"> Leave Application</h3>
        <div className="nithin">

        </div>

     

    </div>
  );
};


