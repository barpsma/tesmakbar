const express = require('express')
var morgan = require('morgan')
const app= express()
const port = 3000

app.use(morgan('combined'))

app.set('view engine', 'ejs')

//routing
app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/signup', (req, res)=> {
    res.render('signup')
})

app.get('/signin', (req, res)=> {
    res.render('signin')
})

app.post('/signup', (req, res)=> {
    const name = req.query.username
    //validasi harus integer yang dikirim
    let usernameParse = parseInt(req.query.username)
    if (!usernameParse){
        res.json({
            'username':`${name}`,
            'status': 200,
            'keterangan': `Selamat datang ${name}`
        })
    }
    res.json({
        'username':req.query.username,
        'status': 400,
        'keterangan': 'Gabisa angka'
    })
})


app.listen(port, () => {
    console.log(`udah jalan nih server di port ${port}`)
})