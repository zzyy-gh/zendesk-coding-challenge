// *** initialize the server ***

import App from "./App.js";

const PORT = process.env.PORT || 9000;

App.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
