import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIBLES</h1>
        <hr />
        <div className='new-collections-item'>
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.newPrice} old_price={item.oldPrice} />
            })}
        </div>
    </div>
  )
}

export default NewCollections