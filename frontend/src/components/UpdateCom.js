import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCom = () => {
  const navigate = useNavigate();

  const [Data, setData] = useState({});
  const id = useParams().id;
 // console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:1000/api/v1/getBook/${id}`)

        .then((res) => res.data)
        .then((data) => setData(data.book));
    };
    fetchHandler();
    //.then((data) => setInputs(data.book))
    //console.log(input)
  }, [id]);
  console.log(Data);

  const sendRequest = async () => {
    await axios

      .put(`http://localhost:1000/api/v1/update/${id}`, Data)

      .then((res) => res.data);
    

    
  }
  console.log(Data)

  const handleSubmit = (e) => {
    e.preventDefault();
     sendRequest().then(() => navigate("/books"));
  }
  const change = (e) => {
   //console.log(e);
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
    //console.log(Data);
  };




  
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
        <button className="btn btn-success" onClick={handleSubmit}>
          update
        </button>
      </div>
    </div>
  );
}

export default UpdateCom

