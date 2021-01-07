const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
require('./db/db');

const app = express();
const port = process.env.PORT || 1000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use('/public', express.static('public'))
app.use("/users", require('./routes/users'));
app.use("/products", require('./routes/products'));
app.use("/cart", require('./routes/cart'));
app.use("/orders", require('./routes/orders'));
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/../dist/client'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../dist/client/index.html'));
});

app.listen(port, () => { console.log(`Up and running on port ${port}`) })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req)
    const file = req.file
    console.log(file.filename)
    if (!file) {
        res.status(400).send('Please upload a file')
    } else {
        res.send(file)
    }
})