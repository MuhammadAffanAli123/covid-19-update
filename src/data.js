import React, { Component } from 'react'; 
import Select from 'react-select';
const options = [];
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 'loading .. ' ,
      death:  "loading ..  ",
      recovered:  "loading .. ",
      selectedoption: null,
      text:"USA"
     

    }
   
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption ,
      text: selectedOption.value
    });
    console.log(`Option selected:`, selectedOption.value);
    console.log("after selected1 , " , selectedOption)
    console.log(this.state.text,"text")
  }
 
  // static getDerivedStateFromProps(props, state) {
  //   return { countryname: props.countrys};
  // }
  
 
  async  componentDidMount()
  {
    
     await fetch('https://restcountries.eu/rest/v2/all').then((res)=> res.json()).then((res2)=>{
      res2.map((item)=>{ options.push({value:item.name , label: item.name})
     // console.log(options,"QQQQQ")
      })
      })

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
 
 
  render() {
   
   
     
      
             
          
    
    return (
      <div style={{ margin: '50px 0 50px 50px' }}>
         <Select 
      onChange={this.handleChange}
      options={options}
      autoFocus={true}
     
      />
       <h1>hellon child</h1>
       <h1>{console.log(this.props.countrys, "propssss")}</h1>
      </div>
    );
  }
}
 
export default Child;