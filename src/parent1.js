import React, { Component } from 'react'

export class  Prent1 extends Component {
    constructor(props){
        super(props)
        this.state={
            text: ''
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {text: props.value };
      }
    render() {
        return (
            <div>
                <h1 >pakistan</h1>
                <h2>{this.state.text}</h2>
            </div>
        )
    }
}

export default Prent1
