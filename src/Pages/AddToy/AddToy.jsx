

const AddToy = () => {








  return (
    <div>



      <div >

        <div className="card flex-shrink-0 w-full p-10 shadow-2xl bg-base-100">
          <h3 className="text-center">This is Add toy section</h3>
          <form  >
            <div className="card-body  ">
              <div >
                <div className='grid grid-cols-2 gap-5 mt-0'>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Toy Name" name="name" className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" placeholder="Seller Name" name="name" className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" placeholder="Email"
                      name='email' className="input input-bordered" />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Categories</span>

                    </label>
                    <select type="text" name="categories" className="select select-bordered">
                      <option disabled selected>Select Categories</option>
                      <option>Remote Control</option>
                      <option>AutoMatic Control</option>
                      <option>Pussing Cars</option>

                    </select>

                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Pice </span>
                    </label>
                    <input type="number" placeholder="Price"
                      name='price' className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Rating </span>
                    </label>
                    <input type="number" placeholder="Ratings"
                      name='rating' className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Available Quantity </span>
                    </label>
                    <input type="number" placeholder="Quantity"
                      name='quantity' className="input input-bordered" />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input type="text"
                      name='description' placeholder="Description" className="input input-bordered" />
                  </div>


                </div>
                <div className="form-control mt-6">


                  <input className="btn border-none bg-red-600 text-white" type="submit" value="Place Order" />
                </div>






              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default AddToy;