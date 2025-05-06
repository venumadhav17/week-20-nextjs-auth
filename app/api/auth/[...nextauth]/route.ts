import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "harkirat@gmail.com"
        },
        password: { label: "Password", type: "password" },
        adminPassword: { label: "Admin Password", type: "password" }
      },

      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);
        // db request to check if this username and password are correct
        const user = {
          name: "harkirat",
          id: "1",
          username: "harkirat@gmail.com"
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }),

    GoogleProvider({
      clientId: "asd",
      clientSecret: "asd"
    })
  ]
}); // This library takes care of authentication needs

// configuration parameters with NextJS
export { handler as GET, handler as POST };

/* function (req) {
res } */

/* export const GET = handler; 
export const GET = function(req) {
  return NextResponse.json() 
}*/

// export const POST = handler;

// np instead of npm run dev

// 1. How does the backend authenticate ?
// 2. How does the frontend authenticate ?
