import React from "react";

export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#06042a" : "#bcdee9",
    color: props.mode === "dark" ? "white" : "black",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };
  let backStyle = {
    backgroundColor: props.mode === "dark" ? "#0a0a1c" : "#dbf6ff",
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "Center" }}>About the App</h1>
      <p>
        This is an app which let the user analyse a txt document and tell how
        many words and characters are there. It also tell the user how much time
        it will take approximately to completely read the document
      </p>
      <p style={{ textAlign: "left" }}>
        I hope that everyone using this app would have a good time with it
      </p>
      <p style={{ textAlign: "right" }}>-Made by Harsh Prateek</p>
      <div class="accordion" id="accordionExample">
        <h1>FAQ about the app</h1>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Why was this app made?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={backStyle}>
              I made this app so that anyone who visits my site, gets some valuable insights from my site about his text. 
              </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Who should use it?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={backStyle}>
                This app can be used by anyone who wish to know somethings about his text. I created it in an easy to use manner so that everyone can use this app with ease. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                There are many apps like this, why is this so special?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={backStyle}>
                All the different apps like this are also good and do many things this app can do, but where this app stands apart is the fact that it robust and highly user friendly. I have made it after I saw the pathetic looking UI of other apps so have taken great care on the usability of the app. This is the unique selling point of this app, it's superpower.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
