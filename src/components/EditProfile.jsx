import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [editFullName, setEditFullName] = useState("");
  const [email, setEmail] = useState("");
  const [editCountry, setEditCountry] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const[error,setError] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("loggedUser");
    if (email) {
      const userData = JSON.parse(localStorage.getItem(email));
      setEditFullName(userData.fullName);
      setEmail(userData.email);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem(email));

    if (newPassword && currentPassword !== userData.password) {
      setError("Current password is incorrect.");
      return;
    }

    const updatedUser = {
      fullName: editFullName ? editFullName : userData.fullName,
      email,
      country: editCountry ? editCountry : userData.country,
      password: newPassword ? newPassword : userData.password,
    };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    navigate("/profile");
  };

  return (
    <div className="container-fluid page-container">
      <div className="profile-card">
        <h2>Edit Profile</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={editFullName}
              onChange={(e) => setEditFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email (Read-only)</label>
            <input
              type="email"
              className="form-control"
              value={email}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              value={editCountry}
              onChange={(e) => setEditCountry(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
