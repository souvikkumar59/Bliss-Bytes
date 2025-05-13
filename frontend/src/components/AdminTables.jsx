import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tables')
      .then(response => setTables(response.data))
      .catch(error => console.error('Error fetching tables:', error));
  }, []);

  const updateTableStatus = (tableNo, status) => {
    axios.put(`http://localhost:5000/api/tables/${tableNo}/status`, { status })
      .then(response => {
        const updatedTables = tables.map(table =>
          table.tableNo === tableNo ? response.data : table
        );
        setTables(updatedTables);
      })
      .catch(error => console.error('Error updating table:', error));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tables</h3>
      {tables.map(table => (
        <div key={table.tableNo} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <div>
            <h4 className="text-lg font-semibold">Table {table.tableNo}</h4>
            <p>Status: {table.status}</p>
          </div>
          <div>
            <button
              onClick={() => updateTableStatus(table.tableNo, 'occupied')}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            >
              Occupy
            </button>
            <button
              onClick={() => updateTableStatus(table.tableNo, 'empty')}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Empty
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminTables;
