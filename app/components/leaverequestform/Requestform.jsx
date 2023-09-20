"use client"
import React, {useState,useEffect, Fragment} from "react";
import './Requestform.css';
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast"
import { redirect } from "next/navigation";
export default  function form() {
  const { data: session } = useSession();

  const stdname = session?.user?._doc.name;
  const regnum= session?.user?._doc.regnum;
  const role=session?.user?._doc.role;
  const [leaveType, setLeavetype]= useState("")
  const[visitingPlace, setVistingplace]= useState("");
  const [reason, setReason] = useState("");
  const [fromDate, setFromdate] = useState("");
  const [toDate, setTodate] = useState("");

  
  const onSubmitform = async e => {
e.preventDefault()
if(leaveType==="" || visitingPlace==="" || reason==="" || fromDate==="" || toDate===""){  
  toast.error("Please fill all the fields");
  }
  try {
    const res = await FETCH_CACHE_HEADER("api/requestform/new",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({stdname, regnum,stdname, regnum,leaveType,visitingPlace,reason,fromDate,toDate,stdname,regnum,role})
    })
    if(res.ok){
      toast.success("Request submitted successfully")
    }
    else{
      toast.error("Something went wrong")
    }
    
  } catch (error) {
    
  }
  }

  return (
    
    
     
      <div className="bodyofform">
        <form onSubmit={onSubmitform}>
      
          <div className="mb-3">

            
            <label for="input" placeholder="--Select--"  ><span className="name">Leave Type</span>  </label>
            <select id="input" className="form-control" value={leaveType} onChange={e => setLeavetype(e.target.value)}>
              <option value="od"></option>
              <option>OD</option>
              <option>ML</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="text" className="form-label"><span className="name">Visiting place</span></label>
            <input type="text" className="form-control" value={visitingPlace} onChange={e => setVistingplace(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label for="Reason" className="form-label"><span className="name">Reason</span></label>
            <textarea name="Reason" rows="4" cols="50" value={reason} onChange={e => setReason(e.target.value)}></textarea>
          </div>


          <div className="mb-3">
            <label for="date" className="form-label"><span className="name">From Date</span></label>
            <input type="date" className="form-control" value={fromDate} onChange={e => setFromdate(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label for="Time" className="form-label"><span className="name">Time from</span></label>
            <input type="time" className="form-control" />

          </div>
          <div className="mb-3 d">
            <label for="date" className="form-label"><span className="name">To Date</span></label>
            <input type="date" className="form-control" value={toDate} onChange={e => setTodate(e.target.value)}/>

          </div>
          <div className="mb-3">
            <label for="timeto" className="form-label"><span className="name">Time to</span></label>
            <input type="time" className="form-control" />
          </div>
        
          <button type="submit" className="submit">Submit</button>
        </form>
        </div>
      
   
    
  )
}



