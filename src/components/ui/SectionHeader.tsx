import type { HTMLAttributes, ReactNode } from 'react';

interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  tag?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
}

/** Reusable section header matching c-section-builder pattern */
export default function SectionHeader({
  tag,
  title,
  description,
  centered = false,
  className = '',
  ...rest
}: SectionHeaderProps) {
  return (
    <div
      className={`c-section-builder_header-wrapper${centered ? ' cc-version_centre' : ''} ${className}`.trim()}
      {...rest}
    >
      {tag && <div className="c-section-builder_tag-wrapper">{tag}</div>}
      <div className={`c-section-builder_text-stack${centered ? ' cc-version_centre' : ''}`}>
        <div className={`c-section-builder_title-wrapper${centered ? ' cc-version-centred' : ''}`}>
          {title}
        </div>
        {description && (
          <div className="c-section-builder_text-wrapper">{description}</div>
        )}
      </div>
    </div>
  );
}
