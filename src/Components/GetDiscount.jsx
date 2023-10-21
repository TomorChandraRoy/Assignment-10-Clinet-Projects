
const GetDiscount = () => {
    return (

        <section className="overflow-hidden rounded-lg shadow-2xl h-fit my-10 mx-5 lg:mx-0 md:grid md:grid-cols-3">
            <img
                alt="Trainer"
                src="https://i.ibb.co/7bD0NZ1/s89-pom-0069-01.jpg"
                className="h-full w-full  object-cover border md:h-full md:w-full"
            />

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest">
                    Run with the pack
                </p>

                <h2 className="mt-6 font-black uppercase">
                    <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                        Get 20% off
                    </span>

                    <span className="mt-2 block text-sm">On your next order over $50</span>
                </h2>

                <a
                    className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                    href=""
                >
                    Get Discount
                </a>

                <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                    Offer valid until 24th March, 2021 *
                </p>
            </div>
        </section>
    );
};

export default GetDiscount;



