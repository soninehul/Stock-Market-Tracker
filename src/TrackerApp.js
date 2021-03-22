import React, { useEffect } from "react";
import "./TrackerApp.css";
import useStockDataState from "./useStockDataState";
import StockDataForm from "./StockDataForm";
import StockDataCards from "./StockDataCards";
// key: LOTL819YCVCGOBPV

function TrackerApp() {
    //${stockData.stock}
    const initialStockDataList = JSON.parse(window.localStorage.getItem("stockDataList") || "[]");
    const { stockDataList, addStockData, removeStockData } = useStockDataState(
        initialStockDataList
      );

    useEffect(() => {
        window.localStorage.setItem("stockDataList", JSON.stringify(stockDataList));
      }, [stockDataList]);


    return(
        <div >
            <h1>Stock Market Tracker</h1>
            <StockDataForm addStockData={addStockData} />
            <br/>
            <StockDataCards
            stockDataList={stockDataList}
            removeStockData={removeStockData}
            />
        </div>
        
    )

}

export default TrackerApp;
