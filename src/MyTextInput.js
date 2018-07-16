import React from 'react';
import { TextInput as Input } from 'react-native';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.value !== nextState.value) {
            return false;
        }

        return true;
    }

    focus = () => {
        this.input.focus();
    };

    clear = () => {
        this.input.clear();
    };

    render() {
        return (
            <Input
                {...this.props}
                ref={(ref) => { this.input = ref; }}
                value={this.state.value}
            />
        );
    }
}
