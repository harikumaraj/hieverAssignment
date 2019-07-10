import React from "react";
import PropTypes from "prop-types";
import {View, FlatList, Text, ActivityIndicator} from "react-native";
import {connect} from "react-redux";

import Header from "../../../components/Header"
import FlatListItem from "../../../components/FlatListItem";
import Search from "../../../components/Search"

import {getNewsListAction, setNewsDetails} from "../../../actions/news.actions";
import {navigateTo} from "../../../utils"

import styles from "./styles";

const propTypes = {
    newsList: PropTypes.array,
    handleGetNewsList: PropTypes.func,
    handleSetNewsDetails: PropTypes.func
};

const defaultProps = {
    newsList: [],
    handleGetNewsList: () => {},
    handleSetNewsDetails: () => {}
};

class NewsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isShowSearch: false
        };
    }

    componentDidMount() {
        this.props.handleGetNewsList();
    }

    onItemPress = (item) => {
        this.props.handleSetNewsDetails(item);
        navigateTo("newsDetails");
    }

    onSearchChange = (searchString) => {
        this.props.handleGetNewsList(searchString);
    }
    
    handleOnPressRightIcon = () => {
        this.setState((prevState) => {
            return ({isShowSearch: !prevState.isShowSearch});
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Header
                    title={"Home"}
                    rightIcon={"search"}
                    onPressRightIcon={this.handleOnPressRightIcon}
                />
                {this.state.isShowSearch && <Search onSearchChange={this.onSearchChange}/>}
                {this.props.loading && <ActivityIndicator size="small" color="#000000" />}
                <FlatList
                    data={this.props.newsList}
                    ListHeaderComponent={<Text style={styles.titleStyle}>Your Daily Read</Text>}
                    renderItem={({item, index}) => (
                        <FlatListItem
                            item={item}
                            index={index}
                            onItemPress={() => {this.onItemPress(item)}}
                        />
                    )}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    newsList: state.news.newsList,
    loading: state.news.loading
});

const mapDispatchToProps = dispatch => ({
    handleGetNewsList: (searchString) => dispatch(getNewsListAction(searchString)),
    handleSetNewsDetails: (item) => dispatch(setNewsDetails(item))
});

NewsList.defaultProps = defaultProps;

NewsList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);