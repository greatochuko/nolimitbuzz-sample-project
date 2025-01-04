import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType } from "./Homepage";
import styles from "../styles/UserDetailsPage.module.css";

export default function UserDetailsPage() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.org/users/${userId}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log((error as Error).message);
      }
      setLoading(false);
    }

    fetchUser();
  }, [userId]);

  return (
    <div className={styles["user-details-container"]}>
      {loading ? (
        <div className={styles["loading"]}>Loading...</div>
      ) : user ? (
        <>
          <h1>
            {user.firstname} {user.lastname}
          </h1>
          <p className={styles["user-detail"]}>
            <strong>Firstname:</strong> {user.firstname}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Lastname:</strong> {user.lastname}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Email:</strong> {user.email}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Address:</strong> {user.address.suite},{" "}
            {user.address.street}, {user.address.city}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Date of birth:</strong> {user.birthDate}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Website:</strong> {user.website}
          </p>
          <p className={styles["user-detail"]}>
            <strong>Company name:</strong> {user.company.name}
          </p>
        </>
      ) : (
        <div className={styles["error"]}>User not found</div>
      )}
    </div>
  );
}