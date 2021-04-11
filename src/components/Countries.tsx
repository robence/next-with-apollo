import { useQuery, gql } from '@apollo/client'
import styles from '../styles/Home.module.css'
import { GetCountryCodeAndNames } from './__generated__/GetCountryCodeAndNames'

const GET_COUNTRY_CODE_AND_NAMES = gql`
  query GetCountryCodeAndNames {
    countries {
      code
      name
      emoji
    }
  }
`

export default function Countries() {
  const { data, loading, error } = useQuery<GetCountryCodeAndNames>(
    GET_COUNTRY_CODE_AND_NAMES
  )

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const countries = data.countries.slice(0, 4)

  return (
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
  )
}
