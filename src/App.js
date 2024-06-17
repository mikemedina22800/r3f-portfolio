import { createContext, useState } from 'react'
import Models from './components/Models'
import About from './components/About'
import Certs from './components/Certs'
import Works from './components/Works'
import Refs from './components/Refs'
import Contacts from './components/Contacts'
import Nav from './components/Nav'
import { Canvas } from '@react-three/fiber'
import Arrow from './components/Arrow'

export const SectionContext = createContext()

const App = () => {
  const [section, setSection] = useState(0)
  const sections = [<About/>, <Certs/>, <Works/>, <Refs/>, <Contacts/>]
  
  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <SectionContext.Provider value={section}>
      <Nav setSection={setSection}/>
      <div className='hero'>
        <div className='arrow'>
          <Canvas>
            <Arrow scroll={scrollDown} rotation={0}/>
          </Canvas>
        </div>
      </div>
      <Models/>
      <div className='section-container'>
        <div className='arrow'>
          <Canvas>
            <Arrow scroll={scrollUp} rotation={Math.PI}/>
          </Canvas>
        </div>
        {sections[section]}
      </div>
    </SectionContext.Provider>
  )
}

export default App