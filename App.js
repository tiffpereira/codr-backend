const express = require('express')
const cors = require('cors')
const logger = require('morgan')
require('dotenv').config()
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ProjectRouter = require('./routes/ProjectRouter')
const CommentRouter = require('./routes/CommentRouter')

const app = express()

const PORT = process.env.PORT || 3001
const HOST = '0.0.0.0'

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/projects', ProjectRouter)
app.use('/comments', CommentRouter)


app.listen(PORT, HOST, () => console.log(`Server Running On Host: ${HOST} Port: ${PORT}`)) 