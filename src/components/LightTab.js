import React from "react";

function Tab() {
  return (
    <div className="container">
      {/* <!-- Tabs navs --> */}
      <div className="row">
        <ul
          class="nav  mb-3"
          id="ex1"
          role="tablist"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "start",
            fontSize: 30,
            fontFamily: "Sora",
            fontWeight: 700,
            background: "none",
            letterSpacing: "-0.025em",
            paddingBottom: 10,
          }}
        >
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
              style={{ color: "black", textDecorationLine: "underline" }}
            >
              Talent Freelancers
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              style={{ color: " #4F5054" }}
              class="nav-link"
              id="ex1-tab-2"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              Job / Projects
            </a>
          </li>
        </ul>
        {/* <!-- Tabs navs --> */}
        {/* <!-- Tabs content --> */}
        <div class="tab-content" id="ex1-content">
          <div
            class="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            {/* Tab 1 content */}
            {/* <Carts /> */}
          </div>
          <div
            class="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            {/* Tab 2 content */}
          </div>
        </div>
        {/* <!-- Tabs content --> */}
      </div>
    </div>
  );
}

export default Tab;

//https://www.youtube.com/watch?v=rH9jM-8hAD8
