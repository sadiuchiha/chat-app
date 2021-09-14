import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              ChatZ
            </Link>
          </div>

          <div className="row tab-collection">
            <div>
              <Link className="tabs" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="tabs" to="/messages">
                Messages
              </Link>
            </div>

            <div>
              <Link className="tabs" to="/friends">
                Friends
              </Link>
            </div>

            <div>
              <Link className="tabs" to="/profile">
                Profile
              </Link>
            </div>

            <div>
              <Link className="tabs" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        </header>
        <main>
          <main>
            <Route path="/" component={HomeView}></Route>
          </main>
        </main>
        <footer className="row center footer">All Rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
