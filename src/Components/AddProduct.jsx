import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddUpdate = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const catogray = form.catogray.value;
        const rating = form.rating.value;
        const photo = form.url.value;

        const newBrand = { name, brand, price, description, catogray, rating, photo }
        console.log(newBrand);
        fetch('http://localhost:5000/brandproducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="bg-[#e3dcc6] p-20 my-5">
            <h2 className="text-3xl font-extrabold text-center my-5">Add a Brand Product</h2>

            <form onSubmit={handleAddUpdate}>
                {/* form name and quantity row  */}
                <div className="md:flex gap-5 mb-5 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="brand"
                                placeholder="Brand Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form supplier and Taste row  */}
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="price"
                                placeholder="Price "
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="description"
                                placeholder="Short description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form catogray  and details row  */}
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="catogray"
                                placeholder="Enter catogray name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form  photo url  row  */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Photo url</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="url"
                                name="url"
                                placeholder="Enter photo url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Products" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddProduct;


