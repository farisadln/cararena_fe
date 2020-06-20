import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import authService from "./services/authService";

import Login from "./components/loginComponent";
import Register from "./components/registerComponent";
import Home from "./pages/board/homeComponent";
import Profile from "./components/profileComponent";
import BoardUser from "./pages/board/userBoardComponent";
import BoardAdmin from "./pages/board/adminBoardComponent";
import Cars from "./pages/cars/cars"
import Brand from "./pages/cars/brand"
import General from "./pages/cars/general"
import Specification from "./pages/cars/specification"
import Img from "./pages/cars/imgCar"
import Review from "./pages/cars/review"
import Post from "./pages/cars/post/postBrand"
import Delete from "./pages/cars/delete/deleteBrand"
import Put from "./pages/cars/put/putBrand"
import BrandForm from "./components/Form/Brand/brandForm"
import GeneralForm from "./components/Form/General/generalForm"
import SpecificationFrom from "./components/Form/Specification/specificationForm"
import ImgForm from "./components/Form/ImgCar/imgForm"
import BrandTable from "./components/Table/Brand/brandTable"
import GeneralTable from "./components/Table/General/generalTable"
import SpecificationTable from "./components/Table/Specification/specificationTable"

import EditGeneral from "./components/Form/Brand/editBrand"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }


  logOut() {
    authService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/"} className="navbar-brand">
                carArena
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>



                {showAdminBoard && (
                    <li className="nav-item">
                      <Link to={"/admin"} className="nav-link">
                        Admin Board
                      </Link>
                    </li>
                )}


                {currentUser && (
                    <li className="nav-item">
                      <Link to={"/user"} className="nav-link">
                        User
                      </Link>
                    </li>
                )}
              </div>

              {currentUser ? (
                  <div className="navbar-nav">
                    <li className="nav-item">
                      <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={this.logOut}>
                        LogOut
                      </a>
                    </li>
                  </div>
              ) : (
                  <div className="navbar-nav">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                  </div>
              )}
            </nav>

            <div >
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/cars" component={Cars}  />
                <Route path="/brand" component={Brand}  />
                <Route path="/general" component={General}  />
                <Route path="/specification" component={Specification}  />
                <Route path="/imgCars" component={Img}  />
                <Route path="/review" component={Review}  />
                <Route path="/post" component={Post}  />
                <Route path="/delete" component={Delete}  />
                <Route path="/put" component={EditGeneral}  />
                <Route path="/brandForm" component={BrandForm}  />
                <Route path="/generalForm" component={GeneralForm}  />
                <Route path="/specificationFrom" component={SpecificationFrom}  />
                <Route path="/imgFrom" component={ImgForm}  />
                <Route path="/brandTable" component={BrandTable} />
                <Route path="/generalTable" component={GeneralTable} />
                <Route path="/specificationTable" component={SpecificationTable} />
                <Route path="/admin" component={BoardAdmin} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;