import React from 'react';
import Select from 'react-select';

const options = [];


class Application extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedOption: null,
    }
  }
 

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
   // this.props.handleInputs(selectedOption);
    console.log("after selected , " , selectedOption)
    this.props.handleInputs(this.state.selectedOption);
  }

 async  componentDidMount()
  {
     await fetch('https://restcountries.eu/rest/v2/all').then((res)=> res.json()).then((res2)=>{
      res2.map((item)=>{ options.push({value:item.name , label: item.name})
     // console.log(options,"QQQQQ")
      })
      })

      this.props.handleInputs(this.state.selectedOption);
  }
  render(){
    const { selectedOption } = this.state;
    return (
      <Select 
      onChange={this.handleChange}
      options={options}
      autoFocus={true}
     
      />
    );
  }
}

export default Application;



