import PropTypes from "prop-types";
import React, {Component} from "react";
import {BackHandler} from "react-native";
import {Router, Scene} from "react-native-router-flux";

import NewsList from "./containers/news/newsList.conatiner";
import NewsDetails from "./containers/news/newsDetails.container"

export default class Routes extends Component {
    render() {
        return (
            <Router {...this.props}>
                <Scene hideNavBar={true}>
                    <Scene key="newsList" component={NewsList} />
                    <Scene key="newsDetails" component={NewsDetails} />
                </Scene>
            </Router>
        );
    }
}
