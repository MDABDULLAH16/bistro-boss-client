import React from 'react';

const PopularItem = ({item}) => {
    const {name,recipe,price,image}= item;
    return (
        <div className='flex gap-4 my-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} width={'120px'} src={image} alt="" />
            <div className='space-y-1'>
                <h2 className='uppercase font-bold'>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-bold'>${price}</p>
        </div>
    );
};

export default PopularItem;