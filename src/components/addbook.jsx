import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,authors,pageCount,longDescription,shortDescription,thumbnailUrl
    let [title, settitle] = useState("")
    let [authors, setauthors] = useState("")
    let [categories, setcategories] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [short, setshort] = useState("")
    let [long, setlong] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let navigate=useNavigate()

    let handlesubmit=(e)=>{
           e.preventDefault()
           // data to be posted
           let bookdata={title,authors,categories,pageCount,short,long,thumbnailUrl}
           //posting to server
           fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookdata)
           })
           alert('book added successfully')
           navigate('/admin/book-list')
    }

    return (
        <div className="addbook">
            <h1>Add a book</h1>
            <div className="form2">
                <form onSubmit={handlesubmit} action="">
                    <div className="title">
                        <input value={title} onChange={(e) => settitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e) => setauthors(e.target.value)} type="text" required placeholder="authors  of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e) => setcategories(e.target.value)} type="text" required placeholder="categories  of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e) => setpageCount(e.target.value)} type="number" required placeholder="pageCount  of the book" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={short} onChange={(e) => setshort(e.target.value)} name="" id="" cols="30" rows="10" placeholder="shortDescription of the book"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={long} onChange={(e) => setlong(e.target.value)} name="" id="" cols="30" rows="10" placeholder="longDescription of the book"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} type="text" required placeholder="thumbnailUrl  of the book" />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;