import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {   
   let [book,setbook] = useState([])
   let params=useParams()

   useEffect(()=>{
      let fetchdata =async()=>{
         let responce = await fetch(`http://localhost:4000/books/${params.id}`)
         let data = await responce.json()
         setbook(data)
      }
      fetchdata()
   })
   // to get router parameter
    return ( 
        <div className="readbook">
           <h1>read more</h1>  
           <h2>{book.title}</h2>
           <p>{book.shortDescription}</p>
           <p>{book.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;