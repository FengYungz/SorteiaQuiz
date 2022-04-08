import React from 'react';
import '../src/assets/styles/global.css';
import Page from "./page/inicio/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Page />
    <ToastContainer />
    </>
  );
}

export default App;
