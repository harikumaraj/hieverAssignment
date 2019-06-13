import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, TouchableOpacity, Image, Text} from "react-native";

import styles from "./styles";

const propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    imageContainer: PropTypes.object,
    onItemPress: PropTypes.func
};

const defaultProps = {
    item: {},
    index: 0,
    imageContainer: {},
    onItemPress: () => {}
};

class ListItem extends Component {

    render() {
        const {item, index} = this.props;
        console.log(item);
        return (
            <TouchableOpacity key={`flat-list-item-${index}`} onPress={this.props.onItemPress} style={styles.listItemContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleStyle} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                    <Text style={styles.authorStyle}>{item.author}</Text>
                </View>
                <Image
                    resizeMode="cover"
                    source={{uri: item.urlToImage}}
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    }
}

ListItem.defaultProps = defaultProps;

ListItem.propTypes = propTypes;

export default ListItem;
