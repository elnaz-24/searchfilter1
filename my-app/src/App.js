import { useState } from "react";
import "./app.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  // console.log(Users[0]["first_name"]);

  //  console.log(
  //    Users.filter((user) => user.first_name.toLocaleLowerCase().includes("fe"))
  // );
  const search = (data) => {
    return data.filter(
      (item) =>
        keys.some(key=>item[key].toLocaleLowerCase().includes(query))
        // item.first_name.toLocaleLowerCase().includes(query) ||
        // item.last_name.toLocaleLowerCase().includes(query) ||
        // item.email.toLocaleLowerCase().includes(query)
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search....."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />

      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLocaleLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
export default App;
