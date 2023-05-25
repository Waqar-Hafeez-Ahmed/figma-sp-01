import React from "react";
import logo from "../public/svg/logo image.svg";
import Img1 from "../public/svg/facebook.svg";
import Img2 from "../public/svg/linkedin.svg";
import Img3 from "../public/svg/twitte.svg";
import Img4 from "../public/svg/reddit.svg";
import Img5 from "../public/svg/youtube.svg";

function Footer() {
  const arr = [Img1, Img2, Img3, Img4, Img5];

  return (
    <div className="container-fluid " style={{ paddingTop: 100 }}>
      <div
        className="row"
        style={{ paddingLeft: 30, maxWidth: "85%", marginBottom: 80 }}
      >
        <div
          className="col-2"
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "left",
            flexDirection: "column",
            marginRight: 40,
          }}
        >
          <div className="" style={{}}>
            <img className="site-logo" src={logo} alt="logo" />
          </div>
          <p
            style={{
              color: "#909093",
              fontSize: 14,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            Find great talent. Build your business. Take your career to the next
            level.
          </p>
          <ul
            class="list-unstyled"
            style={{ overflow: "hidden", marginTop: 20, marginBottom: 0 }}
          >
            {arr.map((data) => (
              <li
                style={{
                  float: "left",
                  marginRight: 12,
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              >
                <img src={data} alt="" />
              </li>
            ))}
          </ul>
          <p
            style={{
              color: "#909093",

              fontWeight: 500,
              //   fontFamily: "Sora",
              marginTop: 0,
            }}
          >
            204 Review on{" "}
            <span
              style={{
                color: "#00DF9A",
              }}
            >
              Trustpilot
            </span>
          </p>
        </div>

        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      {/* Second Row  */}
      <div
        className="row"
        style={{ paddingLeft: 30, maxWidth: "85%", marginBottom: 80 }}
      >
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li
              style={{
                fontSize: 14,
                fontWeight: 500,
                listStyle: "none",
                textDecoration: "none",
                color: "#4F5054",
                marginBottom: 20,
              }}
            >
              Find Talent
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Design & Creative
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Developers
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Art Directors
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Sales & Marketing
              </a>
            </li>
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Writing & Translation
              </a>
            </li>{" "}
            <li
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(209, 209, 210, 1)",
                }}
              >
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// const Footer = () => (
//   <footer
//     className="page-footer font-small blue pt-4"
//     style={{ background: "white" }}
//   >
//     <div className="container-fluid text-center text-md-left">
//       <div className="row">
//         <div className="col-md-3 mt-md-0 mt-3">
//           <h5 className="text-uppercase">Footer Content</h5>
//           <div
//             className=""
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignSelf: "center",
//             }}
//           >
//             <img className="site-logo" src={logo} alt="logo" />
//           </div>
//           <div>
//             <ul
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 listStyle: "none",
//                 justifyContent: "center",
//                 marginTop: 15,
//                 gap: 29,
//               }}
//             >
//               <li
//                 a
//                 style={{
//                   width: 45,
//                   height: 45,
//                   //   lineHeight: 45,
//                   borderRadius: "50%",
//                   fontSize: 16,
//                   //   color: "#b78c33",

//                   border: "2px solid black",
//                   background: "#b78c33",
//                   color: "white",
//                   borderColor: "#b78c33",
//                 }}
//                 href="http://www.nextbootstrap.com/"
//                 title=""
//               >
//                 <a
//                   style={{
//                     width: 45,
//                     height: 45,
//                     //   lineHeight: 45,
//                     borderRadius: "50%",
//                     fontSize: 16,
//                     color: "#b78c33",
//                     border: "2px solid black",
//                   }}
//                   href="http://www.nextbootstrap.com/"
//                   title=""
//                 >
//                   <i class="fa fa-facebook"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="http://www.nextbootstrap.com/" title="">
//                   <i class="fa fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="http://www.nextbootstrap.com/" title="">
//                   <i class="fa fa-google-plus"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="http://www.nextbootstrap.com/" title="">
//                   <i class="fa fa-linkedin"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <p>
//             Here you can use rows and columns to organize your footer content.
//           </p>
//         </div>

//         <hr className="clearfix w-100 d-md-none pb-0" />

//         <div className="col-md-3 mb-md-0 mb-3">
//           <h5 className="text-uppercase">Links</h5>
//           <ul className="list-unstyled">
//             <li>
//               <a href="#!">Link 1</a>
//             </li>
//             <li>
//               <a href="#!">Link 2</a>
//             </li>
//             <li>
//               <a href="#!">Link 3</a>
//             </li>
//             <li>
//               <a href="#!">Link 4</a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-md-3 mb-md-0 mb-3">
//           <h5 className="text-uppercase">Links</h5>
//           <ul className="list-unstyled">
//             <li>
//               <a href="#!">Link 1</a>
//             </li>
//             <li>
//               <a href="#!">Link 2</a>
//             </li>
//             <li>
//               <a href="#!">Link 3</a>
//             </li>
//             <li>
//               <a href="#!">Link 4</a>
//             </li>
//           </ul>
//         </div>

//         <div className="col-md-3 mb-md-0 mb-3">
//           <h5 className="text-uppercase">Links</h5>
//           <ul className="list-unstyled">
//             <li>
//               <a href="#!">Link 1</a>
//             </li>
//             <li>
//               <a href="#!">Link 2</a>
//             </li>
//             <li>
//               <a href="#!">Link 3</a>
//             </li>
//             <li>
//               <a href="#!">Link 4</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>

//     <div className="footer-copyright text-center py-3">
//       © 2020 Copyright:
//       <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//     </div>
//   </footer>
// );
