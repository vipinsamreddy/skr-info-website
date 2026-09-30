export function Logo({ className = "" }: { className?: string }) {
  return <span className={`brand ${className}`}>
    <svg className="logoMark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="currentColor" />
      <path d="M11 26.5c1.6 1.4 3.7 2.2 6 2.2 3.2 0 5.2-1.5 5.2-3.8 0-2.2-1.6-3.1-4.8-3.9-2.6-.7-3.6-1.1-3.6-2.2 0-1 1-1.7 2.6-1.7 1.6 0 3 .6 4.2 1.6l1.9-2.6c-1.6-1.4-3.6-2.1-6-2.1-3.2 0-5.4 1.8-5.4 4.3 0 2.5 1.8 3.3 4.9 4.1 2.5.6 3.4 1.1 3.4 2.1 0 1.1-1.1 1.8-2.8 1.8-1.9 0-3.5-.7-4.9-1.9L11 26.5Z" fill="#fff" />
      <rect x="25" y="12" width="4" height="16" rx="1.5" fill="#5eead4" />
    </svg>
    <span className="brandText">SKR <em>INFO</em></span>
  </span>;
}

export function SiteHeader() {
  return <>
    <a className="skipLink" href="#main">Skip to main content</a>
    <header className="header">
      <div className="container nav">
        <a href="/" aria-label="SKR INFO home"><Logo /></a>
        <nav aria-label="Main">
          <a href="/#services">Services</a>
          <a href="/#experience">Experience</a>
          <a href="/#buying">Buying from us</a>
          <a href="/#about">About</a>
          <a className="navCta" href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer>
    <div className="container footerGrid">
      <div><Logo className="footerBrand" /><p>Digital &amp; Software Engineering Consultancy</p></div>
      <div>
        <strong>SKR INFO LIMITED</strong>
        <p>Registered in England &amp; Wales</p>
        <p>Company number: 17486839</p>
        <p>PPON: PBXM-5638-WQHX</p>
      </div>
      <div>
        <strong>Information</strong>
        <p><a href="/accessibility">Accessibility statement</a></p>
        <p><a href="/privacy">Privacy notice</a></p>
        <p><a href="mailto:skrinfoltd@gmail.com">skrinfoltd@gmail.com</a></p>
      </div>
    </div>
    <div className="container copyright">© 2026 SKR INFO LIMITED. All rights reserved.</div>
  </footer>;
}
