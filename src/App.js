import {Web3Context} from 'web3-hooks'
import {useContext} from 'react'
import './App.css';

function App() {
  const [web3state, login] = useContext(Web3Context)
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
    <p>Network id: {web3state.balance}</p>
    </>
  );
}

export default App;
