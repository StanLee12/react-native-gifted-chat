/**
 * Copyright (c) 2018-present, SanQiu, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Create by stan on 2018/7/16.
 * @emails stanlee1226@gmail.com
 */

import React, {Component} from 'react';
import {
    TextInput,
    Platform,
} from 'react-native';

export default class CustomTextInput extends Component {

    shouldComponentUpdate(nextProps) {
        return Platform.OS !== 'ios' || this.props.value === nextProps.value;
    }

    render() {
        return (
            <TextInput {...this.props} />
        );
    }

}
