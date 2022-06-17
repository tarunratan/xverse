import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logoN from "../image/capage/logo.png";

import {Button} from "@material-ui/core";

import Terms from "../image/pdf/xVerse-TermsOfService.pdf";
import Privacy from "../image/pdf/xVerse-PrivacyPolicy.pdf";

function Footer() {
  return (
    <div>
      <div className="footer">
        <footer className="container-fluid">
          <div className="footer_padin">
            <div className="row">
              <div className="col-lg-3">
                <div className="log_section">
                  <img src={logoN} className="logo" />
                  <p>
                  xVerse is an e-commerce platform with a web 3.0 e-commerce experience. Users can create, buy, sell, re-sell, and auction NFTs.
                  </p>
                  <div className="social_link_">
                    <Link className="" to="">
                      <i class="fab fa-facebook"></i>
                    </Link>
                    <Link className="" to="">
                      <i class="fab fa-twitter"></i>
                    </Link>

                    <Link className="" to="">
                      <i class="fab fa-youtube"></i>
                    </Link>
                  </div>

                  <div className="language_selectio">
                    <label>Language</label>
                    <select>
                      <option>English</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="link_footer">
                  <label>Xverse</label>
                  <ul>
                    <li>Discover</li>

                    <li>
                      <Link className="" to="">
                        Connect Wallet
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="">
                        Create item
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="link_footer">
                  <label>General</label>
                  <ul>
                    <li>
                      <Link className="" to="">
                      Apply as creator
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/faq">
                        How it works
                      </Link>
                    </li>
                    <li>
                    <a href="https://policy.xverse.to/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                    <a href="https://terms.xverse.to/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms of Service
                        </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="link_footer">
                  <label>Join Newsletter</label>
                  <p>
                  Sign up now to stay informed about the NFT marketplace trends, drops, tips and tricks, and insights for free! 
                  </p>
                  <div className="input_section_footer">
                    <div className="input_pp">
                      <input type="text" placeholder="Your Email" />
                      <Button>
                        <i class="fas fa-arrow-right"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Grid container spacing={2} justify="space-around">
              <div className="footer_clas_flex">
                <div>
                  <div className="log_section">
                    <img src={logoN} className="logo" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Modi nobis iusto hic veritatis deserunt sed iure vero
                      minima minus error
                    </p>
                    <p>&copy; CHOLA TOKEN, All Rights Reserved</p>
                  </div>
                </div>
                <div>
                  <div className="link_footer">
                    <label>MintedPix</label>
                    <ul>
                      <li>
                        <a href="http://3.142.69.169/ico/"></a>Open App
                      </li>

                      <li>
                        <Link className="" to="">
                          Tokenomics
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="link_footer">
                    <label>General</label>
                    <ul>
                      <li>
                        <Link className="" to="">
                          Mission
                        </Link>
                      </li>
                      <li>
                        <Link className="" to="">
                          Roadmap
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div></div>
                <div>
                  <div className="link_footer">
                    <label>Join Newsletter</label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro maiores veritatis, consectetur molestiae in atque.
                    </p>
                    <ul>
                      <li>
                        <Link className="" to="">
                          Twitter
                        </Link>
                      </li>
                      <li>
                        <Link className="" to="">
                          Telegram
                        </Link>
                      </li>
                      <li>
                        <Link className="" to="">
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid> */}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
