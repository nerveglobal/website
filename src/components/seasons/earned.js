import * as React from 'react'

const TopPlayerEarned = `
{
  userDashStats(orderBy:earned, orderDirection:desc, first: 10) {
    id
    userName
    earned
  }
}
`

export default function TopEarned() {
  const tpe = useTPE()
  const matic = usePrice()

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {tpe.map(tpe => (
          <li key={tpe.earned}>
            <a>${((tpe.earned / 1e18) * matic).toFixed(2)}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function useTPE() {
  const [tpe, setTPE] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopPlayerEarned })
    })
      .then(response => response.json())
      .then(data => setTPE(data.data.userDashStats))
  }, [])

  return tpe
}

function usePrice() {
  const [maticPrice, setPrice] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
      .then(response => response.json())
      .then(data => setPrice(data['matic-network'].usd))
  }, [])

  return maticPrice
}
