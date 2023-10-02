import Header from "../../components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center bg-[#F3F3F3] p-4">
        <button className="w-28 h-12 bg-[#D72050] text-[#FFF] text-xl font-medium leading-7">
          Latest
        </button>
        <Marquee pauseOnHover={true} className=" text-p text-lg font-semibold">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      </div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="border-2">
            left side bar
        </div>
        <div className="border-2 col-span-2">
            middle
        </div>
        <div className="border-2">
            right
        </div>
      </div>
    </div>
  );
};

export default Home;
