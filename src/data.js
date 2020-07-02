import React, { Component } from 'react'; 
// import Select from 'react-select';
import Chart from './chart'
// const options = [];
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 'loading .. ' ,
      death:  "loading ..  ",
      recovered:  "loading .. ",
      selectedoption: null,
      text:"OVERALL"
     

    }
   
  }

  // handleChange = async (selectedOption) => {
  // await   this.setState({ selectedOption ,
  //     text: selectedOption.value
  //   });
  //   console.log(`Option selected:`, selectedOption.value);
  //   console.log("after selected1 , " , selectedOption)
  //   console.log(this.state.text,"text")

  //   if(this.state.text=="Overall")
  //   {
  //     await  fetch(`https://covid19.mathdro.id/api`)
  //     .then ( (res)=>  res.json() )
  //     .then((res)=>  {
  //         console.log(res.recovered.value , "hello")
  //    this.setState({confirmed: res.confirmed.value,
  //     death: res.deaths.value ,
  //     recovered:res.recovered.value 
  // })
  //      this.props.handleInput(this.state.death , this.state.confirmed , this.state.recovered);
  //    console.log(this.state.confirmed , "this.state.death")
    
     
  //     })
  //     .catch((e)=>{
  //       console.log(e ,"errorrras")
  //     })
  
  //   }
  //   else
  //   {
  //     await  fetch(`https://covid19.mathdro.id/api/countries/${this.state.text}`)
  //     .then ( (res)=>  res.json() )
  //     .then((res)=>  {
  //         console.log(res.recovered.value , "hello")
  //    this.setState({confirmed: res.confirmed.value,
  //     death: res.deaths.value ,
  //     recovered:res.recovered.value 
  // })
  //      this.props.handleInput(this.state.death , this.state.confirmed , this.state.recovered);
  //    console.log(this.state.confirmed , "this.state.death")
    
     
  //     })
  //     .catch((e)=>{
  //       console.log(e ,"errorrras")
  //     })

      
    
  //   }
  
    
  // }
 
 
  
 
  async  componentDidMount()
  {
    
    //  await fetch('https://covid19.mathdro.id/api/countries').then((res)=> res.json()).then((res2)=>{
    //   res2.countries.map((item)=>{ options.push({value:item.name , label: item.name})
    //  // console.log(options,"QQQQQ")
    //   })
    //   })
      if(this.state.text==="OVERALL")
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
 
 
  render() {
   
   
     
      
             
          
    
    return (
      <div style={{ margin: '50px 0 50px 50px' }}>
         {/* <Select 
      onChange={this.handleChange}
      options={options}
      autoFocus={true}
     
      /> */}
      
     
      <h5  style={{fontSize:25 , color:"white"}}>
         {` ${this.props.text}${""}${""}   +  "` }
       <Chart  name={this.props.text} death={this.props.death}  confir={this.props.confirmed}  recovered={this.props.recovered}/>
      
       </h5>
      
       <h1>{console.log(this.props.countrys, "propssss")}</h1>
      </div>
    );
  }
}
 
export default Child;