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

import BrandForm from "./components/Form/Brand/brandForm"
import GeneralForm from "./components/Form/General/generalForm"
import SpecificationFrom from "./components/Form/Specification/specificationForm"
import ImgForm from "./components/Form/ImgCar/imgForm"
import BrandTable from "./components/Table/Brand/brandTable"
import GeneralTable from "./components/Table/General/generalTable"
import SpecificationTable from "./components/Table/Specification/specificationTable"
import ImgTable from "./components/Table/ImgCar/imgTable"
import ReviewTable from "./components/Table/Review/reviewTable"
import SpecTable from "./components/Table/Specification/specificationTable"
import BackgroundTable from "./components/Table/background/backgroundTable"
import DetailsCar from "./pages/cars/detailsCar"
import EditBrand from "./components/Form/Brand/editBrand"
import EditBackground from "./components/Form/Background/backgroundEdit"
import EditGeneral from "./components/Form/General/editGeneral"
import UserTable from "./components/Table/user/userTable"
import AddAdmin from "./pages/board/addAdmin"
import ChangePassword from "./components/Table/user/changePassword"
import BackgroundForm from "./components/Form/Background/backgroundForm"
import EditSpec from "./components/Form/Specification/editSpecification"
import EditImgCar from "./components/Form/ImgCar/editImgCar"

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
                <Route path="/dasborad" component={Cars}  />

                <Route path="/specification" component={SpecTable}  />


                <Route path="/put" component={EditBrand}  />
                <Route path="/brandForm" component={BrandForm}  />
                <Route path="/generalForm" component={GeneralForm}  />
                <Route path="/specificationForm" component={SpecificationFrom}  />
                <Route path="/imgForm" component={ImgForm}  />
                <Route path="/backgroundForm" component={BackgroundForm}/>
                <Route path="/editBackground" component={EditBackground}/>
                <Route path="/editImgCar" component={EditImgCar}/>
                <Route path="/details" component={DetailsCar} />
                <Route path="/editSpec" component={EditSpec} />
                <Route path="/editGeneral" component={EditGeneral}/>
                <Route path="/brandTable" component={BrandTable} />
                <Route path="/generalTable" component={GeneralTable} />
                <Route path="/specificationTable" component={SpecificationTable} />
                <Route path="/backgroundTable" component={BackgroundTable} />
                <Route path="/review" component={ReviewTable}  />
                <Route path="/userGet" component={UserTable}  />
                <Route path="/imgCarsTable" component={ImgTable}  />

                <Route path="/addAdmin" component={AddAdmin}/>
                <Route path="/changePassword" component={ChangePassword}/>


                <Route path="/admin" component={BoardAdmin} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
