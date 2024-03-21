import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { name } = useContext(UserContext);
  if (!name) return <div>Please Login</div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {name}</p>
    </div>
  );
};

export default Profile;
