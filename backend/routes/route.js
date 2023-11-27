const router = require("express").Router();
const bookModel = require("../models/bookModel")

router.post("/add", async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save().then(() => {
            res.status(201).json({message:"book added succesfully"})
        })
    } catch (error) {
        console.log(error)
        
    }
})

//getting data/fetching data

router.get("/getAllBook", async (req, res) => {
    let books;
  try {
    const books = await bookModel.find();
     res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

//getbyID fetch data
router.get("/getBook/:id", async (req, res) => {
    let book;
    let id=req.params.id
  try {
    const book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
});

//update api
router.put("/update/:id", async (req, res) => {
  
    let id = req.params.id;
    const {bookname,
  description,
  author,
  image,
        price } = req.body
    let book;
  try {
    const book = await bookModel.findByIdAndUpdate(id,{bookname,
  description,
  author,
  image,
        price
    });
      await book.save().then(() => res.json({ msg:"data updated" ,data:book }))
    //res.status(200).json({ book });
  } catch (error) {
    console.log(error);
    }
    
});

// Delete api
// router.delete("/delete/:id", async (req, res) => {
  
//   let id = req.params.id;
//   try {
//      await bookModel.findByIdAndDelete(id)
//    .then(()=>res.status(200).json({ msg:"data succefully deleted" }))
//   } catch (error) {
//     console.log(error);
//   }
// });

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await bookModel.findByIdAndDelete(id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Error deleting book" });
  }
});
module.exports = router;