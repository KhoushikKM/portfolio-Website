import React from 'react'
import Home from './Home'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'
import ColorBends from '../supporters/ColourBends'
import DotField from '../supporters/DotField'

const App = () => {
  return (
    <div className="app-shell" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <ColorBends
          color="#0d307d"
          speed={0.2}
          frequency={1.0}
          noise={0}
          bandWidth={0.25}
          rotation={90}
          fadeTop={0.75}
          iterations={1}
          intensity={1}
          transparent={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        />

        <DotField
          dotRadius={0.5}
          dotSpacing={18}
          cursorRadius={100}
          cursorForce={0.10}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={5}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(168, 85, 247, 0.35)"
          gradientTo="rgba(180, 151, 207, 0.25)"
          glowColor="#120F17"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.7
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar></Navbar>
        <Home></Home>
        <Education></Education>
        <Skills />
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
