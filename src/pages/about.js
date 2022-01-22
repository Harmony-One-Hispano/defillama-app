import React from 'react'

import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween } from '../components/Row'
import styled from 'styled-components'
import { Divider } from '../components'
import Link from '../components/Link'
import { GeneralLayout } from '../layout'

function AboutPage() {
  const DashGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-areas: 'account';
    padding: 0 4px;

    > * {
      justify-content: flex-end;
    }
  `

  return (
    <GeneralLayout title="DefiLlama - DeFi Dashboard" defaultSEO>
      <PageWrapper>
        <FullWrapper>
          <RowBetween>
            <TYPE.largeHeader>About</TYPE.largeHeader>
          </RowBetween>
          <Panel style={{ marginTop: '6px' }}>
            <DashGrid center={true} style={{ height: 'fit-content', padding: '0 0 1rem 0' }}>
              <TYPE.main area="account">Mission</TYPE.main>
              <Divider />

              <TYPE.main>
                HispaGames is a TVL aggregator for GameFi (Decentralized Gaming) in Harmony. 
              </TYPE.main>
              <TYPE.main>Our focus is on accurate data and transparent methodology.</TYPE.main>
              <TYPE.main>We track over 10 GameFi Dapps from Harmony.</TYPE.main>
              <Divider />
              <Divider />
              <TYPE.main>
                Contact us on <Link href="https://twitter.com/harmonyhispano">Twitter</Link> or{' '}
                <Link href="https://discord.gg/todo">Discord</Link>
              </TYPE.main>
            </DashGrid>
          </Panel>
          <Panel style={{ marginTop: '6px' }}>
            <DashGrid center={true} style={{ height: 'fit-content', padding: '0 0 1rem 0' }}>
              <TYPE.main area="account">Acknowledgements</TYPE.main>
              <Divider />
              <TYPE.main>
                Thanks to <Link href="https://www.coingecko.com/">CoinGecko</Link>
              </TYPE.main>
              <Divider />
              <TYPE.main>
                DeFiLlama&apos;s design is based on{' '}
                <Link href="https://github.com/Uniswap/uniswap-info">Uniswap.info</Link>
              </TYPE.main>
            </DashGrid>
          </Panel>
        </FullWrapper>
      </PageWrapper>
    </GeneralLayout>
  )
}

export default AboutPage
