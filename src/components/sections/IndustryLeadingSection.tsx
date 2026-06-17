import { assetUrl } from '../../assets/registry';
﻿import React, { useState, useEffect } from 'react';
import LottiePlayer from '../ui/LottiePlayer';

// Static assets data map for easier maintenance
const TAB_DATA = [
  {
    id: 'Tab 1',
    title: 'Constantly Improving',
    description: 'Automated AI experiments that learn and optimize the results powered by the Chargeflow Network.',
    lottieUrl: assetUrl('/assets/lotties/66ed8a8d58a08638669af762_constantly_improving.json'),
    classModifier: 'cc-one'
  },
  {
    id: 'Tab 2',
    title: 'Personalized Evidence',
    description: 'We tailor our AI evidence processor to your business and products, adapting to any change in your business and specific needs.',
    lottieUrl: assetUrl('/assets/lotties/66ed8a89ea6165aa8994a437_personalized_evidence.json'),
    classModifier: 'cc-two'
  },
  {
    id: 'Tab 3',
    title: 'Chargeflow Intelligence',
    description: 'Empower your chargeback management with an AI engine that automatically gathers and organizes evidence, streamlining the dispute process and improving outcomes.',
    lottieUrl: assetUrl('/assets/lotties/66ed8a8d4dd9bc7deefdf172_chargeflow_intelligence.json'),
    classModifier: 'cc-three'
  }
];

export default function IndustryLeadingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Recreates the Webflow timed auto-rotation (5000ms per slide, 3000ms pause mechanism if needed)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % TAB_DATA.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="c-section cc-industry-leading">
      <div className="c-container cc-10cols">
        
        {/* Header Section */}
        <div className="c-section-builder_header-wrapper">
          <div className="c-section-builder_text-stack">
            <div className="c-section-builder_title-wrapper">
              <h2 className="c-title-3 cc-text-weight-700">Industry-leading win rate.</h2>
            </div>
            <div className="c-section-builder_text-wrapper">
              <p className="c-text-1">
                <span className="c-paragraph_muted">Chargeflow delivers industry-leading win rates for our customers.</span>{' '}
                Our advanced AI technology and data-driven approach to submit the most compelling evidence possible maximize the chances of winning each case,{' '}
                <span className="c-paragraph_muted">helping you recover more and protect your revenue.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Tabs + Interactive Lotties) */}
        <div className="hide-l-m">
          <div 
            className="automations_tabs w-tabs"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Tab Navigation Menu */}
            <div className="automations_tabs-menu w-tab-menu">
              {TAB_DATA.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`c-tabs-slider_link w-inline-block w-tab-link ${isActive ? 'w--current' : ''}`}
                    style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center' }}
                  >
                    {/* Visual Star logic preserved from your structure */}
                    {index === 1 && (
                      <img 
                        loading="lazy" 
                        src={assetUrl("/assets/icons/66ed83a900cf31cddde33999_Star_41.svg")} 
                        alt="" 
                        className="c-star-lottie cc-mobile-hide" 
                      />
                    )}
                    
                    <div className={`c-industry-slider-text-content ${tab.classModifier}`}>
                      <div className="c-title-wrapper">
                        <p className="c-title-6 cc-bold">{tab.title}</p>
                      </div>
                      <div className="c-text-wrapper">
                        <p className="c-text-2 cc-surface-subtle">{tab.description}</p>
                      </div>
                    </div>

                    {index === 0 && (
                      <img 
                        loading="lazy" 
                        src={assetUrl("/assets/icons/66ed83a900cf31cddde33999_Star_41.svg")} 
                        alt="" 
                        className="c-star-lottie cc-mobile-hide" 
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Animation Windows */}
            <div className="automations_tabs-content w-tab-content">
              {TAB_DATA.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <div 
                    key={`pane-${tab.id}`} 
                    className={`h-full w-tab-pane ${isActive ? 'w--tab-active' : ''}`}
                    style={{ display: isActive ? 'block' : 'none' }}
                  >
                    <div data-name="lottie-wrapper" className="tab_lottie-wrap">
                      {isActive && (
                        <LottiePlayer
                          src={tab.lottieUrl}
                          autoplay={true}
                          loop={true}
                          className="lottie-div"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Slider Backup Layout (Using active tab state fallback representation) */}
        <div className="hide-d-t">
          <div className="splide">
            <div className="splide__track">
              <div className="splide__list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {TAB_DATA.map((tab, index) => (
                  <div key={`mobile-${tab.id}`} className="splide__slide">
                    <div className="c-tabs-slider_link">
                      <div className="c-tabs-slider_pane" style={{ height: '250px', marginBottom: '15px' }}>
                        <LottiePlayer
                          src={tab.lottieUrl}
                          autoplay={true}
                          loop={true}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className={`c-industry-slider-text-content ${tab.classModifier}`}>
                        <div className="c-title-wrapper">
                          <p className="c-title-6 cc-bold">{tab.title}</p>
                        </div>
                        <div className="c-text-wrapper">
                          <p className="c-text-2 cc-surface-subtle">{tab.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Linear Pagination Indicators */}
          <div className="splide" style={{ marginTop: '20px' }}>
            <div className="splide__track">
              <div className="splide__list" style={{ display: 'flex', gap: '10px' }}>
                {TAB_DATA.map((_, index) => (
                  <div key={`indicator-${index}`} className="splide__slide" style={{ flex: 1 }}>
                    <div className={`lazer_line ${activeTab === index ? 'is_animated' : ''}`}>
                      <div className="lazer_line-inner" style={{ width: activeTab === index ? '100%' : '0%', transition: 'width 5s linear' }}></div>
                    </div>
                    <div className="mobile-tab-inner"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}