export function initAdmin() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  // Check if admin already exists
  if (!users.some(u => u.email === "admin@gmail.com")) {
    users.push({
      email: "admin@gmail.com",
      password: "admin",
      role: "admin"
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
}
