    
import React, {Component} from 'react';
import {store} from "../App";
import {connect} from "react-redux";
import {getExams } from "../Actions/examAction"
//import {getExams, addSong, getSong, updateSong, deleteSong, handleChange } from "../actions"

class Exam extends Component {

    componentDidMount = () => {
        this.props.getExams()
    }

    renderSong = (name, price) => {
        if ( this.props.exam )
            return  this.props.exam.searchResults.map( (song,index) =>
                (<li key={index}>
                    {song.id} {song.name} {song.price}
                    
                </li>)
            )
    }


    render() {
        return (
            <div style={{margin: '20px'}}>
                <h2>CRUD Exam list</h2>

         

                <ul>
                    { this.getExams(this.props.name)}
                </ul>




            </div>
        );
    }
}


const mapStateToProps = ( action  ) => {
    return {
        exam: action.exam
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getExams:                 () => store.dispatch(getExams())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Exam);