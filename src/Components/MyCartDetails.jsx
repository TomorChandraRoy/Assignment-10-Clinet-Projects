import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const MyCartDetails = ({ addData1,setProducts,products}) => {

    const {_id, photo, name, price, catogray, rating } = addData1;

    const handleDelete =_id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://technology-and-electronics-server-sigma.vercel.app/cardproducts/${_id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your products has been deleted.',
                        'success'
                    )
                    const remaining = products.filter(oneData => oneData._id  !== _id);
                    setProducts(remaining);
                    }
                })
                console.log("delete comfamp");    
                    
            }
        })
    }
    
    return (
        <div>
            <div className="my-5">
                <div className="card card-compact  bg-base-100 border shadow-xl">
                    <figure><img className="w-[360px] h-[300px] pt-2" src={photo} alt="brand" /></figure>
                    <div className="card-body lg:ml-11">
                        <h2 className="card-title font-extrabold">{name}</h2>
                        <p className="text-lg font-medium">{price}</p>
                        <p className="text-lg font-medium">{catogray}</p>
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

                        <p className="card-actions justify-end">

                            <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartDetails;
MyCartDetails.propTypes ={
    addData1: PropTypes.node,
    setProducts: PropTypes.node,
    products: PropTypes.node,

}
