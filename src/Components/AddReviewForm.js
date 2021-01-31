import React, { Component } from 'react';

class AddReviewForm extends Component {
    constructor(props){
        super(props);

        this.state = {           
        }

        this.handleName = this.handleName.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleStars = this.handleStars.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm() {
        this.props.onSubmitForm(this.state)
    }

    handleText(e) {
        this.props.handleText(e);
    }

    handleName(e) {
        this.props.handleName(e);
    }

    handleStars(e) {
        this.props.handleStars(e);
    }

    labelStyle = {
        width: '400px',
        height:'60px',
        marginTop:'14px',
        borderRadius: '5px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        border: '2px solid black'

    }
     
    render() {
        return (
            <div className="form">
            <label>
                <input style={this.labelStyle} placeholder="NAME" type="text" name="name" value={this.props.name} onChange={this.handleName}/>
            </label> 
            <br/>       
            <label>
                <input style={this.labelStyle} placeholder="TEXT" type="text" name="text" value={this.props.text} onChange={this.handleText}/>
            </label>  
            <br/>      
            <label>
                <input type="number" id="stars" min="1" max="5" class="form-control" placeholder="STARS" style={this.labelStyle} name="stars" value={this.props.stars} onChange={this.handleStars}/>
            </label>
            <br/>
            <button style={{backgroundColor:'white', justifyContent: 'center', alignItems: 'center', color:'black', width:'100%', height:'60px', border: '3px solid #8C6630', borderRadius:'5px', marginTop:'16px', fontWeight: '700', fontSize:'16px', marginLeft:'50%'}}onClick={this.onSubmitForm}>{this.props.button}</button>
        </div>
        )
    }
}

export default AddReviewForm;