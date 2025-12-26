import { useState } from "react";
import API from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/contact", form);
    alert("Message sent successfully");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <input
          className="input mb-3"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="input mb-4"
          placeholder="Message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn-primary w-full">Send</button>
      </form>
    </div>
  );
};

export default Contact;
