"use client";
import axios from "axios";

export default function Home() {
  return (
    <div>
      Sign in page <br />
      <input
        className='border border-amber-400'
        type='text'
        placeholder='Enter username'
      />
      <input
        className='border border-amber-400'
        type='text'
        placeholder='Enter password'
      />
      <button
        className='border border-amber-400 bg-amber-600 px-2 rounded-md'
        onClick={async () => {
          const res = await axios.post("http://localhost:3000/api/signin", {
            username: "asd",
            password: "asadsf"
          });

          localStorage.setItem("token", res.data.token);
        }}
      >
        Sign in
      </button>
    </div>
  );
}
