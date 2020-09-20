import React, {Component} from 'react'; 
import {Card} from 'react-bootstrap';


export default class CounterDemo extends Component{
    state = {value: 1};

    render(){
        return (
            
            <div>
            <Card>
                <Card.Header>
                    Demo
                </Card.Header>
                <Card.Body>
                <button onClick={() =>{console.log('clicked');}}>Check Console</button>
                <br/><br/>
                <div>{this.state.value}</div>
                <button onClick={() =>{ this.setState({ value: this.state.value + 1 }) }}>Increment</button>
                <button onClick={() =>{ this.setState({ value: 0 }) }}>Clear Counter</button>
                </Card.Body>
            </Card>
            </div>
            );
    }
}