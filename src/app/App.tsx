import { Route, Routes } from "react-router-dom";
import Form from "../components/shared/Form";
import Profile from "../components/shared/Profile";
import Layout from "../components/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
