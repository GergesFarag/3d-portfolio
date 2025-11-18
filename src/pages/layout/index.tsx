import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from '../../components';

export const RootLayout = () => {
  return (
    <div className="relative z-0 bg-primary" id="home">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0 pb-20">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};
