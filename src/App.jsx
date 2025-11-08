import './App.css'
import Banner from './components/Banner/Banner'
import Dbanner from './components/DownBanner/Dbanner'
import FeaturesBox from './components/Features/FeaturesBox'
import Feedback from './components/Feedback/Feedback'
import HowWork from './components/How_we_work/HowWork'
import Nav from './components/Navbar/Navbar'

import Questions from './components/questions/Questions'
import Viewprojects from './components/Viewourprojects/Viewprojects'

function App() {


  return (
    <>
    <Nav/>
    <Banner/>
    <HowWork/>
    <Viewprojects/>
    <FeaturesBox/>
    <Feedback/>
    <Questions/>
    <Dbanner/>
    </>
  )
}

export default App
