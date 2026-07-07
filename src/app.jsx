import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomersList from "./pages/CustomersList";
import AdminLayout from "./layouts/AdminLayout";
import AddCustomer from "./pages/AddCustomer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={<CustomersList />} />
          <Route path="customers/add" element={<AddCustomer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;