const express = require('express');
const morgan = require('morgan')
const app = express();

app.set('view engine', 'ejs')

//listen for request
app.listen(3000);

app.use(morgan(`dev`))

app.use((req, res, next) => {
    console.log('new request made:')
    console.log('host: ', req.hostname)
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    next();
})

app.use((req, res, next) => {
    console.log('in the next middle ware')

    next();
})


app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Loream ipsum dolor sit amet consetetur' },
        { title: 'Mario finds stars', snippet: 'Loream ipsum dolor sit amet consetetur' },
        { title: 'How to find browsers', snippet: 'Loream ipsum dolor sit amet consetetur' },

    ]
    // res.send('<p> home page</p>')
    // res.sendFile('./view/index.html', { root: __dirname })
    res.render('index', { title: 'Home', blogs })
});

app.get('/about', (req, res) => {
    // res.sendFile('./view/about.html', { root: __dirname })
    res.render('about', { title: 'About' })


})


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' })
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Home' })
})