const initalState = {
    exams: [],
    subjectID:'242-001',
    subjectName: 'Co-Curricular Activities',
    subjectDate:'01/01/2018'
   
};

export const examReducer = (state = initalState, action) => {
    switch (action.type) {

        case 'GET_EXAMS_SUCCESS':
            return  {...state,
                exams: action.exams,
                subjectID: state.subjectID,
                subjectName: state.subjectName,
                subjectDate: state.subjectDate,
            }
        case 'GET_EXAMS_FAILED':
           // console.log('action: Get Failed')
            return null
/*
        case 'ADD_EXAM_SUCCESS':
            return {
                exams:[...state.exams ,{id:state.exams[state.exams.length-1].id+1, ...action.exam}],
                searchResults: [...state.exams ,{id:state.exams[state.exams.length-1].id+1, ...action.exam}],
                name: action.exam.name,
                price: action.exam.price,
                message: action.message.message
            }
        case 'ADD_EXAM_FAILED':
            console.log('action: Add Failed')
            return null


        case 'GET_EXAM_SUCCESS':
            return {
                ...state,
                name: action.exam.name,
                price: action.exam.price,
            }
        case 'GET_EXAM_FAILED':
            console.log('action: Get one Failed')
            return null

        case 'UPDATE_EXAM_SUCCESS':
            let id = state.exams.findIndex( (exam) => exam.id === +action.id)
            state.exams[id].name = action.name
            state.exams[id].price = action.price
            return {
                ...state,
                name: action.name,
                price: action.price,
                message: action.message.message
            }
        case 'UPDATE_EXAM_FAILED':
            console.log('action: Update Failed')
            return null

        case 'DELETE_EXAM_SUCCESS':
            state.exams = state.exams.filter( (exam) => exam.id !== +action.id )
            state.searchResults = state.exams.filter( (exam) => exam.id !== +action.id )

            return {
                ...state,
                message: action.message.message
            }
        case 'DELETE_EXAM_FAILED':
            console.log('action: Delete Failed')
            return null*/
        default:
            return state
    }
}