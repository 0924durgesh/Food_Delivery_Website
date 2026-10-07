import React from 'react'
import Nav from '../component/Nav'

//in timeline:1:00
//card:
import Categories from '../Category.jsx'
import Card from '../Card.jsx'
function Home() {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
  <Nav/>
  <br></br>
  <div className='flex flex-wrap justify-center items-center gap-4 w-[100%]'>
  {Categories.map((item)=>{
    return <div className='w-[140px] h-[140px] bg-white  flex-col flex items-start gap-5 p-5 justify-center text-[20px] 
    font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200 '>
      {item.image}
      {item.name}
    
    </div>

  })}
  </div>
  <br/>
  
  <Card>Card</Card>
  


</div>
    
  )
}

export default Home