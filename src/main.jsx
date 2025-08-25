import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/firago";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN_HERE';
//   useEffect(() => {
//     async function fetch() {
//       const response = await axios.get(
//         "https://api.real-estate-manager.redberryinternship.ge/api/agents",
//         {
//           headers: {
//             Authorization: "Bearer 9fb7b80a-8090-4037-8008-b2b9c7296b63",
//           },
//         }
//       );
//       console.log(response.data);
//     }
//     fetch();
//   }, []);
