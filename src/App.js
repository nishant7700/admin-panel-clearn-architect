import React, { useEffect } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/app.min.css";
import "./assets/css/custom.css";
import "./assets/css/wysiwyg.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./containers/login/Login";
import { loadUser } from "./store/actions/auth";
import BeforeLoginRoutes from "./shared/Routes/BeforeLoginRoutes";
import PrivateRoutes from "./shared/Routes/PrivateRoutes";
import Dashboard from "./containers/dashboard/Dashboard";
import AddBlog from "./containers/blogs/AddBlog";
import AllBlogs from "./containers/blogs/AllBlogs";
import ViewBlog from "./containers/blogs/ViewBlog";
import EditBlog from "./containers/blogs/EditBlog";
import Profile from "./containers/profile/Profile";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <BeforeLoginRoutes exact path="/" component={Login} />
          <PrivateRoutes exact path="/dashboard" component={Dashboard} />
          <PrivateRoutes exact path="/profile" component={Profile} />
          <PrivateRoutes exact path="/blogs" component={AllBlogs} />
          <PrivateRoutes exact path="/blogs/add" component={AddBlog} />
          <PrivateRoutes exact path="/blogs/:id/view" component={ViewBlog} />
          <PrivateRoutes exact path="/blogs/:id/edit" component={EditBlog} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
