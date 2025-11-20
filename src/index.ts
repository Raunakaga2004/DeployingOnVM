import express from "express"

const app = express();

app.get('/', (req, res)=>{
  return res.json({
    message : "hi this is server"
  })
})

app.listen(3000, ()=>{
  console.log(`Running`)
})