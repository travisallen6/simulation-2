import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'
import './Dashboard.css'
import axios from 'axios'

export default class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      properties: [
          // {
          //   propertyName: 'Duplex',
          //   address: '123 S. Main Street',
          //   city: 'West Valley',
          //   stateName: 'UT',
          //   zip: '84128'
          // },
          // {
          //   propertyName: 'Mansion',
          //   address: '136 Pennsylvania Ave',
          //   city: 'Washington',
          //   stateName: 'DC',
          //   zip: '12345'
          // }
        ]
    }
  }


  componentDidMount(){
    axios.get('/api/').then( res =>{
      this.setState({properties: res.data})
    } )
  }
  

  render(){
    let propertiesDisplay = this.state.properties.map( (property, i) => {
      return (
      <House 
        propertyname={property.propertyname}
        address={property.address} 
        city={property.city} 
        state={property.state} 
        zip={property.zip} 
      />
      )}
    )


    return(
      <div className='dashboard-container'>
        <div className='dashboard-page'>
          <h1>Dashboard</h1>
          <Link to='/wizard'>
            <div 
              className='dashboard-add-property-btn'
              >
              Add New Property
            </div>
          </Link>
        
        {propertiesDisplay}

        </div>
      </div>
    )
  }
}