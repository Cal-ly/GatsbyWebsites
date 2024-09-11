import React from "react"
import { StaticImage } from "gatsby-plugin-image" // We will use StaticImage now
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className={`${styles.textCenter} ${styles.container}`}>
        <StaticImage
          src="../images/frontpage-image.jpg"  // Path to your clinic image
          loading="eager"
          width={600}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Clinic Image"
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>Velkommen i Greve Lægepraksis!</h1>
      </div>
      <div className={`${styles.textCenter} ${styles.container}`}>
        <p className={styles.textLeft}>
          <strong>1. april 2024 skifter praksis ejerskab, idet Ayaz Assad Choughti overtager Pia Müller's andel af praksis.</strong>
           - Se under nyheder for mere information.
        </p>
        <p className={styles.textLeft}>
          Vi tilbyder vores patienter lægehjælp i dagtiden, se åbningstider i kolonnen til højre. 
          Vær opmærksom på at vi tilbyder daglige videokonsultationer efter aftale. Disse kan bookes via <a href="https://lægevejen.dk">Lægevejen.dk</a> .
          Klinikken har privatlivspolitik i henhold til GDPR.
          <br />
          Efter kl. 16.00, i weekenden og på helligdage kan man ved behov for <strong>akut lægehjælp</strong> kontakte lægevagten på <a href="tel:1818">1818</a>.
          <br />
          Hvis du er kommet akut til skade, har Køge skadestue døgnåbent, men husk at du skal ringe til 
          1818 inden du møder op på skadestuen.
          <br />
          For nødkald 24 timer i døgnet, ring: <strong><a href="tel:112">112</a></strong>.
        </p>
        <p className={styles.textLeft}>
          <strong>SIDEN OPDATERET DEN 25/02/2024</strong>
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Velkommen i Greve Praksis" />

export default IndexPage
