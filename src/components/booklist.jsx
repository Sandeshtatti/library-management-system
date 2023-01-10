import '../styles/booklist.css'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const BookList = () => {
  let [book, setbook] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    let fetchdata = async () => {
      let responce = await fetch('http://localhost:4000/books')
      let data = await responce.json()
      setbook(data)
    }
    fetchdata()
  }, [book])
  //delete a book from server
  let handleremove = (id, title) => {
       fetch(`http://localhost:4000/books/${id}`,{
        method:'DELETE'
       })
       alert(`${title} Will be deleted permently`)   
  }
    let  readmore =(id)=>{
     navigate(`/admin/book-list/${id}`)

    }
  return (
    <div className="booklist">
      <h1>Book List:{book.length}</h1>
      <div className="books_section">
        {
          book.map((abs) => (

            <div className="book_card">

              <div className="img">
                <img style={{ height: "250px" }} src={abs.thumbnailUrl} alt="" />
              </div>

              <div className="info">
                <h3>Title:{abs.title}</h3>
                <h5>Auther:{abs.authors.toString()}</h5>
                <h5>PageCt:{abs.pageCount}</h5>
                <h5>Category:{abs.categories}</h5>
                <button onClick={() => readmore(abs.id)}  >Read more</button>
                <button onClick={() => handleremove(abs.id, abs.title)}>Delete</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BookList;