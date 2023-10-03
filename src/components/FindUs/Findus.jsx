import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Findus = () => {
    return (
        <div className=" mt-6 mb-5">
        <h3 className="text-p text-xl font-semibold mb-6">Find Us On</h3>
        <div className="border rounded-lg">
        <Link className="btn justify-start gap-5 bg-transparent w-full border-none  hover:text-blue-700 hover:bg-white"><BsTwitter className='text-xl text-blue-600'></BsTwitter> Twitter</Link>
        <hr />
        <Link className="btn justify-start gap-5 bg-transparent border-b border-gray-400 w-full border-none  hover:text-blue-700 hover:bg-white mt-2"><BsFacebook className='text-xl text-blue-700'></BsFacebook>Facebook</Link>
        <hr />
        <Link className="btn justify-start gap-5 bg-transparent border-b border-gray-400 w-full border-none  hover:text-blue-700 hover:bg-white mt-2"><BsInstagram className='text-xl text-[#D82D7E] '></BsInstagram>Instagram</Link>
        </div>
    </div>
    );
};

export default Findus;