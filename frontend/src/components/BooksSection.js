import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//  const navigate = useNavigate();
import { BiCheckCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "./BooKsSecton.css"

const BooksSection = ({ data }) => {
  const histry=useNavigate()
  //console.log(data)
  // const  id  = data._id
  //const { _id, bookname, price } = data.books;
  //console.log(data)
 // const id = useParams().id
  
  const deleteHandler = async (delete_id) => {
    try {
      await axios
        .delete(`http://localhost:1000/api/v1/delete/${delete_id}`)
        .then((res) => res.data)
        .then(() => histry("/books"));
      toast.success("Data deleted successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        icon: <BiCheckCircle style={{ color: "green", marginRight: "10px" }} />,
      });
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .delete(`http://localhost:1000/api/v1/delete/${data._id}`)
    //   .then((res) => res.data)
    //   .then(() => histry("/books"));
  };

  return (
    <div>
      <ToastContainer className="Toastify__toast" />

      <div className="d-flex justify-content-around align-items-center flex-wrap ">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="m-3"
              style={{
                width: "200px",
                height: "350px",
                backgroundColor: "orange",
              }}
            >
              <div>
                <img
                  style={{ width: "200px", height: "210px" }}
                  src={item.image}
                  alt="/"
                />
              </div>
              <h5 className="text-white px-2 m-0" style={{ fontSize: "22px" }}>
                {item.bookname.slice(0, 20)}...
              </h5>
              <p className="m-0 px3" style={{ fontSize: "30px" }}>
                Rs.{item.price}
              </p>
              <div className="d-flex justify-content-around align-items-center">
                <Link to={`/books/${item._id}`} className="btn btn-primary">
                  update
                </Link>
                <button
                  onClick={() => deleteHandler(item._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BooksSection

