"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => setUsers(resp.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-between items-start gap-2 container m-auto">
      <main>{children}</main>
      <aside className="w-[20rem] bg-zinc-100 p-4 rounded-lg flex flex-col justify-center gap-4">
        {users.map((user, index) => (
          <div key={index} className="bg-slate-400 p-2 rounded">
            {user.name}
          </div>
        ))}
      </aside>
    </div>
  );
};

export default RootLayout;
