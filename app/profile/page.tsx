import axios from "axios";

export default async function Profile() {
  /*const res = await axios.get("http:/localhost:3000/api/profile", {
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
  const profilePicture = res.data.avatarUrl;*/

  // const profilePicture = 'http://cat.png';
  // No-Follow-Up request that needs to go from the client in the network tab

  // It's not going out from JS here. It's going out from the browser. /profile I can't read ?localStorage from the route itself

  return <div>{profilePicture}</div>;
}
