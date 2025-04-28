import jwt from "jsonwebtoken";
import { NextResponse, type NextRequest } from "next/server";

export function GET(req: NextRequest) {
  /*const headers = req.headers;
  const authorizationHeader = headers["authorization"];
  const decoded = jwt.decode(authorizationHeader, "SECRET");
  const userId = decoded.userId;*/

  // Hit the DB to get the users profile picture

  //original approach
  return NextResponse.json({
    avatarUrl: "http://images.google.com/cat.png"
  });
}

/*app.get("/profile", userMiddleWare); // userMiddleWare would extract the cookie from the header */
// Middleware
