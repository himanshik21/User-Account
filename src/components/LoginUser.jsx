import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle the login button functionality
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
      localStorage.setItem("loggedUser", email);
      console.log("loggin");
      navigate("/profile");
      console.log("run");
    } else {
      setError("Incorrect Email or Password");
      alert("Invalid user credentials. Please Register first!");
    }
  };

  return (
    <div className="container-fluid page-container">
      <div className="form-container">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="mt-3 text-center">
            Don’t have an account? <a href="/register">Register Here!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
