// secure/login.js
// ✅ SECURE AUTHENTICATION EXAMPLE

const bcrypt = require("bcrypt");

// Simulated database with hashed passwords
const users = [
  {
    username: "admin",
    passwordHash: bcrypt.hashSync("admin123", 10),
    role: "admin"
  }
];

async function login(username, password) {
  const user = users.find(u => u.username === username);

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  // ✅ Secure password comparison
  const passwordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatch) {
    return { success: false, message: "Invalid credentials" };
  }

  // ✅ Authentication successful
  return {
    success: true,
    message: "Login successful",
    role: user.role
  };
}

// Example usage
login("admin", "admin123").then(console.log);
