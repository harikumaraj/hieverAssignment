import React, {Component} from "react";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

import Main from "./src/Main";
import store from "./src/store";

const persist = store();

class App extends Component {

    render() {
        return (
            <Provider store={persist.store}>
                <PersistGate loading={null} persistor={persist.persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        );
    }
}

export {
    App,
    persist
};