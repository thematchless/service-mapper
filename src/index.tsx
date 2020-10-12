import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GridContainer from "./components/GridContainer";

const App = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

ReactDOM.render(
  <React.StrictMode>
    <App>
      <GridContainer />
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
