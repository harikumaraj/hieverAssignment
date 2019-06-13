import React, {Component} from "react";
import {StatusBar, View} from "react-native";
import PropTypes from "prop-types";
import Routes from "./routes";

const styles = {
    appContainer: {
        flex: 1
    }
};

const propTypes = {
};

const defaultProps = {
};

class Main extends Component {
    
    render() {
        return (
            <View style={styles.appContainer}>
                <StatusBar backgroundColor="#000000" barStyle="light-content" />
                <Routes />
            </View>
        );
    }
}

Main.propTypes = propTypes;

Main.defaultProps = defaultProps;

export default Main;
