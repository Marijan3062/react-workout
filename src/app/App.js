import React from 'React';
import Text from './Text.js';

export default class extends React.Component {
    render() {
        return (
            <div className="app">
                This is the App component .
                <Text content="First Component" />
                <Text content="Second Component" />
                <Text content="Third Component" />
            </div>
        );
    }
}
