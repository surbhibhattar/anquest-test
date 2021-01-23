import "./App.css";
import { ViewApis } from "./ViewApis";
import { CreateApi } from "./CreateApi";
import React, { useState } from "react";

function App() {
  const [showCreateComp, setShowCreateComp] = useState(false);

  return (
    <div className="App">
      {showCreateComp ? (
        <CreateApi setShowCreateComp={setShowCreateComp} />
      ) : (
        <ViewApis setShowCreateComp={setShowCreateComp} />
      )}
    </div>
  );
}

export default App;
