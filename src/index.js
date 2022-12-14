import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";
import {SkeletonTheme} from "react-loading-skeleton";
import ScrollToTop from "./ScrollTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SkeletonTheme baseColor = "#202020"  highlightColor = "#444">
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop/>
                <App />
            </BrowserRouter>
        </Provider>
    </SkeletonTheme>
)
