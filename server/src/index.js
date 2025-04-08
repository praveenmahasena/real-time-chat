import 'dotenv/config'
import express from 'express'


const PORT =process.env.PORT || 4242
const app = express()


app.listen(PORT,err=>{
    const status = err?`error during server startup ${err}`:`server running on ${PORT}`
    console.log(status)
})
