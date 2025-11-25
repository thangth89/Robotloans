// components/sections/StatsSection.tsx
import { statsConfig } from "../../lib/loanSiteConfig";

type StatsIconProps = { index: number };

function StatsIcon({ index }: StatsIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2, // Nét mảnh tinh tế
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 64,  // Kích thước to
    height: 64,
    "aria-hidden": true,
  };

  switch (index) {
    case 0: // Speedometer
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
          <path d="M12 12 L15 8" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <rect x="9" y="15" width="6" height="4" rx="1" />
          <path d="M11 17h2" />
        </svg>
      );

    case 1: // Credit card
      return (
        <svg {...commonProps}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <rect x="5" y="8" width="4" height="3" rx="0.5" />
          <path d="M16 9a3 3 0 0 1 3-3" />
          <path d="M17.5 9a1.5 1.5 0 0 1 1.5-1.5" />
          <path d="M5 15h3" />
          <path d="M10 15h4" />
          <path d="M16 15h2" />
        </svg>
      );

    case 2: // Fast process
      return (
        <svg {...commonProps}>
          <circle cx="15" cy="12" r="8" />
          <polyline points="15 9 15 12 17 12" />
          <path d="M2 10h4" />
          <path d="M4 14h2" />
          <path d="M2 12h2" />
        </svg>
      );

    // 4. Dollar – đồng xu + dấu $ đẹp, cân giữa
    case 3:
      return (
        <svg
          viewBox="0 0 32 32"
          stroke="currentColor"
          fill="none"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* viền ngoài và trong của đồng xu */}
          <circle cx="16" cy="16" r="10" />
          <circle cx="16" cy="16" r="8" />

          {/* chữ S của dấu $ */}
          <path d="M19 13.1c-.4-.9-1.3-1.6-2.8-1.6-1.8 0-3 1-3 2.3 0 1.5 1.3 2 3 2.3 1.7.3 3 .9 3 2.3 0 1.4-1.2 2.3-3 2.3-1.5 0-2.5-.6-2.9-1.6" />

          {/* gạch dọc trên/dưới chữ S */}
          <line x1="16" y1="22" x2="16" y2="10" />
          <line x1="16" y1="22" x2="16" y2="21" />
        </svg>
      );

    default:
      return null;
  }
}

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="page-container">
        <h2 className="stats__title">
          We’ve helped over <span className="stats__highlight">2M+</span> people
          get the loans they need, with{" "}
          <span className="stats__highlight">7K+</span> successful connections
          every week with:
        </h2>

        <div className="stats__grid">
          {statsConfig.items.map((item, index) => (
            <div
              key={item}
              // Nếu CSS của bạn đang set cứng width cho icon, bạn có thể cần thêm class 'w-auto h-auto' 
              // hoặc chỉnh CSS để nó nhận kích thước từ SVG
              className={`stats-card stats-card--${index + 1}`}
            >
              <div className="stats-card__icon">
                <StatsIcon index={index} />
              </div>
              <p className="stats-card__text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
