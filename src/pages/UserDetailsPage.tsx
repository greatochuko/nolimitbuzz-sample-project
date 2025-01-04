import { useParams } from "react-router-dom";

export default function UserDetailsPage() {
  const { userId } = useParams();
  console.log(userId);
  return <div>UserDetailsPage</div>;
}
