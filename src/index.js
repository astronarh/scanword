import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import store from "./store";
import {OPEN_SCANWORD} from "./constants/actionTypes";
import {getNotOpenedScanwords} from "./components/selectors/scanword";

ReactDOM.render(
    <App
        scanwords={getNotOpenedScanwords(store.getState())}
        open={id => store.dispatch({type: OPEN_SCANWORD, id})}
    />,
    document.getElementById('root')
);
