import { Component } from "react";

class Test extends Component {
    state = {
        word: 'hello',
    };

    clickMe = () => {
        this.setState({
            word: this.state.word + (2500+3000),
        })
    }

    render() {
        return <>
            <h1>Test {this.state.word}</h1>
            <button onClick={this.clickMe}>Click me</button>
        </>
    }
}

export default Test;