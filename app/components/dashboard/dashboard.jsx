"use client";
import React, { useState, useEffect, useRef } from "react";

import Leaverequest from "../leaverequestform/Requestform";
import { redirect } from "next/navigation";
import Leavestatus from "../leavestatus/leavestatus";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ".//Navbar.css";

export default function Dashboard() {
  const { data: session } = useSession();
  if (!session) redirect("/");
  const regnum = session?.user?._doc.regnum;
  const role = session?.user?._doc.role;

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display =
        dropdownRef.current.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <div>
      <div className="navbar">
        <img src="" className="logo" alt="SRMIST" />
        <div className="profile">
          <img
            src="profile-image-url.jpg"
            className="profile-image"
            alt="Profile"
          />
          <div className="nav-item dropdown">
            <a href="/profile" className="dropdown-toggle regnum">
              {regnum} (Student)
            </a>
            <ul className="nav-dropdown" ref={dropdownRef}>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <span onClick={(e) => logout(e)}>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="button">Leave Application</button>
        <button className="button">Leave Request</button>
      </div>
    </div>
  );
}
