import React from 'react'
import Logo from '../image/DiscountSales.png'
import HomeLogo from '../image/home.svg'
import nftLogo from '../image/nft.svg'
import promotionLogo from '../image/promotion.svg'
import qustin from '../image/qustin.svg'
import plane from '../image/plane.svg'
import notification from '../image/notification.svg'

import DiscouintLogo from '../image/discount.svg'

import {Link} from "react-router-dom";

// import { Link  } from '@material-ui/core';

function Sidebar() {
    return (
        <div>
            <div className='close menu_hidden'>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar-wrapper" aria-controls="sidebar-wrapper" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="far fa-times-circle"></i></span>
                    </button>
            </div>
            <div className='side_bar_new'>
                <a href='/'>
                    <img src={Logo}  alt='logo'class="img-fluid logo"/>
                </a>

                <div className='nav_link'>
                    <div className='side_bar_link active'>
                        <Link to="/"><img src={HomeLogo}  alt='logo'class="img-fluid"/> Home</Link>
                     </div>
                    <div className='side_bar_link'>
                     <Link to="/latest"><img src={DiscouintLogo}  alt='logo'class="img-fluid"/> Discount sale list</Link>
                    </div>
                    <div className='side_bar_link'>
                     <Link to="/latest"><img src={DiscouintLogo}  alt='logo'class="img-fluid"/>Create Discount sale</Link>
                    </div>
                    <div className='side_bar_link'>
                     <Link to="/"><img src={nftLogo}  alt='logo'class="img-fluid"/> NFTs</Link>
                    </div>
                    <div className='side_bar_link'>
                     <Link to="/admin"><img src={promotionLogo}  alt='logo'class="img-fluid"/> Promotions</Link>
                    </div>
                    
                </div>
                <div className='web_hide'>
                    <div className='header_link '>
                       <div>
                       <a href=''>
                            <img src={qustin} alt="" />
                        </a>
                        <a href=''>
                            <img src={plane} alt="" />
                        </a>
                        <a href=''>
                            <img src={notification} alt="" />
                        </a>
                       </div>
                        <a href='' className='connect_wal' data-toggle="modal" data-target="#exampleModalCenter">
                           <span>connect Wallet</span>
                        </a>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar