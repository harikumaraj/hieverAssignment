import {heightPercentageToDP, widthPercentageToDP, dpToPx} from "../../../utils"

export default styles = {
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    headerContainerStyle: {
        backgroundColor: "#ffffff"
    },
    headerTitleStyle: {
        color: "#444444",
        fontWeight: "bold"
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: dpToPx(6)
    },
    titleStyle: {
        paddingTop: dpToPx(6),
        paddingBottom: dpToPx(3),
        fontSize: dpToPx(9),
        fontWeight: "bold",
        color: "#444444",
        lineHeight: dpToPx(14)
    },
    authorStyle: {
        fontSize: dpToPx(4.5),
        color: "#444444",
        fontWeight: "bold"
    },
    timeTextStyle: {
        color: "#888888"
    },
    image: {
        width: "100%",
        height: dpToPx(80),
        marginTop: dpToPx(6)
    },
    contentStyle: {
        color: "#444444",
        lineHeight: dpToPx(7),
        paddingVertical: dpToPx(10)
    }
}