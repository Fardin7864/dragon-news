import qzon1 from "../../assets/qZone1.png"
import qzon2 from "../../assets/qZone2.png"
import qzon3 from "../../assets/qZone3.png"

const Qzone = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <h3 className="text-p text-xl font-semibold mb-6 pt-4 pl-4">Q-Zone</h3> 
           <div className="flex flex-col items-center gap-4">
           <div>
                <img src={qzon1} alt="" />
            </div>       
            <div>
                <img src={qzon2} alt="" />
            </div>       
            <div>
                <img src={qzon3} alt="" />
            </div> 
            </div>      
        </div>
    );
};

export default Qzone;