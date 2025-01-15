import About from "../components/About"
import Blog from "../components/Blog"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import bannerImg from "../assets/banner.png";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Properties />
      <Blog />
      <div className="max-padd-container py-16 overflow-x-hidden">
        <img src={bannerImg} alt="" />
      </div>
    </main>
  );
}

export default Home
