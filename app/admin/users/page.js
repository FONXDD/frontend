"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- Reusable Modal Component ---
const Modal = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  const styles = {
    success: {
      icon: "CheckCircle",
      color: "text-green-500",
      btn: "bg-green-600 hover:bg-green-700",
    },
    error: {
      icon: "XCircle",
      color: "text-red-500",
      btn: "bg-red-600 hover:bg-red-700",
    },
    info: {
      icon: "Info",
      color: "text-cyan-500",
      btn: "bg-cyan-600 hover:bg-cyan-700",
    },
  }[type] || {
    icon: "Info",
    color: "text-cyan-500",
    btn: "bg-cyan-600 hover:bg-cyan-700",
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center">
        <div
          className={`mx-auto w-12 h-12 mb-4 rounded-full bg-slate-50 flex items-center justify-center ${styles.color}`}
        >
          {type === "success" ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-6 text-sm">{message}</p>
        <button
          onClick={onClose}
          className={`w-full py-2.5 rounded-xl text-white font-bold transition-all ${styles.btn}`}
        >
          OK
        </button>
      </div>
    </div>
  );
};

// --- Edit Modal Component ---
const EditModal = ({ isOpen, onClose, onSave, user }) => {
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      let formattedDate = "";
      if (user.birthday) {
        try {
          formattedDate = new Date(user.birthday).toISOString().split("T")[0];
        } catch (e) {}
      }
      setFormData({ ...user, birthday: formattedDate });
    }
  }, [user]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setIsSaving(true);
    await onSave(formData);
    setIsSaving(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
          <h3 className="text-lg font-bold text-slate-800">
            Edit User Profile
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Title
              </label>
              <select
                name="firstname"
                value={formData.firstname || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm"
              >
                <option value="">Select</option>
                <option value="นาย">Mr.</option>
                <option value="นาง">Mrs.</option>
                <option value="นางสาว">Ms.</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                First Name
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-slate-50 text-slate-500 outline-none text-sm cursor-not-allowed"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Password (Reset)
              </label>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={formData.password || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Gender
              </label>
              <select
                name="sex"
                value={formData.sex || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm"
              >
                <option value="">Select</option>
                <option value="ชาย">Male</option>
                <option value="หญิง">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Birthday
              </label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-lg focus:border-cyan-500 outline-none text-sm resize-none"
            ></textarea>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSaving}
            className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 flex items-center"
          >
            {isSaving && (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            )}
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Modals state
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
  });
  const [editUser, setEditUser] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
    else fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://backend016.vercel.app/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setUsers(await res.json());
      else
        setModalInfo({
          isOpen: true,
          type: "error",
          title: "Error",
          message: "Failed to fetch users.",
        });
    } catch (err) {
      setModalInfo({
        isOpen: true,
        type: "error",
        title: "Network Error",
        message: "Could not connect to server.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://backend016.vercel.app/api/users/${deleteConfirm}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        setUsers(users.filter((u) => u.id !== deleteConfirm));
        setModalInfo({
          isOpen: true,
          type: "success",
          title: "Deleted",
          message: "User has been removed.",
        });
      } else {
        setModalInfo({
          isOpen: true,
          type: "error",
          title: "Failed",
          message: "Could not delete user.",
        });
      }
    } catch (err) {
      setModalInfo({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Operation failed.",
      });
    } finally {
      setDeleteConfirm(null);
    }
  };

  const handleEditSave = async (updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://backend016.vercel.app/api/users/${updatedData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (res.ok) {
        setUsers(users.map((u) => (u.id === updatedData.id ? updatedData : u)));
        setEditUser(null);
        setModalInfo({
          isOpen: true,
          type: "success",
          title: "Updated",
          message: "User profile updated successfully.",
        });
      } else {
        setModalInfo({
          isOpen: true,
          type: "error",
          title: "Failed",
          message: "Update failed.",
        });
      }
    } catch (err) {
      setModalInfo({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Network error.",
      });
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.fullname?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Modals --- */}
      <Modal
        {...modalInfo}
        onClose={() => setModalInfo({ ...modalInfo, isOpen: false })}
      />
      <EditModal
        isOpen={!!editUser}
        onClose={() => setEditUser(null)}
        onSave={handleEditSave}
        user={editUser}
      />

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Delete User?</h3>
            <p className="text-slate-500 mb-6 text-sm">
              Are you sure you want to remove this user? This action cannot be
              undone.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-lg border border-slate-200 font-bold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row justify-between lg:mt-[100px] mt-[80px] items-start sm:items-end mb-8 gap-4">
            <div>
                <h1 className="text-2xl font-black text-slate-900">User Management</h1>
                <p className="text-slate-500 text-sm">Total Users: <span className="font-bold text-slate-900">{users.length}</span></p>
            </div>
            
            <div className="flex w-full sm:w-auto gap-3">
                {/* Refresh Button */}
                <button 
                    onClick={fetchUsers} 
                    disabled={loading}
                    className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm"
                    title="Refresh Data"
                >
                    <svg className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </button>

                {/* Search Input */}
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none text-sm transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>

        {/* --- Table View (Desktop) --- */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4">User Info</th>
                <th className="px-6 py-4">Role/ID</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Registered Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-slate-500"
                  >
                    Loading data...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-slate-500"
                  >
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-200">
                          {user.fullname?.charAt(0) || user.username.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-bold text-slate-900">
                            {user.firstname} {user.fullname} {user.lastname}
                          </p>
                          <p className="text-xs text-slate-500">
                            @{user.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        ID: {user.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date().toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => setEditUser(user)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(user.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* --- Card View (Mobile) --- */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {user.username}
                    </h3>
                    <p className="text-xs text-slate-500">ID: {user.id}</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">
                  Active
                </span>
              </div>
              <div className="text-sm text-slate-600 space-y-1 mb-4">
                <p>
                  <span className="font-semibold">Name:</span> {user.firstname}{" "}
                  {user.lastname}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span> {user.sex}
                </p>
              </div>
              <div className="flex gap-2 border-t border-slate-100 pt-3">
                <button
                  onClick={() => setEditUser(user)}
                  className="flex-1 py-2 text-blue-600 font-bold text-sm hover:bg-blue-50 rounded-lg border border-blue-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteConfirm(user.id)}
                  className="flex-1 py-2 text-red-600 font-bold text-sm hover:bg-red-50 rounded-lg border border-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
