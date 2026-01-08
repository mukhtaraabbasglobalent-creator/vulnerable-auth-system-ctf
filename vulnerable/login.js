// vulnerable/login.js
// ⚠️ INTENTIONALLY INSECURE CODE – FOR LEARNING ONLY

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "password", role: "user" }
];

function login(username, password) {
  for (let user of users) {
    // ❌ Plain-text password comparison (CWE-256)
    if (user.username === username && user.password === password) {
      // ❌ No session handling, no rate limiting
      return {
        success: true,
        message: "Login successful",
        role: user.role,
        flag: "CTF{plain_text_passwords_are_bad}"
      };
    }
  }

  // ❌ Weak error handling
  return { success: false, message: "Invalid credentials" };
}

// Example usage
console.log(login("admin", "admin123"));
