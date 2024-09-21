import express from 'express'
const app = express()
const PORT = 3000
app.use(express.json())

app.get('/', (res) => {
    res.status(200).json({message:"You are at home page"})
})
app.get('/about', (res) => {
    res.status(200).json({message:"You are at about page"})
} )
app.post('/', (req, res) => {
    const newItem = req.body
    res.status(201).json({message:"Created Successfully", data:newItem})
})
app.put('/:id', (req, res) => {
    const newItem = req.body
    const itemID = req.params.id
    res.status(200).json({message:`Successfully Updated Item No: ${itemID}`, data:newItem})
})
app.delete('/:id', (req, res) => {
    const deletedItem = req.body
    const itemID = req.params.id
    res.status(200).json({message:`Successfully Deleted Item No: ${itemID}`, data:deletedItem})
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
})
