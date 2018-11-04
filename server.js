const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
// const db = function () {
//     if (process.env.NODE_ENV === 'production') {
//         return `mongodb://${process.env.username}:${process.env.username}@ds133762.mlab.com:33762/mern_app`;
//     } else {
//         return require('./config/keys').mongoURI;
//     }
// };

// Connect to mongo
// mongoose
//     .connect(db(), { useNewUrlParser: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));


//Use favicon
//app.use('/favicon.ico', express.static('client/public/favicon.ico'));

//Use routes
app.use('/api/items', items);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));