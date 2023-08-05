// authentication.js
export const isAuthenticated = () => {
  // Implement your logic to check if the user is authenticated.
  // For example, check if the token exists in localStorage.
  const token = localStorage.getItem("userToken");
  return !!token; // Return true if the user is authenticated, false otherwise.
};
