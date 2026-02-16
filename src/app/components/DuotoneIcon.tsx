import { FC } from "react";

interface DuotoneIconProps {
  type: string;
  size?: number;
  category?: string;
}

export const DuotoneIcon: FC<DuotoneIconProps> = ({ type, size = 48, category = "general" }) => {
  // Color mapping based on category
  const getColors = () => {
    switch (category) {
      case "business":
        return {
          primary: "#D4A843",
          secondary: "rgba(212, 168, 67, 0.3)",
          glow: "rgba(212, 168, 67, 0.2)",
        };
      case "social":
      case "content":
        return {
          primary: "#10B981",
          secondary: "rgba(16, 185, 129, 0.3)",
          glow: "rgba(16, 185, 129, 0.2)",
        };
      case "general":
      case "learning":
        return {
          primary: "#A78BFA",
          secondary: "rgba(167, 139, 250, 0.3)",
          glow: "rgba(167, 139, 250, 0.2)",
        };
      case "freelance":
        return {
          primary: "#F59E0B",
          secondary: "rgba(245, 158, 11, 0.3)",
          glow: "rgba(245, 158, 11, 0.2)",
        };
      case "youtube":
        return {
          primary: "#EF4444",
          secondary: "rgba(239, 68, 68, 0.3)",
          glow: "rgba(239, 68, 68, 0.2)",
        };
      default:
        return {
          primary: "#D4A843",
          secondary: "rgba(212, 168, 67, 0.3)",
          glow: "rgba(212, 168, 67, 0.2)",
        };
    }
  };

  const colors = getColors();

  // Icon SVG paths based on type
  const getIconPaths = () => {
    switch (type) {
      // Business & Marketing
      case "sms-marketing":
        return (
          <>
            <rect x="6" y="4" width="32" height="36" rx="4" fill={colors.secondary} opacity="0.4" />
            <path
              d="M10 8h24v8H10z"
              fill={colors.primary}
            />
            <path
              d="M10 20h16v2H10zm0 6h20v2H10z"
              fill={colors.primary}
              opacity="0.6"
            />
            <circle cx="14" cy="33" r="2" fill={colors.primary} />
            <circle cx="22" cy="33" r="2" fill={colors.primary} />
            <circle cx="30" cy="33" r="2" fill={colors.primary} />
          </>
        );
      case "product-design":
        return (
          <>
            <path
              d="M8 8h28v28H8z"
              fill={colors.secondary}
              opacity="0.4"
            />
            <path
              d="M12 12h8v8h-8z"
              fill={colors.primary}
            />
            <circle cx="28" cy="16" r="4" fill={colors.primary} opacity="0.7" />
            <path
              d="M12 24h20v2H12zm0 4h16v2H12z"
              fill={colors.primary}
              opacity="0.6"
            />
          </>
        );
      case "brand-naming":
        return (
          <>
            <rect x="8" y="10" width="28" height="24" rx="3" fill={colors.secondary} opacity="0.4" />
            <path
              d="M14 18h4l2 8 2-8h4l-3 12h-6z"
              fill={colors.primary}
            />
            <circle cx="22" cy="15" r="2" fill={colors.primary} />
          </>
        );
      case "marketing-strategy":
        return (
          <>
            <path
              d="M8 32L14 24L20 28L28 16L36 20"
              stroke={colors.secondary}
              strokeWidth="3"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M8 32L14 24L20 28L28 16L36 20"
              stroke={colors.primary}
              strokeWidth="2"
              fill="none"
            />
            <circle cx="8" cy="32" r="3" fill={colors.primary} />
            <circle cx="14" cy="24" r="3" fill={colors.primary} />
            <circle cx="20" cy="28" r="3" fill={colors.primary} />
            <circle cx="28" cy="16" r="3" fill={colors.primary} />
            <circle cx="36" cy="20" r="3" fill={colors.primary} />
          </>
        );
      case "sales-funnel":
        return (
          <>
            <path
              d="M12 8h20l-6 12h-8z"
              fill={colors.secondary}
              opacity="0.4"
            />
            <path
              d="M16 20h12l-4 10h-4z"
              fill={colors.primary}
            />
            <circle cx="22" cy="34" r="3" fill={colors.primary} />
          </>
        );

      // General Learning
      case "learning-coach":
        return (
          <>
            <rect x="10" y="8" width="24" height="28" rx="2" fill={colors.secondary} opacity="0.4" />
            <path
              d="M14 12h16v2H14zm0 6h16v2H14zm0 6h12v2H14z"
              fill={colors.primary}
              opacity="0.6"
            />
            <circle cx="28" cy="26" r="6" fill={colors.primary} />
            <path
              d="M28 23v6m-3-3h6"
              stroke="#1E1E2E"
              strokeWidth="2"
            />
          </>
        );
      case "prompt-writing":
        return (
          <>
            <rect x="8" y="12" width="28" height="20" rx="3" fill={colors.secondary} opacity="0.4" />
            <path
              d="M13 18h8v2h-8zm0 4h12v2H13zm0 4h10v2H13z"
              fill={colors.primary}
            />
            <path
              d="M28 18l4 4-4 4"
              stroke={colors.primary}
              strokeWidth="2"
              fill="none"
            />
          </>
        );
      case "negotiation":
        return (
          <>
            <circle cx="15" cy="22" r="8" fill={colors.secondary} opacity="0.4" />
            <circle cx="29" cy="22" r="8" fill={colors.secondary} opacity="0.4" />
            <path
              d="M10 22h24"
              stroke={colors.primary}
              strokeWidth="3"
            />
            <circle cx="15" cy="22" r="5" fill={colors.primary} />
            <circle cx="29" cy="22" r="5" fill={colors.primary} />
          </>
        );
      case "excel":
        return (
          <>
            <rect x="8" y="8" width="28" height="28" rx="2" fill={colors.secondary} opacity="0.4" />
            <path
              d="M8 16h28M8 24h28M16 8v28M24 8v28"
              stroke={colors.primary}
              strokeWidth="2"
            />
            <rect x="18" y="10" width="4" height="4" fill={colors.primary} />
          </>
        );
      case "fitness":
        return (
          <>
            <circle cx="22" cy="12" r="4" fill={colors.secondary} opacity="0.4" />
            <path
              d="M22 16v10m-6 0l6-4 6 4"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M16 28h12"
              stroke={colors.primary}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        );
      case "english":
        return (
          <>
            <circle cx="22" cy="22" r="14" fill={colors.secondary} opacity="0.4" />
            <path
              d="M22 8v28M8 22h28"
              stroke={colors.primary}
              strokeWidth="2"
            />
            <text x="22" y="27" fontSize="14" fill={colors.primary} textAnchor="middle" fontWeight="bold">A</text>
          </>
        );

      // Freelance & Career
      case "income-path":
        return (
          <>
            <path
              d="M22 8v28"
              stroke={colors.secondary}
              strokeWidth="3"
              opacity="0.4"
            />
            <circle cx="22" cy="12" r="4" fill={colors.primary} />
            <circle cx="22" cy="22" r="4" fill={colors.primary} />
            <circle cx="22" cy="32" r="4" fill={colors.primary} />
            <path
              d="M18 12l-8 6m12-6l8 6M18 22l-8 6m12-6l8 6"
              stroke={colors.primary}
              strokeWidth="2"
            />
          </>
        );
      case "resume":
        return (
          <>
            <rect x="10" y="6" width="24" height="32" rx="2" fill={colors.secondary} opacity="0.4" />
            <circle cx="22" cy="14" r="4" fill={colors.primary} />
            <path
              d="M14 22h16v2H14zm0 4h16v2H14zm0 4h12v2H14z"
              fill={colors.primary}
              opacity="0.7"
            />
          </>
        );
      case "video-edit":
        return (
          <>
            <rect x="6" y="12" width="32" height="20" rx="2" fill={colors.secondary} opacity="0.4" />
            <path
              d="M18 18l8 4-8 4z"
              fill={colors.primary}
            />
            <rect x="6" y="12" width="32" height="4" fill={colors.primary} opacity="0.3" />
          </>
        );

      // Social Media Content
      case "content-writing":
        return (
          <>
            <rect x="8" y="10" width="28" height="24" rx="2" fill={colors.secondary} opacity="0.4" />
            <path
              d="M12 16h8v2h-8zm0 4h20v2H12zm0 4h18v2H12zm0 4h14v2H12z"
              fill={colors.primary}
            />
          </>
        );
      case "caption":
        return (
          <>
            <rect x="10" y="8" width="24" height="28" rx="3" fill={colors.secondary} opacity="0.4" />
            <rect x="14" y="12" width="16" height="10" rx="1" fill={colors.primary} opacity="0.5" />
            <path
              d="M14 26h6v2h-6zm0 4h10v2H14z"
              fill={colors.primary}
            />
          </>
        );
      case "idea":
        return (
          <>
            <circle cx="22" cy="20" r="8" fill={colors.secondary} opacity="0.4" />
            <path
              d="M22 12v-4m8 8h4m-20 0h-4m16.5 10l3 3m-15-3l-3 3"
              stroke={colors.primary}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 28h8v4h-8z"
              fill={colors.primary}
            />
            <path
              d="M19 32h6"
              stroke={colors.primary}
              strokeWidth="2"
            />
          </>
        );
      case "ads":
        return (
          <>
            <rect x="8" y="8" width="28" height="28" rx="3" fill={colors.secondary} opacity="0.4" />
            <path
              d="M22 14l-4 16h8z"
              fill={colors.primary}
            />
            <circle cx="22" cy="32" r="2" fill={colors.primary} />
          </>
        );
      case "viral-hook":
        return (
          <>
            <path
              d="M28 8c4 0 8 4 8 8 0 6-8 12-14 18-6-6-14-12-14-18 0-4 4-8 8-8 2 0 4 1 6 3 2-2 4-3 6-3z"
              fill={colors.secondary}
              opacity="0.4"
            />
            <path
              d="M28 8c4 0 8 4 8 8 0 6-8 12-14 18-6-6-14-12-14-18 0-4 4-8 8-8"
              fill={colors.primary}
            />
          </>
        );
      case "story-calendar":
        return (
          <>
            <rect x="8" y="10" width="28" height="26" rx="2" fill={colors.secondary} opacity="0.4" />
            <rect x="8" y="10" width="28" height="6" fill={colors.primary} />
            <path
              d="M14 6v6m16-6v6"
              stroke={colors.primary}
              strokeWidth="2"
            />
            <path
              d="M12 20h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM12 26h4v4h-4zm6 0h4v4h-4z"
              fill={colors.primary}
              opacity="0.6"
            />
          </>
        );
      case "post-calendar":
        return (
          <>
            <rect x="8" y="10" width="28" height="26" rx="2" fill={colors.secondary} opacity="0.4" />
            <rect x="8" y="10" width="28" height="6" fill={colors.primary} opacity="0.7" />
            <circle cx="14" cy="8" r="2" fill={colors.primary} />
            <circle cx="30" cy="8" r="2" fill={colors.primary} />
            <rect x="12" y="20" width="4" height="4" fill={colors.primary} />
            <rect x="18" y="20" width="4" height="4" fill={colors.primary} />
            <rect x="24" y="20" width="4" height="4" fill={colors.primary} />
            <rect x="30" y="20" width="4" height="4" fill={colors.primary} />
          </>
        );

      // YouTube
      case "youtube-niche":
        return (
          <>
            <rect x="6" y="14" width="32" height="16" rx="2" fill={colors.secondary} opacity="0.4" />
            <path
              d="M18 18l10 4-10 4z"
              fill={colors.primary}
            />
            <circle cx="22" cy="8" r="3" fill={colors.primary} />
            <circle cx="12" cy="8" r="2" fill={colors.primary} opacity="0.6" />
            <circle cx="32" cy="8" r="2" fill={colors.primary} opacity="0.6" />
          </>
        );
      case "video-idea":
        return (
          <>
            <rect x="8" y="12" width="28" height="20" rx="2" fill={colors.secondary} opacity="0.4" />
            <path
              d="M18 18l8 4-8 4z"
              fill={colors.primary}
            />
            <path
              d="M22 8l2 4h-4z"
              fill={colors.primary}
            />
          </>
        );
      case "thumbnail":
        return (
          <>
            <rect x="6" y="10" width="32" height="24" rx="2" fill={colors.secondary} opacity="0.4" />
            <rect x="10" y="14" width="12" height="8" fill={colors.primary} opacity="0.5" />
            <circle cx="30" cy="26" r="4" fill={colors.primary} />
            <path
              d="M14 26h8v2h-8z"
              fill={colors.primary}
            />
          </>
        );

      // Quick Tools Icons
      case "chat":
        return (
          <>
            <rect x="6" y="10" width="32" height="24" rx="4" fill={colors.secondary} opacity="0.4" />
            <path
              d="M10 16h12v2H10zm0 4h20v2H10zm0 4h16v2H10z"
              fill={colors.primary}
              opacity="0.7"
            />
            <circle cx="30" cy="26" r="6" fill={colors.primary} />
            <path
              d="M28 26h4m-2-2v4"
              stroke="#1E1E2E"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        );
      case "image":
        return (
          <>
            <rect x="6" y="8" width="32" height="28" rx="3" fill={colors.secondary} opacity="0.4" />
            <circle cx="16" cy="16" r="4" fill={colors.primary} opacity="0.6" />
            <path
              d="M6 28l8-8 6 6 8-10 10 8v8H6z"
              fill={colors.primary}
            />
          </>
        );
      case "audio":
        return (
          <>
            <rect x="10" y="6" width="24" height="32" rx="3" fill={colors.secondary} opacity="0.4" />
            <circle cx="22" cy="16" r="6" fill={colors.primary} opacity="0.5" />
            <path
              d="M22 22v8m-4 4h8"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M16 16c0-3.3 2.7-6 6-6s6 2.7 6 6"
              stroke={colors.primary}
              strokeWidth="2"
              fill="none"
            />
          </>
        );
      case "video":
        return (
          <>
            <rect x="4" y="10" width="30" height="24" rx="3" fill={colors.secondary} opacity="0.4" />
            <path
              d="M16 18l10 4-10 4z"
              fill={colors.primary}
            />
            <path
              d="M34 16l6-4v20l-6-4"
              fill={colors.primary}
              opacity="0.7"
            />
          </>
        );

      // Stats & UI Icons
      case "conversations":
        return (
          <>
            <rect x="6" y="12" width="22" height="18" rx="3" fill={colors.secondary} opacity="0.4" />
            <path
              d="M28 18l4 4v-10h-4z"
              fill={colors.primary}
            />
            <path
              d="M10 18h12v2H10zm0 4h16v2H10z"
              fill={colors.primary}
            />
          </>
        );
      case "advisors":
        return (
          <>
            <circle cx="22" cy="16" r="6" fill={colors.secondary} opacity="0.4" />
            <circle cx="22" cy="16" r="4" fill={colors.primary} />
            <path
              d="M12 30c0-6 4-8 10-8s10 2 10 8"
              fill={colors.primary}
              opacity="0.7"
            />
          </>
        );
      case "satisfaction":
        return (
          <>
            <circle cx="22" cy="22" r="12" fill={colors.secondary} opacity="0.4" />
            <circle cx="18" cy="20" r="2" fill={colors.primary} />
            <circle cx="26" cy="20" r="2" fill={colors.primary} />
            <path
              d="M16 26c2 3 4 4 6 4s4-1 6-4"
              stroke={colors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </>
        );

      default:
        return (
          <>
            <circle cx="22" cy="22" r="12" fill={colors.secondary} opacity="0.4" />
            <circle cx="22" cy="22" r="8" fill={colors.primary} />
          </>
        );
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Glass background */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)`,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: `0 8px 32px ${colors.glow}, inset 0 0 0 1px rgba(255, 255, 255, 0.05)`,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />

      {/* Icon */}
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {getIconPaths()}
      </svg>
    </div>
  );
};
