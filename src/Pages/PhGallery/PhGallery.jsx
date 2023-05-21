
const PhGallery = () => {



  return (
    <div className=" md:mb-44 ">
      <h2 className='text-5xl text-center font-bold text-slate-500 md:mt-44 md:mb-10 '>Gallery</h2>
      <section className="p-5  bg-slate-100  
      dark:text-gray-50">

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img data-aos="fade-left" src="https://images.augustman.com/wp-content/uploads/sites/6/2023/02/09095603/Lamborghini_one-offs.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
          <img data-aos="fade-left" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://ts2.mm.bing.net/th?q=Hot%20Wheels%20Forza%20Horizon%204%20Lamborghini%20Veneno%2056,%20Gray" />
          <img data-aos="fade-left" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://m.media-amazon.com/images/I/614EUV+CusL._AC_UF894,1000_QL80_.jpg" />
          <img data-aos="fade-left" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://p1.liveauctioneers.com/1395/272247/142739612_1_x.jpg?height=600&quality=95&version=1671112074&width=600" />
          <img data-aos="fade-left" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://qph.cf2.quoracdn.net/main-qimg-0a9f438503e21ccba90001f0f6c931ba-lq" />

        </div>
      </section>
    </div>
  );
};

export default PhGallery;