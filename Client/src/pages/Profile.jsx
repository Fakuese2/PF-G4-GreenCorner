import "tailwindcss/tailwind.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavUser from "../components/Navbar/Navbar.user"
const Profile = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();
  return ( isAuthenticated  &&(
  <div>
    <img src={user.picture} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
  </div>
  ) 


  )
  
};

export default Profile;