import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import server from './services/server';

server();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
