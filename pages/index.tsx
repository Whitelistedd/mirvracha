import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../Layout/Layout'
import Icons from '../src/components/Icons/Icons'
import PatientCards from '../src/components/PatientCards/PatientCards'
import { IconsData } from '../src/data'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Head>
          <title>МирВрача</title>
          <meta name="description" content="МирВрача" />
          <link rel="icon" href="/vercel.svg" />
        </Head>
        <Main>
          <HeaderArticle>
            <Header>
              <Title>А вдруг СМА?</Title>
              <SubTitle>Выберите, кто Ваш пациент:</SubTitle>
            </Header>
            <PatientCards />
          </HeaderArticle>
          <MoreInfo>
            Сообщает ли один из ваших пациентов о следующих симптомах?{' '}
            <Link href="https://example.com/">
              (нажмите на любую иконку и узнайте больше)
            </Link>
          </MoreInfo>
          <IconsArticle>
            <Icons
              IconsData={IconsData}
              CenterImage={'/assets/images/centercircle.png'}
            />
          </IconsArticle>
        </Main>
      </Container>
    </Layout>
  )
}

const IconsArticle = styled.article`
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderArticle = styled.article``

const MoreInfo = styled.p`
  color: #2a477d;
  align-self: flex-start;
  font-weight: 700;
  a {
    color: #068ca6;
    text-decoration: none;
    font-size: 13px;
  }
`

const SubTitle = styled.h2`
  font-size: 2em;
`

const Title = styled.h1`
  font-size: 2.5em;
`

const Header = styled.header`
  text-align: center;
  color: #223867;
  padding: 1em;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1264px;
  padding: 2em;
  gap: 3em;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.4) 15%,
    rgba(224, 247, 252, 0.983333) 25.87%,
    #caf2fa 100%
  );
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: #f4fbfc;
  font-family: 'Roboto';
`

export default Home
