import Rating from "react-rating";
import { Link } from "react-router-dom";
import {AiOutlineStar, AiFillStar, AiFillEye, AiOutlineShareAlt} from "react-icons/ai"
import {BiBookmarkAlt} from "react-icons/bi"

const News = ({ news }) => {
  const {
    _id,
    author,
    thumbnail_url,
    image_url,
    details,
    title,
    total_view,
    rating,
  } = news;
  const datePublish = author?.published_date ? author.published_date.split(" ") : ""
  return (
    <div className="border rounded-lg mt-6">
      <div className="h-20 bg-[#F3F3F3] flex items-center rounded-t-lg">
       <div className="flex gap-3 justify-start w-1/2 pl-3">
       <div>
            <img src={author.img} alt=""  className="w-10 h-10 rounded-full"/>
        </div>
        <div>
            <h5 className="text-black font-semibold text-lg">{author.name}</h5>
            <p>{datePublish[0]}</p>
            
        </div>
       </div>
        <div className="flex gap-4 justify-end w-1/2 pr-3 text-xl">
            <p><BiBookmarkAlt></BiBookmarkAlt></p>
            <p><AiOutlineShareAlt></AiOutlineShareAlt></p>
        </div>
        <div>

        </div>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold text-p pt-4 pb-5">{title}</h3>
        <div className=" pb-8">
          <img src={image_url} alt="" />
        </div>
        <p className=" text-base text-[#706F6F] border-b pb-5">
          {details.slice(0, 300)} ... <br />{" "}
          <Link
            to={`/news/${_id}`}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C47] to-[#F75B5F]"
          >
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center h-14">
          <p className="flex items-center justify-center gap-3">
            <Rating
            initialRating={rating.number}
              emptySymbol={<AiOutlineStar className="text-[#FF8C47] text-lg"></AiOutlineStar>}
              fullSymbol={<AiFillStar className="text-[#FF8C47] text-lg"></AiFillStar>}
            /> {rating.number}
          </p>
          <p className="flex items-center gap-3"><AiFillEye></AiFillEye> {total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
