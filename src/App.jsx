import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import MainPage from "./Pages/MainPage";
import MainPageProvider from "./contexts/MainPageContext";
import AddListing from "./Pages/AddListing";
import ListingPage from "./Pages/ListingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="mainPage" />} />

          <Route
            path="mainPage"
            element={
              <MainPageProvider>
                <MainPage />
              </MainPageProvider>
            }
          />
          <Route path="AddListing" element={<AddListing />} />
          <Route path="ListingPage" element={<ListingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
