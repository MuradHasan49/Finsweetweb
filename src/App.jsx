import "./App.css";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Dbanner from "./components/DownBanner/Dbanner";
import FeaturesBox from "./components/Features/FeaturesBox";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import FooterCopy from "./components/Footer/FooterCopy";
import HowWork from "./components/How_we_work/HowWork";
import Nav from "./components/Navbar/Navbar";
import AboutUs from "./components/Pages/AboutUs";
import BlogPage from "./components/Pages/BlogPage";
import ContactUs from "./components/Pages/ContactUs";
import Pricing from "./components/Pages/Pricing";
import PrivacyAndPolicy from "./components/Pages/PrivacyAndPolicy";
import ReadBlog from "./components/Pages/ReadBlog";
import Questions from "./components/questions/Questions";
import Viewprojects from "./components/Viewourprojects/Viewprojects";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <HowWork />
      <Viewprojects />
      <FeaturesBox />
      <Feedback />
      <Questions />
      <Dbanner />
      <Blog />
      <Footer />
      <FooterCopy />

      <AboutUs />
      <Pricing/>
      <ContactUs/>
      <PrivacyAndPolicy/>
      <BlogPage/>
      <ReadBlog/>
    </>
  );
}

export default App;
