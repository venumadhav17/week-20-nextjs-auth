"use client";

import { SessionProvider, signOut, useSession, signIn } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      {/*{session.status === "authenticated" ? "Sign in" : "Sign out"} */}
      {session.status === "authenticated" && (
        <button onClick={() => signOut()}>Logout</button>
      )}

      {session.status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      {JSON.stringify(session)}
    </div>
  );
}
