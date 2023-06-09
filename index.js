import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    const res = {
        status: 'ok'
    }
    res.send(res)
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})