import {useSession, signIn, signOut} from "next-auth/react"
import styles from "../styles/Home.module.css"


export default function Home() {
  const session = useSession();
  console.log("Session", session);

  if(session.data === null) {
    return <button onClick={signIn}>Login</button>
  }
  return (
    <div className={styles.container}>
      <h1>Hello {session?.data?.user.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}
