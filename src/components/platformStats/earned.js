import * as React from 'react'

const GlobalEarned = `
  {
    globalStats {
      taskEarnings
  }
}
`

export default function Users() {
  const earned = useEarned()
  const matic = usePrice()

  return (
    <div>
      <ul>
        {earned.map(earned => (
          <li key={earned.taskEarnings}>${((earned.taskEarnings / 1e18) * matic).toFixed(2)}</li>
        ))}
      </ul>
    </div>
  )
}

function useEarned() {
  const [earned, setEarned] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: GlobalEarned })
    })
      .then(response => response.json())
      .then(data => setEarned(data.data.globalStats))
  }, [])

  return earned
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
