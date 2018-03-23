import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Wizard.css'

export default class Wizard extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      address: '',
      city: '',
      stateName: '',
      zip: '',
      redirect: false
    }
  }

  updateName(name){
    this.setState( {name : name } )
  }

  updateAddress(address){
    this.setState( {address : address } )
  }

  updateCity(city){
    this.setState( {city : city } )
  }

  updateStateName(stateName){
    this.setState( {stateName : stateName } )
  }

  updateZip(zip){
    this.setState( {zip : zip } )
  }

  addProperty(){
    let { name, address, city, stateName, zip } = this.state 
    axios.post('/api', { propertyname: name, address, city, state: stateName, zip })
    .then(  )
  }

  render(){

    const { redirect } = this.state;

    if(redirect) {
      return <Redirect to=
    }

    return(
      <div className='wizard-container'>
      <div className='wizard-page'>
        <h1>Wizard</h1>
        <Link to='/'>
          <div 
            className='wizard-cancel-btn'
            >
            Cancel
          </div>
        </Link>
        <div className='wizard-form-container'>
          <div className='wizard-form-input-container'>
            <h1> Name </h1>
            <input value={this.state.name} onChange={ (e)=>this.updateName(e.target.value) }  />
          </div>
          <div className='wizard-form-input-container'>
            <h1> Address </h1>
            <input value={this.state.address} onChange={ (e)=>this.updateAddress(e.target.value) }  />
          </div>
          <div className='wizard-form-input-container'>
            <h1> City </h1>
            <input value={this.state.city} onChange={ (e)=>this.updateCity(e.target.value) }  />
          </div>
          <div className='wizard-form-input-container'>
            <h1> State </h1>
            <input value={this.state.stateName} onChange={ (e)=>this.updateStateName(e.target.value) }  />
          </div>
          <div className='wizard-form-input-container'>
            <h1> Zip </h1>
            <input value={this.state.zip} onChange={ (e)=>this.updateZip(e.target.value) }  />
          </div>
        </div>
      </div>
    </div>
    )
  }
}