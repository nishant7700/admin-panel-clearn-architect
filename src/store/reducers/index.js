import { combineReducers } from "redux";
import auth from "./auth_reducer";
import alert from "./alert_reducer";
import blog from "./blog_reducer";
import project from "./project_reducer";
import cause from "./cause_reducer";
import donation from "./donation_reducer";
import banner from "./banner_reducer";
import calamitie from "./calamitie_reducer";
import event from "./event_reducer";
import release from "./release_reducer";
import contact from "./contact_reducer";
import newsletter from "./newsletter_reducer";
import champion from "./champion_reducer";
import volunteer from "./volunteer_reducer";
import patient from "./patient_reducer";
import enquirie from "./enquirie_reducer";
import storie from "./storie_reducer";
import mobile from "./mobile_reducer";
import ecs from "./ecs_reducer";
import companie from "./companie_reducer";
import testimonial from "./testimonial_reducer";
export default combineReducers({
  auth,
  blog,
  alert,
  project,
  cause,
  donation,
  banner,
  calamitie,
  event,
  release,
  contact,
  newsletter,
  champion,
  volunteer,
  patient,
  enquirie,
  storie,
  mobile,
  ecs,
  companie,
  testimonial,
});
