import React, { Component } from 'react';
import CounterDemo from './counter-demo';
import { Container, Row, Col } from 'react-bootstrap';
import './counter.css';

export default class Counter extends Component {
    source_code = {
        "code_example_0": [
            "import React, { Component } from 'react';",
            "",
            "export default class Counter extends Component {",
            "   state = { value: 1 }; ",
            "",
            "   render() {",
            "       return <div>{ this.state.value }</div>;",
            "   }",
            "}"
        ],
        "code_example_1": [
            "<div>{ this.state.value}</div>"
        ],
        "code_example_2": [
            "<div>{2+2}</div>"
        ],
        "code_example_3": [
            "this.getValue()"
        ],
        "code_example_4": [
            "import Counter from './counter'",
            ".....",
            "render(){",
            "   return(<Counter/>);",
            "}"
        ],
        "code_example_5": [
            "render(){",
            "   return(",
            "       <div>{this.state.value}</div>",
            "       <button onClick={()=>{console.log('clicked'); }}>Increment</button>",
            "   );",
            "}"
        ],
        "code_example_6": [
            "this.state.value++;"
        ],
        "code_example_7": [
            "render(){",
            "   return(",
            "       <div>{this.state.value}</div>",
            "       <button onClick={()=>{this.setState({ value: this.state.value+1}) }}>Increment</button>",
            "   );",
            "}"
        ],
    };

    title = "Counter";
    level = "Basic";
    source = "https://programmingwithmosh.com/react/react-tutorial-beginners/";


    constructor(props) {
        super(props);
        this.state = { value: 1 };

    }
    //    



    render() {
        //   return <div>{ this.state.value }</div>;
        return (
            <div>
                <Container>
                    <h1>{this.title}</h1>
                    <h6>{this.level}</h6>
                    <h6>{this.source}</h6>
                    <hr />
                    <Row>
                        <Col xs={8}>

                            <p>Components are the building blocks of React apps. Component is a piece of UI. Try the following code.</p>

                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_0.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>

                            <h5>Analysis of the Code</h5>
                            <p>We're importing the React object from the 'react' module. But, we're not using that object anywhere in this code. So why do we have to import it? The reason is: our JSX expressions get compiled to calls to React.createElement(). That's why we have to import React on the top.
            <br /><br />
                                Next, we're defining a class called <strong>Counter</strong> and exporting it. The objects we define in a file(module) are private or invisible to other modules by default. When we export them, other files(modules) can import and use them. Every module can have a default export. That is the main object that is exported from that module.
            <br /><br />
                                This class has a <strong>state</strong> property which holds the data that we want to display.
            <br /><br />
                                The <strong>render()</strong> method returns a JSX expression which is essentially a React element. Note that here we are using curly braces in our JSX expression:
            </p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_1.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <p>Whenever we use curly braces in a JSX expression, we can pass values dynamically. In between the braces we can write any valid JavaScript expressions. An expression is something that produces a value. We can write an expression like:
            </p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_2.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <p>
                                So, 4 will be rendered in the DOM. Or, we can call a function that returns a value:
            </p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_4.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <h5>Using a Component</h5>
                            <p>
                                Now we have a component that renders the value of a counter. In this example, we’re using a single div. In a real-world scenario, we could have some fairly complex markup with nested elements and Bootstrap classes to make our app look pretty.
            <br /><br />
                                Let’s use our new Counter component. On our main file, import the Counter component on the top, and call 'Counter' so that counter gets rendered. It kind of looks like we have extended the HTML vocabulary. We have encapsulated the concept of a counter behind an element like &lt;Counter&gt;.
            </p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_4.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <h5>Handling Events</h5>
                            <p>Now let's take this to the next level and add a button to our Counter component. Whenever we click this button, the value of the counter gets incremented. So, back to counter.jsx, modify the render method as follows:</p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_5.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <p>Here, we have set the <strong>onClick</strong> attribute of the button to an expression. This expression is an <strong>arrow function</strong>.</p>
                            <h5>Updating the state</h5>
                            <p>So, we got the button to do something when we click it. Next, we need to increment state.value.</p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_6.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <p>
                                In react, we don't update the state directly. In other words, we should not write code like below. One reason for this is that if ew update the state directly, React will not be able to figure out what is changed, so it won't know what part of the DOM to update. Another reason we don't update the state directly is fo performance reasons. So, to update the state, we call the <strong>setState</strong> method of our components. So, the render method should be as follows:</p>
                            <div className="code-wrapper">
                                <code style={{ whiteSpace: "pre-wrap" }}>
                                    <ol>
                                        {this.source_code.code_example_7.map((code_line, i) => {
                                            return (<li>{code_line}</li>);
                                        })}
                                    </ol>
                                </code>
                            </div>
                            <p>Here, we call the <strong>setState</strong> and pass an object. The properties in this object will overwrite the properties in our state property or merge with them. With this, we can increment <strong>state.value</strong>.</p>

                        </Col>
                        <Col>
                            <div className="demo-fix">
                                <CounterDemo ></CounterDemo>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

        );
    }
}