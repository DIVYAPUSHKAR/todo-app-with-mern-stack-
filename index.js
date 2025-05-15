const express = require("express");

const PORT = 8000; // Corrected assignment

// Initialize app
const app = express(); // Corrected syntax

// Set view engine
app.set("view engine", "ejs");

// Listen on server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Use backticks for template literals
});
