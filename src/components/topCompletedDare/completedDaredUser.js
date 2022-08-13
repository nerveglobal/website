import * as React from "react";

const TopCompletedDare = `
{
  tasks(where: { finished: true },orderBy:amount, orderDirection:desc, first: 1) 
  {
      recipientName
  }
}
`;


export default function CompletedDaredUser() {
  const tcd = useTCD();

  return (
    <div>
      <ul>
        {tcd.map((tcd) => (
          <li key={tcd.id}>{tcd.recipientName}
          <a target="_blank" rel="noreferrer" href={"https://app.nerveglobal.com/#" + tcd.recipientName}>
          ↗
          </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function useTCD() {
  const [tcd, setTCD] = React.useState([]);

  React.useEffect(() => {
    fetch("http://ec2-3-68-153-1.eu-central-1.compute.amazonaws.com:8000/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopCompletedDare })
    })
      .then((response) => response.json())
      .then((data) => setTCD(data.data.tasks));
  }, []);

  return tcd;
}