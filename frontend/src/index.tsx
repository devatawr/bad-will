import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import "@rainbow-me/rainbowkit/styles.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { defineChain } from "viem";

export const Redtone = defineChain({
    id: 690,
    name: 'Redtone',
    nativeCurrency: {name: 'ETH', symbol: 'ETH', decimals: 18},
    rpcUrls: {
        default: {http: ['https://rpc.redstonechain.com']},
    }
})

export const config = getDefaultConfig({
    appName: 'bad will',
    projectId: 'c20a257fc4f033185fb76c6d52581390',
    chains: [Redtone],
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme()} modalSize={"compact"}>
                    <App/>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
