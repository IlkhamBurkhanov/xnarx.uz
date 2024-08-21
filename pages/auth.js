import Login from "../components/Login/login";
import Setup from "../components/Login/setup";

export default function Auth() {
  const categoryId = false;

  return <>{categoryId ? <Login /> : <Setup />}</>;
}
