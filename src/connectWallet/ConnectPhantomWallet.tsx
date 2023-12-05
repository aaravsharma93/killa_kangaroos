import { useEffect, useState } from "react";
import { PublicKey, Transaction, clusterApiUrl, Connection } from "@solana/web3.js";
import "./ConnectPhantomWallet.css";
import { Dropdown } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAccount } from "@solana/spl-token";


export let walletKeytoJS = [];

toast.configure();

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

function ConnectPhantomWallet() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  /**
   * @description gets Phantom provider, if it exists
   */
  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };

  /**
   * @description prompts user to connect wallet if it exists
   */
  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const connection = new Connection(clusterApiUrl("testnet"), "confirmed");
        const response = await solana.connect();
        
        setWalletKey(response.publicKey.toString());
        console.log("wallet account -------", response.publicKey.toString());
        walletKeytoJS.push(response.publicKey.toString());

      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  /**
   * @description disconnect Phantom wallet
   */
  const disconnectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (walletKey && solana) {
      await (solana as PhantomProvider).disconnect();
      setWalletKey(undefined);
    }
  };

  // detect phantom provider exists
  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);

  const notify = () => {
    toast("No Wallet Found, Please Install Phantom Wallet.")
  }

  return (
    <>
      {provider && !walletKey && (
        <div className="connect-wallet-button">
        <div onClick={connectWallet}>Connect Wallet</div>
        </div>
      )}
      {provider && walletKey && (
        // <div className="connected-wallet-button">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            {walletKey.substring(0,4)}...{walletKey.slice(-4)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={disconnectWallet}>Disconnect</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        // </div>
      )}

      {!provider && (
          <div className="connect-wallet-button">
        {/* <p> */}
          {/* No provider found. Install{" "}
          <a href="https://phantom.app/">Phantom Browser extension</a> */}
        <div onClick={notify}>Connect Wallet</div>
        {/* </p> */}
        </div>
      )}
    </>
  );
}

export default ConnectPhantomWallet;
