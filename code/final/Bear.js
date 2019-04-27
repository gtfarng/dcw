const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')

let bears = [{id: 0, name: 'Winnie', weight: 75},
    {id: 1, name: 'Pooh', weight: 65},
    {id: 2, name: 'GTfarng', weight: 55}]

    let students = [{id: 0, name: 'gtfarng', weight: 75},
    {id: 1, name: 'Pooh', weight: 65}]

app.use(cors())
app.use('/', bodyParser.json() ,router)
app.use('/', bodyParser.urlencoded({extended:false}) ,router)

router.route('/Bears')
    .get( (req, res) =>  res.json(bears) )

    // insert a new bear
    .post( (req, res)=> {
        var bear = {};
        bear.id =   bears[bears.length-1].id +1  ;
        bear.name = req.body.name
        bear.weight = req.body.weight
        bears.push(bear);
        res.json( {message: 'Bear created!'} )
    })

    router.route('/Students')
    .get( (req, res) =>  res.json(students) )

    // insert a new bear
    .post( (req, res)=> {
        var student = {};
        students.id =   students[students.length-1].id +1  ;
        students.name = req.body.name
        students.weight = req.body.weight
        bears.push(student);
        res.json( {message: 'student created!'} )
    })




app.listen(8000, () => console.log('server ready'))