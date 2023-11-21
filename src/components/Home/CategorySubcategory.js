import React from 'react';
import CategoryImages from '../API/Category.json'

const CategorySubcategory = () => {
  const categories = CategoryImages.Category;

  return (
    <>
    <div className='bg-none m-3 '>
      
      <div className="grid grid-cols-9 ">

        {categories.map((category) => (
          <div key={category.id} className="max-w-xs mx-auto ">
            <div className='mx-auto'>
            <img src={category.url} alt={category.title} className="max-w-feturedImage h-auto  mx-auto hover:scale-110 transition duration-500 cursor-pointer object-cover" />
            <h3 className=' text-sm mx-auto font font-semibold'>{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
      );
};
export default CategorySubcategory;
