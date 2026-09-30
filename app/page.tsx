const services = [
  ["Digital Service Delivery", "End-to-end delivery of secure, accessible digital services from discovery through build, test and live support."],
  ["C# / .NET & APIs", "Modern .NET applications, REST APIs, integration services and legacy modernisation designed for reliability and maintainability."],
  ["React & TypeScript", "Fast, accessible web interfaces using React, Next.js and TypeScript, built around user needs and performance."],
  ["Azure & Cloud", "Cloud-native architecture, Azure integration, CI/CD, observability, secrets management and scalable hosting."],
  ["Systems Integration", "APIs, data flows and platform integrations that connect existing systems and reduce manual processes."],
  ["AI & Automation", "Practical AI-enabled workflows and automation focused on measurable outcomes, governance and safe implementation."]
];

const strengths = [
  "Public-sector digital delivery experience",
  "Accessibility-first engineering",
  "Secure development practices",
  "Automated testing and CI/CD",
  "Agile delivery and stakeholder collaboration",
  "Senior hands-on technical leadership"
];

export default function Home() {
  return <main>
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#top"><span>SKR</span> INFO</a>
        <nav>
          <a href="#services">Services</a><a href="#public-sector">Public Sector</a>
          <a href="#about">About</a><a className="navCta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="container heroGrid">
        <div>
          <p className="eyebrow">UK DIGITAL & SOFTWARE ENGINEERING CONSULTANCY</p>
          <h1>Software engineering for better digital services.</h1>
          <p className="intro">SKR INFO LIMITED helps public-sector and private organisations design, build and modernise secure digital services — from .NET APIs and cloud platforms to modern web applications and AI-enabled solutions.</p>
          <div className="actions"><a className="btn primary" href="#contact">Discuss your project</a><a className="btn secondary" href="#services">Explore our services</a></div>
          <div className="pills"><span>Secure</span><span>Accessible</span><span>Cloud-ready</span><span>Outcome-focused</span></div>
        </div>
        <aside className="panel">
          <small>CORE CAPABILITIES</small>
          <div><b>.NET</b><strong>APIs & services</strong></div>
          <div><b>Azure</b><strong>Cloud delivery</strong></div>
          <div><b>React</b><strong>Web applications</strong></div>
          <div><b>AI</b><strong>Automation</strong></div>
        </aside>
      </div>
    </section>

    <section className="section" id="services"><div className="container">
      <p className="eyebrow">WHAT WE DO</p><h2>Practical technology delivery, from idea to live service.</h2>
      <p className="sectionIntro">We combine senior engineering capability with pragmatic delivery to help organisations modernise systems, integrate platforms and launch dependable digital services.</p>
      <div className="cards">{services.map(([title,text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="section alt" id="public-sector"><div className="container split">
      <div><p className="eyebrow">PUBLIC SECTOR</p><h2>Built around public-service standards.</h2>
        <p className="sectionIntro">Our leadership brings hands-on experience delivering digital services in complex, regulated and user-focused environments, including UK public-sector programmes.</p>
        <p>We understand the importance of accessibility, security, auditability, stakeholder engagement and reliable delivery — and bring those principles into every engagement.</p>
      </div>
      <div className="checks">{strengths.map(x => <div className="check" key={x}><i>✓</i><strong>{x}</strong></div>)}</div>
    </div></section>

    <section className="section" id="about"><div className="container split">
      <div><p className="eyebrow">ABOUT SKR INFO</p><h2>A small consultancy with senior engineering depth.</h2></div>
      <div className="about"><p>SKR INFO LIMITED is a UK technology consultancy focused on software engineering, cloud modernisation, integration and digital-service delivery.</p>
      <p>We are intentionally hands-on. Clients work directly with experienced technical practitioners who can understand requirements, shape solutions and deliver production-ready software.</p>
      <p>For larger engagements, we can scale with specialist associates while keeping accountability and technical leadership clear.</p></div>
    </div></section>

    <section className="contact" id="contact"><div className="container contactBox">
      <div><p className="eyebrow pale">START A CONVERSATION</p><h2>Have a digital project to deliver?</h2><p>Tell us what you are trying to achieve and we can discuss scope, delivery options and next steps.</p></div>
      <a className="btn white" href="mailto:skrinfoltd@gmail.com">skrinfoltd@gmail.com</a>
    </div></section>

    <footer><div className="container footerGrid">
      <div><div className="brand footerBrand"><span>SKR</span> INFO</div><p>Digital & Software Engineering Consultancy</p></div>
      <div><strong>SKR INFO LIMITED</strong><p>Registered in England & Wales</p><p>Company number: 17486839</p><p>PPON: PBXM-5638-WQHX</p></div>
    </div><div className="container copyright">© 2026 SKR INFO LIMITED. All rights reserved.</div></footer>
  </main>
}
