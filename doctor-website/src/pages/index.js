import React from "react"
import { StaticImage } from "gatsby-plugin-image" // We will use StaticImage now
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/frontpage-image.jpg"  // Path to your clinic image
          loading="eager"
          width={600}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Clinic Image"
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>Velkommen i Greve Praksis!</h1>
      </div>
      <div className={styles.textCenter}>
        <p>
          <strong>1. april 2024 skifter praksis ejerskab, idet Ayaz Assad Choughti overtager Pia Müller's andel af praksis.</strong>
          - Se under nyheder for mere information.
        </p>
        <p>
          Vi tilbyder vores patienter lægehjælp i dagtiden, se åbningstider i kolonnen til højre. 
          Vær opmærksom på at vi tilbyder daglige videokonsultationer efter aftale. Disse kan bookes via <a href="https://lægevejen.dk">Lægevejen.dk</a> .
          Klinikken har privatlivspolitik i henhold til GDPR.
          <br />
          Efter kl. 16.00, i weekenden og på helligdage kan man ved behov for <strong>akut lægehjælp</strong>
          <br />
          kontakte lægevagten på 1818.
          <br />
          For nødkald 24 timer i døgnet, ring: <strong>112</strong>.
          <br />
          Hvis du er kommet akut til skade, har Køge skadestue døgnåbent, men husk at du skal ringe til 
          1818 inden du møder op på skadestuen.
        </p>
        <p>
          <strong>SIDEN OPDATERET DEN 25/02/2024</strong>
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Velkommen i Greve Praksis" />

export default IndexPage
