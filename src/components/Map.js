import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Weather from './Weather.js'
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
errorMsg:false   ,
weatherDesc:[],


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


    try{
      const url = `https://eu1.locationiq.com/v1/search.php?key=pk.dbf5d5b259fbe4ebcf2f14e515cb2688&q=${this.state.address}&format=json`

let response = await axios.get(url);

response=response.data[0]
console.log(response)

this.setState({
low:response.lat,
lon:response.lon,
showName:response.display_name.split(" ")[0].slice(0, -1),

show:true
       })


      

    try
    {
      const BASE_URL = process.env.REACT_APP_BASE_URL;

      const apiUrl=`${BASE_URL}weather?low=${this.state.low}&lon=${this.state.lon}&searchQuery=${this.state.showName}`;

      let myreq= await axios.get(apiUrl)
       this.setState({
        weatherDesc:myreq.data
            })

            console.log(this.state.weatherDesc[0].date)
          }
          catch
          {
            console.log('err')

          }
    }

    catch
    {
    console.log('sasd');
    this.setState({
errorMsg:true
    })
    }}




      render(){
if(! this.state.weatherDesc)
{
  return <p>No Date</p>
}
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

<Weather
date={this.state.weatherDesc}
/>
     
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



  {/* <div>
    {this.state.weatherDesc.map((item) => (
        <p>Hello, {item.description} from {item.date}!</p>
    ))}
    </div> */}




{/* {this.state.show &&<Card border="warning" style={{ width: '18rem' }}>
    <Card.Header>info</Card.Header>
    
      <Card.Body> 
     <p>{this.state.weatherDesc.date}</p>
      </Card.Body>

      </Card>
      } */}

{/* 
{this.state.show &&
  <ul>
        {this.state.weatherDesc.map(item => {
          return <li>{item[0]}</li>;
        })}
      </ul>
      } */}



</>
        )}}

        export default Map;