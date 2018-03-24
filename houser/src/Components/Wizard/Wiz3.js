import React from 'react'
import './Wizard.css'
import { Redirect, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateMortgage, updateRent, clearInputs} from '../../ducks/reducer'

class Wiz3 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mortgage: '',
      desiredRent: '',
      redirect: false
    }
  }

  updateMortgage(input){
    this.setState( {mortgage : input } )
  }

  updateRent(input){
    this.setState( {desiredRent : input } )
  }

  handleComplete(){
    let { name, address, city, stateName, zip, imageUrl, mortgage, desiredRent } = this.props
    let inputBody = {
      propertyname: name, 
      address: address, 
      city: city, 
      state: stateName, 
      zip: zip, 
      image: imageUrl, 
      mortgageamt: mortgage, 
      desiredrent: desiredRent

    }
    axios.post('/api/', inputBody)
    this.props.clearInputs()
    this.setState ( {redirect: true})
  }


  render(){
    console.log(this.props)
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    return(
       <div className='wizard-form-container'>

          <div className='wizard-form-input-container'>
            <h1> Current Mortgage </h1>
            <input value={this.props.mortgage} onChange={ (e)=>this.props.updateMortgage(e.target.value) }  />
          </div>

          <div className='wizard-form-input-container'>
            <h1> Desired Rent </h1>
            <input value={this.props.desiredRent} onChange={ (e)=>this.props.updateRent(e.target.value) }  />
          </div>
          <div className='next-last-btn-container'>
            <Link to='/wizard/pg2'> <div className='last-btn'> Last </div> </Link>
            <div
              className='wizard-submit-btn'
              onClick={()=>this.handleComplete()}
            >Complete
            </div>
        </div>
          

      </div>
      
    )
  }
}

function mapStateToProps(state){
  const { name, address, city, stateName, zip, imageUrl, mortgage, desiredRent } = state
  
  return {
    name,
    address,
    city,
    stateName,
    zip,
    imageUrl,
    mortgage,
    desiredRent
  }
}

export default connect(mapStateToProps, {updateMortgage, updateRent, clearInputs})(Wiz3)  