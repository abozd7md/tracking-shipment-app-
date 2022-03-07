import "./App.css";
import React, { Suspense } from "react";
import Nav from "./Components/Nav/Nav";
import TrackForm from "./Components/TrackingShipment/TrackForm";
import i18next from "i18next";
import Footer from "./Components/footer/Footer";
function App() {
  return (
    <Suspense fallback={"Loading.."}>
      <div className="App">
        <Nav />
        <TrackForm />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
