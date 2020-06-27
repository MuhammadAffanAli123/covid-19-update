import React, { Component } from 'react';
//import Application from './select'
import  Child from './data'
import Select from 'react-select';

 var array = ["pak" , "india", "sri" ,"nepal"]
 const options = [];
export default class Main extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      confirmed: "" ,
      death:"",
      recovered:"",
      selectedoption: null,
      text:"USA"
    }
    this.handleInputValue = this.handleInputValue.bind(this);
   
  }
 
  // handle input value coming from the child component
  handleInputValue(val1,  val , val2) {
    this.setState({ confirmed:val , death:val1 , recovered:val2 });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
    console.log("after selected1 , " , selectedOption)
    this.setState({
      text: selectedOption.value
    })
    console.log(this.state.text,"text")
  }


  async  componentDidMount()
  {
    
     await fetch('https://restcountries.eu/rest/v2/all').then((res)=> res.json()).then((res2)=>{
      res2.map((item)=>{ options.push({value:item.name , label: item.name})
     // console.log(options,"QQQQQ")
      })
      })
    
      
  }
 
  render() {
   
    return (
      <div> 
         
         <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />                        
              </button>
              <a className="navbar-brand" href="#">Portfolio</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>My Portfolio</h1>      
            <p>Some text that represents "Me"...</p>
          </div>
        </div>
        <div className="container-fluid bg-3 text-center">    
         <div>
         <h3>select country </h3>
      
         </div>
         <Child handleInput={this.handleInputValue}  />
         {/* <Data/> */}
        
          
          <br />
          <br />
          <br />
         
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <p>  confirmed Value: {this.state.confirmed}</p>
              {/* <p>  confirmed Value: {this.state.selectedoption}</p> */}
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <p>  confirmed Value: {this.state.confirmed}</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <p>  confirmed Value: {this.state.death}</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
             
             <p>  confirmed Value: {this.state.recovered}</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
          </div>
        </div><br />
        <div className="container-fluid bg-3 text-center">    
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: '100%'}} alt="Image" />
            </div>
          </div>
        </div><br /><br />
        <footer className="container-fluid text-center">
          <p>Footer Text</p>
        </footer>
      </div>
    );
  }
}

