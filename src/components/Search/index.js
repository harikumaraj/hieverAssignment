import PropTypes from "prop-types";
import React, { Component } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import styles from "./styles";

const propTypes = {
    onSearchChange: PropTypes.func
};

const defaultProps = {
    onSearchChange: () => {}
};

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        }
    }

    resetSearch = () => {
        this.setState({ searchString: "" });
        this.props.onSearchChange("");
    }

    handleOnChange = (searchString) => {
        this.setState({ searchString });
    }

    onSearchPress = () => {
        this.props.onSearchChange(this.state.searchString);
    }

    render() {
        const { containerStyle, titleStyle, title, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                style={styles.textInput}
                    value={this.state.searchString}
                    onChangeText={this.handleOnChange}
                />
                <TouchableOpacity style={styles.cross} onPress={this.resetSearch}>
                    <Entypo name="cross" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.search} onPress={this.onSearchPress}>
                    <Feather name="search" style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
}

Search.defaultProps = defaultProps;

Search.propTypes = propTypes;

export default Search;
