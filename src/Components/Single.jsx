import PropTypes from 'prop-types';
import { Link,  } from 'react-router-dom';


const Single = ({ singleData1 }) => {
    

    const { name, brand, price, catogray, rating, photo } = singleData1;

    return (
        <div className=''>
            <h3>{singleData1.length}</h3>
            <div className="card card-side bg-purple-200 shadow-xl">
                <figure><img src={photo} alt="photo" /></figure>
                <div className=" flex justify-between items-center w-full px-10">

                    <div>
                        <p>Name : {name}</p>
                        <p>Brand Name : {brand}</p>
                        <p>Type: {catogray}</p>
                        <p> price: {price}$</p>
                        <p>Rating: {rating}
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div> 
                        </p>

                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-5">

                        <Link ><button className="btn">Update</button></Link>
                    
                        {/* hoyni */}
                        <Link ><button  className="btn">Details</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Single;
Single.propTypes = {
    singleData1: PropTypes.node
}