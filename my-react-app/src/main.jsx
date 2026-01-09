import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// function Employee() {
//   return <h2>Hai i am Employee</h2>;
// }

// function Office() {
//   return (
//     <>
//       <h1>Who ara working in this office</h1>
//       <Employee />
//     </>
//   );
// }

createRoot(document.getElementById("root")).render(
  <>
    <App/>
  </>
);
