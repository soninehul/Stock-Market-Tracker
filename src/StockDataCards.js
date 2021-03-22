import React from "react";
import StockCard from "./StockCard";
import "./StockDataCards.css";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";



function StockDataCards({ stockDataList, removeStockData}) {
  if (stockDataList.length)
    return (

        <div className="stockcards">
          {stockDataList.map((stockData, i) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <React.Fragment key={i}>
              <StockCard
                {...stockData}
                key={stockData.id}
                removeStockData={removeStockData}
              />
              {i < stockDataList.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>

    );
  return null;
}
export default StockDataCards;
