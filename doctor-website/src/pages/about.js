import React from "react"
import { graphql } from "gatsby"

export default function AboutPage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "About the Doctor" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
