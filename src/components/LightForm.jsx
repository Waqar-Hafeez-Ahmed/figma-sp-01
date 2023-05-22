import React from "react";
import LightTab from "./LightTab";

function LightForm() {
  return (
    <div style={{ background: "white" }}>
      <div className="container">
        <LightTab />
        <hr />
        <div className="row">
          <div
            className="col-5"
            style={{
              paddingTop: 20,
              paddingBottom: 30,
              paddingLeft: 20,
              borderLeft: "2px solid gray",
            }}
          >
            <div
              class="accordion accordion-flush"
              id="accordionPanelsStayOpenExample"
            >
              <h6 style={{ paddingBottom: 10 }}>How it work?</h6>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                    style={{
                      fontSize: 24,
                      fontFamily: "Sora, sans-serif",
                      background: "none",
                      color: " #909093",
                      fontWeight: "800",
                      border: "none",
                    }}
                  >
                    1. Create your account
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                    style={{
                      fontSize: 24,
                      fontFamily: "Sora, sans-serif",
                      background: "none",
                      color: "black",
                      fontWeight: "800",
                    }}
                  >
                    2. Post a project or contest
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapsed"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div
                    class="accordion-body"
                    style={{ fontFamily: "Roboto", opacity: "0.8" }}
                  >
                    Find great talent. Build your business. Finance experts,
                    product managers, and project managers in the world.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                    style={{
                      fontSize: 24,
                      fontFamily: "Sora, sans-serif",
                      background: "none",
                      color: " #909093",
                      fontWeight: "800",
                    }}
                  >
                    3. Choose the perfect freelancer
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                    style={{
                      fontSize: 24,
                      fontFamily: "Sora, sans-serif",
                      background: "none",
                      color: " #909093",
                      fontWeight: "800",
                    }}
                  >
                    4. Pay into Escrow account
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                    style={{
                      fontSize: 24,
                      fontFamily: "Sora, sans-serif",
                      background: "none",
                      color: " #909093",
                      fontWeight: "800",
                    }}
                  >
                    5. Receive your raw file
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightForm;
