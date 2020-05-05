import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        // this.timerID = setInterval(
        //     this.tick.bind(this),
        //     1000
        // );
        this.tick();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        setInterval(() => {
            this.setState({
                date: new Date()
            });
        },1000)
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
    <Clock/>,
    document.getElementById('root')
);
//热部署
if (module.hot) {
    module.hot.accept();
}
