import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Table = () => {
  const [searchText, setSearchText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const data = [
    {
      sNo: 1,
      name: "John Doe",
      mobile: "1234567890",
      email: "john@example.com",
    },
    {
      sNo: 2,
      name: "Jane Smith",
      mobile: "9876543210",
      email: "jane@example.com",
    },
    {
      sNo: 3,
      name: "Mike Ross",
      mobile: "5678901234",
      email: "mike@example.com",
    },
    {
      sNo: 4,
      name: "Rachel Zane",
      mobile: "4321987654",
      email: "rachel@example.com",
    },
    {
      sNo: 5,
      name: "Harvey Specter",
      mobile: "5674328901",
      email: "harvey@example.com",
    },
    // More data can be added
  ];

  // Filter data based on search text
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.mobile.includes(searchText) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Contact List</h1>

      {/* Controls for search and rows per page */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <label htmlFor="entries">Show entries: </label>
          <select
            id="entries"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            style={{ padding: "5px", borderRadius: "5px" }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              padding: "5px",
              fontSize: "16px",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", borderBottom: "2px solid black" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>S.No</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Mobile</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, rowsPerPage).map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.sNo}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.mobile}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <FaEdit style={{ marginRight: "10px", cursor: "pointer", color: "#007BFF" }} />
                <FaTrash style={{ cursor: "pointer", color: "#FF4C4C" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
