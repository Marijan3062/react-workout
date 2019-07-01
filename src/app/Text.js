import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
    render() {
        return (
            <div className="text">
                This is a Text component {this.props.content}
            </div>
        );
    }
}
