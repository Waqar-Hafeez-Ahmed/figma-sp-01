import React from "react";
import LightTab from "./LightTab";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import GuideSection from "./GuideSection";

function LightForm() {
  return (
    <div style={{ background: "white" }}>
      <div>
        <LightTab />
        <hr />
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <h5 style={{ paddingBottom: 10, paddingTop: 40, paddingLeft: 50 }}>
            How it work?
          </h5>
          <div
            className="col-5"
            style={{
              paddingTop: 20,
              paddingBottom: 30,
              paddingLeft: 5,

              maxWidth: 500,
              marginLeft: -100,
            }}
          >
            <div
              class="accordion accordion-flush"
              id="accordionPanelsStayOpenExample"
              style={{ paddingLeft: 20, borderLeft: "1px solid lightgray" }}
            >
              <div
                class="accordion-item"
                style={{ paddingBottom: 10, border: "none" }}
              >
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
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
              <div
                class="accordion-item"
                style={{ paddingBottom: 10, border: "none" }}
              >
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
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
              <div
                class="accordion-item"
                style={{ paddingBottom: 10, border: "none" }}
              >
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThree"
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
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
              <div
                class="accordion-item"
                style={{ paddingBottom: 10, border: "none" }}
              >
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFour"
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
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
              <div
                class="accordion-item"
                style={{ paddingBottom: 10, border: "none" }}
              >
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFive"
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
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div class="accordion-body">Some content here</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-4"
            style={{
              background: " #ECECEC",
              paddingTop: 50,
              paddingLeft: 27,
              paddingRight: 40,
              paddingBottom: 60,
              borderRadius: 20,
              marginTop: -50,
            }}
          >
            <div
              className="col"
              style={{
                background: "white",
                borderRadius: 10,
                paddingTop: 20,
                paddingLeft: 30,
              }}
            >
              <h3>Post for Project</h3>
              <div
                style={{
                  fontFamily: "Roboto",
                  opacity: "0.8",
                  paddingBottom: 30,
                }}
              >
                Add your account information for withdrawal balance
              </div>

              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <h6 style={{ fontSize: 14 }}>Project Category *</h6>
                    </Form.Label>
                    <Form.Select
                      style={{ fontSize: 15, color: "gray", padding: 10 }}
                    >
                      <option key="blankChoice" hidden value>
                        Select Project Category
                      </option>
                      <option value="1">Development and It</option>
                      <option value="2">Music and Audio</option>
                      <option value="3">Design and Creative</option>
                    </Form.Select>
                    {/* <Form.Control type="email" placeholder="Enter email" /> */}
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <h6 style={{ fontSize: 14 }}>Project Name *</h6>
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter Project Name"
                    style={{ fontSize: 15, color: "gray", padding: 10 }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <h6 style={{ fontSize: 14 }}>Project Budget *</h6>
                  </Form.Label>
                  <Form.Control
                    placeholder="Ex:$800"
                    style={{ fontSize: 15, color: "gray", padding: 10 }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    <h6 style={{ fontSize: 14 }}>Dateline *</h6>
                  </Form.Label>
                  <Form.Select
                    style={{ fontSize: 15, color: "gray", padding: 10 }}
                  >
                    <option key="blankChoice" hidden value>
                      Ex: 1 Jan 2022
                    </option>
                    <option value="1">Date Picker</option>
                    <option value="2">Date Picker</option>
                    <option value="3">Date Picker</option>
                  </Form.Select>
                  {/* <Form.Control type="email" placeholder="Enter email" /> */}
                </Form.Group>

                <button
                  className="hero-btn"
                  style={{
                    width: "100%",
                    height: 50,
                    marginTop: 30,
                    fontSize: 15,
                    marginBottom: 30,
                  }}
                >
                  Next
                </button>
              </Form>
            </div>
          </div>
        </div>
        <GuideSection />
      </div>
    </div>
  );
}

export default LightForm;
