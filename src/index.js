import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./app/store"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { get_room_api } from './features/get_rooms';
import { extentdendapislice } from './features/currentslice';
// import { transactionapi } from './features/transaction';
store.dispatch(extentdendapislice.endpoints.getPost.initiate());
store.dispatch(get_room_api.endpoints.get_room.initiate());
// store.dispatch(transactionapi.endpoints.getTransaction.initiate())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App />}/>
    </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
