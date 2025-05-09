import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import DashboardSummary from "../DashbordSummary/DashboardSummary";
import Faq from "../Faq/Faq";

import NewsLetter from "../NewsLetter/NewsLetter";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Home = () => {
  return (
    <div className="xl:ml-62">
      <section className="h-screen ">
        <section className="px-0">
         
          <Banner />
        </section>
        <section className="px-4">
          <Service />
        </section>
        <section className="px-4">
          <DashboardSummary />
        </section>
        <section className="px-4">
          <Faq />
        </section>
       

        {/* <NewsLetter/> */}
      </section>
    </div>
  );
};

export default Home;
