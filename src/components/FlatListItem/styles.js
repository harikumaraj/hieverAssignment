import {widthPercentageToDP, heightPercentageToDP, dpToPx} from "../../utils";

const styles = {
    listItemContainer: {
        flexDirection: "row",
        width: widthPercentageToDP(100),
        height: dpToPx(30),
        paddingVertical: dpToPx(4),
        paddingRight: dpToPx(2),
        paddingLeft: dpToPx(6)
    },
    textContainer: {
        flex: 1,
        paddingRight: dpToPx(10),
        justifyContent: "space-around"
    },
    image: {
        height: dpToPx(25),
        width: dpToPx(25),
        right: dpToPx(1)
    },
    titleStyle: {
        fontWeight: "bold",
        color: "#000000"
    },
    authorStyle: {
        color: "#888888",
        fontSize: dpToPx(4)
    }
};

export default styles;
