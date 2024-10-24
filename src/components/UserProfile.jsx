import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("loggedUser");
    if (email) {
      const userData = JSON.parse(localStorage.getItem(email));
      setUser(userData);
    } else {
      navigate("/");
    }
  }, [navigate]);

  // handle the logout button functionality
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="container-fluid page-container">
      <div className="profile-card">
        <h2>Welcome, {user.fullName}!</h2>
        <div className="user-details">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Full Name:</strong> {user.fullName}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
        </div>
        <div className="button-group">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
