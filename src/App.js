import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./containers/Home";
import Awards from "./containers/about/Awards";
import OurTeam from "./containers/about/OurTeam";
import BankDetails from "./containers/about/BankDetails";
import Legal from "./containers/about/Legal";
import OurApproach from "./containers/about/OurApproach";
import OurFounders from "./containers/about/OurFounders";
import WhoWeAre from "./containers/about/WhoWeAre";
import AllCalamities from "./containers/calamities/AllCalamities";
import SingleCalamity from "./containers/calamities/SingleCalamity";
import AllCauses from "./containers/causes/AllCauses";
import SingleCause from "./containers/causes/SingleCause";
import AllChampions from "./containers/champions/AllChampions";
import SingleChampion from "./containers/champions/SingleChampion";
import ContactUs from "./containers/contacts/ContactUs";
import Enquiry from "./containers/contacts/Enquiry";
import Patient from "./containers/contacts/Patient";
import Testimonials from "./containers/contacts/Testimonials";
import Volunteer from "./containers/contacts/Volunteer";
import DonateCalam from "./containers/donations/DonateCalam";
import DonateCause from "./containers/donations/DonateCause";
import DonateProject from "./containers/donations/DonateProject";
import ECS from "./containers/donations/ECS";
import OfflineDonation from "./containers/donations/OfflineDonation";
import OnlineDonation from "./containers/donations/OnlineDonation";
import AllEvents from "./containers/events/AllEvents";
import SingleEvent from "./containers/events/SingleEvent";
import AllPressReleases from "./containers/press-releases/AllPressReleases";
import AllProjects from "./containers/projects/AllProjects";
import SingleProject from "./containers/projects/SingleProject";
import AllSuccessStories from "./containers/success-stories/AllSuccessStories";
import SingleSuccessStory from "./containers/success-stories/SingleSuccessStory";
import Cancellation from "./containers/policies/Cancellation";
import Privacy from "./containers/policies/Privacy";
import Terms from "./containers/policies/Terms";
import PageNotFound from "./containers/notfound/PageNotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/who-we-are" component={WhoWeAre} />
          <Route exact path="/our-approach" component={OurApproach} />
          <Route exact path="/awards-and-recognition" component={Awards} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/founders" component={OurFounders} />
          <Route exact path="/bank-details" component={BankDetails} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/national-calamities" component={AllCalamities} />
          <Route
            exact
            path="/national-calamities/:slug"
            component={SingleCalamity}
          />
          <Route exact path="/causes" component={AllCauses} />
          <Route exact path="/causes/:slug" component={SingleCause} />
          <Route exact path="/champions" component={AllChampions} />
          <Route exact path="/champions/:slug" component={SingleChampion} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/enquiry-form" component={Enquiry} />
          <Route exact path="/patient-form" component={Patient} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route
            exact
            path="/donate-calamities/:slug"
            component={DonateCalam}
          />
          <Route exact path="/donate-cause/:slug" component={DonateCause} />
          <Route exact path="/donate-project/:slug" component={DonateProject} />
          <Route exact path="/ecs" component={ECS} />
          <Route exact path="/offline-donation" component={OfflineDonation} />
          <Route exact path="/donate-now" component={OnlineDonation} />
          <Route exact path="/events" component={AllEvents} />
          <Route exact path="/events/:slug" component={SingleEvent} />
          <Route exact path="/press-release" component={AllPressReleases} />
          <Route exact path="/projects" component={AllProjects} />
          <Route exact path="/projects/:slug" component={SingleProject} />
          <Route exact path="/success-stories" component={AllSuccessStories} />
          <Route
            exact
            path="/success-stories/:slug"
            component={SingleSuccessStory}
          />
          <Route
            exact
            path="/cancellation-and-refund-policy"
            component={Cancellation}
          />
          <Route exact path="/privacy-policy" component={Privacy} />
          <Route exact path="/terms-and-conditions" component={Terms} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
