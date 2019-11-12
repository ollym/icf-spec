const { Client } = require('icf')

(async function() {
  
  let client = new Client('email', 'pass', 'endpoint')
  
  let suppliers = await client.suppliers()
  
  suppliers.forEach((supplier) => {
    supplier.endpoint
  })
  
})()