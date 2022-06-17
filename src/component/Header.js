import React, {useState, useEffect} from "react";
import qustin from "../image/qustin.svg";
import plane from "../image/plane.svg";
import notification from "../image/notification.svg";
import meta from "../image/MetaMask_Fox 1.svg";
import coinbase from "../image/coinbase-logo-freelogovectors 1.svg";

import wallet from "../image/wallet_icon.svg";

import {Link} from "react-router-dom";
import trest from "../image/trust.svg";

import walletconnt from "../image/wallet.png";
import noti from "../image/waiting.png";
import ETH from "../image/eth.svg";
import BSE from "../image/bse.svg";
import poly from "../image/bolygon.png";
import logoN from "../image/capage/logo.png";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {toastAlert} from "../lib/toastAlert";
import {useNavigate} from "react-router-dom";
import {isEmpty} from "../component/empty";

// import publicIp from "public-ip";
import axios from "axios";
import api from "../utils/api/index";
import Moment from 'moment';


const provider = new WalletConnectProvider({
  rpc: {
    97: process.env.REACT_APP_MORALIS_END_POINT,
  },
});



function Header() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userWallet, setuserWallet] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [data, setNftimage] = useState();
  const [activity, setactivity] = useState();

  const [searchText, setSearchText] = useState("");
  const [searchNFTdata, setNftsearch] = useState("");
  const [datas, setData] = useState("");
  const excludeColumns = ["created_by", "owned_by", "name", "NFTtype"];
  const [open, searchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [networkImg, setnetworkImg] = useState("");
  const [kycStatus, setkycStatus] = useState("");

  const connectWallet = async (val) => {
    if (window.ethereum && val === "metamask") {
      setLoading(true);
      var current_chain = await window.web3.eth.getChainId();
      const chainId = localStorage.getItem("chainId");

      if(chainId == 97 || chainId == 80001)
      {

        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
  
        const accounts = await window.web3.eth.getAccounts();
  
        // const accountWasChanged = () => {
        //   alert("account changed===");
        // };
  
        // window.ethereum.on("accoChanged", accountWasChanged);
  
        // const ipAddress = await publicIp.v4();
        //console.log("window.ethereum.networkVersion",window.ethereum.networkVersion)
  
        axios({
          method: "POST",
          // url: api.baseURL+"/check_user",
          url: api.baseURL + "/check_user",
  
          data: {
            user: accounts[0],
            // ip_address: ipAddress,
          },
        })
          .then(async (res) => {
            console.log("this is res", res);
            setLoading(false);
            if (res.data.message === "notfound") {
              console.log("inside here!");
              // navigate('/register');
            } else if (res.data.message !== "blocked") {
              console.log("inside else");
              localStorage.setItem("wallet", res.data.address);
              localStorage.setItem("profile_image", res.data.profile_image);
              setuserWallet(res.data.address);
              // alert("Wallet successfully connected!");
              setLoginCheck(true);
              window.web3 = new Web3(window.ethereum);
              //var current_chain = await window.web3.eth.getChainId();
              //const chainId = localStorage.getItem("chainId");
              if (chainId != undefined) {
                console.log("call 1111");
                var network = "BNB";
                if (current_chain == 80001) {
                  network = "MATIC";
                } else {
                  network = "BNB";
                }
                if (current_chain != chainId) {
                  toastAlert("success", "Network changed successfully!");
                  //navigate("/");
                  localStorage.setItem("chainId", current_chain);
                  window.location.href = "/";
                } else {
                  toastAlert("success", "Wallet successfully connected!");
                  // navigate("/");
                  localStorage.setItem("chainId", current_chain);
                  window.location.href = "/";
                }
              } else {
                console.log("call 222");
                toastAlert("success", "Wallet successfully connected!");
                // navigate("/");
                localStorage.setItem("chainId", current_chain);
                window.location.href = "/";
              }
            }
            if (res.data.message === "blocked") {
              alert("You have been blocked by admin!");
              toastAlert("error", "You have been blocked by admin!");
  
              // navigate('/');
            }
          })
          .catch((e) => console.log("some error occurred!"));

      }
      else
      {
        setLoading(false);
        toastAlert("error", "Please connect BSC or MATIC network in your metamask");
      }

    
    } else {
      await provider
        .enable()
        .then((response) => {
          console.log(response, "=-=-=--Wallet connect response=-=-=-=-");
          axios({
            method: "POST",
            url: api.baseURL + "/check_user",
            data: {
              user: response[0],
            },
          })
            .then((res) => {
              console.log("this is res", res);
              if (res.data.message === "notfound") {
                console.log("inside here!");
                this.props.history.push("/signup");
              } else if (res.data.message !== "blocked") {
                console.log("inside else");
                localStorage.setItem("wallet", res.data.address);
                localStorage.setItem("profile_image", res.data.profile_image);
                alert("Wallet successfully connected!");
                window.location.reload();
              }
              if (res.data.message === "blocked") {
                alert("You have been blocked by admin!");
                this.props.history.push("/");
              }
            })
            .catch((e) => alert("some error occurred!"));
        })
        .catch((E) => console.log(E));
    }
  };

  const logout = () => {
    localStorage.removeItem("wallet");
    localStorage.removeItem("profile_image");
    setuserWallet(undefined);
    setLoginCheck(false);
    navigate("/");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isOpen);
    getHomePgeContent();
    fetchAccountData();
    fetchTheme();
    // getuserInfo();

    var token = localStorage.getItem("wallet");
    if (token == null) {
      setuserWallet(undefined);
    } else {
      setuserWallet(token);
      setLoginCheck(true);
      axios({
        method: "POST",
        url: api.baseURL + "/get_user_details",
        data: {
          user: localStorage.getItem("wallet"),
        },
      }).then((res) => {
        setNftimage(res.data);
        setactivity(res.data.activity);
        console.log("-====-=-res.data=-=-=", res.data.activity);
      });
    }
  }, [isOpen]);

  const getuserInfo = async () => {
    await window.ethereum.send("eth_requestAccounts");
    window.web3 = new Web3(window.ethereum);
    const accounts = await window.web3.eth.getAccounts();
    axios({
      method: "POST",
      url: api.baseURL + "/check_user",
      data: {
        user: accounts[0],
      },
    })
      .then(async (res) => {
        console.log("this getuserInfo", res);
        setLoading(false);
        if (res.data.message === "notfound") {
          console.log("Wallet not connected");
          // navigate('/register');
        } else if (res.data.message !== "blocked") {
          console.log("call user info");
          setkycStatus(res.data.kyc_status);
        }
        if (res.data.message === "blocked") {
          alert("You have been blocked by admin!");
        }
      })
      .catch((e) => console.log("some error occurred!"));
  };

  const getHomePgeContent = () => {
    setLoading(true);
    var current_chain = localStorage.getItem("chainId");
    var network = "BNB";
    if(current_chain == 80001){
      network = "MATIC"
    }
    else
    {
      network = "BNB"
    }
    api.homePageApi(network).then((res) => {
      console.log(res, "res****res");
      setLoading(false);
      setNftsearch(res.data.newNft);
      console.log(res.data.newNft, "resresresresres");
      //  console.log(ntfimage,'ntfimagentfimagentfimage')
    });
  };

  // const filterData = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   if (lowercasedValue === "") setData(searchNFTdata);
  //   else {
  //     const filteredData = searchNFTdata.filter((item) => {
  //       return Object.keys(item).some((key) =>
  //         excludeColumns.includes(key)
  //           ? false
  //           : item[key].toString().toLowerCase().includes(lowercasedValue)
  //       );
  //     });
  //     console.log(filteredData, "=-=-=-=filteredData--", datas);
  //     setData(filteredData);
  //   }
  // };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(searchNFTdata);
    else {
      console.log(searchNFTdata, "searchNFTdatasearchNFTdatasearchNFTdata");
      const filteredData = searchNFTdata.filter((item) => {
        console.log(item, "---item-----item---item--item---");
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key) ? false : item[key]
        );
      });
      console.log(filteredData, "=-=-=-=filteredData--", datas);
      setData(filteredData);
    }
  };

  const handleChange = (value) => {
    console.log("=-=-=-=-=-=-=", value, "||||");
    let checknfrname = isEmpty(value);
    if (checknfrname == true) {
      searchOpen(true);
    } else {
      searchOpen(false);
    }
    setSearchText(value);
    filterData(value);
  };

  async function fetchAccountData() {
    window.web3 = new Web3(window.ethereum);
    var chainId = await window.web3.eth.getChainId();
    console.log("get chainId", chainId);
    localStorage.setItem("chainId", chainId);
    console.log("connected chainId", chainId);
    return chainId;
  }

  async function AccountData() {
    window.web3 = new Web3(window.ethereum);
    var chainId = await window.web3.eth.getChainId();
    localStorage.setItem("chainId", chainId);
    console.log("connected chainId", chainId);
    alert("Network changed");
    window.location.href = "/";
  }
  const networkChange = async (network) => {
    var current_chain = await window.web3.eth.getChainId();
    const chainId = localStorage.getItem("chainId");

    if(chainId == 97 || chainId == 80001)
    {
    var id = "";
    if (network == "BSC") {
      id = "0x61";
    } else {
      id = "0x13881";
    }
    console.log("network change");
    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{chainId: id}], // chainId must be in hexadecimal numbers
      })
      .then((res) => {
        console.log("network change res===", res);
        AccountData();
        // alert("Network changed");
        // window.location.href = "/";
      })
      .catch((err) => {
        if (err.code == 4902) {
          alert("Please add " + network + " to metamask");
        } else {
          alert("Something went wrong, please try again");
        }
      });
    }
    else
    {
      toastAlert("error","Please connect BSC or MATIC network in your metamask")
    }
  };

  const fetchTheme = () => {
    var theme = localStorage.getItem("theme");
    if (theme != undefined) {
      if (theme == "dark") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } else {
      localStorage.setItem("theme", "dark");
      setIsOpen(true);
    }
  };

  const changeTheme = (value) => {
    localStorage.setItem("theme", value);
    var settheme = value == "dark" ? true : false;
    setIsOpen(settheme);
  };

  return (
    <div>
      <header>
        <div className="w-100">
          <nav class="navbar navbar-light navbar-expand-xl navigation-clean-search">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src={logoN} className="" />
              </a>
              <button
                data-toggle="collapse"
                class="navbar-toggler"
                data-target="#navcol-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav mr-auto">
                  {/* <li class="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      role="button"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Theme
                    </a>
                  </li> */}

                  <li class="nav-item" role="presentation">
                    <Link className="nav-link" to="/discoverNew">
                      Discover
                    </Link>
                  </li>
                  <li class="nav-item" role="presentation">
                    <Link className="nav-link" to="/creatornft">
                      Creators
                    </Link>
                  </li>
                  <li class="nav-item" role="presentation">
                    <Link className="nav-link" to="/faq">
                      How it works
                    </Link>
                  </li>
                  {/* <li class="nav-item" role="presentation">
                    <a className="nav-link" onClick={() => networkChange()}>
                      Network
                    </a>
                  </li> */}
                  {/* <li class="nav-item" role="presentation">
                    {userWallet == "" || userWallet == undefined ? (
                      <a
                        className="nav-link"
                        role="button"
                        href="#"
                        data-toggle="modal"
                        data-target="#connect"
                      >
                        Apply as an creator
                      </a>
                    ) : ( kycStatus != 2 ? (
                      <Link className="nav-link" to="/artist">
                      Apply as an creator
                    </Link>
                    ) : ""
                    )}
                  </li> */}

                  <li class="nav-item" role="presentation">
                    {userWallet == "" || userWallet == undefined ? (
                      <a
                        className="nav-link"
                        role="button"
                        href="#"
                        data-toggle="modal"
                        data-target="#connect"
                      >
                        Apply as an creator
                      </a>
                    ) : (
                      <Link className="nav-link" to="/artist">
                        Apply as an creator
                      </Link>
                    )}
                  </li>

                  {/* <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">More</a>
                            <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">Logo design</a><a class="dropdown-item" role="presentation" href="#">Banner design</a><a class="dropdown-item" role="presentation" href="#">content writing</a></div>
                        </li> */}
                </ul>
                <div className="light_dark_mode">
                  {isOpen == true ? (
                    // <button onClick={() => setIsOpen(!isOpen)}>
                    <button onClick={() => changeTheme("light")}>
                      <i class="fas fa-sun"></i>
                    </button>
                  ) : (
                    // <button onClick={() => setIsOpen(true)}>
                    <button onClick={() => changeTheme("dark")}>
                      <i class="fas fa-moon"></i>
                    </button>
                  )}
                  {/* <button>
                    <i class="fas fa-moon"></i>
                  </button> */}
                </div>
                <div className="home_header_inpur">
                  <input
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <i class="fas fa-search"></i>
                  {open == true && (
                    <div className="box-container">
                      {datas &&
                        datas.map((d, i) => {
                          return (
                            <div
                              key={i}
                              className="box"
                              style={{backgroundColor: d.color}}
                            >
                              <a href={`/mynft-details/${d.token_id}`}>
                                {d.name}
                                <br />
                              </a>
                            </div>
                          );
                        })}
                      <div className="clearboth"></div>
                      {datas.length === 0 && (
                        <span>No records found to display!</span>
                      )}
                    </div>
                  )}
                </div>

                <a
                  href=""
                  className="mar-2 notify_icon"
                  data-toggle="collapse"
                  data-target="#demo"
                >
                  <span>
                    <i class="fas fa-bell"></i>
                    {loginCheck == false ? (
                      <span></span>
                    ) : (
                      <div id="demo" class="collapse">
                        <div>
                          <div className="box-container position_rel">
                            <div className="notification_new">
                              <div className="notification_tiele">
                                <span>Notification</span>
                                <Link to={`/profile/${userWallet}`}>See All</Link>
                              </div>
                              {activity &&
                              activity.map((item, i) => {
                                var dates =  Moment(item.date).format('MMMM Do, YYYY')
                                //console.log(item,'==item==')
                                return item.activity_type == "kyc" ? (
                                <Link to="/createoption" className="notifecontnet_text p-0">
                                {
                                item && item.cloudUrl && 
                                <div className="img">
                                  <img src={item.cloudUrl} />
                                </div>
                                }
                                <div className="noti_text">
                                  <h4>{item.message} </h4>
                                  <p>on  {dates}</p>
                                </div>
                              </Link>
                                ):(
                                  <Link to={`/profile/${userWallet}`} className="notifecontnet_text p-0">
                                {
                                item && item.cloudUrl && 
                                <div className="img">
                                  <img src={item.cloudUrl} />
                                </div>
                                }
                                <div className="noti_text">
                                  <h4>{item.activity_type} </h4>
                                  <p>on  {dates}</p>
                                </div>
                              </Link>
                                )
                              })}
                            </div>

                            {/* {activity &&
                              activity.map((d, i) => {
                                return (
                                  <div
                                    key={i}
                                    className="box"
                                    style={{backgroundColor: d.color}}
                                  >
                                    <a href={`/mynft-details/${d.token_id}`}>
                                      {" "}
                                      {d.activity_type} -{d._id}
                                      <br />
                                    </a>
                                  </div>
                                );
                              })} */}
                            {/* <div className="clearboth"></div> */}
                            {/* {datas.length === 0 && (
                      <span>No records found to display!</span>
                    )} */}
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                </a>
                {data && data.kyc_status == 2 ? (
                  <a
                    class="btn btn-light action-button button_conntect_wal p-button p-button-rounded mr-2 createbtn"
                    role="button"
                  >
                    <Link to="/createoption">
                      Create <i class="fas fa-plus"></i>
                    </Link>
                  </a>
                ) : (
                  <a
                    class="btn btn-light action-button button_conntect_wal p-button p-button-rounded mr-2 createbtn"
                    role="button"
                  >
                    <Link to="/artist">
                      Create <i class="fas fa-plus"></i>
                    </Link>
                  </a>
                )}
                {localStorage.getItem("chainId") == "80001" ? (
                  <a
                  href=""
                  className="connect_wal new_bg_for_content"
                  data-toggle="modal"
                  data-target="#exampleModalCenterNew"
                >
                  <img src={poly} alt="" />
                </a>
                ) : (
                  <a
                  href=""
                  className="connect_wal new_bg_for_content"
                  data-toggle="modal"
                  data-target="#exampleModalCenterNew"
                  >
                  <img src={BSE} alt="" />
                  </a>
                )}

                {userWallet == "" || userWallet == undefined ? (
                  <a
                    class="btn btn-light action-button button_conntect_wal"
                    role="button"
                    href="#"
                    data-toggle="modal"
                    data-target="#connect"
                  >
                    Connect Wallet
                  </a>
                ) : (
                  <Link
                    className="btn btn-light action-button button_conntect_wal"
                    to={`/profile/${userWallet}`}
                  >
                    {userWallet.substring(0, 15)}...
                  </Link>
                )}
                {loginCheck && loginCheck == true ? (
                  <a
                    class="nav-link"
                    href="javascript:void(0)"
                    onClick={() => logout()}
                  >
                    <i class="fa fa-sign-out"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div class="modal" id="connect">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Connect to Wallet</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            {/* <div class="modal-header ">
          <h4 class="modal-title  ml-auto gradion_text">Connect to Wallet</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div> */}

            <div class="modal-body">
              <div className="connect_wallet">
                <a onClick={() => connectWallet("metamask")}>
                  <div className="content_selectio">
                    <span>
                      {loginCheck == true ? (
                        "Connected!"
                      ) : (
                        <span>
                          {loading == false ? "Metamask" : "Connecting..."}
                        </span>
                      )}
                    </span>
                    {loading == false ? <img src={meta} /> : ""}
                  </div>
                </a>
                <a onClick={() => connectWallet("walletconnect")}>
                  <div className="content_selectio">
                    <span>Wallet Connect</span>
                    <img src={wallet} />
                  </div>
                </a>
                {/* <div className='content_selectio'>
        <span>Coinbase Wallet</span>
        <img src={coinbase} />
        </div>
        <div className='content_selectio'>
        <span>Wallet Connect</span>
        <img src={wallet} />
        </div>
        <div className='content_selectio'>
        <span>Trustswap</span>
        <img src={trest} />
        </div> */}
              </div>
              <p>
                Access the marketplace{" "}
                <Link to="" className="">
                  using your favourite wallet
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenterNew"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Choose network
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="connect_walet">
                {/* <div>
                  <img src={ETH} alt="" />
                  <p>Ethereum Mainnet</p>
                </div> */}
                <div onClick={() => networkChange("BSC")}>
                  <img src={BSE} alt="" />
                  <p>Binance Smart Chain Mainnet</p>
                </div>
                <div onClick={() => networkChange("MATIC")}>
                  <img src={poly} alt="" />
                  <p>Matic(Polygon) Mainnet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
