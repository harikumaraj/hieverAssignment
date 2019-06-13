import React from "react";
import PropTypes from "prop-types";
import {View, ScrollView, Text, Image} from "react-native";
import {connect} from "react-redux";
import moment from "moment";

import Header from "../../../components/Header"

import {navigateBack} from "../../../utils"

import styles from "./styles";

const propTypes = {
    newsDetails: PropTypes.object
};

const defaultProps = {
    newsDetails: {}
};

class NewsDetails extends React.Component {

    render () {
        const {newsDetails} = this.props;
        return (
            <View style={styles.container}>
                <Header
                    title={newsDetails.title}
                    leftIcon="arrow-left"
                    containerStyle={styles.headerContainerStyle}
                    titleStyle={styles.headerTitleStyle}
                    onPressLeftIcon={navigateBack}
                />
                <ScrollView style={styles.contentContainer}>
                    <Text style={styles.titleStyle}>{newsDetails.description}</Text>
                    <Text style={styles.authorStyle}>
                        {newsDetails.author + "  "}
                        <Text style={styles.timeTextStyle}>{moment(newsDetails.publishedAt).format("DD/MM/YYYY")}</Text>
                    </Text>
                    <Image
                        resizeMode="cover"
                        source={{uri: newsDetails.urlToImage}}
                        style={styles.image}
                    />
                    <Text style={styles.contentStyle}>{newsDetails.content}</Text>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    newsDetails: state.news.newsDetails
});

const mapDispatchToProps = dispatch => ({
});

NewsDetails.defaultProps = defaultProps;

NewsDetails.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);