import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Contact List</h2>
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchBar}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button style={styles.addButton}>+ Add Manager</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S.No</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Mobile</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>1</td>
            <td style={styles.td}>John Doe</td>
            <td style={styles.td}>1234567890</td>
            <td style={styles.td}>john@example.com</td>
            <td style={styles.td}>
              <FaEdit style={styles.icon} title="Edit" />
              <FaTrash style={styles.icon} title="Delete" />
            </td>
          </tr>
          <tr>
            <td style={styles.td}>2</td>
            <td style={styles.td}>Jane Smith</td>
            <td style={styles.td}>9876543210</td>
            <td style={styles.td}>jane@example.com</td>
            <td style={styles.td}>
              <FaEdit style={styles.icon} title="Edit" />
              <FaTrash style={styles.icon} title="Delete" />
            </td>
          </tr>
          <tr>
            <td style={styles.td}>3</td>
            <td style={styles.td}>Mike Ross</td>
            <td style={styles.td}>5678901234</td>
            <td style={styles.td}>mike@example.com</td>
            <td style={styles.td}>
              <FaEdit style={styles.icon} title="Edit" />
              <FaTrash style={styles.icon} title="Delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  searchBar: {
    padding: "8px",
    width: "200px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 15px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "10px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
  icon: {
    marginRight: "10px",
    cursor: "pointer",
    color: "#007BFF",
  },
};

export default Table;
