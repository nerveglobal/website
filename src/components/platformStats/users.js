import * as React from "react";

const GlobalUsers = `
  {
    globalStats {
      users
  }
}
`;

export default function Users() {
  const users = useUsers();

  return (
    <div>
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.users}</li>
        ))}
      </ul>
    </div>
  );
}

function useUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("http://ec2-3-68-153-1.eu-central-1.compute.amazonaws.com:8000/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GlobalUsers })
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.data.globalStats));
  }, []);

  return users;
}