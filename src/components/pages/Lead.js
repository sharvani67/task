import React, { useState } from "react";

const Lead = () => {
  const [searchText, setSearchText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const data = [
    {
      sNo: 1,
      guest: "John Doe",
      quotations: "$1200",
      orderDate: "2025-01-01",
      checkIn: "2025-01-10",
      checkOut: "2025-01-15",
      specialRequest: "Vegetarian meals",
      roomType: "Deluxe Suite",
      tripStatus: "Confirmed",
      addedBy: "Admin",
    },
    {
      sNo: 2,
      guest: "Jane Smith",
      quotations: "$900",
      orderDate: "2025-01-02",
      checkIn: "2025-01-12",
      checkOut: "2025-01-17",
      specialRequest: "Early check-in requested",
      roomType: "Standard Room",
      tripStatus: "Pending",
      addedBy: "Manager",
    },
    {
      sNo: 3,
      guest: "Mike Johnson",
      quotations: "$1500",
      orderDate: "2025-01-03",
      checkIn: "2025-01-20",
      checkOut: "2025-01-25",
      specialRequest: "Extra pillows",
      roomType: "Executive Room",
      tripStatus: "Cancelled",
      addedBy: "Staff",
    },
    {
      sNo: 4,
      guest: "Emily Davis",
      quotations: "$1100",
      orderDate: "2025-01-04",
      checkIn: "2025-01-15",
      checkOut: "2025-01-20",
      specialRequest: "Ocean view",
      roomType: "Superior Room",
      tripStatus: "Confirmed",
      addedBy: "Admin",
    },
    {
      sNo: 5,
      guest: "Robert Brown",
      quotations: "$950",
      orderDate: "2025-01-05",
      checkIn: "2025-01-18",
      checkOut: "2025-01-23",
      specialRequest: "Gluten-free meals",
      roomType: "Standard Room",
      tripStatus: "Pending",
      addedBy: "Manager",
    },
  ];

  // Filter data based on search text
  const filteredData = data.filter(
    (item) =>
      item.guest.toLowerCase().includes(searchText.toLowerCase()) ||
      item.specialRequest.toLowerCase().includes(searchText.toLowerCase()) ||
      item.roomType.toLowerCase().includes(searchText.toLowerCase()) ||
      item.tripStatus.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Guest Booking Details</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Search bar */}
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
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Guest</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Quotations</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Order Date</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Check In</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Check Out</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Special Request</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Room Type</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Trip Status</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Added By</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, rowsPerPage).map((row, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.sNo}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.guest}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.quotations}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.orderDate}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.checkIn}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.checkOut}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.specialRequest}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.roomType}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.tripStatus}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.addedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lead;
