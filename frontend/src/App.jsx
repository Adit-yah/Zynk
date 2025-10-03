import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Create from "./pages/create/Create";
import SearchPage from "./pages/search/Search";
import Chat from "./pages/chat/Chat.jsx";
import Conversation from "./pages/chat/Conversation.jsx";
import Protected from "./components/Protected.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Accounts from "./pages/menu/Accounts.jsx";

export default function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected / Layout Routes */}
        <Route element={<Protected />}>
          {/* wrapper */}
          <Route  element={<Layout />}>
            {/* Home */}
            <Route path="/home" element={<HomePage />} />
            {/* Profile */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/menu" element={<Menu />} />
            <Route path="/profile/menu/account" element={<Accounts />} />
            {/* New post  */}
            <Route path="/create" element={<Create />} />
            {/* search */}
            <Route path="/search" element={<SearchPage />} />
            {/* Chat */}
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:chatId" element={<Conversation />} />
          </Route>
        </Route>
      </Routes>
  );
}
