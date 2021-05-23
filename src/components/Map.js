import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'

class Map extends React.Component{

    constructor(props){
        super(props)
        this.state={
       address:'',

       low:0,
       lon:0,
       showName:'',

       show:false,
       showMapImg:false,
errorMsg:false   

        }
      }


getData=(event)=>{
let locationData= event.target.value
this.setState({
address:locationData
   })

   console.log(this.state.address)
}

showMap=(e)=>{
  e.preventDefault();
    this.setState({
      showMapImg:true
    })   

  }


sendData=async(e)=>{

    e.preventDefault();
    const url = `https://eu1.locationiq.com/v1/search.php?key=pk.dbf5d5b259fbe4ebcf2f14e515cb2688&q=${this.state.address}&format=json`

    try{
let response = await axios.get(url);
response=response.data[0]
console.log(response)

this.setState({
low:response.lat,
lon:response.lon,
showName:response.display_name,
show:true
       })
    }

    catch
    {
    console.log('sasd');
    this.setState({
errorMsg:true
    })
    }}




      render(){

        return(
<>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" onChange={this.getData} />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.sendData}>
    Submit
  </Button>

  <Button variant="primary" type="submit" onClick={this.showMap}>
  Show location
  </Button>

</Form>



{this.state.show &&<Card>
  <Card.Body>Latitude : {this.state.low} </Card.Body>
  <Card.Body>Longitude :{this.state.lon} </Card.Body>
  <Card.Body>Address : {this.state.showName} </Card.Body>

</Card>
      }

<Card>

{this.state.showMapImg &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=f5de8e48adbdc6&center=$${this.state.low},${this.state.lon} `} alt='' />
      }


      </Card>
      {this.state.errorMsg &&
      <Card border="warning" style={{ width: '18rem' }}>
    <Card.Header>Warning</Card.Header>
      <Card.Body > 
        Please enter a valid address 

      </Card.Body>

      </Card>
      }
</>
        )}}

        export default Map;