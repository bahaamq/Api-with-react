import React from 'react';
import Table from 'react-bootstrap/Table'

class Weather extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
    


        }
      }
    
      render(){
        return(
        <>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {this.props.date.map((item,index)=>{
            return(
      
              <tr>
                <td>{index+1}</td>
                <td>{item.date}</td>
                <td>{item.description}</td>
              </tr>

            )})}
            </tbody>
</Table>
</>
        )}}

export default Weather;

        
    