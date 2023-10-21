import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BestProducts = ({ singleData1 }) => {
    const {_id, photo, name } = singleData1;
    console.log(_id);

 
   
    return (
        <>
        <div className="my-5 ">
            <div   className="card card-compact  bg-base-300 shadow-xl">
                <figure><img className="w-[360px] h-[300px] pt-2" src={photo} alt="brand" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">

                        <Link to={`/brand/${_id}`}><button  className="btn btn-primary">Show Now</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    
    );
};

export default BestProducts;
BestProducts.propTypes ={
    singleData1: PropTypes.node,

}