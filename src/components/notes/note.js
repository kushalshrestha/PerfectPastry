import React  from 'react';
import './note.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Badge,Card} from 'react-bootstrap';
import "typeface-reenie-beanie";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import notes from './assets/notes.json';
import mytext from './assets/data.js';



export default class Note extends React.Component {
    constructor(props){
        super(props);
        
       this.state={
           saved:[] //list
       };
    }
    
    //using double arrow function, there's no need to bind 
    saveNote = noteid =>(event)=>{
    //   console.log(noteid);
    //  console.log(event.target.value);  
      alert('clicked noteid : ' + noteid);
      let savedlist=this.state.saved;
      if(this.containsObject(noteid,savedlist)===true){
          savedlist.splice(savedlist.indexOf('noteid'),1);
      }else{
          savedlist.push(noteid);
          this.setState({
            saved : savedlist
         });
      }
     alert(('final saved: ' + this.state.saved));
    };

    containsObject=function(object, list){
        var i;
        for(i=0; i<list.length;i++){
            if(list[i]===object){
                return true;
            }
        }
        return false; 
     }
    
    render(){
        const text = mytext;
        return (
            <React.Fragment>
             <br></br>
             <br></br>
             

            <div className="container">
            <p>{text}</p> 
            <hr/>
                {
					notes.Data.map((note, i) => {
						return (
                            <Container key={i}>
                                
                                <Row id={(i+1)+'-note'} className="note-wrapper">
                                   
                                    <Col xs={5}>
                                    <FontAwesomeIcon icon="bookmark" color="black"/>
                                    <input name="rememberMe" 
                                            id={i+1}
                                            onChange={this.saveNote(i)}
                                            type="checkbox" 
                                            />{this.state.saved[0]}
                                        <h2>{i+1}. {note.title}</h2>
                                        <p style={{whiteSpace: "pre-line"}}>{note.description}</p>
                                        <br/>
                                        <Badge className="pp_nottoforget" variant="danger">Not to Forget</Badge>
                                            <Card bg="">
                                            <Card.Body>
                                                {/* <Card.Title >Not to forget:</Card.Title> */}
                                                <ol>
                                                <Card.Text>
                                                {note.important.map((imp_point,i)=>{
                                                return(<li key={i}>{imp_point}</li>);
                                                })}
                                                </Card.Text>
                                                </ol>
                                            </Card.Body>
                                            </Card>
                                    
                                    </Col>
                                    <Col xs={7}>
                                        <div className="code-wrapper">
                                        <code style={{whiteSpace: "pre-wrap"}}>
                                        <ol>
                                            {/* {note.code_example} */}
                                            {note.code_example.map((code_detail,i)=>{
                                                return(<li key={i}>{code_detail}</li>);
                                            })}
                                        </ol>
                                        </code>
                                        Tags: <Badge variant="info"> {note.tags}</Badge><br /><br />
                                        <Badge variant="primary">Note Source</Badge> : <br />
                                            {note.example_source}
                                        </div>
                                        
                                    </Col>
                                    
                                </Row>
                                <hr/>
                                
                                
                            </Container>


						);
					})
				}
            </div>


            </React.Fragment>
        );
        
    }
}