import { gql } from '@apollo/client'
import Head from 'next/head'

import client from '../apollo-client'
import styles from '../styles/Home.module.css'

type HomeProps = {
  countries: CountryCodeAndName[]
}

export default function Home(props: HomeProps) {
  const { countries } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {countries.map((country) => (
            <div key={country.code} className={styles.card}>
              <h3>{country.name}</h3>
              <p>
                {country.code} - {country.emoji}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

interface CountryCodeAndName {
  code: string
  name: string
  emoji: string
}

const GET_COUNTRY_CODE_AND_NAMES = gql`
  query GetCountryCodeAndNames {
    countries {
      code
      name
      emoji
    }
  }
`

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_COUNTRY_CODE_AND_NAMES,
  })

  const countries: CountryCodeAndName[] = data.countries.slice(0, 4)

  const mappedCountries = countries.map((country) => ({
    name: country.name,
    code: country.code,
    emoji: country.emoji,
  }))

  return {
    props: { countries: mappedCountries },
  }
}
