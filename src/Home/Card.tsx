import React from 'react'

export const Card = ({cloudinaryImageId, cuisines, name, lastMileTravel}) => {
  return (
    <div className="flex items-center justify-center h-full">
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img className="rounded-t-lg w-full h-48 object-cover mb-4" src="https://picsum.photos/200/300/?blur" alt="Restaurant Name" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{name}</h5>
        <div className="flex items-center mb-4">
            <svg className="w-5 h-5 text-yellow-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-3.5 2 1-4.5L2 8h4.5L10 3l3.5 5H18l-5.5 4.5L10 15z"></path></svg>
            <span className="text-gray-700">4.5</span>
        </div>
        <p className="mb-3 font-normal text-gray-500">Distance: {lastMileTravel}</p>
        <p className="mb-3 font-normal text-gray-500">Cuisines: {cuisines.join(",")}</p>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            View Details
            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>
        </a>
    </div>
</div>
  )
}