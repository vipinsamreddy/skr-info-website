import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const services = [
  ["Digital Service Delivery", "End-to-end delivery of secure, accessible digital services from discovery through build, test and live support."],
  ["C# / .NET & APIs", "Modern .NET applications, REST APIs, integration services and legacy modernisation designed for reliability and maintainability."],
  ["React & TypeScript", "Fast, accessible web interfaces using React, Next.js and TypeScript, built around user needs and the GOV.UK Design System."],
  ["Azure Cloud & DevOps", "Azure-first cloud delivery: App Services, Functions, Service Bus, Key Vault, Azure DevOps pipelines and infrastructure as code. AWS experience available where your platform needs it."],
  ["Systems Integration", "APIs, messaging, XML/XSLT data flows and platform integrations that connect existing systems and reduce manual processes."],
  ["AI & Automation", "Applying AI where it adds value, built on sound engineering, data and governance, with a focus on measurable outcomes and safe implementation."]
];

const caseStudies = [
  {
    sector: "Central government · Education",
    title: "National school data platform",
    summary: "Lead developer on a national service giving parents, educators and policy teams structured data about schools across England.",
    points: ["Scalable .NET 9 REST APIs for high-volume data access", "Event-driven design with Azure Service Bus and Key Vault", "Built to GDS standards and WCAG 2.2"],
    tech: ".NET 9 · React/Next.js · Azure · Azure DevOps"
  },
  {
    sector: "Central government · Education",
    title: "Shared design system for a national careers service",
    summary: "Lead developer on a reusable, GDS-compliant design system and CMS-driven platform.",
    points: ["Design system adopted across 33+ microservices", "Multi-environment Contentful CMS so editors can publish safely", "Search and content pipelines on Azure Functions and Service Bus"],
    tech: "Next.js (SSR) · React · Node.js · Contentful · Azure"
  },
  {
    sector: "Central government · Welfare",
    title: "National appointment management system",
    summary: "Senior engineer on a high-traffic scheduling and notification service used nationally.",
    points: ["Node.js microservices and Angular UI on the GOV.UK Design System", "Serverless AWS infrastructure managed with Terraform", "End-to-end, API and contract testing with Playwright, RestAssured and Pact"],
    tech: "Node.js · Angular · AWS · Terraform · GitLab CI"
  },
  {
    sector: "Central government · Education",
    title: "Grant planning and tuition services for schools",
    summary: "Lead developer on public-facing services helping schools plan grant funding and find local tuition partners.",
    points: ["React + TypeScript SPA with .NET Core API and Azure AD sign-in", "Event-driven email and SMS notifications", "Cloudflare edge caching and Cypress tests in the pipeline"],
    tech: ".NET · React · Azure · Cloudflare · Docker · Terraform"
  },
  {
    sector: "Financial services",
    title: "Legacy platform modernisation",
    summary: "Senior developer moving a building society's legacy systems to cloud-ready, service-based architecture.",
    points: ["Legacy services rebuilt as C#/.NET REST APIs", "40%+ performance gain from SQL tuning and Redis caching", "XML/XSLT integrations and Azure Bicep infrastructure as code"],
    tech: "C# · .NET · SQL Server · Redis · Azure"
  },
  {
    sector: "Automotive",
    title: "High-volume vehicle remarketing platform",
    summary: "Senior full-stack developer on commercial vehicle remarketing systems.",
    points: ["30,000+ transactions processed daily", "Search, Salesforce/MuleSoft integrations and external data ingestion", "Contributed to cloud migration across Azure and AWS"],
    tech: "C# · .NET · TypeScript · Elasticsearch · Azure/AWS"
  }
];

const engagementModels = [
  ["Outcome-based statement of work", "A defined scope, deliverables and acceptance criteria, suited to discovery, alpha, beta or a specific build."],
  ["Capacity / time and materials", "Senior engineering capacity embedded in your team, charged at a day rate and managed through your delivery process."],
  ["Subcontract / associate", "Working alongside a prime supplier to add specialist .NET, cloud or integration capability to their team."]
];

const buyingRoutes = [
  ["Direct award", "For lower-value work within your organisation's procurement thresholds, we can contract directly."],
  ["Frameworks", "Where your organisation buys through frameworks such as G-Cloud or Digital Outcomes (DOS), we can bid directly where eligible or join through a partner supplier."],
  ["Find a Tender / Contracts Finder", "We respond to published opportunities. Our PPON is PBXM-5638-WQHX."]
];

const credentials = [
  ["Microsoft Certified Solutions Developer (MCSD)", "Certification"],
  ["Microsoft ASP.NET / .NET Framework certifications", "Certification"],
  ["MSc & BSc Computer Science", "Education"],
  ["GDS Service Standard & GOV.UK Design System", "Delivery experience"],
  ["WCAG 2.1 / 2.2 accessibility", "Delivery experience"],
  ["OWASP-aware secure development", "Practice"],
  ["British citizen, based in the UK", "Eligibility"],
  ["12+ years of commercial engineering", "Experience"]
];

export default function Home() {
  return <>
    <SiteHeader />
    <main id="main">
      <section className="hero" id="top">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">UK DIGITAL DELIVERY & SOFTWARE ENGINEERING CONSULTANCY</p>
            <h1>Software engineering for better digital services.</h1>
            <p className="intro">SKR INFO LIMITED helps public-sector and private organisations design, build and modernise secure digital services — from .NET APIs and cloud platforms to modern web applications and AI-enabled solutions.</p>
            <div className="actions"><a className="btn primary" href="#contact">Discuss your project</a><a className="btn secondary" href="#experience">See our experience</a></div>
            <div className="pills"><span>Secure</span><span>Accessible</span><span>Cloud-ready</span><span>Outcome-focused</span></div>
          </div>
          <aside className="panel" aria-label="Core capabilities">
            <small>CORE CAPABILITIES</small>
            <div><b>.NET</b><strong>APIs & services</strong></div>
            <div><b>Cloud</b><strong>Azure-first</strong></div>
            <div><b>React</b><strong>Web applications</strong></div>
            <div><b>GDS</b><strong>Public-sector standards</strong></div>
          </aside>
        </div>
      </section>

      <section className="stats" aria-label="Key facts">
        <div className="container statGrid">
          <div><strong>12+</strong><span>years of commercial engineering</span></div>
          <div><strong>5+</strong><span>UK government digital services delivered</span></div>
          <div><strong>33+</strong><span>microservices using one shared design system</span></div>
          <div><strong>WCAG 2.2</strong><span>accessibility standard we build to</span></div>
        </div>
      </section>

      <section className="section" id="services"><div className="container">
        <p className="eyebrow">WHAT WE DO</p><h2>Practical technology delivery, from idea to live service.</h2>
        <p className="sectionIntro">We combine senior engineering capability with pragmatic delivery to help organisations modernise systems, integrate platforms and launch dependable digital services.</p>
        <div className="cards">{services.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="section alt" id="experience"><div className="container">
        <p className="eyebrow">EXPERIENCE</p><h2>Delivered in complex, regulated environments.</h2>
        <p className="sectionIntro">Our leadership has delivered the following programmes as lead and senior engineers, working with UK government departments and their delivery partners, and in the private sector. Details are summarised to respect client confidentiality.</p>
        <div className="caseGrid">{caseStudies.map(c => <article className="case" key={c.title}>
          <p className="caseSector">{c.sector}</p>
          <h3>{c.title}</h3>
          <p>{c.summary}</p>
          <ul>{c.points.map(p => <li key={p}>{p}</li>)}</ul>
          <p className="caseTech">{c.tech}</p>
        </article>)}</div>
      </div></section>

      <section className="section" id="buying"><div className="container">
        <p className="eyebrow">BUYING FROM US</p><h2>Simple ways to work with us.</h2>
        <p className="sectionIntro">We are a small UK supplier, which keeps engagements straightforward. Day rates and fixed prices are available on request and depend on scope, duration and security requirements.</p>
        <h3 className="subHead">How we engage</h3>
        <div className="cards">{engagementModels.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        <h3 className="subHead">Procurement routes</h3>
        <div className="routes">{buyingRoutes.map(([title, text], i) => <div className="route" key={title}><span aria-hidden="true">{i + 1}</span><div><h4>{title}</h4><p>{text}</p></div></div>)}</div>
        <h3 className="subHead">Supplier details</h3>
        <dl className="supplier">
          <div><dt>Legal name</dt><dd>SKR INFO LIMITED</dd></div>
          <div><dt>Registered</dt><dd>England &amp; Wales</dd></div>
          <div><dt>Company number</dt><dd>17486839</dd></div>
          <div><dt>PPON</dt><dd>PBXM-5638-WQHX</dd></div>
          <div className="wide"><dt>Subcontracting</dt><dd>Work is led and delivered by SKR INFO. Where specialist associates are used, we remain accountable for delivery and quality.</dd></div>
        </dl>
      </div></section>

      <section className="section alt" id="credentials"><div className="container split">
        <div><p className="eyebrow">CREDENTIALS</p><h2>Standards buyers can rely on.</h2>
          <p className="sectionIntro">Our leadership brings hands-on experience delivering to the GDS Service Standard, with accessibility, security and auditability built in from the start.</p>
          <p>Further supplier documentation is available on request.</p>
        </div>
        <div className="checks">{credentials.map(([title, kind]) => <div className="check" key={title}><i aria-hidden="true">✓</i><div><strong>{title}</strong><small>{kind}</small></div></div>)}</div>
      </div></section>

      <section className="section" id="about"><div className="container split">
        <div><p className="eyebrow">ABOUT SKR INFO</p><h2>A small consultancy with senior engineering depth.</h2></div>
        <div className="about"><p>SKR INFO LIMITED is a UK technology consultancy focused on software engineering, cloud modernisation, integration and digital-service delivery.</p>
          <p>The company is led by Vipin Reddy, a senior full-stack engineer with more than 12 years of experience across UK government, financial services and automotive, including several lead developer roles on Department for Education services.</p>
          <p>We are intentionally hands-on. Clients work directly with experienced technical practitioners who can understand requirements, shape solutions and deliver production-ready software. For larger engagements, we can scale with specialist associates while keeping accountability and technical leadership clear.</p></div>
      </div></section>

      <section className="contact" id="contact"><div className="container contactBox">
        <div><p className="eyebrow pale">START A CONVERSATION</p><h2>Have a digital project to deliver?</h2><p>Tell us what you are trying to achieve and we can discuss scope, delivery options and next steps.</p></div>
        <a className="btn white" href="mailto:skrinfoltd@gmail.com">skrinfoltd@gmail.com</a>
      </div></section>
    </main>
    <SiteFooter />
  </>;
}
