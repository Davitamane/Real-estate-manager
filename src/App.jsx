import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import MainPage from "./Pages/MainPage";
import MainPageProvider from "./contexts/MainPageContext";
import AddListing from "./Pages/AddListing";
import ListingPage from "./Pages/ListingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ModalProvider from "./contexts/ModalContext";
import Modal from "./Pages/Modal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ModalProvider>
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
          <Modal />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
