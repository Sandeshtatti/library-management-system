import '../styles/adduser.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    let [name, setname] = useState("")
    let [age, setage] = useState("")
    let [email, setemail] = useState("")
    let [phoneNumber, setphoneNumber] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        // data to be posted
        let userdata = { name, age, email, phoneNumber }
        //posting to server
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        })
        alert('user added successfully')
        navigate('/admin/user-list')
    }

    return (
        <div className="adduser">
            <h1>Add a New User</h1>
            <div className="form3">
                <form action="" onSubmit={handleSubmit}>
                    <div className="fm1">
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="enter name  user" />
                    </div> <br />
                    <div className="fm2">
                        <input type="number" value={age} onChange={(e) => setage(e.target.value)} min='1' placeholder="enter number  user" />
                    </div> <br />
                    <div className="fm3">
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="enter email  user" />
                    </div> <br />
                    <div className="fm4">
                        <input type="tel" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} minLength='10' maxLength='10' placeholder="enter number user" />
                    </div> <br />
                    <button>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;