import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import ProtocolData from '../components/protocolData'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardFade, CardNoise, StyledExternalLink } from '../components/utils'

import PinkGlimmer from '../images/pink_glimmer.inline.svg'
import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'
import DevImage from '../images/developer.png'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.2;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  height: 70vh;

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 56px;
  white-space: wrap;
  overflow-wrap: normal;
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`
const StyledBodySubTitle = styled.h2`
  max-width: 720px;
  line-height: 125%;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  line-height: 160%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 960px;
  line-height: 160%;
  font-size: 32px;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBannerImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 260px;
  max-width: 720px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

// const StyledImageLink = styled.a`
//   width: 100%;
//   height: 100%;
//   min-width: 260px;
//   max-width: 720px;
//   background-color: none;
//   border-radius: 12px;
//   box-shadow: ${({ theme }) => theme.shadows.huge};
//   @media (max-width: 960px) {
//     min-width: unset;
//   }
// `

const StyledProductImage = styled(Img)`
  width: 100%;
  max-width: 120px;
  margin-bottom: 2rem;
  background-color: none;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const StyledPinkGlimmer = styled(PinkGlimmer)`
  margin: 0;
  width: 48px;
  height: 48px;
  position: relative;
  top: -24px;
  right: -32px;
  margin-left: -48px;
  margin-right: 8px;
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`
const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 24px;
`

const IndexPage = props => {
  const isDark = useDarkMode()

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      banner: file(relativePath: { eq: "Banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      grants: file(relativePath: { eq: "unigrants.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      discord: file(relativePath: { eq: "discord.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reddit: file(relativePath: { eq: "reddit.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discourse: file(relativePath: { eq: "discourse.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      devs: file(relativePath: { eq: "devs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
        <CardFade />
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated liquidity provision on Ethereum'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontWeight: 300 }}>UNISWAP</span>
            <StyledPinkGlimmer /> PROTOCOL
          </StyledBodyTitle>
          <StyledBodySubTitle style={{ marginBottom: '3rem' }}>
            Trusted by traders, developers, and protocols in the Ethereum ecosystem.
          </StyledBodySubTitle>
          <StyledItemRow>
            <StyledTwitter />
            <StyledGithub />
            <StyledDiscord />
          </StyledItemRow>
        </StyledTitle>

        <DeveloperSection data={data} props={props} />
        <ProductsSection data={data} props={props} />
        <ProtocolData />
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSectionHeader = styled.h1`
  font-size: 20px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4rem 0;
`

export const DeveloperCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  background: url(${DevImage});

  background-size: cover;
  background-repeat: no-repeat;
`

const DeveloperSection = props => {
  return (
    <StyledSection>
      <span>
        <StyledSectionHeader>{'ECOSYSTEM →'}</StyledSectionHeader>
        <StyledSectionTitle>A growing protocol ecosystem.</StyledSectionTitle>
        <StyledBodySubText>
          The Uniswap protocol empowers developers, liquidity providers and traders to participate in a financial
          marketplace that is open and accessible to all.
        </StyledBodySubText>
      </span>
      <StyledBannerImage fadeIn={false} fluid={props.data.banner.childImageSharp.fluid} />
    </StyledSection>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionHeader>{'DEVELOPERS →'}</StyledSectionHeader>
      <StyledItemRow>
        <DeveloperCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <StyledSectionTitle>Superpowers for DEFI developers.</StyledSectionTitle>
          <StyledBodySubText>
            Check out the documentation, the Javascript SDK quick start or a guide below to integrate your project with
            thousands of tokens and billions in liquidity.
          </StyledBodySubText>

          <Button outlined>
            <p style={{ margin: 0 }}>Developer Docs ↗</p>
          </Button>
        </DeveloperCard>
        <StyledCard style={{ maxWidth: '375px' }}>
          <StyledProductImage fadeIn={false} fluid={props.data.grants.childImageSharp.fluid} />
          <StyledBodySubTitle>Apply for the Uniswap Developer Grants Program</StyledBodySubTitle>
          <p>
            We aim to empower our community with the resources needed to improve the experience of all UNI users,
            builders, and community members.
          </p>
          <Button outlined>
            <p style={{ margin: 0 }}>Learn more ↗</p>
          </Button>
        </StyledCard>
      </StyledItemRow>

      <StyledSectionHeader>{'COMMUNITY →'}</StyledSectionHeader>

      <StyledItemRow>
        <StyledCard>
          <StyledItemRow>
            <StyledExternalLink href={'https://discord.gg/FCfyBSbCU5'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.discord.childImageSharp.fluid} />
            </StyledExternalLink>
            <StyledExternalLink href={'https://twitter.com/Uniswap'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.twitter.childImageSharp.fluid} />
            </StyledExternalLink>
            <StyledExternalLink href={'https://gov.uniswap.org/'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.discourse.childImageSharp.fluid} />
            </StyledExternalLink>
            <StyledExternalLink href={'https://www.reddit.com/r/Uniswap'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.reddit.childImageSharp.fluid} />
            </StyledExternalLink>
          </StyledItemRow>
        </StyledCard>
      </StyledItemRow>
      <StyledBodySubText>
        Learn more about Uniswap, chat with the team, others in the community, and have your say in shaping the future
        of the Uniswap protocol.
      </StyledBodySubText>

      <StyledSectionHeader>{'GOVERNANCE →'}</StyledSectionHeader>
      <StyledBodySubText>
        Learn more about Uniswap, chat with the team, others in the community, and have your say in shaping the future
        of the Uniswap protocol.
      </StyledBodySubText>

      <StyledItemRow>
        <StyledExternalLink href={'https://discord.gg/FCfyBSbCU5'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.discord.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://twitter.com/Uniswap'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.twitter.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://gov.uniswap.org/'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.discourse.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://www.reddit.com/r/Uniswap'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.reddit.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>
    </>
  )
}
