import '../styles/userlist.css'
import { useState,useEffect } from "react";
const UserList = () => {
    let [user,setuser]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let responce = await fetch('http://localhost:4000/users')
            let data = await responce.json()
            setuser(data)
          }
          fetchdata()
    },[])
    let handleremove=(id,name)=>{
        setuser(user.filter(x=>x.id!==id))
        alert(`${name} has been deleted`)

    }
    return ( 
        <div className="userlist">
            <h1>User List</h1>
           <div className="uslist">
           {
                user.map((abs)=>(
                    <div className="user">
                        <h3>Name:{abs.name}</h3>
                        <h5>Age:{abs.age}</h5>
                        <h5>Gmail:{abs.email}</h5>
                        <h5>PhoneNumber:{abs.phoneNumber}</h5>
                        <h5>Id:{abs.id}</h5>
                        <button onClick={()=>handleremove(abs.id,abs.name)}>delete</button>
                    </div>
                ))
            }

           </div>
        </div>
     );
}
 
export default UserList;