module.exports = {
  
  getProperties: (req, res, next) => {
    req.app.get('db').get_properties()
    .then( (properties) =>{
      res.status(200).send(properties)
    })
    .catch(err => console.log(err))
  },

  postProperty: (req, res, next) => {
    let { propertyname, address, city, state, zip } = req.body
    req.app.get('db').post_property( [propertyname, address, city, state, zip ] )
    .then( () => res.sendStatus(200) )
    }
  }

    // const db = req.app.get('db')
    // let { name, description, price, imageurl } = req.body

    // db.create_product([name, description, price, imageurl])
    // .then( ()=>res.status(200).send(  ))
    // .catch( ()=>res.status(500).send(  ))



  
