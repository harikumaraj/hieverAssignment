import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from "./styles";

const propTypes = {
    title: PropTypes.string,
    containerStyle: PropTypes.object,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    onPressLeftIcon: PropTypes.func,
    onPressRightIcon: PropTypes.func
};

const defaultProps = {
    title: "",
    containerStyle: {},
    titleStyle: {},
    leftIcon: "",
    rightIcon: "",
    onPressLeftIcon: () => {},
    onPressRightIcon: () => {}
};

class Toolbar extends Component {

    render() {
        const {containerStyle, titleStyle, title, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon} = this.props;
        return (
            <View style={[styles.container, containerStyle]}>
                {
                    leftIcon.length > 0 &&
                    <TouchableOpacity style={styles.leftIconContainer} onPress = {onPressLeftIcon}>
                        <Icon name={leftIcon} style={styles.rightIcon} />
                    </TouchableOpacity>
                }
                <Text style={[styles.title, titleStyle]} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
                {
                    rightIcon.length > 0 &&
                    <TouchableOpacity style={styles.rightIconContainer} onPress = {onPressRightIcon}>
                        <Icon name={rightIcon} style={styles.rightIcon} />
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

Toolbar.defaultProps = defaultProps;

Toolbar.propTypes = propTypes;

export default Toolbar;
