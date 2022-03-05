import axios from 'axios';
import React from 'react';
import { API_END_POINT } from './Constants';
import './styles/style.css';

class App extends React.Component {

    state = {
        advice: ""
    }

    constructor(props) {
        super(props);
    
        this.fetchAdvice = this.fetchAdvice.bind(this);
    }
    
    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice() {
        console.log("fetch")
        axios.get(API_END_POINT.GET_ADVICE)
        .then((response) => {
            const { data: { slip: { advice: response_advice } } } = response;
            console.log(this);
            this.setState({
                advice: response_advice
            });
        }).catch((error) => {
            console.warn(error);
        });
    }

    render() {
        const { advice } = this.state;

        return (
            <div className="container" >
                <div className="card" >
                    <div className="advice-wrapper" >
                        <h1 className="advice" >{ advice }</h1>
                    </div>
                    <button className="button" onClick={this.fetchAdvice} >
                        <span className="button-span" >Give Me Advice!</span>
                    </button>
                </div>
            </div>
        );

    }

};

export default App;