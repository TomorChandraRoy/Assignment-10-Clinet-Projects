import Marquee from "react-fast-marquee";
import logo1 from "../image/img1.png";
import logo2 from "../image/img2.png";
import logo3 from "../image/img3.png";
import logo4 from "../image/img4.png";
import logo5 from "../image/img5.png";
import logo6 from "../image/img6.png";

const MarqueePage = () => {
    return (
        <div className="my-10 ">
        <h2 className=" mb-7 font-extrabold  text-black w-fit mx-auto px-2 py-1 rounded text-3xl">Proud Marketing <span className="text-green-500">Partners</span> with</h2>
      <Marquee>
         <div className="flex gap-20  my-10 w-40 h-14">
         <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img className="border rounded" src={logo5} alt="" />
        <img className="border rounded" src={logo6} alt="" />
        
         </div>
      </Marquee>
    </div>
    );
};

export default MarqueePage;