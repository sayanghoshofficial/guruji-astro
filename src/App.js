import React from "react";
import { Chackra, Header, Testimonial, UserReview } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Testimonial />
      <img
        alt="down-elem"
        src="https://user-images.githubusercontent.com/99132893/232769589-1f16f5d6-9afc-4b73-953b-d2cbaa56f08c.jpg"
      />
      <Chackra />
      <UserReview />
    </div>
  );
}

export default App;
