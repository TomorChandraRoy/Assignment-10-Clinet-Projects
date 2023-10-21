import { Link } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";
import PropTypes from 'prop-types';

const BrandInfo = ({ brandinfo }) => {
    const { _id, name, photo, brand, catogray, rating, price } = brandinfo;
    return (
        <div>

            <div className="card card-compact mx-5  bg-base-100 border shadow-2xl">

                <figure><img className="w-[500px] h-[300px] pt-2" src={photo} alt="brand" /></figure>
                <div className="card-body lg:ml-11">
                    <h2 className="card-title">Name :{name}</h2>
                    <p className="font-medium">Brand Name: {brand}</p>
                    <p className="font-medium">Type: {catogray}</p>
                    <p className="font-medium">Price: {price} $</p>
                    <div className=" items-center mr-44 flex md:mr-[120px] lg:mr-[350px]">
                        <p className=" font-extrabold ">Rating:  {rating} </p>
                        <div className="rating w-20  ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="card-actions justify-end">

                        <PrivateRoute><Link to={`/brandetails/${_id}`} ><button className="btn btn-primary">Details</button></Link></PrivateRoute>

                        <PrivateRoute><Link to={`/updateproduct/${_id}`} ><button className="btn btn-primary">Update Now</button></Link></PrivateRoute>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BrandInfo;
BrandInfo.propTypes = {
    brandinfo: PropTypes.node,

}