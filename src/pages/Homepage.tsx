import { useEffect, useState } from "react";
import styles from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { suite: string; street: string; city: string };
};

export default function Homepage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log((error as Error).message);
      }
      setLoading(false);
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
          {loading
            ? Array(10)
                .fill(0)
                .map((_, i) => (
                  <li
                    key={i}
                    className={styles["user-list-item-placeholder"]}
                    style={{ animationDelay: `${i * 100}ms` }}
                  ></li>
                ))
            : filteredUsers.map((user) => (
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
