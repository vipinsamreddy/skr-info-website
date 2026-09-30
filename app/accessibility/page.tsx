import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Accessibility statement | SKR INFO LIMITED" };

export default function Accessibility() {
  return <>
    <SiteHeader />
    <main id="main" className="section legal"><div className="container prose">
      <p className="eyebrow">ACCESSIBILITY</p>
      <h1>Accessibility statement</h1>
      <p>This statement applies to the SKR INFO LIMITED website. We want as many people as possible to be able to use it. You should be able to:</p>
      <ul>
        <li>zoom in up to 400% without the text spilling off the screen</li>
        <li>navigate the whole website using just a keyboard, including a &ldquo;skip to main content&rdquo; link</li>
        <li>use the website with a screen reader, with a logical heading structure and labelled navigation</li>
        <li>use the website with your browser or operating system&rsquo;s high-contrast or reduced-motion settings</li>
      </ul>
      <p>We have written the text to be as simple as possible to understand.</p>

      <h2>How accessible this website is</h2>
      <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) version 2.2 at AA standard. The website has been built and checked by our own team. It has not yet been audited by an independent third party.</p>
      <p>We are not aware of any content that fails to meet WCAG 2.2 AA. If you find a problem, please tell us.</p>

      <h2>Feedback and contact information</h2>
      <p>If you have difficulty using this website, or need information in a different format, email <a href="mailto:skrinfoltd@gmail.com">skrinfoltd@gmail.com</a>. We will reply within 5 working days.</p>

      <h2>Enforcement procedure</h2>
      <p>If you are not happy with how we respond to your complaint, you can contact the <a href="https://www.equalityadvisoryservice.com/">Equality Advisory and Support Service (EASS)</a>.</p>

      <h2>Preparation of this statement</h2>
      <p>This statement was prepared on 30 September 2026. It will be reviewed at least once a year and whenever the website changes significantly.</p>
    </div></main>
    <SiteFooter />
  </>;
}
