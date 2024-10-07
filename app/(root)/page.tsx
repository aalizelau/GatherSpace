
import { fetchPosts } from "@/lib/actions/thread.actions";

export default async function Home() {
  const result = await fetchPosts(1,30);
  console.log(result)
    return(
      <main>
        <h1>Threads Home</h1>
      </main>
    )
}