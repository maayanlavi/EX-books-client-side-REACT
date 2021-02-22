import React, { Component } from 'react';
import Review from './review';
import { withRouter } from 'react-router-dom';
import AddReviewForm from './AddReviewForm';
import Menu from '../Components/Menu';
import axiosInstance from '../API/axios';

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: -1,
            isEditing: false,
            reviewToEdit: null,
            reviews: []
        }
        this.eachReview = this.eachReview.bind(this);
        this.delete = this.delete.bind(this);
        this.nextId = this.nextId.bind(this);
    }
    componentDidMount() {
        this.handleLoadReviews()
    }
    eachReview(item) {
        console.log(item)
        const { _id } = item;
        return <Review
            key={_id}
            onDelete={this.delete}
            reviewId={_id}
            review={item}
            onUpdate={this.handleUpdate}>
            {item.name}
            <br />
            {item.text}
            <br /> 
            {item.stars}
        </Review>
    }

    handleLoadReviews = () => {
        const { id } = this.props.match.params;
        axiosInstance.get(`${process.env.REACT_APP_SERVER}/api/reviews/`, {
            params: {
                book_id: id,
            }
        })
            .then((res) => this.setState({ reviews: res.data }))
            .catch((err) => console.log(err))
    }
    handleReview = (e, formValues, onResetForm) => {
        const { isEditing } = this.state;
        e.preventDefault();
        const { name, text, stars } = formValues;
        const { id } = this.props.match.params;
        if (isEditing) {
            const { reviewId } = this.state.reviewToEdit;
            axiosInstance.put(`${process.env.REACT_APP_SERVER}/api/reviews/${reviewId}`, {
                    name,
                    text,
                    stars,
            }).then(() => {
                this.setState({isEditing: false, reviewToEdit: null});
                this.handleLoadReviews()
            })
        }
        else {
            axiosInstance.post(`${process.env.REACT_APP_SERVER}/api/reviews`, {
                review: {
                    name,
                    text,
                    stars,
                    book_id: id,
                }
            }).then(() => {
                this.handleLoadReviews()
                onResetForm()
            })
        }
    }

    nextId(reviews = []) {
        let max = reviews.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    delete(id) {
        axiosInstance.delete(`/api/reviews/${id}`).then(() => {
            this.handleLoadReviews();
        })
    }
    handleUpdate = (id, reviewValues) => {
        this.setState({ reviewToEdit: { ...reviewValues, reviewId: id }, isEditing: true, })
    }

    reviewStyle = {
        backgroundColor: 'white',
        position: 'absolute',
        width: '99%',
        border: '1px black solid',
        borderRadius: '13px',
        left: '0',
        right: '0',
        top: '150px',
        height: '557px',
        maxHeight: '300px',
        overflow: 'scroll',

    }

    formStyle = {
        position: "absolute",
        top: '500px',
        right: '0',
        left: '0',
        width: '50%',

    }

    render() {
        const { isEditing } = this.state;
        const buttonText = isEditing ? 'Edit' : 'Save'
        return (
            <>
                <h2 style={{ color: 'white', fontFamily: 'Tahoma', position: 'absolute', left: '0', right: '0', textAlign: 'center', top: '50px' }}>Reviews</h2>
                <div className="review" style={this.reviewStyle}>
                    {this.state.reviews.map(this.eachReview)}
                </div>
                <div className="form" style={this.formStyle}>
                    <AddReviewForm onSubmit={this.handleReview} buttonText={buttonText} reviewToEdit={this.state.reviewToEdit}/>
                </div>
                <Menu />
            </>
        )
    }
}

export default withRouter(Reviews);