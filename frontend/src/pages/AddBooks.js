import React from 'react'
import { useState } from 'react'
import axios from 'axios';
//import useNavigate from  "react-router-dom"
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const navigate = useNavigate();
  
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price:"",
  });

  const change = (e) => {
    const { name, value } = e.target
    setData({ ...Data, [name]: value });
   // console.log(Data)
  
  }
  
  const sumbit = async (e) => {
    e.preventDefault()
    await axios
      .post("http://localhost:1000/api/v1/add", Data)
      //.then((res) => alert(res.data.message))
    .then(() => navigate("/books"));
    //useNavigate("/books")// noooooo
    
    setData({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });
    
  }

  console.log(Data)
 /// useNavigate("/books");// noo0

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container  p-4">
        <div className="mb-3 "></div>
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            book name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter book name"
            name="bookname"
            onChange={change}
            value={Data.bookname}
          />
        </div>
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            auther name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the auther name"
            name="author"
            onChange={change}
            value={Data.author}
          />
        </div>
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the description"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the url of image"
            name="image"
            onChange={change}
            value={Data.image}
          />
        </div>
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the price"
            name="price"
            onChange={change}
            value={Data.price}
          />
        </div>
        <button className="btn btn-success" onClick={sumbit}>submit</button>
      </div>
      
    </div>
  );
}

export default AddBooks