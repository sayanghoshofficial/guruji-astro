import React from "react";
import { Chackra, Footer, Header, Testimonial, UserReview } from "./components";

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
      <img
        alt="down-elem"
        src="https://user-images.githubusercontent.com/99132893/233254741-aec43ffb-0cff-49f1-a426-db62aa55d87f.jpg"
      />
      <Footer/>
    </div>
  );
}

export default App;
