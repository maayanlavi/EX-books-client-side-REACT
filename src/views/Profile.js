import React from 'react';
import Menu from '../Components/Menu';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Email: '',
      City: '',
      age: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} style={{ position: 'absolute', top: '150px', fontSize: '20px' }}>
          <br />
          <label htmlFor='Name'>
            Name
        </label>
          <input type='text' value={this.state.Name} onChange={this.handleChange} name='Name' />
          <br />
          <label htmlFor='Email'>
            Email
        </label>
          <input type='text' value={this.state.Email} onChange={this.handleChange} name='Email' />
          <br />
          <label htmlFor='City'>
            City
        </label>
          <input type='text' value={this.state.City} onChange={this.handleChange} name='City' />
          <br />
          <label htmlFor='age'>
            Age
        </label>
          <input type='text' value={this.state.age} onChange={this.handleChange} name='age' />
          <br />
          <button className='cta-primary' type='submit' style={{ backgroundColor: 'rgba(186, 251, 103, 1)', color: 'black', fontFamily: 'tahoma', fontSize: '20px' }}>
            Save
        </button>
        </form>

        <Menu />
      </>
    )
  }
}

