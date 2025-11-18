import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AboutUs from "./components/Pages/AboutUs";
import BlogPage from "./components/Pages/BlogPage";
import Connect from "./components/Pages/ContactUs.jsx"
import Features from "./components/Pages/Features";
import Pricing from "./components/Pages/Pricing";
import PrivacyAndPolicy from "./components/Pages/PrivacyAndPolicy";
import ReadBlog from "./components/Pages/ReadBlog";
import Work from "./components/Pages/Work";

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
      { path: "Connect", Component: Connect },
      { path: "Work", Component: Work },
    ]
  },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>,
)
