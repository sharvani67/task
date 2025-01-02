import React, { useState } from "react";
import DataTable from "react-data-table-component";

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

  const columns = [
    { name: "S.No", selector: (row) => row.sNo, sortable: true },
    { name: "Guest", selector: (row) => row.guest, sortable: true },
    { name: "Quotations", selector: (row) => row.quotations, sortable: true },
    { name: "Order Date", selector: (row) => row.orderDate, sortable: true },
    { name: "Check In", selector: (row) => row.checkIn, sortable: true },
    { name: "Check Out", selector: (row) => row.checkOut, sortable: true },
    { name: "Special Request", selector: (row) => row.specialRequest },
    { name: "Room Type", selector: (row) => row.roomType, sortable: true },
    { name: "Trip Status", selector: (row) => row.tripStatus, sortable: true },
    { name: "Added By", selector: (row) => row.addedBy },
  ];

  // Custom styles for the DataTable
  const customStyles = {
    headCells: {
      style: {
        borderBottom: "2px solid black",
        backgroundColor: "#f4f4f4",
        fontWeight: "bold",
        fontSize: "14px",
        padding: "10px",
      },
    },
    cells: {
      style: {
        borderBottom: "1px solid #ddd",
        padding: "10px",
      },
    },
    rows: {
      style: {
        minHeight: "50px", // override the row height
        '&:nth-of-type(even)': {
          backgroundColor: "#f9f9f9",
        },
        '&:hover': {
          backgroundColor: "#f1f1f1",
        },
      },
    },
    pagination: {
      style: {
        borderTop: "1px solid #ddd",
      },
    },
  };

  // Filter the data based on the search text
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
        {/* Entries Dropdown and Search Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Entries Dropdown */}
          <div>
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
          </div>

          {/* Search Bar */}
          <div>
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
      </div>

      {/* Data Table Container with Borders and Margins */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          margin: "20px 0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <DataTable
          columns={columns}
          data={filteredData}
          customStyles={customStyles}
          pagination
          paginationPerPage={rowsPerPage}
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
};

export default Lead;
