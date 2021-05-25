import React from 'react';


class Weather extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
    


        }
      }
    
      render(){
        return(
        <>
    {this.props.date.map((item,index)=>{
            return(
              <p  key={index}>

                {item.date}
                {item.description}
  
              </p>
            )})}

            </>
         
            )    }}

  export default Weather