import * as React from "react";
import BigNumber from 'bignumber.js'

const TopPlayerEarned = `
{
  userDashStats(orderBy:earned, orderDirection:desc, first: 10) {
    id
    userName
    earned
  }
}
`;

export default function TopEarned() {
  const tpe = useTPE();
  const matic = usePrice();

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {tpe.map((tpe) => (
          <li key={tpe.id}>${((tpe.earned/1.e+18)*matic).toFixed(2)}</li>
        ))}
      </ul>
</div>
  );
}

function useTPE() {
  const [tpe, setTPE] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopPlayerEarned })
    })
      .then((response) => response.json())
      .then((data) => setTPE(data.data.userDashStats));
  }, []);

  return tpe;
}

function usePrice() {
  const [maticPrice, setPrice] = React.useState([]);

  React.useEffect( async () => {
    const maticPrice = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd`,)
    const priceUst = await maticPrice.json()
    const matic = new BigNumber(priceUst["matic-network"].usd)
    setPrice(new BigNumber(matic));
  }, []);

  return maticPrice;
}