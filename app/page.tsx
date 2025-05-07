import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  // const res = await axios.get()
  return <div>{JSON.stringify(session)}</div>;
}
