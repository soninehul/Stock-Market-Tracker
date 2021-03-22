import React from "react";
import useInputState from './useInputState';
import "./StockDataForm.css";

function StockDataForm({ addStockData }) {
    const [value, handleChange, reset] = useInputState("");
    return (
      <div className="main">
        <form className="stock-form"
          onSubmit={e => {
            e.preventDefault();
            addStockData(value);
            reset();
          }}
        >
              <input 
                type='text'
                value={value}
                onChange={handleChange}
                margin='normal'
                placeholder='Add New Stock'
              />
            <div className= "stock-buttons">
            <button className="btn btn-primary btn-md">Add Stock</button>
            </div>
        </form>
      </div>
    );
  }
  export default StockDataForm;