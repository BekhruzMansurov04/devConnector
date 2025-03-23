import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { id } = useParams();
  console.log(id);
  const [profile, setProfile] = useState({});
  
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/${id}`, {
        headers: { "x-auth-token": token,
         },
      })
    .then((res) => setProfile(res.data));
  }, []);
console.log(profile);
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link to="/developers" className="text-teal-500 hover:underline">
        ← Back To Profiles
      </Link>
      <div className="mt-6 p-6 border border-gray-300 bg-white rounded-md shadow-md">
        <h3>{profile.social}</h3>
              <img
                src={profile.avatar}
                alt="User"
                className="w-28 h-28 rounded-full border"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                {profile.name || "No Name Provided"}
              </h3>
              <p className="text-gray-600 text-md">
                {profile.status} {profile.company}
              </p>
              <p className="text-gray-600">
                {profile.location || "🌍 Location not provided"}
              </p>

        <p className="text-gray-600 mt-2">{profile.bio}</p>

        <p className="mt-4">
          <strong className="text-gray-800">Status:</strong> {profile.status}
        </p>
        <p>
          <strong className="text-gray-800">Company:</strong> {profile.company}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
