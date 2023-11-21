import React from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Pricing from './components/Pricing';
import Service from './components/Service';
import { createBrowserRouter, createRoutesFromElements , Route} from "react-router-dom";
import ContactUs from './components/ContactUs';
import About from './components/About';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element = {<Layout/>}>
            <Route index element = {<HomePage/>}/>
            <Route path="/login" element = {<LoginPage/>}/>
            <Route path="/signup" element = {<SignUpPage/>} />
            <Route path="/service" element = {<Service/>} />
            <Route path="/pricing" element = {<Pricing/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/contactus" element = {<ContactUs/>} />

        </Route>
    )
);

function App() {
  return (
    <div> 
      <RouterProvider router = {route}/>
    </div>
  );
}

export default App;
