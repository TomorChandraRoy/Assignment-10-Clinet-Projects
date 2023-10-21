
import { useLoaderData } from 'react-router-dom';
import MyCartDetails from './MyCartDetails';
import { useState } from 'react';


const MyCart = () => {

    const allAddProducts = useLoaderData();
    
    const [products,setProducts] = useState(allAddProducts);

 

    return (
        <>
       
        <div className='grid mx-5 mt-20 mb-10 lg:mx-0 lg:grid-cols-2 md:grid-cols-2 md:mx-5 gap-5'>
            
            {
                products.map(addData => <MyCartDetails 
                    addData1={addData}
                    products={products}
                    setProducts={setProducts}
                    key={addData._id}>

                    </MyCartDetails>
 
                )
            }

        </div>
        </>
    );
};

export default MyCart;