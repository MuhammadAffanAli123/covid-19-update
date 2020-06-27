import React, { Component } from 'react'
import Prent1 from './parent1'

export class Parent extends Component {
    constructor(props){
        super(props)
        this.state={
            text:""
        }
    }
    render() {
        return (
            <div>
                <h1>heloo;</h1>
                <input type="text" onChange={(e)=>{this.setState({text: e.target.value})}}  value={this.state.text}/>
                <Prent1    value={this.state.text}/>
            </div>
        )
    }
}

export default Parent
