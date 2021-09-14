import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">
                ChatZ
              </Link>
            </div>
          </header>

          <footer className="row center">All Rights reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
