import React, { useRef, useLayoutEffect, useState } from 'react'
import ElectricBorder from '../supporters/ElectricBorder';

const Education = () => {
  const cardsRef = useRef([]);
  const [cardHeight, setCardHeight] = useState(null);

  useLayoutEffect(() => {
    let ro;
    const measure = () => {
      // allow natural height measurement first
      cardsRef.current.forEach(c => { if (c) c.style.height = 'auto'; });

      let max = 0;
      cardsRef.current.forEach(c => {
        if (!c) return;
        const rect = c.getBoundingClientRect();
        max = Math.max(max, Math.ceil(rect.height));
      });

      if (max && max !== cardHeight) setCardHeight(max);
    };

    // initial measure
    measure();

    // re-measure after images load
    const imgs = Array.from(document.querySelectorAll('#Education img'));
    const imgHandlers = imgs.map(img => {
      const h = () => requestAnimationFrame(measure);
      img.addEventListener('load', h);
      // some images may already be loaded
      if (img.complete) h();
      return { img, h };
    });

    // observe card size changes (handles fonts/images/content)
    try {
      ro = new ResizeObserver(() => requestAnimationFrame(measure));
      cardsRef.current.forEach(c => { if (c) ro.observe(c); });
    } catch (e) {
      // ResizeObserver may not be available in some environments — fallback is window resize
    }

    const onWin = () => requestAnimationFrame(measure);
    window.addEventListener('resize', onWin);

    // small timeout re-measure for late layout changes
    const t = setTimeout(measure, 250);

    return () => {
      window.removeEventListener('resize', onWin);
      imgHandlers.forEach(({ img, h }) => img.removeEventListener('load', h));
      if (ro) {
        cardsRef.current.forEach(c => { if (c) ro.unobserve(c); });
        ro.disconnect();
      }
      clearTimeout(t);
    };
  }, [cardHeight]);

  return (
    <div id="Education">
      
    <h1 style={{ textAlign: 'center', marginBottom: '20px', size: '2rem' }}>Education History</h1>
      <div id="education-container" className="education-content">
        <ElectricBorder
          key={`eb-xstd-${cardHeight}`}
          color="#a56210"
          speed={1.2}
          chaos={1.1}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div
            id="xstd"
            className="education-card"
            ref={el => (cardsRef.current[0] = el)}
            style={cardHeight ? { height: `${cardHeight}px` } : undefined}
          >
            <div id="xstd-header" className="education-header">
              <h2>10th Standard</h2>
            </div>
            <div className="education-inner">
              <div id="xstd-img">
                <img src="https://www.vidyamandirestancia.com/files/school.jpg" alt="10th Standard" />
              </div>
              <div id="xstd-details" className="education-details">
                <p><strong>School:</strong> Vidya Mandir @ Estancia</p>
                <p><strong>Board:</strong> CBSE</p>
                <p><strong>Stream: </strong> PCBMT</p>
                <p><strong>Year of Completion:</strong> 2020</p>
                <p><strong>Percentage:</strong> 79%</p>
                <p><strong>Achievements:</strong> Football player @ Zonal level</p>
              </div>
            </div>
          </div>
        </ElectricBorder>

        <ElectricBorder
          key={`eb-xii-${cardHeight}`}
          color="#1eb935"
          speed={1.2}
          chaos={1.1}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div
            id="xiistd"
            className="education-card"
            ref={el => (cardsRef.current[1] = el)}
            style={cardHeight ? { height: `${cardHeight}px` } : undefined}
          >
            <div id="xiistd-header" className="education-header">
              <h2>12th Standard</h2>
            </div>
            <div className="education-inner">
              <div id='xiistd-img'>
                <img src="https://imgs.search.brave.com/Sk1SoDzIpxj6xWTtVbYQvS72hxDYZRZwT2wZtKiDQ_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qcmtn/bG9iYWxzY2hvb2wu/Y29tL2FkbWluL3Vw/bG9hZHMvV2VkMjRK/dWwxNDExMzEtMTUu/anBn" alt="12th Standard" />
              </div>
              <div id="xiistd-details" className="education-details">
                <p><strong>School:</strong> JRK MatriculationS school</p>
                <p><strong>Board:</strong> Tamil Nadu Board</p>
                <p><strong>Year of Completion:</strong> 2022</p>
                <p><strong>Stream:</strong> Computer science with Math</p>
                <p><strong>Percentage:</strong> 76%</p>
                <p><strong>Achievements:</strong> Football player, Tamil Topper</p>
              </div>
            </div>
          </div>
        </ElectricBorder>

        <ElectricBorder
          key={`eb-college-${cardHeight}`}
          color="#93107d"
          speed={1.2}
          chaos={1.1}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div
            id="college"
            className="education-card"
            ref={el => (cardsRef.current[2] = el)}
            style={cardHeight ? { height: `${cardHeight}px` } : undefined}
          >
            <div id="college-header" className="education-header">
              <h2>College</h2>
            </div>
            <div className="education-inner">
              <div id='college-img'>
                <img src="https://image.free-apply.com/gallery/l/uni/gallery/lg/1035600307/fca1a45e9de007ef58b2298361096064b1810d44.jpg?s=640" alt="College" />
              </div>
              <div id="college-details" className="education-details">
                <p><strong>Institution:</strong> Sri Sairam Engineering college</p>
                <p><strong>Degree:</strong> Bachelor of Engineering</p>
                <p><strong>Department:</strong> Computer cience</p>
                <p><strong>Year of Graduation:</strong> 2026 (Expected)</p>
                <p><strong>Current CGPA:</strong> 7.6</p>
                <p><strong>Achievements:</strong> Member of Coding Club</p>
              </div>
            </div>
          </div>
        </ElectricBorder>
      </div>
      
    </div>
  )
}

export default Education
