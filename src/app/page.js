// import Image from 'next/image'
import Navbar from '../../components/Navbar'
import  Main  from '../../components/Main'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import MainLayout from '../../components/MainLayout';
import Archive from '../../components/Archive'

export default function Home() {
  return (
    <main>
      <MainLayout>
      <div>
        {/* <Navbar /> */}
        <Main />
        <About />
        <Skills />
        <Projects />
        <Archive />
        <Contact />
       </div>
       </MainLayout>
    </main>
  )
}
