import {Actions} from "react-native-router-flux";

export const navigateTo = (scene, props = null) => {
    try {
        if (props) {
            Actions.push(scene, props);
        } else {
            Actions[scene].call();
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const navigateBack = (scene = null) => {
    try {
        if (scene && typeof scene === "string") {
            Actions.popTo(scene);
        } else {
            Actions.pop();
        }
    } catch (error) {
        throw new Error(error);
    }
};