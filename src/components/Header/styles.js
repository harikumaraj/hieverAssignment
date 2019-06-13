import {heightPercentageToDP, widthPercentageToDP, dpToPx} from "../../utils"

const styles = {
    container: {
        height: heightPercentageToDP(10),
        width: widthPercentageToDP(100),
        paddingHorizontal: widthPercentageToDP(2),
        backgroundColor: "black",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 999,
        elevation: 4
    },
    title: {
        color: "#ffffff",
        width: dpToPx(90),
        paddingHorizontal: dpToPx(2),
        fontSize: dpToPx(7),
    },
    leftIconContainer: {
        height: "100%",
        paddingVertical: dpToPx(2),
        paddingHorizontal: dpToPx(4),
        justifyContent: "center",
        left: 0
    },
    rightIconContainer: {
        height: "100%",
        paddingVertical: dpToPx(2),
        paddingHorizontal: dpToPx(4),
        justifyContent: "center",
        position: "absolute",
        right: 0
    },
    rightIcon: {
        color: "#888888",
        fontSize: dpToPx(8)
    }
};

export default styles;
