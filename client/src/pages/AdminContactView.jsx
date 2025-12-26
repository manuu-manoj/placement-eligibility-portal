import { useEffect, useState } from "react";
import API from "../services/api";

const AdminContactView = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get("/contact")
      .then(res => setMessages(res.data))
      .catch(() => alert("Access denied or failed"));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Contact Messages (Admin Only)
      </h2>

      {messages.length === 0 ? (
        <p>No contact messages</p>
      ) : (
        messages.map(msg => (
          <div key={msg._id} className="border p-4 mb-3 rounded">
            <p><b>Name:</b> {msg.name}</p>
            <p><b>Email:</b> {msg.email}</p>
            <p><b>Message:</b> {msg.message}</p>
            <p className="text-sm text-gray-500">
              {new Date(msg.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminContactView;
