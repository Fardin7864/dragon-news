import Header from "../../components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../components/Navbar/Navbar";
import Category from "../../components/Category/Category";
import RightNav from "../../components/RightNav/RightNav";
import adimg from "../../assets/bg.png"


const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center bg-[#F3F3F3] p-4">
        <button className="w-28 h-12 bg-[#D72050] text-[#FFF] text-xl font-medium leading-7">
          Latest
        </button>
        <Marquee pauseOnHover={true} speed={100} className=" text-p text-lg font-semibold">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      </div>
      <div>
        <Navbar></Navbar>
      </div>
      {/* main body */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div>
            <Category></Category>
        </div>
        <div className="border-2 col-span-2">
            middle
        </div>
        <div className="border-2">
            <RightNav></RightNav>
            <div className="mt-5 w-full">
              <div>
                <img src={adimg} alt=""  className="w-full"/>
              </div>
              <div className="relative -top-96 text-center space-y-5 px-7">
                <h2 className="text-3xl font-bold text-white">Create an <br /> Amazing <br /> Newspaper</h2>
                <p className="text-white text-base">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className=" h-12 bg-[#D72050] text-[#FFF] text-xl font-medium leading-7  px-3">
                  Learn More
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
