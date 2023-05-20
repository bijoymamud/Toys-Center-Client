import React from 'react';

const ConnectUs = () => {
  return (
    <div className='mb-24'>

      <div className='md:flex justify-center items-center mx-auto'>
        <div className='w-1/2' >
          <img className='w-3/4' src="https://sandbox.ui-lib.com/img/illustrations/3d3.png" alt="" />
        </div>

        <div className='w-1/2' >
          <h2 className=' font-bold mb-2 text-slate-600'>LET'S TALK</h2>
          <h2 className='text-5xl font-bold text-slate-600 mb-10' >Let's make something great together. We are trusted by over 5000+ clients.</h2>
          <p className='w-3/4 mb-5 font-semibold text-slate-600 '>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

          <button className='btn btn-wide'>Join Us</button>
        </div>
      </div>

    </div>
  );
};

export default ConnectUs;