import React, { useState } from 'react'
import './App.scss'

declare const window: any

function App () {
  const [chainId, setChainId] = useState<number | null>(null)
  const [log, setLog] = useState<string[]>([])

  const networkName = chainId === 30 ? 'Mainnet' : 'Testnet'

  const addNetwork = (params: any) =>
    window.ethereum.request({ method: 'wallet_addEthereumChain', params })
      .then(() => {
        setLog([...log, `Switched to ${params[0].chainName} (${parseInt(params[0].chainId)})`])
        setChainId(parseInt(params[0].chainId))
      })
      .catch((error: Error) => setLog([...log, `Error: ${error.message}`]))

  const addRskTestnet = () =>
    addNetwork([
      {
        chainId: '0x1f',
        chainName: 'RSK Testnet',
        nativeCurrency: {
          name: 'Test RSK BTC',
          symbol: 'tRBTC',
          decimals: 18
        },
        rpcUrls: ['https://public-node.testnet.rsk.co'],
        blockExplorerUrls: ['https://explorer.testnet.rsk.co']
      }
    ])

  const addRskMainnet = () =>
    addNetwork([
      {
        chainId: '0x1e',
        chainName: 'RSK Mainnet',
        nativeCurrency: {
          name: 'RSK BTC',
          symbol: 'RBTC',
          decimals: 18
        },
        rpcUrls: ['https://public-node.rsk.co'],
        blockExplorerUrls: ['https://explorer.rsk.co']
      }
    ])

  const addToken = (params: any) =>
    window.ethereum.request({ method: 'wallet_watchAsset', params })
      .then(() => setLog([...log, 'Success, Token added!']))
      .catch((error: Error) => setLog([...log, `Error: ${error.message}`]))

  const addRifToken = () =>
    addToken({
      type: 'ERC20',
      options: {
        address: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5',
        symbol: 'RIF',
        decimals: 18,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
      }
    })

  const addTestnetRifToken = () =>
    addToken({
      type: 'ERC20',
      options: {
        address: '0x19f64674d8a5b4e652319f5e239efd3bc969a1fe',
        symbol: 'tRIF',
        decimals: 18,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
      }
    })

  return (
    <div className="App">
      <header className="App-header">
        Add Testnet and Mainnet RSK to Metamask.
      </header>

      <section>
        <h2>step 1</h2>
        Download Metamask.
      </section>

      {chainId && (
        <section>
          <h2>Current Network</h2>
          <p><strong>ChainId</strong> {chainId}</p>
          <p><strong>Name</strong> {networkName}</p>
        </section>
      )}

      <section>
        <h2>Step 2:</h2>
        <p>Click the buttons here to add the Mainnet or Testnet, or change to that network if you already have them configured!</p>

        <button onClick={addRskMainnet}>Add RSK Mainnet</button>
        <button onClick={addRskTestnet}>Add RSK Testnet</button>
      </section>

      {chainId && (
        <section>
          <h2>Step 3:</h2>
          <p>Add the RIF token!</p>
          <p>Click below to add the <strong>{networkName}</strong> RIF token.</p>
          <button onClick={chainId === 30 ? addRifToken : addTestnetRifToken}>Add RIF Token</button>
        </section>
      )}

      <section>
        <h2>log</h2>
        <ul>
          {log.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <hr />
      <a href="https://github.com/rsksmart/metamask-rsk-custom-network">Github code</a>
    </div>
  )
}

export default App
