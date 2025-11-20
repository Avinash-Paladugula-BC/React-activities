import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [issues, setIssues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const containsNumber = (str) => {
    for (let char of str) {
      if (char >= "0" && char <= "9") {
        return true;
      }
    }
    return false;
  };

  const containsSpecialCharacters = (str) => {
    const specialChars = "!@#$%^&*`~";
    for (let char of str) {
      if (specialChars.includes(char)) {
        return true;
      }
    }
    return false;
  };

  const getPasswordStrength = () => {
    if (password.length === 0) return "";
    if (password.length < 8) return "Weak";
    const hasNumbers = containsNumber(password);
    const hasSpecialCharacters = containsSpecialCharacters(password);
    if (password.length >= 10 && hasNumbers && hasSpecialCharacters) {
      return "Strong";
    }
    return "Moderate";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let issues = {};

    if (!username) issues.username = "Username cannot be empty.";
    if (password.length < 8) issues.password = "Password must be at least 8 characters.";
    if (confirmPassword !== password) issues.confirmPassword = "Passwords do not match.";
    setIssues(issues);
    if (Object.keys(issues).length === 0) {
      setSubmitted(true);
    }
  };
  if (submitted) {
    return <h3>Registration successful!</h3>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label><br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {issues.username && <p>{issues.username}</p>}
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && <p>Password Strength: {getPasswordStrength()}</p>}
        {issues.password && <p>{issues.password}</p>}
      </div>

      <div>
        <label>Confirm Password:</label><br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {issues.confirmPassword && <p>{issues.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
