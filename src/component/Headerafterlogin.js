import React from "react";
import qustin from "../image/qustin.svg";
import plane from "../image/plane.svg";
import notification from "../image/notification.svg";
import meta from "../image/MetaMask_Fox 1.svg";
import coinbase from "../image/coinbase-logo-freelogovectors 1.svg";

import wallet from "../image/wallet_icon.svg";

import {Link} from "react-router-dom";
import trest from "../image/trust.svg";

import walletconnt from "../image/wallet.png";
import Logo from "../image/DiscountSales.png";
import ETH from "../image/eth.svg";
import BSE from "../image/bse.svg";
import poly from "../image/bolygon.png";

import ReactTooltip from "react-tooltip";
import MaterialDesignSwitch from "../component/Countdown";
import logoN from "../image/capage/logocapage.svg";

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

function Header() {
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const Launchpad = useScrollSection("Launchpad");
  const Roadmap = useScrollSection("Roadmap");
  const Mission = useScrollSection("Mission");

  return (
    <div>
      <header>
        <div className="w-100">
          <nav class="navbar navbar-light navbar-expand-xl navigation-clean-search">
            <div class="container-fluid">
              <a class="navbar-brand gradion_text" href="#">
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
                  <li class="nav-item" role="presentation">
                    <Link
                      to="/"
                      class="nav-link"
                      onClick={homeSection.onClick}
                      selected={homeSection.selected}
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item" role="presentation">
                    <Link
                      to=""
                      class="nav-link"
                      onClick={aboutSection.onClick}
                      selected={aboutSection.selected}
                    >
                      Tokenomics
                    </Link>
                  </li>
                  <li class="nav-item" role="presentation">
                    <Link
                      to=""
                      class="nav-link"
                      onClick={Launchpad.onClick}
                      selected={Launchpad.selected}
                    >
                      Cholapropex
                    </Link>
                  </li>
                  <li class="nav-item" role="presentation">
                    <Link
                      to=""
                      class="nav-link"
                      onClick={Mission.onClick}
                      selected={Mission.selected}
                    >
                      Mission
                    </Link>
                  </li>

                  <li class="nav-item" role="presentation">
                    <Link
                      to=""
                      class="nav-link"
                      onClick={Roadmap.onClick}
                      selected={Roadmap.selected}
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" href="http://3.142.69.169/ico/">
                      Private sale
                    </a>
                  </li>

                  {/* <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">More</a>
                            <div class="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="/Liquditytable">Liquidity table </Link>
                            <a class="dropdown-item" role="presentation" href="/Liquditytable" >Liquidity table </a>
                              <a class="dropdown-item" role="presentation" href="#" data-toggle="modal" data-target="#waiting">Waiting</a>
                              <a class="dropdown-item" role="presentation" href="#" data-toggle="modal" data-target="#faild">Faild</a>
                              <a class="dropdown-item" role="presentation" href="#" data-toggle="modal" data-target="#succes">Success</a>
                              </div>
                          
                        </li> */}
                </ul>

                <a
                  class="btn btn-light action-button button_conntect_wal"
                  role="button"
                  href="http://3.142.69.169/ico/"
                >
                  Connect Wallet
                </a>

                {/* <a class="btn btn-light action-button button_conntect_wal" role="button" href="#" data-toggle="modal" data-target="#connect">Connect Wallet</a> */}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* <div class="modal" id="transactio_1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header ">
        <h4 class="modal-title gradion_text">Transaction Settings</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
       <div className='transaction_active_tab'>
        <label>Slippage tolerance</label>
        <div className='tab_input'>
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" class="active" href="">0.1%</a></li>
          <li><a data-toggle="tab" href="#menu1">0.5%</a></li>
          <li><a data-toggle="tab" href="#menu2">1.0%</a></li>
        </ul>
          <input placeholder='' value='50' />

        </div>
        <div className='dead_line_sec'>
        <label>Transaction deadline <span><i class="far fa-question-circle" data-tip data-for='happyFace'></i></span></label>
        <ReactTooltip id='happyFace' place="right" type="dark" effect="float">
        <span>Show happy face</span>
        </ReactTooltip>
        <div className='dead_line_s'>
          <p>5</p><span>Minutes</span>
        </div>
        
        </div>
        <div className='dead_line_sec'>
          <label>Interface Settings</label>
        <div className='inside_flex mt-4'>
        <label>Transaction deadline <span><i class="far fa-question-circle" data-tip data-for='happyFace'></i></span></label>
        <ReactTooltip id='happyFace' place="right" type="dark" effect="float">
        <span>Show happy face</span>
        </ReactTooltip>
        <MaterialDesignSwitch />
        </div>
        <div className='inside_flex'>
        <label>Disable Multihops<span><i class="far fa-question-circle" data-tip data-for='happyFace'></i></span></label>
        <ReactTooltip id='happyFace' place="right" type="dark" effect="float">
        <span>Show happy face</span>
        </ReactTooltip>
        <MaterialDesignSwitch />
        </div>
        </div>
        
       </div>
      </div>

     

    </div>
  </div>
</div>
<div class="modal" id="connect">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header ">
        <h4 class="modal-title  ml-auto gradion_text">Connect to Wallet</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
       <div className='connect_wallet'>
        <div className='content_selectio'>
        <span>Metamask</span>
        <img src={meta} />
        </div>
        <div className='content_selectio'>
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
        </div>
       </div>
       <p>Access the marketplace <Link to="" className="gradion_text">using your favourite wallet</Link></p>
      </div>

     

    </div>
  </div>
</div> */}
    </div>
  );
}

export default Header;
