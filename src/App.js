import {Web3Context} from 'web3-hooks'
import {useContext, useState} from 'react'
import {ethers} from "ethers"
import './App.css';

function App() {
  const [web3state, login] = useContext(Web3Context)
  const [ethBalance, setEthBalance] = useState(0)
  const [address, setAddress] = useState(ethers.constants.AddressZero)

  const handleClickGetBalance = async () => {
    const balance = await web3state.provider.getBalance(address)
    setEthBalance(ethers.utils.formatEther(balance))
    console.log(balance)
  }
  return (
    <>
    <p>Metamask installed: {web3state.isMetaMask ? 'yes' : 'no'}</p>
    <p>Web3: {web3state.isWeb3 ? 'injected' : 'no-injected'}</p>
    {!web3state.isLogged && (
      <>
      <button onClick={login}>login</button>
      </>
    )}
    <p>Network id: {web3state.chainId}</p>
    <p>Network name: {web3state.networkName}</p>
    <p>account: {web3state.account}</p>
    <p>balance {web3state.balance}</p>
    <label htmlFor="balanceOf">balance of :</label>
    <input id="balanceOf" 
    type="text" 
    value={address} 
    placeholder={"ethereum address"} 
    onChange={(event) => setAddress(event.target.value)}/>

    <button onClick={handleClickGetBalance}>get balance</button>
    <p>balance of : {address} : {ethBalance} ETH</p>
    </>
  );
}

export default App;
