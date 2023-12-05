import React from "react";
import { Container, Col, Row, Form, Tabs, Tab } from "react-bootstrap";
import "./nftDetail.css";
import {getAccount, createMint, getMint, createAssociatedTokenAccount, createAssociatedTokenAccountInstruction, createAccount, mintTo, getOrCreateAssociatedTokenAccount, transfer} from "@solana/spl-token";
import {clusterApiUrl, Connection,PublicKey, Keypair, Transaction, LAMPORTS_PER_SOL} from "@solana/web3.js";
import { walletKeytoJS } from "../connectWallet/ConnectPhantomWallet.tsx";

import { FaSearch } from "react-icons/fa";
import unnamed from "../assets/images/unnamed.png";
import unnamed2 from "../assets/images/unnamed2.jpg";
import * as bs58 from "bs58";

class NftDetailpage extends React.Component {
      

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      error: null
    };
  }

  buyNFT = async () => {

    const connection = new Connection(clusterApiUrl('testnet'), 'confirmed');
    // const { DataisLoaded, items, error } = this.state;

    // const feePayer = Keypair.fromSecretKey(
    //   bs58.decode("588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2")
    // );

    // const alice = Keypair.fromSecretKey(
    //   bs58.decode("4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp")
    // );
    // console.log(alice.publicKey.toString())
    
    // let mintPubkey = await createMint(
    //   connection, // conneciton
    //   feePayer, // fee payer
    //   alice.publicKey, // mint authority
    //   alice.publicKey, // freeze authority (you can use `null` to disable it. when you disable it, you can't turn it on again)
    //   8 // decimals
    // );
    // console.log(`mint: ${mintPubkey.toBase58()}`);

    // const mint = new PublicKey("AAHABHMzFEkY4WdixmRwNyCZAhSskB6qAvevag6iQwnZ");

    // let mintAccount = await getMint(connection, mint);

    // console.log(mintAccount);

    // const mintPubkey = new PublicKey("AAHABHMzFEkY4WdixmRwNyCZAhSskB6qAvevag6iQwnZ");

      // let ata = await createAssociatedTokenAccount(
      //   connection, // connection
      //   feePayer, // fee payer
      //   mintPubkey, // mint
      //   alice.publicKey // owner,
      // );
      // console.log(`ATA: ${ata.toBase58()}`);

    // let tx = new Transaction().add(
    //   createAssociatedTokenAccountInstruction(
    //     feePayer.publicKey, // payer
    //     ata, // ata
    //     alice.publicKey, // owner
    //     mintPubkey // mint
    //   )
    // );
    // console.log(`txhash: ${await connection.sendTransaction(tx, [feePayer])}`);

    // const tokenAccountPubkey = new PublicKey("6CCAkbeeWcccazphiixCpiRddfSRDBmfZgFVfWDr7NGx");

    // let tokenAccount = await getAccount(connection, tokenAccountPubkey);
    // console.log(tokenAccount);

    // ########################## With wallet key and mind address
    const accountPublicKey = new PublicKey("G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY")
  
  //mintAccount = the token mint address
    const mintAccount = new PublicKey("AAHABHMzFEkY4WdixmRwNyCZAhSskB6qAvevag6iQwnZ");
    const account = await connection.getTokenAccountsByOwner(accountPublicKey, {
        mint: mintAccount});
  
        console.log(account.value[0].pubkey.toString());

    const tokenAccountPubkey = new PublicKey("6CCAkbeeWcccazphiixCpiRddfSRDBmfZgFVfWDr7NGx");

    let tokenAccount = await getAccount(connection, tokenAccountPubkey);

    console.log(tokenAccount)


    return "dsfd";
  }

  componentDidMount() {
    fetch("http://45.138.27.8:8004/api/nft-detail/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Result-",result)
        this.setState({
          items: result,
          DataisLoaded: true,
        });
      },
      (error) => {
        this.setState({
          DataisLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { DataisLoaded, items, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!DataisLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="Create-NFT">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="tabbar">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                         <Tab eventKey="home" title="All">
                           <div className="mian-tabing">
                             <Row className="topng">
                               {items.map((item) => (
                                 <Col lg={3} key={item.id}>
                                 <div className="nftcard-main">
                                   <div className="nft-imag">
                                     <img src={item.nft_img} alt="unnamed" className="unnamed-img" />
                                   </div>
                                   <div className="nft-name">
                                     <div className="overmain">
                                       <div className="left-bar">
                                         <h3>{item.name}</h3>
                                         <p>{item.desc}<span className="owner">{item.tags}</span></p>
                                       </div>
                                     </div>
                                     <div className="right-bar">
                                       <span>2.3 ETH</span>
                                       <p>1 of 1</p>
                                     </div>
                                     <div class="banner-button">
                                       <button onClick={this.buyNFT} class="btn-action2">Buy Now</button>
                                     </div>
      
                                   </div>
                                 </div>
                               </Col>
                               ))}
                               
                                </Row>
                              </div>
                            </Tab>
                          </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
}

// function NftDetailpage() {
//   return (
//     <>
//       <div className="Create-NFT">
//         <Container>
//           <Row>
//             <Col lg={12}>
//               <div className="tabbar">
//                 <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
//                   <Tab eventKey="home" title="All">
//                     <div className="mian-tabing">
//                       <Row className="topng">
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                       </Row>
//                     </div>
//                   </Tab>
//                   <Tab eventKey="profile" title="Art">
//                     <div className="mian-tabing">
//                       <Row className="topng">
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                       </Row>
//                     </div>
//                   </Tab>
//                   <Tab eventKey="contact" title="Music">
//                     <div className="mian-tabing">
//                       <Row className="topng">
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                       </Row>
//                     </div>
//                   </Tab>
//                   <Tab eventKey="Collectibles" title="Collectibles">
//                     <div className="mian-tabing">
//                       <Row className="topng">
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                       </Row>
//                     </div>
//                   </Tab>
//                   <Tab eventKey="Sports" title="Sports">
//                     <div className="mian-tabing">
//                       <Row className="topng">
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed} alt="unnamed" className="unnamed-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                         <Col lg={3}>
//                           <div className="nftcard-main">
//                             <div className="nft-imag">
//                               <img src={unnamed2} alt="unnamed2" className="unnamed2-img" />
//                             </div>
//                             <div className="nft-name">
//                               <div className="overmain">
//                                 <div className="left-bar">
//                                   <h3>Moments of Living</h3>
//                                   <p>The games Car<span className="owner">Victor</span></p>
//                                 </div>
//                               </div>
//                               <div className="right-bar">
//                                 <span>2.3 ETH</span>
//                                 <p>1 of 1</p>
//                               </div>
//                               <div class="banner-button">
//                                 <a href="#" class="btn-action2">Buy Now</a>
//                               </div>

//                             </div>
//                           </div>
//                         </Col>
//                       </Row>
//                     </div>
//                   </Tab>
//                 </Tabs>

//               </div>

//             </Col>

//           </Row>

//         </Container>
//       </div>
//     </>
//   );
// }

export default NftDetailpage;
