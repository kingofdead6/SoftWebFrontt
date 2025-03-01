import CallToAction from '../../components/Home/CallToAction';
import Hero from '../../components/Home/Hero';
import OurServices from '../../components/Home/OurServices';
import Testemonials from '../../components/Home/Testemonials';
import FAQ from '../../components/Home/FAQ';
const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
     <Hero />
     <OurServices />
     <Testemonials />
     <CallToAction />
     <FAQ />
    </div>
  );
};

export default Home;
