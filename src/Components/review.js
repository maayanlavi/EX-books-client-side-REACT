import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class Review extends Component {
    constructor(props) {
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
        textAlign: 'center'
    }

    render() {
        return (
            <div className="review" style={this.reviewStyle}>
                <span>{this.props.children}<br /></span>
                <button onClick={this.edit}><EditIcon /></button>
                <button onClick={this.delete}><DeleteIcon /></button>
            </div>
        )
    }
}

export default Review;