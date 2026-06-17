import { assetUrl } from '../../assets/registry';
﻿'use client';

import LottiePlayer from '../ui/LottiePlayer';

export default function InsightsSection() {
    const ANIMATION_URL = assetUrl("/assets/lotties/66ed8a8d87923133f025c845_crystal_ball.json");

    return (
        <>
            <section className="c-section cc-insights">
                <div className="c-container">
                    <div className="c-section-builder_header-wrapper cc-alerts is--hp">
                        <div className="c-section-builder_tag-wrapper">
                            <div data-wf--tag--variant="onlight-translucent" className="c-tag-wrapper w-variant-303c5bea-bf2a-4f5f-43fc-4e5b8ef68aa7">
                                <div className="c-tag">
                                    <div className="c-icon cc-tag">
                                        <div className="c-svg w-embed">
                                            <svg width="100%" height="100%" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 5.66667C0.5 2.8132 2.8132 0.5 5.66667 0.5C8.52014 0.5 10.8333 2.8132 10.8333 5.66667C10.8333 7.61401 9.75598 9.30883 8.16667 10.1892V10.3502C8.16667 10.6465 8.16668 10.8938 8.15282 11.0969C8.1384 11.3083 8.1073 11.508 8.02711 11.7016C7.84104 12.1508 7.48414 12.5077 7.03492 12.6938C6.84133 12.774 6.64164 12.8051 6.43024 12.8195C6.22717 12.8333 5.97981 12.8333 5.68351 12.8333H5.64983C5.35352 12.8333 5.10616 12.8333 4.90309 12.8195C4.69169 12.8051 4.49201 12.774 4.29841 12.6938C3.8492 12.5077 3.49229 12.1508 3.30622 11.7016C3.22603 11.508 3.19494 11.3083 3.18051 11.0969C3.16666 10.8938 3.16666 10.6465 3.16667 10.3502V10.1892C1.57735 9.30883 0.5 7.61401 0.5 5.66667ZM5.66667 1.5C3.36548 1.5 1.5 3.36548 1.5 5.66667C1.5 7.32806 2.47234 8.76334 3.88121 9.43262C4.05556 9.51544 4.16667 9.69122 4.16667 9.88425V10.3333C4.16667 10.6508 4.16694 10.8639 4.17819 11.0288C4.18914 11.1893 4.2088 11.2675 4.2301 11.3189C4.31468 11.5231 4.47691 11.6853 4.6811 11.7699C4.73253 11.7912 4.81068 11.8109 4.97116 11.8218C5.13614 11.8331 5.3492 11.8333 5.66667 11.8333C5.98414 11.8333 6.1972 11.8331 6.36217 11.8218C6.52266 11.8109 6.6008 11.7912 6.65224 11.7699C6.85643 11.6853 7.01865 11.5231 7.10323 11.3189C7.12454 11.2675 7.14419 11.1893 7.15514 11.0288C7.1664 10.8639 7.16667 10.6508 7.16667 10.3333V9.88425C7.16667 9.69122 7.27777 9.51544 7.45212 9.43262C8.86099 8.76334 9.83333 7.32806 9.83333 5.66667C9.83333 3.36548 7.96785 1.5 5.66667 1.5ZM3.5 14.3333C3.5 14.0572 3.72386 13.8333 4 13.8333H7.33333C7.60948 13.8333 7.83333 14.0572 7.83333 14.3333C7.83333 14.6095 7.60948 14.8333 7.33333 14.8333H4C3.72386 14.8333 3.5 14.6095 3.5 14.3333Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <div className="c-text-4 cc-text-weight-500">insights<br /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-section-builder_text-stack cc-version_centre">
                            <div className="c-section-builder_title-wrapper cc-version-centred">
                                <h2 className="c-title-3 cc-text-weight-700 cc-surface-light">A Crystal Ball for Your Chargebacks.</h2>
                            </div>
                            <div className="c-section-builder_text-wrapper">
                                <p className="c-text-1 cc-surface-subtle">Take data-driven decisions based on real, powerful insights delivered exactly when you need them.</p>
                            </div>
                        </div>
                        <div className="c-svg-laser cc-home-4">
                            <div data-laser-size="0.625" svg-laser="wrapper" data-svg="home04" data-laser="2" data-repeat-delay="0.8" className="c-svg-laser_wrapper cc-home-1">
                                <img src={assetUrl("/assets/icons/67408e144f9e90a7410f6669_laser-home-04.svg")} loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="c-section-builder_main-content">
                        <div className="c-insights-lottie-wrapper">
                            <div className="c-alerts-lottie cc-ball">
                                {/* Only render once data arrives to prevent empty-canvas exceptions */}
                                <LottiePlayer
                                    src={ANIMATION_URL}
                                    loop={true}
                                    autoplay={true}
                                />
                            </div>
                            <div className="c-alerts-popup-wrapper">
                                <div className="c-alert-popup-container">
                                    <div className="c-text-wrapper">
                                        <p className="c-text-2 cc-medium cc-surface-light">🚨 Warning:</p>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <p className="c-text-2 cc-surface-light">Your Chargeback ratio nearing 1% threshold.</p>
                                    </div>
                                </div>
                                <div className="c-alert-tag-wrapper">
                                    <div className="c-tag-alerts">
                                        <div className="c-text-wrapper">
                                            <p className="c-text-5">Activate Alerts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="c-recommandation-wrapper">
                        <div className="w-layout-grid c-recommandation-grid">
                            <div className="c-recommandation-grid-content">
                                <div className="c-recommandation-text-wrapper">
                                    <div className="c-title-wrapper">
                                        <p className="c-title-5 cc-medium cc-onsurface">AI Recommendations</p>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <p className="c-text-1 cc-surface-subtle cc-mobile-16">Let our AI analyze your data and make intelligent recommendations on how to reduce your chargebacks.</p>
                                    </div>
                                </div>
                                <div className="c-recommandation-img-wrapper">
                                    <img src={assetUrl("/assets/images/67642dc954dddc2e66935d41_ai-recommendations.avif")} loading="lazy" alt="AI Recommendations Box" className="c-img" />
                                </div>
                            </div>
                            <div className="c-recommandation-grid-content">
                                <div className="c-recommandation-text-wrapper cc-bird">
                                    <div className="c-title-wrapper">
                                        <p className="c-title-5 cc-medium cc-onsurface">Bird&#x27;s-Eye view</p>
                                    </div>
                                    <div className="c-text-wrapper">
                                        <p className="c-text-1 cc-surface-subtle cc-mobile-16">Pay only for alerts that successfully prevent chargebacks.</p>
                                    </div>
                                </div>
                                <div className="c-recommandation-img-wrapper">
                                    <img src={assetUrl("/assets/images/67642e379b3016aeb357ecc6_birds-eye.avif")} loading="lazy" alt="Dispute Analytics Dashboard" className="c-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}