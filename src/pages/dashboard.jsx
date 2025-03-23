import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (user) {
      setUserData(user);
    } else if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-600">Dashboard</h1>
      {userData ? (
        <>
          <p className="text-xl mt-4 flex items-center">
            <span className="mr-2">👤</span> Welcome, <strong>{userData.name}</strong>
          </p>
          <p className="mt-2 text-gray-600">
            {userData.profile ? "Here is your profile info." : "You have not yet set up a profile, please add some info."}
          </p>
          {!userData.profile && (
            <button 
              className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/create-profile")}
            >
              Create Profile
            </button>
          )}
          <button 
            className="mt-4 ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-lg mt-4">Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
