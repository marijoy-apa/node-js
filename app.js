const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const blogRoute = require('./routes/blogRoutes')
const app = express();

//connect to mongo db
const dbURI = `mongodb+srv://backend-test:backend-test@cluster0.hzbemeb.mongodb.net/backend`
mongoose.connect(dbURI)
    .then((result) => {
        //listen for request
        app.listen(3000);
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
app.set('view engine', 'ejs')



//middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan(`dev`))
// //mongoose
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     })
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })


// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });


// app.get('/single-blog', (req, res) => {
//     Blog.findById('65fb18590e537eda3a2cdb3c')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// })

// app.use((req, res, next) => {
//     console.log('new request made:')
//     console.log('host: ', req.hostname)
//     console.log('path: ', req.path)
//     console.log('method: ', req.method)
//     next();
// })

// app.use((req, res, next) => {
//     console.log('in the next middle ware')

//     next();
// })



app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Loream ipsum dolor sit amet consetetur' },
    //     { title: 'Mario finds stars', snippet: 'Loream ipsum dolor sit amet consetetur' },
    //     { title: 'How to find browsers', snippet: 'Loream ipsum dolor sit amet consetetur' },

    // ]
    // // res.send('<p> home page</p>')
    // // res.sendFile('./view/index.html', { root: __dirname })
    // res.render('index', { title: 'Home', blogs })
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    // res.sendFile('./view/about.html', { root: __dirname })
    res.render('about', { title: 'About' })


});

app.use('/blogs', blogRoute)

app.use((req, res) => {
    res.status(404).render('404', { title: 'Home' })
})