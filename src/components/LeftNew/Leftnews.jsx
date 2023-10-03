import Rating from "react-rating";
import { Link } from "react-router-dom";
import {AiOutlineStar, AiFillStar, AiFillEye, AiOutlineShareAlt} from "react-icons/ai"
import {BiBookmarkAlt} from "react-icons/bi"

const Leftnews = ({news}) => {
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
        <div className="border rounded-lg mt-8">
        <div className="px-5">
          <div className=" pb-8 mt-3">
            <img src={image_url} alt="" />
          </div>
          <p className=" text-base text-[#706F6F] border-b pb-5">
            {details.slice(0, 100)} ...
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

export default Leftnews;