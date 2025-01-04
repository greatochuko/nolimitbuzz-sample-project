import { useEffect, useState } from "react";
import styles from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [users, setUsers] = useState<
    {
      id: number;
      name: string;
      email: string;
    }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  const filteredUsers = searchQuery.trim()
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  return (
    <div>
      <div className={styles["user-list-container"]}>
        <div className={styles["user-list-header"]}>
          <h1>Users</h1>
          <input
            type="text"
            placeholder="Search users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ul className={styles["user-list"]}>
          {filteredUsers.map((user) => (
            <li key={user.id} className={styles["user-list-item"]}>
              <input tabIndex={0} type="checkbox" />
              <div className={styles["user-list-item-content"]}>
                {user.name} <span>{user.email}</span>
              </div>
              <Link to={`/user/${user.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
