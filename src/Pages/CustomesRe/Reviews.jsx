import React from 'react';

const Reviews = () => {
  return (
    <div className='mt-24 mb-24'>

      <div>
        <div className='text-center mt-32 mb-16 '>

          <h2 className='text-4xl mt-3 mb-5 font-bold text-orange-600'>FeedBack From Customers</h2>
        </div>

        <div data-aos="fade-left" className='md:grid grid-cols-3 items-center container gap-5 mx-auto'>
          <div className=' card-body'>
            <div className=' mb-3'>
              <img className=' w-12 mx-auto  md:h-20 md:w-20 rounded-full' src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-jc-laurio-1288182.jpg&fm=jpg" alt="" />
              <h2 className='text-2xl font-semibold text-orange-500 text-center mt-5'>Frankline Ezuba</h2>
            </div>
            <p className='text-gray-500 italic'>Functionality-wise, the dummy product left much to be desired. Its purpose was unclear, and it failed to deliver any meaningful results or live up to its advertised features. Whether it was intended for entertainment or practical use, it simply failed to impress in every aspect, leaving me feeling underwhelmed and dissatisfied.</p>
          </div>
          <div className=' card-body'>
            <div className='mb-3'>
              <img className=' w-12 mx-auto md:h-20 md:w-20 rounded-full' src="https://1fid.com/wp-content/uploads/2022/04/boy-dp-image-2-1024x1024.jpg" alt="" />
              <h2 className='text-2xl font-semibold text-orange-500 text-center mt-5'>Ellisa Perry</h2>
            </div>
            <p className='text-gray-500 italic'>Functionality-wise, the dummy product left much to be desired. Its purpose was unclear, and it failed to deliver any meaningful results or live up to its advertised features. Whether it was intended for entertainment or practical use, it simply failed to impress in every aspect, leaving me feeling underwhelmed and dissatisfied.</p>
          </div>
          <div className=' card-body'>
            <div className='mb-3'>
              <img className=' mx-auto w-12 h-16  md:h-20 md:w-20  rounded-full' src="https://assets-prd.ignimgs.com/2022/08/01/cameron-crovetti-1659376185203.jpg" alt="" />
              <h2 className='text-2xl font-semibold text-orange-500 text-center mt-5'>Donal Miu</h2>
            </div>
            <p className='text-gray-500 italic'>
              Functionality-wise, the dummy product left much to be desired. Its purpose was unclear, and it failed to deliver any meaningful results or live up to its advertised features. Whether it was intended for entertainment or practical use, it simply failed to impress in every aspect, leaving me feeling underwhelmed and dissatisfied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;