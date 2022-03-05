import axios from 'axios';
import React from 'react';
import { API_END_POINT } from './Constants';

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
            <h1>{advice}</h1>
        );

    }

};

export default App;