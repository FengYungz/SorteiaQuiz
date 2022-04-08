import React from 'react';
import '../src/assets/styles/global.css';
import Page from "./page/inicio/index";
import { ToastContainer, toast } from 'react-toastify';
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
