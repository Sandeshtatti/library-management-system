import AdminNavbar from "./adminnavbar";
import {Routes,Route} from 'react-router-dom'
import AdminDashboard from "./admindashboard";
import BookList from "./booklist";
import UserList from "./userlist";
import ReadBook from "./readbook";
import AddUser from "./adduser";
import AddBook from "./addbook";

const AdminHome = () => {
    return ( 
        <div className="adminnavbar">
           <AdminNavbar/>
           <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/book-list" element={<BookList/>}/>
            <Route path="/user-list" element={<UserList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>}/> 
            <Route path="/add-user" element={<AddUser/>}/>
            <Route path="/add-book" element={<AddBook/>}/>
           </Routes>
        </div>
     );
}
 
export default AdminHome;