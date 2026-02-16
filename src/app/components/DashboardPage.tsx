import { useNavigate } from "react-router";
import { useState } from "react";
import { X } from "lucide-react";
import AdvisorBottomSheet from "./AdvisorBottomSheet";
import { DuotoneIcon } from "./DuotoneIcon";

interface Advisor {
  id: string;
  name: string;
  emoji: string;
  iconType: string;
  description: string;
  level: "مبتدی" | "متوسط" | "پیشرفته";
  category: string;
  badge?: "محبوب" | "جدید";
  rating: number;
  usageCount: string;
  capabilities: string[];
}

// Component for advisor card
function AdvisorCard({
  advisor,
  bookmarked,
  onBookmarkToggle,
  onClick
}: {
  advisor: Advisor;
  bookmarked: boolean;
  onBookmarkToggle: (id: string) => void;
  onClick: () => void;
}) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "مبتدی":
        return { bg: "rgba(16,185,129,0.1)", text: "#10B981", dot: "🟢" };
      case "متوسط":
        return { bg: "rgba(245,158,11,0.1)", text: "#F59E0B", dot: "🟡" };
      case "پیشرفته":
        return { bg: "rgba(239,68,68,0.1)", text: "#EF4444", dot: "🔴" };
      default:
        return { bg: "rgba(16,185,129,0.1)", text: "#10B981", dot: "🟢" };
    }
  };

  const levelColors = getLevelColor(advisor.level);

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        padding: "18px 16px",
      }}
    >
      {/* Glassmorphic overlay on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(212, 168, 67, 0.3)",
        }}
      />

      {/* Top Row: Bookmark & Badge */}
      <div className="relative z-10 flex items-start justify-between mb-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBookmarkToggle(advisor.id);
          }}
          className="text-xl transition-all duration-300 hover:scale-125"
          style={{
            color: bookmarked ? "#D4A843" : "#6B7280",
            filter: bookmarked ? "drop-shadow(0 0 8px rgba(212, 168, 67, 0.6))" : "none",
          }}
        >
          {bookmarked ? "⭐" : "☆"}
        </button>

        {advisor.badge && (
          <div
            className="px-2.5 py-1 rounded-xl text-[11px] font-medium"
            style={{
              background: advisor.badge === "محبوب"
                ? "linear-gradient(135deg, rgba(212,168,67,0.2) 0%, rgba(212,168,67,0.1) 100%)"
                : "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.1) 100%)",
              color: advisor.badge === "محبوب" ? "#D4A843" : "#10B981",
              border: `1px solid ${advisor.badge === "محبوب" ? "rgba(212,168,67,0.3)" : "rgba(16,185,129,0.3)"}`,
              backdropFilter: "blur(10px)",
            }}
          >
            {advisor.badge === "محبوب" ? "🔥 محبوب" : "🆕 جدید"}
          </div>
        )}
      </div>

      {/* Icon with Glow */}
      <div className="relative flex items-center justify-center my-3">
        {/* Animated Glowing Ring */}
        <div
          className="absolute inset-0 rounded-2xl animate-pulse-glow"
          style={{
            background: `radial-gradient(circle, rgba(212, 168, 67, 0.25) 0%, transparent 70%)`,
            filter: "blur(12px)",
            transform: "scale(1.4)",
          }}
        />

        {/* Icon Container */}
        <div
          className="relative transition-all duration-200 ease-out group-hover:scale-110 group-hover:rotate-[5deg]"
        >
          <DuotoneIcon
            type={advisor.iconType}
            size={48}
            category={advisor.category}
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="relative z-10 text-[#EEEEF0] font-bold text-base text-center mt-2 mb-1 transition-colors duration-300 group-hover:text-[#D4A843]">
        {advisor.name}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-[#9CA3AF] text-xs text-center mb-3 truncate">
        {advisor.description}
      </p>

      {/* Stats Row */}
      <div className="relative z-10 flex items-center justify-between mb-1.5">
        {/* Level Tag */}
        <div
          className="px-2.5 py-1 rounded-xl text-[11px] font-medium"
          style={{
            background: levelColors.bg,
            color: levelColors.text,
            backdropFilter: "blur(10px)",
          }}
        >
          {levelColors.dot} {advisor.level}
        </div>

        {/* Rating */}
        <div
          className="text-xs font-medium transition-all duration-300 group-hover:scale-105"
          style={{
            color: "#D4A843",
            filter: "drop-shadow(0 0 4px rgba(212, 168, 67, 0.3))",
          }}
        >
          ⭐ {advisor.rating}
        </div>
      </div>

      {/* Usage Count */}
      <div className="relative z-10 text-[#9CA3AF] text-[11px] text-center mt-1.5">
        👁️ {advisor.usageCount} استفاده
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const navigate = useNavigate();
  const [bookmarkedAdvisors, setBookmarkedAdvisors] = useState<string[]>([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const quickTools = [
    {
      iconType: "chat",
      title: "چت",
      description: "پرامپت و سوال",
      path: "/chat",
      category: "general",
    },
    {
      iconType: "image",
      title: "تصویر",
      description: "ساخت تصویر",
      path: "/image",
      category: "content",
    },
    {
      iconType: "audio",
      title: "صدا",
      description: "ساخت صدا",
      path: "/audio",
      category: "content",
    },
    {
      iconType: "video",
      title: "ویدیو",
      description: "ساخت ویدیو",
      path: "/video",
      category: "youtube",
    },
  ];

  const recentConversations = [
    {
      iconType: "chat",
      category: "general",
      title: "گفتگو با چت",
      timestamp: "۲ ساعت پیش",
      summary: "راهنمایی درباره استراتژی محتوا...",
    },
    {
      iconType: "prompt-writing",
      category: "general",
      title: "مشاور پرامپت‌نویسی",
      timestamp: "دیروز",
      summary: "نوشتن پرامپت برای تولید محتوا...",
    },
    {
      iconType: "image",
      category: "content",
      title: "ساخت تصویر",
      timestamp: "۳ روز پیش",
      summary: "تصویر لوگو برای برند شخصی...",
    },
  ];

  // Popular advisors
  const popularAdvisors: Advisor[] = [
    {
      id: "12",
      name: "مشاور مسیر درآمدزایی",
      emoji: "🧭",
      iconType: "income-path",
      description: "بهترین مسیر درآمد رو پیدا کن",
      level: "مبتدی",
      category: "freelance",
      badge: "جدید",
      rating: 4.8,
      usageCount: "2.1K",
      capabilities: [
        "شناسایی بهترین مسیر درآمد بر اساس مهارت‌های شما",
        "برنامه‌ریزی ۳۰ روزه برای شروع کسب درآمد",
        "معرفی پلتفرم‌ها و ابزارهای لازم"
      ]
    },
    {
      id: "1",
      name: "مشاور اس ام اس مارکتینگ",
      emoji: "📲",
      iconType: "sms-marketing",
      description: "پیامک‌های فروش مؤثر بنویس",
      level: "مبتدی",
      category: "business",
      badge: "محبوب",
      rating: 4.8,
      usageCount: "2.1K",
      capabilities: [
        "نوشتن متن پیامک فروش با نرخ تبدیل بالا",
        "طراحی کمپین SMS مارکتینگ گام‌به‌گام",
        "بهینه‌سازی متن برای ۷۰ کاراکتر فارسی"
      ]
    },
    {
      id: "5",
      name: "طراحی سیستم فروش",
      emoji: "🏪",
      iconType: "sales-funnel",
      description: "فانل فروش حرفه‌ای بساز",
      level: "متوسط",
      category: "business",
      badge: "محبوب",
      rating: 4.8,
      usageCount: "2.1K",
      capabilities: [
        "طراحی قیف فروش بهینه از آگاهی تا خرید",
        "بهبود نرخ تبدیل در هر مرحله",
        "اتوماسیون فرآیند فروش"
      ]
    },
    {
      id: "7",
      name: "مشاور پرامپت‌نویسی",
      emoji: "✍️",
      iconType: "prompt-writing",
      description: "پرامپت حرفه‌ای برای AI بنویس",
      level: "متوسط",
      category: "general",
      rating: 4.8,
      usageCount: "2.1K",
      capabilities: [
        "آموزش تکنیک‌های نوشتن پرامپت حرفه‌ای",
        "بهینه‌سازی پرامپت برای نتایج بهتر",
        "ساخت پرامپت برای کاربردهای تخصصی"
      ]
    },
  ];

  // Featured advisor for promotional banner
  const featuredAdvisor: Advisor = {
    id: "16",
    name: "کپشن‌نویس اینستاگرام",
    emoji: "📱",
    iconType: "caption",
    description: "کپشن فارسی جذاب بنویس",
    level: "مبتدی",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "نوشتن کپشن کوتاه و تاثیرگذار",
      "استفاده از هشتگ‌های مناسب",
      "افزایش تعامل با CTA های موثر"
    ]
  };

  const handleBookmarkToggle = (id: string) => {
    setBookmarkedAdvisors((prev) =>
      prev.includes(id) ? prev.filter((advisorId) => advisorId !== id) : [...prev, id]
    );
  };

  const handleAdvisorClick = (advisor: Advisor) => {
    setSelectedAdvisor(advisor);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setTimeout(() => setSelectedAdvisor(null), 200);
  };

  const handleStartChat = () => {
    console.log("Start chat with:", selectedAdvisor?.name);
    handleCloseBottomSheet();
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8 px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
            <div>
              <h1 className="text-[28px] font-bold text-[#EEEEF0] mb-2">
                سلام امیر! 👋
              </h1>
              <p className="text-base text-[#9CA3AF]">امروز چیکار می‌خوای بکنی؟</p>
            </div>

            {/* Credit Display */}
            <div
              className="px-5 py-2.5 rounded-2xl border"
              style={{
                background: "rgba(212,168,67,0.12)",
                borderColor: "rgba(212,168,67,0.2)",
              }}
            >
              <span className="text-base font-bold" style={{ color: "#D4A843" }}>
                💰 ۹۰۶ یوز
              </span>
            </div>
          </div>
        </div>

        {/* Quick Tools Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#EEEEF0] mb-4">ابزارهای سریع</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {quickTools.map((tool, index) => (
              <button
                key={index}
                onClick={() => navigate(tool.path)}
                className="group relative text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "24px 20px",
                }}
              >
                {/* Glassmorphic overlay on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(212, 168, 67, 0.3)",
                  }}
                />

                {/* Icon with Glow Effect */}
                <div className="relative flex items-center justify-center mb-3">
                  {/* Animated Glowing Ring */}
                  <div
                    className="absolute inset-0 rounded-2xl animate-pulse-glow"
                    style={{
                      background: `radial-gradient(circle, rgba(212, 168, 67, 0.25) 0%, transparent 70%)`,
                      filter: "blur(12px)",
                      transform: "scale(1.5)",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative transition-all duration-200 ease-out group-hover:scale-110 group-hover:rotate-[5deg]"
                  >
                    <DuotoneIcon
                      type={tool.iconType}
                      size={48}
                      category={tool.category}
                    />
                  </div>
                </div>

                <h3 className="relative z-10 text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-[#D4A843]">
                  {tool.title}
                </h3>
                <p className="relative z-10 text-[13px] text-[#9CA3AF]">
                  {tool.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Conversations Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">⏱️ ادامه مکالمه</h2>
            <button
              className="text-sm font-medium transition-colors hover:text-[#E5BA54]"
              style={{ color: "#D4A843" }}
              onClick={() => navigate("/history")}
            >
              مشاهده همه ←
            </button>
          </div>

          {/* Desktop: 3 column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {recentConversations.map((conversation, index) => (
              <button
                key={index}
                className="bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-[18px_16px] text-right cursor-pointer transition-all duration-200 hover:border-[rgba(212,168,67,0.4)]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1">
                      {conversation.title}
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      {conversation.timestamp}
                    </p>
                  </div>
                  <div className="mr-3">
                    <DuotoneIcon
                      type={conversation.iconType}
                      size={32}
                      category={conversation.category}
                    />
                  </div>
                </div>
                <p className="text-[13px] text-[#9CA3AF] mt-1.5">
                  {conversation.summary}
                </p>
              </button>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 snap-x snap-mandatory pb-2">
              {recentConversations.map((conversation, index) => (
                <button
                  key={index}
                  className="bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-[18px_16px] text-right cursor-pointer transition-all duration-200 hover:border-[rgba(212,168,67,0.4)] flex-shrink-0 w-[280px] snap-start"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        {conversation.title}
                      </h3>
                      <p className="text-xs text-[#6B7280]">
                        {conversation.timestamp}
                      </p>
                    </div>
                    <div className="mr-3">
                      <DuotoneIcon
                        type={conversation.iconType}
                        size={32}
                        category={conversation.category}
                      />
                    </div>
                  </div>
                  <p className="text-[13px] text-[#9CA3AF] mt-1.5">
                    {conversation.summary}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        {showBanner && (
          <div className="my-10">
            <div
              className="relative w-full rounded-2xl border"
              style={{
                background: "linear-gradient(135deg, rgba(212,168,67,0.15) 0%, rgba(212,168,67,0.05) 100%)",
                borderColor: "rgba(212,168,67,0.25)",
                padding: "20px 24px",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-3 left-3 text-[#9CA3AF] hover:text-[#D4A843] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between gap-6">
                {/* Right Side: Icon + Text */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon */}
                  <div className="text-[32px]">✨</div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-bold text-[#EEEEF0]">
                      مشاور ویژه این هفته: کپشن‌نویس اینستاگرام
                    </h3>
                    <p className="text-sm text-[#CBD5E1] mt-1">
                      کپشن‌های جذاب و حرفه‌ای برای پست‌های اینستاگرام بنویس
                    </p>
                  </div>
                </div>

                {/* Left Side: CTA Button */}
                <button
                  onClick={() => handleAdvisorClick(featuredAdvisor)}
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-black bg-[#D4A843] transition-all duration-200 hover:scale-105 flex-shrink-0"
                  style={{ boxShadow: "0 4px 12px rgba(212,168,67,0.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(212,168,67,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(212,168,67,0.3)";
                  }}
                >
                  امتحان کن
                </button>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center text-center gap-4 pt-4">
                {/* Icon */}
                <div className="text-[32px]">✨</div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold text-[#EEEEF0]">
                    مشاور ویژه این هفته: کپشن‌نویس اینستاگرام
                  </h3>
                  <p className="text-sm text-[#CBD5E1] mt-1">
                    کپشن‌های جذاب و حرفه‌ای برای پست‌های اینستاگرام بنویس
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleAdvisorClick(featuredAdvisor)}
                  className="w-full px-6 py-2.5 rounded-xl text-sm font-bold text-black bg-[#D4A843] transition-all duration-200 hover:scale-105"
                  style={{ boxShadow: "0 4px 12px rgba(212,168,67,0.3)" }}
                >
                  امتحان کن
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popular Advisors Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#EEEEF0]">🔥 مشاوران محبوب</h2>
            <button
              className="text-sm font-medium transition-colors hover:text-[#E5BA54]"
              style={{ color: "#D4A843" }}
              onClick={() => navigate("/consultations")}
            >
              مشاهده همه ←
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {popularAdvisors.map((advisor) => (
              <AdvisorCard
                key={advisor.id}
                advisor={advisor}
                bookmarked={bookmarkedAdvisors.includes(advisor.id)}
                onBookmarkToggle={handleBookmarkToggle}
                onClick={() => handleAdvisorClick(advisor)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Advisor Bottom Sheet */}
      <AdvisorBottomSheet
        advisor={selectedAdvisor}
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        onStartChat={handleStartChat}
      />

      {/* Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1.2);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}