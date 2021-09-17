import { BrowserRouter, Link, Route } from "react-router-dom";
import FriendsView from "./Views/FriendsView";
import HomeView from "./Views/HomeView";
import LoginView from "./Views/LoginView";
import ProfileView from "./Views/ProfileView";
import RegisterView from "./Views/RegisterView";
import SetphotoView from "./Views/SetphotoView";


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

          </div>
        </header>
        <main>

            <Route path="/signin" component={LoginView} exact></Route>
            <Route path="/register" component={RegisterView} exact></Route>
            <Route path="/profile" component={ProfileView} exact></Route>
            <Route path="/addPhoto" component={SetphotoView} exact></Route>
            <Route path="/friends" component={FriendsView}></Route>
            <Route path="/" component={HomeView} exact></Route>
            
        </main>
        
        <footer className="row center footer">All Rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
