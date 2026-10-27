import React from 'react'

export default function RecipeCard({image ,name}) {
  
    return (
        <div className='shadow'>
            <img src={image} alt="" />
            <div className='flex p-2 justify-between'>
                <h4>{name}</h4>
                <button>Like</button>
            </div>
        </div>
    )
}
