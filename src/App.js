import "./App.css";
import Amplify from "aws-amplify";
import config from "./aws-exports";

import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(config);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>my App content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
