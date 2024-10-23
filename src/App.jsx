
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [readTime, setReadTime] = useState(0);
  const handleMarkAsRead = (readingTime) =>{
    const timeInMunite = parseInt(readingTime)
    const newReadingTime = readTime + timeInMunite;
    setReadTime (newReadingTime);
  }
  
  return (
<>
<header className='max-w-[1440px] mx-auto mt-10'>
    <Header></Header>
    </header>

<main className='max-w-[1440px] mx-auto mt-10'>
      <section className='flex mx-auto gap-6 '>
        <Blogs handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
          <Bookmarks readTime ={readTime}></Bookmarks>
      </section>
</main>



</>
   
  )
}



export default App
