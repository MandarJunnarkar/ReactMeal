import React, { Fragment } from "react";
import style from "./styles.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment className={style.fullWidth}>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
export default App;
