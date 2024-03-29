import React from 'react';
import PopularItem from '../../Home/PopularMenu/PopularItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
      <div>
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item) => (
            <PopularItem key={item._id} item={item}></PopularItem>
          ))}
        </div>
        <div className="text-center">
          <Link to={`/order/${title}`}>
          
            <button className="btn btn-outline border-0 border-b-4">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    );
};

export default MenuCategory;