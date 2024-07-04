import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <div className={`shopcategory-banner ${props.banner}`}>
        {props.banner}
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 24 products
        </p>
        <div className="shopcategory-sort">
          Sort by <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.newPrice} old_price={item.oldPrice} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More...
      </div>
    </div>
  );
};

export default ShopCategory;
