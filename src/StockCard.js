import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StockCard.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// key: LOTL819YCVCGOBPV

function StockCard({ id, stockName, removeStockData}) {
    const initialData = {
        name : "",
        price : null,
        dateAndTime : "" 
    }
    const [finalData, setFinalData] = useState(initialData);
    useEffect(() => {
        async function getStockData(stockName){
            console.log(stockName);
            const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&interval=15min&apikey=LOTL819YCVCGOBPV`);
            const keys = Object.keys(response.data);
            console.log(keys[0]);
            if(response.data){
            const dayData = response.data["Time Series (15min)"];
            const dateTime = response.data["Meta Data"]["3. Last Refreshed"];
            console.log(dateTime);
            const lastData = dayData[dateTime];
            const stockPrice = lastData['4. close'];
            console.log(stockPrice);
            setFinalData({name: stockName, price: stockPrice, dateAndTime: dateTime});}
        }
        getStockData(stockName)
    },[stockName])
    return(
        <div>
        {finalData.price && 
            <div className= "stock-card">
            <ul>
                <li><h4>{finalData.name}</h4></li>
                <li>{finalData.price && <p>Price: {finalData.price}</p>}</li>
                <li>{finalData.dateAndTime && <p>Last Updated: {finalData.dateAndTime}</p>}</li>
            </ul>
            <IconButton className="delete-icon" aria-label='Delete' onClick={() => removeStockData(id)}>
                    <DeleteIcon />
            </IconButton>
        </div>}
        </div>
    )
}
export default StockCard;

