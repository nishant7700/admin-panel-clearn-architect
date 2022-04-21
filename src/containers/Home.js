import React from "react";
import { connect } from "react-redux";
import Counter from "../components/template/Counter";
import FeaturedIn from "../components/template/FeaturedIn";
import Footer from "../components/template/Footer";
import Header from "../components/template/Header";
import HomepageBanners from "../components/template/HomepageBanners";
import HomepageFeatured from "../components/template/HomepageFeatured";
import HomepageStories from "../components/template/HomepageStories";
import Statics from "../components/template/Statics";
import Testimonials from "../components/template/Testimonials";
import HomepageCurrentBeneficiaries from "../components/template/HomepageCurrentBeneficiaries";
import WhoWeAre from "../components/template/WhoWeAre";
import { useEffect } from "react";
import { getBanners } from "../store/actions/banners_action";
import { getStories } from "../store/actions/stories_action";
import { getCauses } from "../store/actions/causes_action";
import { getTestimonials } from "../store/actions/testimonials_action";
const Home = ({
  getBanners,
  getCauses,
  getStories,
  banner,
  storie,
  cause,
  getTestimonials,
  testimonial,
}) => {
  useEffect(() => {
    if (!banner.banners) {
      getBanners({});
    }
    getStories({});
    if (!cause.causes) {
      getCauses({});
    }
    if (!testimonial.testimonials) {
      getTestimonials({});
    }
  }, []);
  return (
    <>
      <Header active={"HOME"} />
      <HomepageBanners banners={banner.banners} loading={banner.loading} />
      <HomepageFeatured />
      <HomepageStories stories={storie.stories} loading={storie.loading} />
      <WhoWeAre />
      <HomepageCurrentBeneficiaries
        causes={cause.causes}
        loading={cause.loading}
      />
      <Statics />
      <Counter />
      <Testimonials
        testimonials={testimonial.testimonials}
        loading={testimonial.loading}
      />
      <FeaturedIn />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  banner: state.banner,
  storie: state.storie,
  cause: state.cause,
  testimonial: state.testimonial,
});

const mapDispatchToProps = {
  getBanners,
  getStories,
  getCauses,
  getTestimonials,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
