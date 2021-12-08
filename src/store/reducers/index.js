import { combineReducers } from "redux";
import auth from "./auth_reducer";
import alert from "./alert_reducer";
import blog from "./blog_reducer";

export default combineReducers({
  auth,
  blog,
  alert,
});
