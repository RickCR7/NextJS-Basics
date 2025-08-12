import { useEffect } from "react"; "react"
import { useRouter } from "next/router";

const useUser = () => ({
    user: {name: "Akash"},
    loading: false
})

const IndexPage = () => {
  const router = useRouter();

  const user = useUser();
    useEffect(() => {
        if(user.user == null) {
        router.replace("/");
        }
    },[router, user.user])
  return (
    <div>
      <h3>This is index page for {router.query.username}</h3>
      <button
        onClick={(e) =>
          router.push({
            pathname: "[username]/settings",
            query: { username: router.query.username },
          })
        }
      >
        Open Settings Page
      </button>
      <br />
      <button onClick={(e) => router.replace("/")}>Go to Home</button>
      <br />
      <button onClick={e => router.reload()}>Reload</button>
    </div>
  );
};

export default IndexPage;
