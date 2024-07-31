
import { useEffect, useState } from 'react'
import { restrautList } from '../config'
import { Card } from '../Home/Card'

const Home = ({search}) => {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
     let filteredData =  restrautList.filter((item) => {
          return item?.data?.name?.toLowerCase()?.includes(search?.toLowerCase())
      })      
      setFiltered(filteredData);
  }, [search])
  return (
   <div className='flex flex-wrap justify-center mt-8 gap-5'>
    {filtered.map((item) => (
     <Card key={item.data.id} {...item.data} />
      ))}
   </div>
  )
}






export default Home