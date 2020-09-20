import React, {Component} from 'react';
// import "api-using-react-demo.css";
import {Container, Row, Col, Image, Badge} from 'react-bootstrap';

//https://www.robinwieruch.de/react-fetching-data
export default class ApiUsingReactDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            pictures:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=8')
        .then(results=>{
            return results.json();
        }).then(data =>{
            let pictures = data.results.map((pic,i)=>
                    
                    <Col xs={6} md={6} key={i}>
                    <Image src={pic.picture.medium} roundedCircle />
                    <p>{pic.name.title}. {pic.name.first} {pic.name.last} <Badge variant="secondary">{pic.gender}</Badge>
                    <br/>Email: {pic.email}</p>
                    </Col>
                    
            );
            console.log("BEFORE: state.pictures", this.state.pictures);
            this.setState({pictures: pictures});
            console.log("AFTER: state.pictures", this.state.pictures);
            
        })
        
    }

    render(){
        return(
            <Container>
                <Row>
                    {this.state.pictures}
                </Row>
            </Container>
            
        )
    }

}