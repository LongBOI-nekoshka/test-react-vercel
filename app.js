const express = require('express');
const test = require('./api/test');
const app = express();
const path = require('path')
const cors = require('cors');
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')))

test(app)

app.listen(5000, () => {
    console.log("server is running")
})