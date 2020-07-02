import React, { Component } from 'react';
import './App.css';
//import Application from './select'
import  Child from './data'
import Select from 'react-select';
import CountUp from 'react-countup';
// import Chart from './chart'
import covid from './covid.png'
//  var array = ["pak" , "india", "sri" ,"nepal"]
 const options = [];
export default class Main extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      confirmed: false ,
      death:false,
      recovered: false,
      selectedoption: null,
      text:"OVERALL"
    }
    this.handleInputValue = this.handleInputValue.bind(this);
   
  }
 
  // handle input value coming from the child component
  handleInputValue(val1,  val , val2) {
    this.setState({ confirmed:val , death:val1 , recovered:val2 });
  }

  handleChange = async (selectedOption) => {
    await   this.setState({ selectedOption ,
        text: selectedOption.value
      });
      console.log(`Option selected:`, selectedOption.value);
      console.log("after selected1 , " , selectedOption)
      console.log(this.state.text,"text")
  
      if(this.state.text === "OVERALL")
      {
        await  fetch(`https://covid19.mathdro.id/api`)
        .then ( (res)=>  res.json() )
        .then((res)=>  {
            console.log(res.recovered.value , "hello")
       this.setState({confirmed: res.confirmed.value,
        death: res.deaths.value ,
        recovered:res.recovered.value 
    })
         this.props.handleInput(this.state.death , this.state.confirmed , this.state.recovered);
       console.log(this.state.confirmed , "this.state.death")
      
       
        })
        .catch((e)=>{
          console.log(e ,"errorrras")
        })
    
      }
      else
      {
        await  fetch(`https://covid19.mathdro.id/api/countries/${this.state.text}`)
        .then ( (res)=>  res.json() )
        .then((res)=>  {
            console.log(res.recovered.value , "hello")
       this.setState({confirmed: res.confirmed.value,
        death: res.deaths.value ,
        recovered:res.recovered.value 
    })
         this.props.handleInput(this.state.death , this.state.confirmed , this.state.recovered);
       console.log(this.state.confirmed , "this.state.death")
      
       
        })
        .catch((e)=>{
          console.log(e ,"errorrras")
        })
  
        
      
      }
    
      
    }


  async  componentDidMount()
  {
    
     await fetch('https://covid19.mathdro.id/api/countries').then((res)=> res.json()).then((res2)=>{
          res2.countries.map((item)=>{ return   options.push({value:item.name , label: item.name})
     // console.log(options,"QQQQQ")
      })
      })
    
      
  }
 
  render() {
   
    return (
      <div  style={{backgroundColor:"black"}}> 
         
       
        <div className="jumbotron"  style={{ backgroundImage: `url(${covid})`, height:"80%" }}>
          <div className="container text-center"   >
            <h2 style={{color:"red", fontSize:55}}>COVID-19</h2>      
            <p style={{color:"white"}}>  Over All Report
            
               </p>
            
          </div>
        </div>
        <div className="container-fluid bg-3 text-center">    
         <div>
         <h3 style={{color:"white"}}>Select Country </h3>
      
         </div>
         <Select 
      onChange={this.handleChange}
      options={options}
      autoFocus={true}
     
      />
      
      
      <div className="row">
         
         <div className="col-sm-2" style={{border:"2px solid  white" ,borderBottom:"3px solid blue", marginLeft:"12%", marginTop:"5%"}}>
          <br/>
           <p style={{color:"blue" , fontSize:25}} >  Positive Patient  </p>
         <br/>
         <p  style={{color:"blue" , fontSize:25}}>
         <CountUp end={!this.state.confirmed ? 0 : this.state.confirmed }  duration={2} /></p>
         </div>
         <div className="col-sm-2" style={{border:"2px solid white " , borderBottom:"3px solid red", marginLeft:"12%", marginTop:"5%"}}>
         <br/>
         <p  style={{color:"red" , fontSize:25}}> Death  </p>
         <br/>
         <p  style={{color:"red" , fontSize:25}}>
         <CountUp end={!this.state.death ? 0 : this.state.death}  start={0} duration={2} /></p>
         </div>
         <div className="col-sm-2" style={{border:"2px solid white " , borderBottom:"3px solid  green ", marginLeft:"12%", marginTop:"5%"}}>
         <br/>
         <p  style={{color:"green", fontSize:25}}> Recovered  </p>
         <br/>
         <p  style={{color:"green", fontSize:25}}>
         <CountUp end={!this.state.recovered ? 0 : this.state.recovered}  start={0} duration={2} /></p>
         </div>
       </div>
         <Child handleInput={this.handleInputValue} text={this.state.text} death={this.state.death} confirmed={this.state.confirmed} recovered={this.state.recovered} />
         {/* <Data/> */}
        
          
          <br />
          <br />
          <br />
          <br />
         
         
        </div><br />
       <br /><br />
        <footer className="container-fluid text-center">
         
        </footer>
      </div>
    );
  }
}

