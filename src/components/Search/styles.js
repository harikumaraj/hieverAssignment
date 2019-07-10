import {heightPercentageToDP, widthPercentageToDP, dpToPx} from "../../utils"

const styles = {
    container: {
        marginVertical: dpToPx(5),
        height: dpToPx(20),
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 0.6,
        marginHorizontal: dpToPx(5),
        paddingHorizontal: dpToPx(5),
        alignItems: "center",
        borderRadius: dpToPx(10)
    },
    textInput: {
        flex: 1
    },
    cross: {
        width: dpToPx(15)
    },
    search: {
        width: dpToPx(10)
    },
    icon: {
        color: "#000000",
        fontSize: dpToPx(10)
    }
}

export default styles;
