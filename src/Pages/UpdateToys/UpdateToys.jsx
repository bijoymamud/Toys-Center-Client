import { useParams } from "react-router-dom";

const UpdateToys = () => {

  // const toysData = useLoaderData();
  // const { toyName } = toysData;
  const toysData = useParams();
  // const { _id } = toysData;


  console.log(toysData.id);

  const updateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateInfo = { price, quantity, description };

    fetch(`http://localhost:5000/toyinfo/${toysData.id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })

  }



  return (

    <div className="md:mt-24 md:mb-96">
      <h2 className="text-4xl text-center md:mb-10 font-bold text-slate-600">Update Your Product</h2>
      <form onSubmit={updateHandler} className="text-center">
        <input type="number" placeholder="Price" name="price" className="input w-full max-w-xs bg-slate-200 mr-5" />
        <input type="number" name="quantity" placeholder="Quantity" className="input w-full max-w-xs bg-slate-200" /> <br />
        <input type="text" name="description" placeholder="Details" className="input w-full max-w-xs bg-slate-200 mt-5" /> <br />
        <input className="btn border-none h-full mt-5  text-white" type="submit" value="Update Price" />
      </form>
    </div>
  );
};

export default UpdateToys;