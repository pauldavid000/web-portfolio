    import './App.css'
    import Navbar    from './components/Navbar'
    import Hero      from './components/Hero'
    import About     from './components/About'
    import Skills    from './components/Skills.'
    import Projects  from './components/Projects'
    import Education from './components/Education'
    import CVUpload  from './components/CVUpload.'
    import Contact   from './components/Contact'
    import Footer    from './components/Footer'
    
    // UPDATE THIS WITH YOUR OWN INFORMATION
    const portfolioData = {
      name:     'Amara Okafor',                    // Your name
      title:    'Frontend Developer & UI Designer', // Your job title
      bio:      'I build beautiful, responsive web experiences.',
      email:    'amara@example.com',
      phone:    '+234 800 000 0000',
      location: 'Lagos, Nigeria',
      github:   'github.com/amara',
      linkedin: 'linkedin.com/in/amara',
    }
    
    function App() {
      return (
        <div className="app">
          <Navbar ownerName={portfolioData.name} />
          <Hero
            name={portfolioData.name}
            title={portfolioData.title}
            bio={portfolioData.bio}
          />
          <About
            name={portfolioData.name}
            bio={portfolioData.bio}
            email={portfolioData.email}
            phone={portfolioData.phone}
            location={portfolioData.location}
            github={portfolioData.github}
            linkedin={portfolioData.linkedin}
          />
          <Skills />
          <Projects />
          <Education />
          <CVUpload />
          <Contact />
          <Footer ownerName={portfolioData.name} />
        </div>
      )
    }
    export default App
