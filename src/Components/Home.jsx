
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import GetDiscount from "./GetDiscount";
import MarqueePage from "./MarqueePage";
import BestProducts from "./BestProducts";
const Home = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <Banner></Banner>
            <MarqueePage></MarqueePage>
            <h2 className="text-3xl font-extrabold text-center my-4">Brand name</h2>
            <div className="grid mx-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:mx-0 lg:gap-5">
                {

                    data.map(singleData => <BestProducts singleData1={singleData} key={singleData.id}></BestProducts>
                    )

                }
            </div>
            <GetDiscount></GetDiscount>
            
        </div>
    );
};

export default Home;