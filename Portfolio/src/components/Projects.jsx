import React from 'react'
import pdfFile from '../assets/IEEE.pdf';
import ElectricBorder from '../supporters/ElectricBorder';

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <h1 className="section-title">Projects</h1>

      <ElectricBorder color="#7c3aed" speed={1.2} chaos={1.1} thickness={2} className="project-card-shell">
        <div className="project-card aqua">
          <h2><b>Aquaculture and waterbody monitoring systems</b></h2>
          <p>The field of aquaculture is amongst those thathave experienced the greatest rate of growth within theindustry of food production. The process of checking thewater quality in such systems tends to be laborious and isassociated with errors. Our project seeks to provide a meansof monitoring water quality through an innovative systeminvolving ASVs fitted with sensors for tracking keyparameters like dissolved oxygen, redox potential, pH levels,temperature, turbidity, TDS, and conductivity. The ASVsmonitor different positions within the pond using 3Dtechnology and transmit data through IoT. Once the waterquality starts degrading, alarm signals are sent to farmers inreal-time allowing them to take appropriate measures toprotect fish lives.</p>
          <div className="project-links">
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">
              <button>View paper Published</button>
            </a>
            <a href="https://github.com/rajadurai3001/aqua" target="_blank" rel="noopener noreferrer">
              <button>View Code Base</button>
            </a>
          </div>
        </div>
      </ElectricBorder>

      <ElectricBorder color="#22d3ee" speed={1.3} chaos={1.2} thickness={2} className="project-card-shell">
        <div className="project-card disaster">
          <h2>Disaster Relief </h2>
          <p>A disaster relief system designed to provide real-time assistance during natural disasters. The system utilizes IoT devices to monitor environmental conditions and communicate with emergency responders. It also has multiple role based access control- namely citizens, emergency responders, and administrators.</p>
          <div className="project-links">
            <a href="https://github.com/k-mohan-cts/pod3DisasterRelief" target="_blank" rel="noopener noreferrer">
              <button>View Code Base</button>
            </a>
          </div>
        </div>
      </ElectricBorder>

      <ElectricBorder color="#f472b6" speed={1.1} chaos={1.0} thickness={2} className="project-card-shell">
        <div className="project-card port">
          <h2>Portfolio Website</h2>
          <p>A modern portfolio website built with React and CSS. It showcases my projects, skills, and experience in a visually appealing manner.</p>
          <div className="project-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <button>View Code Base</button>
            </a>
          </div>
        </div>
      </ElectricBorder>
    </div>
  )
}

export default Projects
