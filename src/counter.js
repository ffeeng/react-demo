import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Counter() {
    return <div>123</div>
}

class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        // this.state = {date: new Date()};
    }

    add() {
        // this.state.count++;
        this.setState({count: ++this.state.count});
        console.log(this)
    }

    render() {
        return (
            <>
                <div>
                    {this.state.count}
                </div>
                <button onClick={this.add.bind(this)}>+</button>
            </>
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter2/>,
    document.getElementById('root')
);
