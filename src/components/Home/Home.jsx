import React from 'react'
import Banner from '../Banner/Banner'
import Service from '../Service/Service'
import DashboardSummary from '../DashbordSummary/DashboardSummary'
import Faq from '../Faq/Faq'



const Home = () => {
  return (
    <div>
       <section className='h-screen'>
        <Banner/>
        <Service/>
        <DashboardSummary/>
        <Faq/>
       </section>
    </div>
  )
}

export default Home