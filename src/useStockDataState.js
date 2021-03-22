import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default initialStockDataList => {
  const [stockDataList, setStockDataList] = useState(initialStockDataList);
  return {
    stockDataList,
    addStockData: newStockName => {
      setStockDataList([...stockDataList, { id: uuidv4(), stockName: newStockName}]);
    },
    removeStockData: stockDataId => {
      const updatedStockDataList = stockDataList.filter(stockData => stockData.id !== stockDataId);
      setStockDataList(updatedStockDataList);
    },
    editTodo: (stockDataId, newQuantity) => {
      const updatedStockDataList = stockDataList.map(stockData =>
        stockData.id === stockDataId ? { ...stockData} : stockData
      );
      setStockDataList(updatedStockDataList);
    }
  };
};