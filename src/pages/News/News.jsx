import { useEffect, useState } from "react";
import Findus from "../../components/FindUs/Findus";
import Header from "../../components/Header/Header";
import Qzone from "../../components/QZone/Qzone";
import { Link, useParams } from "react-router-dom";
import { BiBookmarkAlt, BiLeftArrow } from "react-icons/bi";
import {
  AiFillEye,
  AiFillStar,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import Rating from "react-rating";
import { BsArrowLeft } from "react-icons/bs";
import Leftnews from "../../components/LeftNew/Leftnews";

const News = () => {
  const id = useParams();
  const [newses, setNews] = useState([]);
  useEffect(() => {
    const loader = async () => {
      await fetch("/news.json")
        .then((res) => res.json())
        .then((data) => setNews(data));
    };
    loader();
  }, []);
  //  console.log(id)

  const displayNews = newses?.find((news) => news._id === id.id);

  const { image_url, details, title } = displayNews
    ? displayNews
    : {};

  return (
    <div className="px-5">
      <Header></Header>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-3 ">
          <div className="px-5 border rounded-lg">
            <div className=" pb-8 pt-7">
              <img src={image_url} alt="" className="w-full"/>
            </div>
            <h3 className="text-xl font-bold text-p pt-4 pb-5">{title}</h3>
            <p className=" text-base text-[#706F6F] pb-5">{details}</p>
            <Link to="/" >
            <button className="btn hover:bg-[#D72050] hover:bg-opacity-70 lg:w-80 mb-8 bg-[#D72050] text-white flex items-center justify-center gap-3"><BsArrowLeft className="text-xl"></BsArrowLeft> All Category News</button>
            </Link>
          </div>
          <div>
          <h3 className="text-xl text-p font-bold mb-5 mt-8 pl-4">Editors Insight</h3>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap px-14 md:px-0">
                {
                    newses.slice(0,3).map(news => <Leftnews
                    key={news._id}
                    news={news}
                    ></Leftnews>)
                }
            </div>
          </div>
        </div>
        <div className="-mt-8">
          <Findus></Findus>
          <Qzone></Qzone>
        </div>
      </div>
    </div>
  );
};

export default News;
