"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [profilePicture, setProfilePicture] = useState("");

  // JS ran on my browser -> Not getting benefits of CSR
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile", {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then((res) => {
        setProfilePicture(res.data.avatarUrl);
      });
  }, []);

  return <div>{profilePicture}</div>;
}
