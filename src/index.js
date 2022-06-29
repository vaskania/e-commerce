import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import { store } from './store/store'
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <Provider store={store}>
       <Router>
           <CategoriesProvider>
             <CartProvider>
               <App/>
             </CartProvider>
           </CategoriesProvider>
       </Router>
     </Provider>
   </React.StrictMode>
);
