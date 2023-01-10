import '../styles/userLogic.css'
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    let navigate = useNavigate()
    let login =()=>{
        navigate('/user/')

    }
    return ( 
        <div className="userlogin">
             <div className="form">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <input type="email" placeholder="email address" required  /> <br /> <br />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="enter password" required  /> <br /> <br />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>

        </div>
     );
}
 
export default UserLogin;