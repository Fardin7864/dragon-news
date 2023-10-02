import Header from "../../components/Header/Header";
import Marquee from "react-fast-marquee";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center bg-[#F3F3F3] py-4 pl-4 max-w-screen-lg">
        <button className="w-28 h-12 bg-[#D72050] text-[#FFF] text-xl font-medium leading-7">
          Latest
        </button>
        <Marquee    >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      </div>
    </div>
  );
};

export default Home;
