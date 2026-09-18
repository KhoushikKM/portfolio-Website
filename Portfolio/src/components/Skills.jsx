import DomeGallery from '../supporters/DomeGallery'

const Skills = () => {
  return (
    <section
      id="Skills"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'transparent',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '2rem',
        boxSizing: 'border-box'
      }}
    >
      <h1
        style={{
          margin: 0,
          textAlign: 'center',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          color: '#f5f3ff',
          letterSpacing: '0.04em',
          zIndex: 2,
          position: 'relative'
        }}
      >
        My skills
      </h1>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'calc(100% - 4rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0.5rem'
        }}
      >
        <DomeGallery
          fit={0.62}
          minRadius={260}
          maxRadius={620}
          segments={32}
          overlayBlurColor="#09051600"
          imageBorderRadius="22px"
          openedImageBorderRadius="28px"
          openedImageWidth="320px"
          openedImageHeight="320px"
        />
      </div>
    </section>
  )
}

export default Skills
