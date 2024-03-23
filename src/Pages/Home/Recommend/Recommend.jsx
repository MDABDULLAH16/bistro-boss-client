import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Recommend = () => {
    const [menu,setMenu]= useState([])

    useEffect(()=>{
        fetch('menu.json').then(res=> res.json()).then(data =>{
            const popularItem = data.filter( item=> item.category === 'popular')
          
            setMenu(popularItem.slice(0,3))
        })
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={'Should Try'}
            heading={'Chef recommends'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-3 space-y-2 space-x-2'>
                {menu.map(item => <div key={item._id}>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.recipe}</p>
    <div className="card-actions justify-center ">
      <button className="btn btn-outline w-2/4 bg-slate-100 border-0 border-b-2">Buy Now</button>
    </div>
  </div>
</div>
                </div>)}
            </div>
        </section>
    );
};

export default Recommend;