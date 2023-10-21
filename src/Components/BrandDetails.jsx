import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BrandDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    const handleAddProduct = ()=>{
        fetch('https://technology-and-electronics-server-sigma.vercel.app/addproducts',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(detailsData)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
            }
        })
    }

    return (
        <div>
            <div>

                <div
                    className=" flex md:ml-[65px] md:w-[640px] border   my-10 flex-col lg:flex-row lg:w-full lg:-ml-[5px]   rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <div
                        className="relative mx-5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white  bg-clip-border text-gray-700">
                        <img src={detailsData.photo} alt="image" className="h-fit lg:w-[400px] object-cover" />
                    </div>

                    <div className="p-6">
                        <h1 className="text-2xl font-bold">{detailsData.brand}</h1>

                        <p className=" mt-40 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {detailsData.description}
                        </p>
                        <Link to=''>
                            <button onClick={handleAddProduct}
                                className="btn btn-primary mt-10">ADD to Cart
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandDetails;
