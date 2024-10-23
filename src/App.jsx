
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleMarkAsRead = (readingTime) =>{
    const timeInMunite = parseInt(readingTime)
    const newReadingTime = readTime + timeInMunite;
    setReadTime (newReadingTime);
  }

  const handleBookMarks = bookmarks=>{
    const newBookMarks = [...bookMarks ,bookmarks]
    setBookMarks(newBookMarks)
  }
  
  return (
<>
<header className='max-w-[1440px] mx-auto mt-10'>
    <Header></Header>
    </header>

<main className='max-w-[1440px] mx-auto mt-10'>
      <section className='flex mx-auto gap-6 '>
        <Blogs handleMarkAsRead = {handleMarkAsRead}
        handleBookMarks={handleBookMarks}
        ></Blogs>
          <Bookmarks readTime ={readTime} bookMarks={bookMarks}></Bookmarks>
      </section>
</main>



</>
   
  )
}



export default App
