
import { useEffect, useState } from "react";

import BrandInfo from "./BrandInfo";
import { useLoaderData } from "react-router-dom";
import SliderImage from "./SliderImage";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const BrandProducts = () => {
    const [products, setCurrentProduct] = useState([])
    const [sliderItem, setSliderItem] = useState([])
    // console.log(sliderItem);
    const brand = useLoaderData();
    // console.log(brand);
   

    useEffect(() => {
        fetch(`https://technology-and-electronics-server-sigma.vercel.app/brandproducts`)
            .then(res => res.json())
            .then(data => setCurrentProduct(data))

        fetch(`https://technology-and-electronics-server-sigma.vercel.app/sliderproducts`)
            .then(res => res.json())
            .then(data => setSliderItem(data))
    }, [])

    const currentBrand = products.filter(product => brand.name === product.brand)
    const currentSlider = sliderItem.filter(item => item.brand === brand.name)
    // console.log(currentSlider.length);



    {/* <div key={idx}>{product.name}:{product.price} */ }
    return (
        <div>
        {
            currentBrand.length > 0 ? 
            <div className="my-20">
            <h2 className="text-3xl mb-5 font-extrabold text-center"> Advertisement  </h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    currentSlider.map((slide, idx) => <SwiperSlide key={idx}><SliderImage slide={slide}></SliderImage></SwiperSlide>)
                }
            </Swiper>

            <h2 className="text-center font-extrabold mb-5 mt-20 text-3xl "> Products</h2>
            <div className="grid md:grid-cols-2 gap-5">


                {
                    currentBrand.map((brandinfo) => <BrandInfo brandinfo={brandinfo} key={brandinfo._id} >

                    </BrandInfo>)
                }

            </div>




        </div>
        :
        <p className="text-center text-3xl p-10">No Phones Available</p>

        }
        </div>

    );
};

export default BrandProducts;

