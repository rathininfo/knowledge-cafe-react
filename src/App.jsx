
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
<>
<header className='max-w-[1440px] mx-auto mt-10'>
    <Header></Header>
    </header>

<main className='max-w-[1440px] mx-auto mt-10'>
      <section className='flex items-center mx-auto gap-6 '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </section>
</main>



</>
   
  )
}

export default App
