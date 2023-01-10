import '../styles/adminLogin.css'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
const AdminLogin = () => {

    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()
    let handleremove = (e) => {
        e.preventDefault()

        let data = { email, password }

        if (email == "sandu@123" && password ==262926) {
            navigate('/admin/')
        } else {
            alert('Invalied credentials')

        }
        // console.log(data);


    }
    return (
       
       <body>
         <div className="adminlogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={handleremove}>
                        <div className="email">
                            <input type="email" placeholder="email address" required value={email} onChange={(e) => setemail(e.target.value)} /> <br /> <br />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="enter password" required value={password} onChange={(e) => setpassword(e.target.value)} /><br /> <br />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>

        </div>
       </body>
       
    )
}
export default AdminLogin