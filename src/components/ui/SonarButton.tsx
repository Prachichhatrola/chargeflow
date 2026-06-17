import type { AnchorHTMLAttributes, ReactNode } from 'react';

type SonarButtonColor = 'blue' | 'green' | 'light' | 'grey' | 'dark' | 'dark-blue' | 'footer' | 'black' | '';
type SonarButtonSize = 'small' | 'medium';

export interface SonarButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  productColor?: SonarButtonColor;
  productSize?: SonarButtonSize;
  children: ReactNode;
  showArrow?: boolean;
}

/** Reusable CTA button matching Webflow c-sonar-button */
export default function SonarButton({
  productColor = 'blue',
  productSize = 'medium',
  children,
  showArrow = true,
  className = '',
  ...rest
}: SonarButtonProps) {
  return (
    <a
      className={`c-sonar-button w-inline-block ${className}`.trim()}
      product-color={productColor}
      product-size={productSize}
      {...rest}
    >
      <div className="c-text-wr">{children}</div>
      {showArrow && (
        <div className="c-button-arrow">
          <div className="c-button-embed w-embed">
            <svg width="100%" height="100%" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      )}
    </a>
  );
}
