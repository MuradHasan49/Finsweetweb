import "./App.css";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import FeaturesBox from "./components/Features/FeaturesBox";
import Feedback from "./components/Feedback/Feedback";
import HowWork from "./components/How_we_work/HowWork";
import Questions from "./components/questions/Questions";
import Viewprojects from "./components/Viewourprojects/Viewprojects";
import Dbanner from "./components/DownBanner/Dbanner";

function App() {
  return (
    <>
      <Banner />
      <HowWork />
      <Viewprojects />
      <FeaturesBox />
      <Feedback />
      <Questions />
      <Dbanner />
      <Blog />
    </>
  );
}

export default App;
