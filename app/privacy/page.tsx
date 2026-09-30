import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Privacy notice | SKR INFO LIMITED" };

export default function Privacy() {
  return <>
    <SiteHeader />
    <main id="main" className="section legal"><div className="container prose">
      <p className="eyebrow">PRIVACY</p>
      <h1>Privacy notice</h1>
      <p>This notice explains how SKR INFO LIMITED (&ldquo;we&rdquo;, &ldquo;us&rdquo;) uses personal data when you visit this website or contact us. We are the data controller for this information.</p>
      <p>SKR INFO LIMITED is registered in England &amp; Wales, company number 17486839. You can contact us about privacy at <a href="mailto:skrinfoltd@gmail.com">skrinfoltd@gmail.com</a>.</p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>When you email us:</strong> your name, email address and anything you include in your message.</li>
        <li><strong>When you visit the website:</strong> our hosting provider may keep standard server logs (such as IP address, browser type and pages requested) for security and to keep the site running.</li>
      </ul>
      <p>This website does not use analytics, advertising or tracking cookies, and has no forms that collect data.</p>

      <h2>Why we use it and our lawful basis</h2>
      <ul>
        <li>To reply to your enquiry and discuss potential work, based on our legitimate interests or to take steps before entering a contract with you.</li>
        <li>To keep the website secure and working, based on our legitimate interests.</li>
        <li>To meet legal, tax and accounting obligations if we go on to work together.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We do not sell your data. We share it only with service providers we use to run the business, such as our email and website hosting providers, and where the law requires it. Some of these providers may process data outside the UK; where they do, they use safeguards recognised under UK data protection law.</p>

      <h2>How long we keep it</h2>
      <p>We keep enquiry emails for up to 2 years after our last contact, unless we go on to work together, in which case we keep business records for as long as the law requires (usually 6 years).</p>

      <h2>Your rights</h2>
      <p>Under UK data protection law you have the right to access, correct or delete your personal data, to object to or restrict how we use it, and to data portability. To make a request, email us. We will respond within one month.</p>
      <p>If you are unhappy with how we have handled your data, you can complain to the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner&rsquo;s Office (ICO)</a>.</p>

      <p className="updated">Last updated: 30 September 2026</p>
    </div></main>
    <SiteFooter />
  </>;
}
