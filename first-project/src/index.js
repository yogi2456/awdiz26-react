import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster} from 'react-hot-toast';
import ProviderCounterContext from './components/Context/CounterContext';
import AuthContextComponent from './components/Context/AuthContext';
import ThemeContextComponent from './components/Context/ThemeContext';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import stores from './components/redux/Stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <ThemeContextComponent>
    <AuthContextComponent>
    <ProviderCounterContext>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    <Provider store={store}>
      <Provider store={stores}> 
      <App />
      </Provider>
    </Provider>   
      </ProviderCounterContext>
      </AuthContextComponent>
      </ThemeContextComponent>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
