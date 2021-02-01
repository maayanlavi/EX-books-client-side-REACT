import React from 'react';

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: "",
      Name: "dana" || 'Your name',
      USERNAME: "dana5" || 'Your title',
      Email:"dana@gmail.com" || '<name>@gmail.com',
      Country: "Israel" || 'Your country',
      age: "24" || 'mm/dd/yyyy'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <label htmlFor='ProfilePhoto'>
        ProfilePhoto
        </label>
        <img src='profileImage.png' alt='Profile photo' />
        <img src={this.state.image} alt='Profile photo' />
        <br/>
        <label htmlFor='Name'>
        Name
        </label>
        <input type='text' value={this.state.Name} onChange={this.handleChange} name='Name' />
        <br/>
        <label htmlFor='USERNAME'>
        USERNAME
        </label>
        <input type='text' value={this.state.USERNAME} onChange={this.handleChange} name='USERNAME' />
        <br/>
        <label htmlFor='Email'>
        Email
        </label>
        <input type='text' value={this.state.Email} onChange={this.handleChange} name='Email' />
        <br/>
        <label htmlFor='Country'>
        Country
        </label>
        <input type='text' value={this.state.Country} onChange={this.handleChange} name='Country' />
        <br/>
        <label htmlFor='age'>
        Age
        </label>
        <input type='text' value={this.state.age} onChange={this.handleChange} name='age' />
        <br/>
        <button className='cta-primary' type='submit'>
        Save
        </button>
      </form>
    )
  }
}

