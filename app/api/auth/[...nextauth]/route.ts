import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        return {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          username: "mbabsnab"
        };

        /*if (user) {
          return user;
        } else {
          return null;
        }*/
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };

/* 

session.user = {
      name: token.name,
      email: token.email,
      image: token.picture 
};

*/
