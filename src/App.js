import React from "react";
// import Refs from "./Components/REFS/refs";
// import FocusInput from "./Components/REFS/focusInput";
// import ForwardeParentInput from "./Components/REFS/ForwardeParentInput";
// import Portals from "./Components/Portals/portals";
// import Hero from "./Components/ErrorBoundary/Hero";
// import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
// import ClickCounter from "./Components/HigherOrderComponents/ClickCounter";
// import HoverCounter from "./Components/HigherOrderComponents/hoverCounter";
// import ClickCounter2 from "./Components/RenderProps/clickCounter2";
// import HoverCounter2 from "./Components/RenderProps/hoverCounter2";
// import User from "./Components/RenderProps/User";
// import Counter from "./Components/RenderProps/Counter";
import ParentComp from "./Components/PureComponents/ParentComp";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Refs /> */}
        {/* <FocusInput /> */}
        {/* <ForwardeParentInput /> */}
        {/* <Portals /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}

        {/* <ClickCounter name="Akash" />
        <HoverCounter /> */}

        {/* <Counter>
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        <Counter>
          {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        </Counter> */}

        {/* <ClickCounter2 />
        <HoverCounter2 />
        <User render={(isloggedIn) => (isloggedIn ? "Akash" : "Guest")} /> */}

        <ParentComp />
      </div>
    );
  }
}

export default App;
