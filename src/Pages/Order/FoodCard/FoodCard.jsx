import React from 'react';

const FoodCard = ({items}) => {
    return (

        <div className="grid md:grid-cols-3 text-center gap-3 space-y-2 space-x-2">
          {items.map((item) => (
            <div key={item._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                          <img src={item.image} alt="Shoes" />
                </figure>
                          <p className='absolute right-0 bg-slate-800 text-white mt-4 mr-6 p-1 '>${item.price}</p>
                <div className="card-body ">
                  <h2 className="card-title  mx-auto">{item.name}</h2>
                  <p>{item.recipe}</p>
                  <div className="card-actions justify-center ">
                    <button className="btn btn-outline w-2/4 bg-slate-100 border-0 border-b-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    );
};

export default FoodCard;