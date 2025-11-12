import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
import Features from "./components/Pages/Features";
import Pricing from "./components/Pages/Pricing";
import PrivacyAndPolicy from "./components/Pages/PrivacyAndPolicy";
import ReadBlog from "./components/Pages/ReadBlog";
import Work from "./components/Pages/Work";
import Questions from "./components/questions/Questions";
import Viewprojects from "./components/Viewourprojects/Viewprojects";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: "AboutUs", Component: AboutUs },
      { path: "Features", Component: Features },
      { path: "Pricing", Component: Pricing },
      { path: "FAQ", Component: PrivacyAndPolicy },
      { path: "Pricing", Component: Pricing },
      { path: "Blog", Component: BlogPage },
      { path: "ReadMore", Component: ReadBlog },
      { path: "ContactUs", Component: ContactUs },
    ]
  },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>,
)
