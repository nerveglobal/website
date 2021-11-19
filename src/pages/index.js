import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Butt } from '../components/butt'
import { Tab } from '../components/tab'
import ProtocolData from '../components/protocolData'

import { useDarkMode } from '../contexts/Application'

import PinkGlimmer from '../images/pink_glimmer.inline.svg'
import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'
import Linkedin from '../images/linkedin.inline.svg'
import DevImage from '../images/developer.png'
import GovImage from '../images/governance.png'
import AppsImage from '../images/apps.png'
import mockup from '../images/mockup.png'
import phone from '../images/phone.png'
import appstore from '../images/appstore.svg'
import google from '../images/google.svg'



import ZTask from '../ZTask'
import ZBet from '../ZBet'
import TEarn from '../TEarn'
import BEarn from '../BEarn'


const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;


  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 1rem;
  }
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 4rem;
  font-size: 72px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  mix-blend-mode: overlay;

  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-bottom: 1px solid;
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  height: 15vh;

  @media (max-width: 1024px) {
    height: 50vh;
  }

  @media (max-width: 640px) {
    height: 50vh;
    margin-top: -8rem;
    margin-bottom: 15rem;
  }

  @media (max-width: 440px) {
    height: 50vh;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 56px;
  white-space: wrap;
  overflow-wrap: normal;
  
  @media (max-width: 1024px) {
    margin: 2rem 0 0rem 0;
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
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodySubT = styled.h2`
  display: none;
  visibility: hidden;

  @media (max-width: 640px) {
  display: block;
  visibility: visible;
  max-width: 720px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;
    text-align: left;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  line-height: 150%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 960px;
  line-height: 140%;
  font-size: 32px;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 2rem;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

const StyledPinkGlimmer = styled(PinkGlimmer)`
  margin: 0;
  width: 48px;
  height: 48px;
  position: relative;
  top: -24px;
  right: -32px;
  margin-left: -50px;
  margin-right: 2px;
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

const StyledLinkedIn = styled(Linkedin)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const StyledC = styled.div`
  border-radius: 24px;
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledTradeLink = styled.a`
padding: 0 3rem 0 0;
text-decoration: none;
display: inline-block;
width: 100%
alignSelf: center;
white-space: nowrap;

}
@media (max-width: 960px) {
  display: inline-block;
}
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
        {/* <CardNoise /> */}
        
        {/* <CardFade /> */}
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'Discover, fund, and be part of projects you care about.'}
      />
      
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
        <HideSmall>
          <Title style={{ paddingBottom: '4rem' }}>
            Discover, fund, and be part of projects you care about.
          </Title>
        </HideSmall>
        </span> 
      </StyledAbout>
          
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontWeight: 200 }}>NERVE</span>
            <StyledPinkGlimmer /> GLOBAL
          </StyledBodyTitle>
          <StyledBodySubT>
            {'Discover, fund, and be part of projects you care about.'}
          </StyledBodySubT>
          <StyledSocialRow>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "20rem" }} src={appstore} width="140%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRow>
          <StyledSocialRow>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/nerveglobal_">
              <StyledTwitter />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/nerveglobal">
              <StyledGithub />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/nerveglobal/">
              <StyledLinkedIn />
            </a>
          </StyledSocialRow>
          
        </StyledTitle>
        
         {/* <GrantCard>
            <img style={{ marginLeft: "5rem" }} src={graph} width="35%" />
            <StyledBodySubTitle style={{ textAlign: "center", fontSize: "20px" }}>Backed by <br /> The Graph Foundation</StyledBodySubTitle>
        </GrantCard> */}

          <StyledSectionHeader>
            <a href="https://info.uniswap.org/">{'DATA ANALYTICS →'}</a>
          </StyledSectionHeader>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 10rem 0'
            }}
          >
            <ProtocolData />
          </div>

        <EcosystemSection data={data} props={props} />

        <DeveloperSection data={data} props={props} />

        < KeyAdvantages data={data} props={props} />
        

        <HideSmall>
        <StyledSectionHeader>
            <a>{'SHOWCASE →'}</a>
          </StyledSectionHeader>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '5rem 0 3rem 0'
            }}
          >
           <img style={{ margin: "-10rem" }} src={mockup} width="70%" />
          </div>
        </HideSmall>
        <StyledSocialRow>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "15rem" }} src={appstore} width="140%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "15rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRow>

        <Spotlight data={data} props={props} />
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
  margin-top: 10rem;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
    /* font-size: 2rem; */
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 5rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 5rem;
    text-align: left;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (max-width: 640px) {
    margin: 0;
  }
`

export const DeveloperCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  background: url(${DevImage});
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
`

export const GovernanceCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  background: url(${GovImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;

  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  transition: background-color 0.25s ease;
  @media (max-width: 960px) {
    padding: 1rem 1.25rem;
    height: ${({ open }) => (open ? '100vh' : '100%')};
  }

  @media (max-width: 960px) {
    margin-bottom: 12px;
    margin-right: 0px;
  }
`

export const AppsCard = styled(StyledCard)`
  background: url(${AppsImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;
  width: 100%;
  min-height: 290px;
  max-width: 590px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.25rem;
  }

  p {
    opacity: 0.6;
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    margin-top: -80px;
    margin-bottom: 12px;
    margin-right: 0px;
    max-width: unset;
  }
`

export const GrantsCard = styled(StyledCard)`
  width: 600px;
  alignItems: center;
  justifyContent: center;
  
  @media (max-width: 960px) {
    width: 325px;
  }
`

export const GrantCard = styled(StyledC)`
  width: 250px;
  position: absolute; 
  top: -1rem;
  right: 10rem;
  
  @media (max-width: 960px) {
    width: 250px;
    top: 23rem;
    right: 5rem;
  }
`

const EcosystemSection = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span style={{ marginTop: '-60px', marginBottom: '80px' }}>
          <StyledSectionHeader style={{ marginTop: '5rem' }}>{'NERVE ECOSYSTEM →'}</StyledSectionHeader>
          <StyledSectionTitle>Suitable for any other social media platform.</StyledSectionTitle>
          <StyledBodySubText style={{ marginRight: '48px' }}>
            Content creators, virtual communities, and its users participate together in a place that is open
            and accessible to all.
          </StyledBodySubText>
        </span>
        <AppsCard>
          <h1>∞</h1>
          <p>Opportunities</p>
        </AppsCard>
      </StyledItemRow>
    </StyledSection>
  )
}

const KeyAdvantages = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span style={{ marginTop: '60px', marginBottom: '80px' }}>
          <StyledSectionHeader style={{ marginTop: '5rem' }}>{'KEY ADVANTAGES →'}</StyledSectionHeader>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                Directly earn crypto
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                There is no need for a Bank Account or any KYC Process. Anyone can join a Challenge and pool Money that gets
                rewarded on Completion.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                Routed through Blockchain
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                All Funds will be transferred within Seconds or Minutes,
                rather than the usual Days.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                Donors have to approve before Funds get disbursed
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Funding will only be provided AFTER a Request has been delivered
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                 More Protection to Projects
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Use our System for a step-by-step Funding Process, where each achieved Milestone gets rewarded individually
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

        </span>
        
        </StyledItemRow>
        <img style={{ position: "absolute", margin: "0 0 0 30rem", width: "75%" }} src={phone} />
    </StyledSection>
  )
}


const Spotlight = () => {
  return (
    <>
      <StyledSection>
        <StyledSectionHeader>{'SPOTLIGHT →'}</StyledSectionHeader>
        <StyledItemRow style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 10rem 2rem 10rem'
            }}>
        <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>Latest Task</StyledBodySubTitle>
            <p style={{ fontSize: '20px', fontWeight: "600" }}>
            <ZTask />
            </p>
            <p style={{ fontSize: '1.125rem', opacity: '0.6' }}>For 
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}><TEarn /></p>
            </Butt>
            </p>
          </GrantsCard>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>Latest Bet</StyledBodySubTitle>
            <p style={{ fontSize: '20px', fontWeight: "600" }}>
            <ZBet />
            </p>
            <p style={{ fontSize: '1.125rem', opacity: '0.6' }}>By
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}><BEarn /></p>
            </Butt>
            </p>
          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
    </>
  )
}

const DeveloperSection = () => {
  return (
      <StyledSection>
        <StyledSectionHeader>{'4 SIMPLE STEPS TO START EARNING CRYPTO →'}</StyledSectionHeader>
        <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>1. Receive a Task</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps,
              tools, and activities on the Uniswap Protocol.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>2. Submit a proof</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Provide a video proof and link it to your task. Our system is suitable for any other social media platform.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>3. Get approved</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            In our crowdfunding system, the donors have to approve before funds get disbursed. That means, funding will only
            be provided after a request has been delivered.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>4. Claim funds</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            All funds are routed through blockchain - that means that all funds will be transferred within seconds or minutes.
            </p>
          </GrantsCard>
        </StyledItemRow>
      </StyledSection>
      )
}