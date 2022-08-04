import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Coin from './component/Coin';

function App() {

  const[listOfCoins,setListOfCoins] = useState([]);
  const[searchWord , setSearchWord] = useState("");

  useEffect(() => {

    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((res) => {
      setListOfCoins(res.data.coins);
    });

  },[]);

  const filterCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Enter crypto name" onChange={(event) => {
          setSearchWord(event.target.value);
        }}/>  
      </div>
      <div className="cryptoDisplay">{filterCoins.map((coin) => {
        return <Coin name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon}/>
      })}</div>
    </div>
  );
}

export default App;
