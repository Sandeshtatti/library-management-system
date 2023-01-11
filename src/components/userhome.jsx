import { Routes,Route } from "react-router-dom";
import UserDashBoard from "./userdashboard";
import UserNavbar from "./usernavbar";
import BookList from "./booklist";
import ReadBook from "./readbook";
const UserHome = () => {
    return ( 
        <div className="userhome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashBoard/>} />
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/> 
            </Routes>
        </div>
     );
}
 
export default UserHome;