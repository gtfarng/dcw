let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let app = express()
let router = express.Router()

let exams = [{ id: 1, subjectID: '240-101', subjectName: 'Introduction to Computer Programming', subjectDate: '29/05/2019' },
{ id: 2, subjectID: '240-311', subjectName: 'Distributed Computers and Web Technologies', subjectDate: '30/05/2019' }]

app.use(cors())
app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({ extended: false }), router)

router.route('/exams')
    .get((req,res) => res.json(exams))

    .post((req, res) => {
        let exam = {};
        exams.id = exams[exams.length - 1].id + 1;
        exams.subjectID = req.body.subjectID
        exams.subjectName = req.body.subjectName
        exams.subjectDate = req.body.subjectDate
        exams.push(exam);
        res.json({ message: 'exam created!' })
    })

    router.route('/exams/:exam_id')
    .get((req, res) => {
        let id = exams.findIndex((exam) => exam.id === +req.params.exam_id)
        res.json(exams[id])
    })  

    .put((req, res) => {                              
        let id = exams.findIndex((exam) => exam.id === +req.params.exam_id)
        exams[id].name = req.body.name;
        exams[id].price = req.body.price;
        res.json({ message: 'exam updated!' + req.params.exam_id });
    })

    .delete((req, res) => {                    
        exams = exams.filter((exam) => exam.id !== +req.params.exam_id)
        res.json({ message: 'exam deleted: ' + req.params.exam_id });
    })



app.listen(8000, () => { console.log('Server is Running') })
