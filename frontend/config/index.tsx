import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage, createConfig, http, Config } from 'wagmi'
import { mainnet, sepolia, bsc, bscTestnet, polygon, polygonMumbai } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
export const config = createConfig({
  chains: [mainnet, sepolia, bsc, polygon, polygonMumbai, bscTestnet],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/FxBgZvpWVsDWVfJMj_u3UU_KN2HY2c1Q",
    {key: 'FxBgZvpWVsDWVfJMj_u3UU_KN2HY2c1Q'}),
    [bsc.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http("https://polygon-mumbai.g.alchemy.com/v2/EcSrakQPOXrrDZq9rY3D_JPAlVe6QpBO",
    {key: 'EcSrakQPOXrrDZq9rY3D_JPAlVe6QpBO'}
    ),
    [bscTestnet.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})