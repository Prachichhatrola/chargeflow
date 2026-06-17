import { assetUrl } from '../../assets/registry';
import LottiePlayer from '../ui/LottiePlayer';

const DESKTOP_LOTTIE =
  '/assets/lotties/66ed8a8db471ca9bb3210ad4_alerts.json';
const MOBILE_LOTTIE =
  '/assets/lotties/670d5ea8d14299f079553248_alerts_mobile.json';

export default function AlertsSection() {

    return (
        <>
            <section className="c-section cc-alerts">
                <div className="c-container">
                    <div className="c-section-builder_header-wrapper cc-alerts">
                        <div className="c-svg-laser cc-home-3">
                            <div data-repeat-delay="1" svg-laser="wrapper" data-svg="home03" data-laser="2" className="c-svg-laser_wrapper cc-home-1">
                                <img src={assetUrl("/assets/icons/67408cc9802a6bbc32fc63de_laser-home-03.svg")} loading="lazy" alt="" />
                            </div>
                        </div>
                        <div className="c-section-builder_tag-wrapper">
                            <div data-wf--tag--variant="onlight-translucent" className="c-tag-wrapper w-variant-303c5bea-bf2a-4f5f-43fc-4e5b8ef68aa7">
                                <div className="c-tag">
                                    <div className="c-icon cc-tag">
                                        <div className="c-svg w-embed">
                                            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.23597 13.9986C6.70606 14.4135 7.32355 14.6653 7.99985 14.6653C8.67615 14.6653 9.29364 14.4135 9.76373 13.9986M11.9998 5.33197C11.9998 4.2711 11.5784 3.25369 10.8283 2.50354C10.0781 1.7534 9.06072 1.33197 7.99985 1.33197C6.93898 1.33197 5.92157 1.7534 5.17142 2.50354C4.42128 3.25369 3.99985 4.2711 3.99985 5.33197C3.99985 7.39209 3.48016 8.80261 2.89963 9.73558C2.40993 10.5226 2.16509 10.916 2.17407 11.0258C2.18401 11.1474 2.20976 11.1937 2.3077 11.2664C2.39616 11.332 2.79491 11.332 3.59242 11.332H12.4073C13.2048 11.332 13.6035 11.332 13.692 11.2664C13.7899 11.1937 13.8157 11.1474 13.8256 11.0258C13.8346 10.916 13.5898 10.5226 13.1001 9.73558C12.5195 8.80261 11.9998 7.39209 11.9998 5.33197Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="c-text-wrapper">
                                        {/* Fixed illegal React attribute 'fs-list-field' to standard custom dataset mapping */}
                                        <div data-fs-list-field="tag" className="c-text-4 cc-text-weight-500">Alerts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-section-builder_text-stack cc-version_centre">
                            <div className="c-section-builder_title-wrapper cc-version-centred">
                                <h2 className="c-title-3 cc-text-weight-700 cc-surface-light">Say Goodbye to Chargebacks. Forever.</h2>
                            </div>
                            <div className="c-section-builder_text-wrapper">
                                <p className="c-text-1 cc-surface-subtle">Chargeflow takes charge of your chargeback ratio, cutting chargebacks by 90% and preventing them before they happen.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Native React Lottie Rendering Engine Injection Blocks */}
                    <div className="c-section-builder_main-content">
                        <div className="c-alerts-lottie-wrapper">
                            
                            {/* Desktop Canvas Player */}
                            <div className="c-alerts-lottie cc-desktop">
                                <LottiePlayer 
                                    src={DESKTOP_LOTTIE} 
                                    loop={true} 
                                    autoplay={true} 
                                />
                            </div>

                            {/* Mobile Canvas Player */}
                            <div className="c-alerts-lottie cc-mobile">
                                <LottiePlayer 
                                    src={MOBILE_LOTTIE} 
                                    loop={true} 
                                    autoplay={true} 
                                />
                            </div>

                        </div>
                    </div>

                    <div className="c-alerts-grid-wrapper">
                        <div className="w-layout-grid c-alerts-grid">
                            <div className="c-alerts-grid-content">
                                <div className="c-alerts-grid-logo">
                                    <img src={assetUrl("/assets/icons/66f3e09292d83937a8fe37aa_Frame_1362789927_(3).svg")} loading="lazy" alt="" className="c-img" />
                                </div>
                                <div className="c-alerts-grid-text">
                                    <div className="c-title-wrapper">
                                        <p className="c-title-5 cc-medium cc-onsurface">Start Instantly</p>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <p className="c-text-2 cc-surface-subtle-light">Start preventing chargebacks in 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="c-alerts-grid-content">
                                <div className="c-alerts-grid-logo">
                                    <img src={assetUrl("/assets/icons/66f3e09ca1c5e13cc38f14fc_Frame_1362789928_(1).svg")} loading="lazy" alt="" className="c-img" />
                                </div>
                                <div className="c-alerts-grid-text">
                                    <div className="c-title-wrapper">
                                        <p className="c-title-5 cc-medium cc-onsurface">Avoid VAMP</p>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <p className="c-text-2 cc-surface-subtle-light">Keep a low chargeback ratio, protect your merchant account and avoid VAMP and Mastercard ECM.</p>
                                    </div>
                                </div>
                                <div className="c-automation_divider w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 341 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.113249 2.94043L3 0.0536783L5.88675 2.94043L3 5.82718L0.113249 2.94043ZM340.887 2.94043L338 5.82718L335.113 2.94043L338 0.0536783L340.887 2.94043ZM3 2.44043H3.99702V3.44043H3V2.44043ZM5.99107 2.44043L7.98512 2.44043V3.44043L5.99107 3.44043V2.44043ZM9.97917 2.44043H11.9732V3.44043H9.97917V2.44043ZM13.9673 2.44043H15.9613V3.44043H13.9673V2.44043ZM17.9554 2.44043H19.9494V3.44043H17.9554V2.44043ZM21.9435 2.44043L23.9375 2.44043V3.44043H21.9435V2.44043ZM25.9315 2.44043L27.9256 2.44043V3.44043H25.9315V2.44043ZM29.9196 2.44043H31.9137V3.44043H29.9196V2.44043ZM33.9077 2.44043H35.9018V3.44043H33.9077V2.44043ZM37.8958 2.44043H39.8899V3.44043H37.8958V2.44043ZM41.8839 2.44043L43.878 2.44043V3.44043L41.8839 3.44043V2.44043ZM45.872 2.44043H47.8661V3.44043H45.872V2.44043ZM49.8601 2.44043L51.8542 2.44043V3.44043L49.8601 3.44043V2.44043ZM53.8482 2.44043H55.8423V3.44043H53.8482V2.44043ZM57.8363 2.44043H59.8304V3.44043H57.8363V2.44043ZM61.8244 2.44043H63.8185V3.44043H61.8244V2.44043ZM65.8125 2.44043H67.8066V3.44043H65.8125V2.44043ZM69.8006 2.44043L71.7947 2.44043V3.44043L69.8006 3.44043V2.44043ZM73.7887 2.44043H75.7828V3.44043H73.7887V2.44043ZM77.7768 2.44043H79.7709V3.44043L77.7768 3.44043V2.44043ZM81.7649 2.44043H83.759V3.44043H81.7649V2.44043ZM85.753 2.44043H87.7471V3.44043L85.753 3.44043V2.44043ZM89.7411 2.44043H91.7352V3.44043H89.7411V2.44043ZM93.7292 2.44043L95.7233 2.44043V3.44043L93.7292 3.44043V2.44043ZM97.7173 2.44043H99.7113V3.44043H97.7173V2.44043ZM101.705 2.44043H103.699V3.44043H101.705V2.44043ZM105.694 2.44043H107.688V3.44043H105.694V2.44043ZM109.682 2.44043H111.676V3.44043H109.682V2.44043ZM113.67 2.44043L115.664 2.44043V3.44043L113.67 3.44043V2.44043ZM117.658 2.44043H119.652V3.44043H117.658V2.44043ZM121.646 2.44043L123.64 2.44043V3.44043L121.646 3.44043V2.44043ZM125.634 2.44043H127.628V3.44043H125.634V2.44043ZM129.622 2.44043H131.616V3.44043H129.622V2.44043ZM133.61 2.44043H135.604V3.44043H133.61V2.44043ZM137.598 2.44043L139.592 2.44043V3.44043L137.598 3.44043V2.44043ZM141.586 2.44043L143.58 2.44043V3.44043H141.586V2.44043ZM145.574 2.44043H147.569V3.44043H145.574V2.44043ZM149.563 2.44043H151.557V3.44043H149.563V2.44043ZM153.551 2.44043H155.545V3.44043H153.551V2.44043ZM157.539 2.44043L159.533 2.44043V3.44043L157.539 3.44043V2.44043ZM161.527 2.44043H163.521V3.44043H161.527V2.44043ZM165.515 2.44043L167.509 2.44043V3.44043L165.515 3.44043V2.44043ZM169.503 2.44043H171.497V3.44043H169.503V2.44043ZM173.491 2.44043H175.485V3.44043H173.491V2.44043ZM177.479 2.44043H179.473V3.44043H177.479V2.44043ZM181.467 2.44043L183.461 2.44043V3.44043H181.467V2.44043ZM185.455 2.44043L187.45 2.44043V3.44043H185.455V2.44043ZM189.444 2.44043H191.438V3.44043H189.444V2.44043ZM193.432 2.44043H195.426V3.44043H193.432V2.44043ZM197.42 2.44043H199.414V3.44043H197.42V2.44043ZM201.408 2.44043L203.402 2.44043V3.44043L201.408 3.44043V2.44043ZM205.396 2.44043H207.39V3.44043H205.396V2.44043ZM209.384 2.44043L211.378 2.44043V3.44043L209.384 3.44043V2.44043ZM213.372 2.44043H215.366V3.44043H213.372V2.44043ZM217.36 2.44043H219.354V3.44043H217.36V2.44043ZM221.348 2.44043H223.342V3.44043H221.348V2.44043ZM225.336 2.44043H227.331V3.44043H225.336V2.44043ZM229.325 2.44043L231.319 2.44043V3.44043L229.325 3.44043V2.44043ZM233.313 2.44043H235.307V3.44043H233.313V2.44043ZM237.301 2.44043H239.295V3.44043L237.301 3.44043V2.44043ZM241.289 2.44043H243.283V3.44043H241.289V2.44043ZM245.277 2.44043H247.271V3.44043L245.277 3.44043V2.44043ZM249.265 2.44043H251.259V3.44043H249.265V2.44043ZM253.253 2.44043L255.247 2.44043V3.44043L253.253 3.44043V2.44043ZM257.241 2.44043H259.235V3.44043H257.241V2.44043ZM261.229 2.44043H263.223V3.44043H261.229V2.44043ZM265.217 2.44043H267.211V3.44043H265.217V2.44043ZM269.206 2.44043H271.2V3.44043H269.206V2.44043ZM273.194 2.44043L275.188 2.44043V3.44043L273.194 3.44043V2.44043ZM277.182 2.44043H279.176V3.44043H277.182V2.44043ZM281.17 2.44043L283.164 2.44043V3.44043L281.17 3.44043V2.44043ZM285.158 2.44043H287.152V3.44043H285.158V2.44043ZM289.146 2.44043H291.14V3.44043H289.146V2.44043ZM293.134 2.44043H295.128V3.44043H293.134V2.44043ZM297.122 2.44043L299.116 2.44043V3.44043L297.122 3.44043V2.44043ZM301.11 2.44043L303.104 2.44043V3.44043H301.11V2.44043ZM305.098 2.44043H307.092V3.44043H305.098V2.44043ZM309.086 2.44043H311.081V3.44043H309.086V2.44043ZM313.075 2.44043H315.069V3.44043H313.075V2.44043ZM317.063 2.44043L319.057 2.44043V3.44043L317.063 3.44043V2.44043ZM321.051 2.44043H323.045V3.44043H321.051V2.44043ZM325.039 2.44043L327.033 2.44043V3.44043L325.039 3.44043V2.44043ZM329.027 2.44043H331.021V3.44043H329.027V2.44043ZM333.015 2.44043H335.009V3.44043H333.015V2.44043ZM337.003 2.44043H338V3.44043H337.003V2.44043Z" fill="#97A3B6"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="c-alerts-grid-content">
                                <div className="c-alerts-grid-logo">
                                    <img src={assetUrl("/assets/icons/66f3e0a86e44cf45de12747b_Frame_1362789927_(4).svg")} loading="lazy" alt="" className="c-img" />
                                </div>
                                <div className="c-alerts-grid-text">
                                    <div className="c-title-wrapper">
                                        <p className="c-title-5 cc-medium cc-onsurface">Powered by Visa and Mastercard</p>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <p className="c-text-2 cc-surface-subtle-light">The best of both networks for complete coverage of all major card companies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
