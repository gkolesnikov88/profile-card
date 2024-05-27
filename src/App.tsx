import React from "react";
import "./App.css";
import { Profile } from "./components/profile/Profile";
import ProfileLogo from "./assets/profile.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile
          logo={ProfileLogo}
          name={"Sarah Dole"}
          occupation={"Front End Engineer @ Microsoft"}
          quote={
            "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer."
          }
          contactLink={"https://github.com/gkolesnikov88"}
          github={"https://github.com/gkolesnikov88"}
          linkdin={"https://github.com/gkolesnikov88"}
          instagram={"https://github.com/gkolesnikov88"}
          twitter={"https://github.com/gkolesnikov88"}
        />
      </div>
    </div>
  );
}

export default App;
