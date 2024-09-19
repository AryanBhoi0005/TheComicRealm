import React from 'react'

function Cards({item}) {
  console.log(item);
  return (
    <div className='mt-5 mb-5'>
      <div className="card hover:bg-red-600 duration-700 text-white w-96 shadow-2xl hover:scale-105">
  <figure>
    <img
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black font-bold">
      {item.name}
      <div className="badge bg-[#FFD700] text-black">{item.category}</div>
    </h2>
    <p className=' text-black font-bold'>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="  text-black font-bold">{item.price}</div>
      <div className="badge text-black font-semibold hover:text-white hover:bg-black hover:font-bold duration-500">
       Buy Now
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards

