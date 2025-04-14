import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input placeholder="Search" name="search" value={filters.search} onChange={handleChange} />
      <select name="priority" value={filters.priority} onChange={handleChange}>
        <option value="">All Priorities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="date" name="dueDate" value={filters.dueDate} onChange={handleChange} />
      <input placeholder="Category" name="category" value={filters.category} onChange={handleChange} />
    </div>
  );
};

export default Filters;
