import React from 'react';
import Card from 'react-bootstrap/Card'
class Movie extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
    


        }
      }

      
    
      render(){




        return(
        <>
         {/* <tr key={index}>
                <td>{index+1}</td>
              
                <td></td>
            
                <td></td>
              </tr> */}
    {this.props.moviesData.map((item,index)=>(
     

<Card style={{display : 'inline', textAlign : 'center' , width: '50rem' }} key={index}>
<Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>
      
      <b>IMgURL</b>:  <a target="_blank" href={item.image_url} >IMgURL</a>  <br />
    <b>Overview</b> : {item.overview}<br />
   <b>Total Votes</b> : {item.total_votes}<br />
 <b>Average Votes </b> : {item.average_votes}<br />
 <b> Popularity </b> : {item.popularity} <br />
 <b>Released  </b> : {item.released_on}
  </Card.Text>

</Card.Body>
</Card>
            ))}

</>
        )}}


export default Movie;

        
    