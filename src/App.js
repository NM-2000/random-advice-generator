import axios from 'axios';
import React from 'react';
import { API_END_POINT } from './Constants';
import './styles/style.css';

class App extends React.Component {

    state = {
        advice: ""
    }
    
    componentDidMount() {
        axios.get(API_END_POINT.GET_ADVICE)
            .then((response) => {
                const { data: { slip: { advice: response_advice } } } = response;
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
                    <h1 className="advice" >{ advice }</h1>
                </div>
            </div>
        );

    }

};

export default App;