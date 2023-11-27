const mongoose = require("mongoose")
mongoose.connect(
  "mongodb+srv://hemrajdeshmukh0906:29FJPgYjdZRCoS31@cluster0.hpk8upk.mongodb.net/bookstoreMern"
).then(()=>console.log("connected"))