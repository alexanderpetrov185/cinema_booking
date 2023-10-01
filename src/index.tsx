import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {setupStore} from "./redux/store";
import {Provider} from 'react-redux';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                <App/>
            </DevSupport>
        </Provider>
    </React.StrictMode>,
)