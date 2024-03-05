import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Header from "./components/Header.js";
import BookingForm from "./components/BookingForm";
import Main from './components/Main';

function App() {
  return (
    <>
      <Nav />
      {/* <Header /> */}
      <Main />
      <Footer />
      <BookingForm />
    </>
  );
};

export default App;