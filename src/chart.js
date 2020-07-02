import React from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Pie, Doughnut} from 'react-chartjs-2';
// import  Child from './data'
// import CountUp from 'react-countup';
export default class Chart extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
           
        }
    }
   
  render() {
      
        console.log("this.props.confir" , this.props.confir)
      const   state1 = {
        labels: ['positive', 'DEATH', 'recover'],
        datasets: [
          {
            label: 'COvid',
            fill: false,
            lineTension: 0.5,
            backgroundColor: [
                'blue',
                'red',
                'green',
                '#00A6B4',
                '#6800B4'
              ],
            borderColor: 'white',
            borderWidth: 2,
           //backgroundColor:"red",
            data: [this.props.confir, this.props.death, this.props.recovered]
           
          }
        ]
      }

     const  state2 = {
        labels: ['positive', 'DEATH', 'recover'],
        datasets: [
          {
            label: 'COvid',
            backgroundColor: [
                'blue',
                'red',
                'green',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [this.props.confir, this.props.death, this.props.recovered]
          }
        ]
      }
    return ( 
    
    <div>
              
            
      <div  className="col-sm-5" style={{border:"2px solid  white" ,borderBottom:" 3px solid blue", marginTop:"5%" ,marginLeft:"5%"}}>
        
      <Pie
          data={state2}
          options={{
            title:{
              display:true,
              text:this.props.name,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div  className="col-sm-5" style={{border:"2px solid white " ,borderBottom:"3px solid blue", marginTop:"5%", marginLeft:"1%"}}>
        
        <Doughnut
          data={state2}
          options={{
            title:{
              display:true,
              text:this.props.name,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
          </div> <div  className="col-sm-5" style={{border:"2px solid white " ,borderBottom:"3px solid blue",marginLeft:"5%", marginTop:"5%"}}>
        
        <Line
          data={state1}
          options={{
            title:{
              display:true,
              text: this.props.name,
              fontSize:20,
              backgroundColor:"white"
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div  className="col-sm-5" style={{border:"2px solid  white" ,borderBottom:"3px solid blue", marginTop:"5%" , marginLeft:"1%"}}>
         <Bar
          data={state1}
          options={{
            title:{
              display:true,
              text:this.props.name,
              fontSize:20,
              backgroundColor:"white"
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      </div>


        
        </div>
     
    );
  }
}