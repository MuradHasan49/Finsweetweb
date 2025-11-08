import React from "react";
import Blogcard from "./Blogcard";
import BlogImg from "../../assets/Blog/arabic-businessman-standing-on-street-and-using-laptop-9623794.png";
import BlogImg2 from "../../assets/Blog/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png";
import BlogImg3 from "../../assets/Blog/apple-monitors-326518.png";

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center md:justify-start">
          <h1 className="font-semibold text-[48px] leading-16  text-[#282938] mb-16">
            Blog
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center md:flex md:flex-row md:gap-8">
          <Blogcard
            src={BlogImg}
            Date={"19 Jan 2025"}
            Head={
              " How one Webflow user grew his single person consultancy from $0-100K in 14 months"
            }
            p={
              "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            }
          />
          <Blogcard
            src={BlogImg2}
            Date={"19 Jan 2025"}
            Head={
              " How one Webflow user grew his single person consultancy from $0-100K in 14 months"
            }
            p={
              "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            }
          />
          <Blogcard
            src={BlogImg3}
            Date={"19 Jan 2025"}
            Head={
              " How one Webflow user grew his single person consultancy from $0-100K in 14 months"
            }
            p={
              "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
