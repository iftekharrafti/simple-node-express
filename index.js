const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, This is my first node server. I am very excited to learn node');
});

const users = [
    {id:0, name:'Sabana', email: 'shabana@gmail.com', phone: '018439878'},
    {id:1, name:'Sabnor', email: 'Sabnor@gmail.com', phone: '018439878'},
    {id:2, name:'shrabonti', email: 'shrabonti@gmail.com', phone: '018439878'},
    {id:3, name:'suchorita', email: 'suchorita@gmail.com', phone: '018439878'},
    {id:4, name:'soniya', email: 'soniya@gmail.com', phone: '018439878'},
    {id:5, name:'susmita', email: 'susmita@gmail.com', phone: '018439878'}
]

app.get('/users', (req,res) => {
    const search = req.query.search;
    // use query parameter
    if(search) {
        const searchResults = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResults);
    }else{
        res.send(users);
    }
});

// app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post ', req.body);
    // res.send('inside post')
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango','oranges','banana','apple'])
})

app.get('/fruits/mangoes/fazli', (req,res) => {
    res.send('Yummy Yummy tok marka fazli');
});

app.listen(port, () => {
    console.log('listening on port', port);
})




