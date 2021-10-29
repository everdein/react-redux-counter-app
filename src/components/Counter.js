import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/counterConstants';
import './styles/Counter.css';

class Counter extends Component {

    increment = () => {
        this.props.dispatch({ type: types.INCREMENT});
    }

    decrement = () => {
        this.props.dispatch({ type: types.DECREMENT});
    }
    
    render() {
        return (
            <div>
                <div className="center">
                    <h2 className="">REACT REDUX COUNTER</h2>
                    <button className="button" onClick={this.increment}>Increment</button>
                    <span className="count-number">{this.props.count}</span>
                    <button className="button" onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return{
        count: state.count,
    }
}

export default connect(mapStateToProps)(Counter);