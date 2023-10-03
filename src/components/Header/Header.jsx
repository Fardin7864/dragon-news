import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import moment from "moment/moment";
const Header = () => {
    return (
        <div className=" mt-12 mb-7 flex flex-col items-center">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <p className="text-lg font-normal leading-7 text-[#706F6F] mt-5 mb-2">Journalism Without Fear or Favour</p>
            <div>
           <p className="text-lg font-medium leading-7 text-[#706F6F]"><span className="text-[#403F3F]">{moment().format('dddd,')}</span>{ moment().format(' MMMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;