import LottiePlayer from "../ui/LottiePlayer";

export default function PerformanceSection() {

    return (
        <>
            <section className="c-section cc-performance">
                <div className="c-container">
                    <div className="c-section-builder_main-wrapper">
                        <div className="c-section-builder_header-wrapper cc-version_centre">
                            <div className="c-section-builder_tag-wrapper">
                                <div
                                    data-wf--tag--variant="ondark-translucent"
                                    className="c-tag-wrapper w-variant-301e7484-247a-dcaa-43b7-b6f1f63746b0"
                                >
                                    <div className="c-tag">
                                        <div className="c-icon cc-tag">
                                            <div className="c-svg w-embed">
                                                <svg
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 13 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.16602 4.49633L5.16602 6.49633L7.83268 7.82967L5.83268 9.82967M11.8327 7.49633C11.8327 10.7686 8.26338 13.1486 6.96468 13.9063C6.81708 13.9924 6.74328 14.0354 6.63914 14.0577C6.55831 14.0751 6.44039 14.0751 6.35956 14.0577C6.25541 14.0354 6.18162 13.9924 6.03402 13.9063C4.73532 13.1486 1.16602 10.7686 1.16602 7.49633V4.30807C1.16602 3.77506 1.16602 3.50856 1.25319 3.27947C1.3302 3.07709 1.45534 2.89652 1.61779 2.75335C1.80168 2.59129 2.05121 2.49772 2.55029 2.31057L6.12482 0.970116C6.26341 0.918142 6.33271 0.892155 6.404 0.881853C6.46724 0.872716 6.53146 0.872716 6.59469 0.881853C6.66598 0.892155 6.73528 0.918142 6.87388 0.970116L10.4484 2.31057C10.9475 2.49772 11.197 2.59129 11.3809 2.75335C11.5434 2.89652 11.6685 3.07709 11.7455 3.27947C11.8327 3.50856 11.8327 3.77506 11.8327 4.30807V7.49633Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="c-text-wrapper">
                                            <div
                                                fs-list-field="tag"
                                                className="c-text-4 cc-text-weight-500"
                                            >
                                                performance
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="c-section-builder_text-stack cc-version_centre">
                                <div className="c-section-builder_title-wrapper cc-version-centred">
                                    <h2 className="c-title-3 cc-text-weight-700">
                                        AI-Driven Chargeback Revolution.
                                    </h2>
                                </div>

                                <div className="c-section-builder_text-wrapper">
                                    <p className="c-text-1 c-paragraph_muted">
                                        4X your chargeback win rate effortlessly,
                                        powered by Chargeflow Intelligence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c-section-builder_main-content cc-performance-lottie">
                    <div className="c-performance-lottie-wrapper">
                        <LottiePlayer
                            src="/assets/lotties/66ed8a8d2a25d658b3e20d59_ai_revolution.json"
                            loop={true}
                            autoplay={true}
                            className="c-performance-lottie"
                            style={{
                                width: "100%",
                                minHeight: "700px",
                                height: "700px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}