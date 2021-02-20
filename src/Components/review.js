import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class Review extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        })
        this.props.onUpdate(this.props.reviewId, this.props.review)
    }

    delete() {
        this.props.onDelete(this.props.reviewId)
    }

    reviewStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        textAlign:'center'
    }

    button1Style = {
        marginRight:'10px',
        color:'white',
        border: '2px solid #8C6630',
        borderRadius:'15px',
        backgroundColor:'black',
        width:'36px',
        height:'36px',
        position:'relative',
        right:'0',
        left:'0',
        marginTop:'20px'


    }

    button2Style = {
        color:'white',
        border: '2px solid #8C6630',
        borderRadius:'15px',
        backgroundColor:'black',
        width:'36px',
        height:'36px',
        position:'relative',
        right:'10px',
        left:'0',
        marginTop:'20px'
    }

    render() {
        return (
            <div className="review" style={this.reviewStyle}> 
                <span>{this.props.children}<br/></span>
                <button style={this.button1Style} onClick={this.edit}><EditIcon/></button>
                <button style={this.button2Style} onClick={this.delete}><DeleteIcon/></button>
            </div>
        )
    }
}

export default Review;