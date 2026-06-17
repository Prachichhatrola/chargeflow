import { useEffect } from 'react';
import { parseInlineStyle } from '../../lib/parseInlineStyle';
import { assetUrl } from '../../assets/registry';
import LottiePlayer from '../ui/LottiePlayer';

function NativeReactLottie({ src, style, className }: { src: string; style?: React.CSSProperties; className?: string }) {
    return (
        <LottiePlayer 
            src={src} 
            style={style} 
            className={className} 
            loop={true} 
            autoplay={true} 
        />
    );
}

export default function DataSection() {
    return (
        <>
            <section className="c-section cc-data cc-black-sec">
                <div className="hide"></div>
                <div className="c-container">
                    <div className="c-section-builder_main-wrapper">
                        <div className="c-section-builder_header-wrapper">
                            <div className="c-section-builder_tag-wrapper">
                                <div data-wf--tag--variant="ondark-translucent" className="c-tag-wrapper w-variant-301e7484-247a-dcaa-43b7-b6f1f63746b0">
                                    <div className="c-tag">
                                        <div className="c-icon cc-tag">
                                            <div className="c-svg w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3456_1646)">
                                                        <path d="M6.00033 7.77628L7.33366 9.10961L10.3337 6.10961M13.3337 8.10961C13.3337 11.3819 9.76435 13.7619 8.46565 14.5195C8.31806 14.6056 8.24426 14.6487 8.14011 14.671C8.05929 14.6884 7.94136 14.6884 7.86054 14.671C7.75639 14.6487 7.68259 14.6056 7.535 14.5195C6.2363 13.7619 2.66699 11.3819 2.66699 8.10961V4.92135C2.66699 4.38834 2.66699 4.12184 2.75417 3.89275C2.83118 3.69037 2.95631 3.5098 3.11876 3.36663C3.30266 3.20457 3.55219 3.111 4.05126 2.92385L7.62579 1.5834C7.76439 1.53142 7.83369 1.50544 7.90498 1.49513C7.96822 1.486 8.03243 1.486 8.09567 1.49513C8.16696 1.50544 8.23626 1.53142 8.37486 1.5834L11.9494 2.92385C12.4485 3.111 12.698 3.20457 12.8819 3.36663C13.0443 3.5098 13.1695 3.69037 13.2465 3.89275C13.3337 4.12184 13.3337 4.38834 13.3337 4.92135V8.10961Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3456_1646">
                                                            <rect width="16" height="16" fill="white" transform="translate(0 0.109375)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="c-text-wrapper">
                                            <div fs-list-field="tag" className="c-text-4 cc-text-weight-500">Data Protection</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c-section-builder_text-stack">
                                <div className="c-section-builder_title-wrapper">
                                    <h2 className="c-title-3 cc-text-weight-700">Secure by Design.</h2>
                                </div>
                                <div className="c-section-builder_text-wrapper">
                                    <p className="c-text-1">Chargeflow is secured by design to protect your data and experience the peace of mind of best-in-class security infrastructure, and dedicated 24/7 support by security teams.</p>
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP/TABLET TABS VERSION */}
                        <div className="hide-l-m">
                            <div data-animation="cards" vdx-tabs-timed="115000" vdx-tabs-pause="3000" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="automations_tabs w-tabs">
                                <div className="automations_tabs-menu w-tab-menu">
                                    <a data-w-tab="Tab 1" className="c-tabs-slider_link w-inline-block w-tab-link w--current">
                                        <img src={assetUrl("/assets/icons/66ed83a900cf31cddde33999_Star_41.svg")} loading="lazy" alt="" className="c-star-lottie cc-mobile-hide" />
                                        <div className="c-industry-slider-text-content">
                                            <div className="c-title-wrapper"><h3 className="c-title-6 cc-bold">Bank-level encryption</h3></div>
                                            <div className="c-text-wrapper"><p className="c-text-2 cc-surface-subtle">AES-256 bit bank-level encryption is used for data at rest and TLS/SSL is used while in transit system-wide.</p></div>
                                        </div>
                                    </a>
                                    <a data-w-tab="Tab 2" className="c-tabs-slider_link w-inline-block w-tab-link">
                                        <img src={assetUrl("/assets/icons/66ed83a900cf31cddde33999_Star_41.svg")} loading="lazy" alt="" className="c-star-lottie cc-mobile-hide" />
                                        <div className="c-industry-slider-text-content">
                                            <div className="c-title-wrapper"><h3 className="c-title-6 cc-bold">Enterprise-ready compliance</h3></div>
                                            <div className="c-text-wrapper"><p className="c-text-2 cc-surface-subtle">Chargeflow is SOC II Type 2, GDPR, compliant with data stored in US data centers.</p></div>
                                        </div>
                                    </a>
                                    <a data-w-tab="Tab 3" className="c-tabs-slider_link cc-last w-inline-block w-tab-link">
                                        <div className="c-industry-slider-text-content">
                                            <div className="c-title-wrapper"><h3 className="c-title-6 cc-bold">INTERNAL SYSTEMS SECURITY</h3></div>
                                            <div className="c-text-wrapper"><p className="c-text-2 cc-surface-subtle">We perform constant penetration testing on our systems, put code through multiple review cycles, and hide our infra behind a VPC.</p></div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="automations_tabs-content w-tab-content">
                                    {/* Tab 1 Animation Container */}
                                    <div data-w-tab="Tab 1" className="h-full w-tab-pane w--tab-active">
                                        <div data-name="lottie-wrapper" className="tab_lottie-wrap">
                                            <NativeReactLottie 
                                                src={assetUrl("/assets/lotties/66ed8a8d07fad07c035a1671_bank-level_encryption.json")}
                                                style={parseInlineStyle("height: 92%; opacity: 1 !important; display: block !important;")}
                                                className="lottie-div"
                                            />
                                        </div>
                                    </div>
                                    {/* Tab 2 Animation Container */}
                                    <div data-w-tab="Tab 2" className="h-full w-tab-pane">
                                        <div data-name="lottie-wrapper" className="tab_lottie-wrap">
                                            <NativeReactLottie 
                                                src={assetUrl("/assets/lotties/66ed8a8d1cca922f3ac9367e_enterprise-ready_compliance.json")}
                                                style={parseInlineStyle("height: 92%; opacity: 1 !important; display: block !important;")}
                                                className="lottie-div"
                                            />
                                        </div>
                                    </div>
                                    {/* Tab 3 Animation Container */}
                                    <div data-w-tab="Tab 3" className="h-full w-tab-pane">
                                        <div data-name="lottie-wrapper" className="tab_lottie-wrap">
                                            <NativeReactLottie 
                                                src={assetUrl("/assets/lotties/66ed8a89818d611e8de36bc6_internal_system_security.json")}
                                                style={parseInlineStyle("height: 92%; opacity: 1 !important; display: block !important;")}
                                                className="lottie-div"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE SLIDER SPLIDE VERSION */}
                        <div className="hide-d-t">
                            <div id="splide_tabs_3-main" className="splide">
                                <div className="splide__track">
                                    <div className="splide__list">
                                        <div className="splide__slide">
                                            <div className="c-tabs-slider_link">
                                                <div className="c-tabs-slider_pane cc-paypal" style={{ display: 'block', height: '100px' }}>
                                                    <NativeReactLottie 
                                                        src={assetUrl("/assets/lotties/66ed8a8d07fad07c035a1671_bank-level_encryption.json")}
                                                        style={parseInlineStyle("opacity: 1 !important; display: block !important;")}
                                                    />
                                                </div>
                                                <div className="c-industry-slider-text-content">
                                                    <div className="c-title-wrapper"><h3 className="c-title-6 cc-bold">Bank-level encryption</h3></div>
                                                    <div className="c-text-wrapper"><p className="c-text-2 cc-surface-subtle">AES-256 bit bank-level encryption is used for data at rest and TLS/SSL is used while in transit system-wide.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide">
                                            <div className="c-tabs-slider_link">
                                                <div className="c-tabs-slider_pane cc-paypal" style={{ display: 'block', height: '100px' }}>
                                                    <NativeReactLottie 
                                                        src={assetUrl("/assets/lotties/66ed8a8d1cca922f3ac9367e_enterprise-ready_compliance.json")}
                                                        style={parseInlineStyle("opacity: 1 !important; display: block !important;")}
                                                    />
                                                </div>
                                                <div className="c-industry-slider-text-content">
                                                    <div className="c-title-wrapper"><h3 className="c-title-6 cc-bold">Enterprise-ready compliance</h3></div>
                                                    <div className="c-text-wrapper"><p className="c-text-2 cc-surface-subtle">Chargeflow is SOC II Type 2, GDPR, compliant with data stored in US data centers.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide">
                                            <div className="c-tabs-slider_link">
                                                <div className="c-tabs-slider_pane cc-paypal" style={{ display: 'block', height: '100px' }}>
                                                    <NativeReactLottie 
                                                        src={assetUrl("/assets/lotties/66ed8a89818d611e8de36bc6_internal_system_security.json")}
                                                        style={parseInlineStyle("opacity: 1 !important; display: block !important;")}
                                                    />
                                                </div>
                                                <div className="c-industry-slider-text-content">
                                                    <div className="c-title-wrapper"><h3 className="c-title-6 cc-bold">INTERNAL SYSTEMS SECURITY</h3></div>
                                                    <div className="c-text-wrapper"><p className="c-text-2 cc-surface-subtle">We perform constant penetration testing on our systems, put code through multiple review cycles, and hide our infra behind a VPC.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="splide_tabs_3-pagination" className="splide">
                                <div className="splide__track">
                                    <div className="splide__list">
                                        <div className="splide__slide">
                                            <div className="lazer_line is_animated">
                                                <div className="lazer_line-inner"></div>
                                            </div>
                                            <div className="mobile-tab-inner"></div>
                                        </div>
                                        <div className="splide__slide">
                                            <div className="lazer_line is_animated">
                                                <div className="lazer_line-inner"></div>
                                            </div>
                                            <div className="mobile-tab-inner"></div>
                                        </div>
                                        <div className="splide__slide">
                                            <div className="lazer_line is_animated">
                                                <div className="lazer_line-inner"></div>
                                            </div>
                                            <div className="mobile-tab-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="c-section-builder_btn-wrapper cc-secure-by-design">
                        <div className="c-button-group cc-mobile-stack">
                            <div className="c-button-wrapper">
                                <a className="c-sonar-button w-inline-block" data-wf-component-context="%5B%7B%22componentId%22%3A%22631178c4-5ce7-7246-1f99-0374314c139a%22%2C%22instanceId%22%3A%221096d817-89a5-8428-6736-1e9c8f616072%22%7D%2C%7B%22componentId%22%3A%22251c5cf5-7fdc-3826-a683-b802eb2c908f%22%2C%22instanceId%22%3A%22631178c4-5ce7-7246-1f99-0374314c13cf%22%7D%5D"
                                    product-color="blue" data-wf-element-id="251c5cf5-7fdc-3826-a683-b802eb2c908f" data-wf-event-ids="157035264" href="/security" data-wf-native-id-path="1096d817-89a5-8428-6736-1e9c8f616072:631178c4-5ce7-7246-1f99-0374314c13cf:251c5cf5-7fdc-3826-a683-b802eb2c908f"
                                    data-wf-ao-click-engagement-tracking="true" product-size="medium">
                                    <div className="c-text-wr">
                                        <p className="c-button-display-medium">Learn more</p>
                                    </div>
                                    <div className="c-button-arrow">
                                        <div className="c-button-embed w-embed">
                                            <svg width="100%" height="100%" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hide">
                    <div></div>
                </div>
            </section>
        </>
    );
}