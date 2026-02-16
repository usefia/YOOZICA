import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

const advisors: Advisor[] = [
  // Marketing & Business
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
    id: "2",
    name: "طراحی محصول",
    emoji: "🎨",
    iconType: "product-design",
    description: "ایده محصولت رو واقعی کن",
    level: "متوسط",
    category: "business",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "تبدیل ایده به طرح اولیه محصول (MVP)",
      "تحلیل رقبا و بازار هدف",
      "راهنمایی فرآیند طراحی UI/UX"
    ]
  },
  {
    id: "3",
    name: "مشاور انتخاب نام برند",
    emoji: "🏷️",
    iconType: "brand-naming",
    description: "اسم برند جذاب پیدا کن",
    level: "مبتدی",
    category: "business",
    badge: "محبوب",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "ایده‌پردازی نام‌های خلاقانه و به‌یادماندنی",
      "بررسی در دسترس بودن نام دامنه و شبکه‌های اجتماعی",
      "تحلیل روانشناسی نام برند"
    ]
  },
  {
    id: "4",
    name: "مشاور استراتژی بازاریابی",
    emoji: "📈",
    iconType: "marketing-strategy",
    description: "استراتژی بازاریابی حرفه‌ای بچین",
    level: "متوسط",
    category: "business",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "طراحی استراتژی بازاریابی جامع",
      "شناسایی کانال‌های مناسب بازاریابی",
      "تعیین بودجه و KPI های کلیدی"
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

  // General Learning & Skills
  {
    id: "6",
    name: "مربی یادگیری",
    emoji: "🎓",
    iconType: "learning-coach",
    description: "سریع‌تر و بهتر یاد بگیر",
    level: "مبتدی",
    category: "general",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "معرفی تکنیک‌های یادگیری سریع و موثر",
      "برنامه‌ریزی مطالعه شخصی‌سازی شده",
      "راهکارهای تقویت حافظه و تمرکز"
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
  {
    id: "8",
    name: "مشاوره مذاکره میلیاردی",
    emoji: "🤝",
    iconType: "negotiation",
    description: "مهارت مذاکره رو تقویت کن",
    level: "پیشرفته",
    category: "general",
    badge: "محبوب",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "تکنیک‌های پیشرفته مذاکره Win-Win",
      "شبیه‌سازی سناریوهای مذاکره واقعی",
      "روانشناسی طرف مقابل و زبان بدن"
    ]
  },
  {
    id: "9",
    name: "مشاور اکسل",
    emoji: "📊",
    iconType: "excel",
    description: "اکسل رو حرفه‌ای یاد بگیر",
    level: "مبتدی",
    category: "general",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "آموزش فرمول‌های پرکاربرد اکسل",
      "ساخت داشبورد و گزارش تحلیلی",
      "اتوماسیون کارها با Macro"
    ]
  },
  {
    id: "10",
    name: "مشاور بدنسازی",
    emoji: "💪",
    iconType: "fitness",
    description: "برنامه ورزشی شخصی بگیر",
    level: "مبتدی",
    category: "general",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "طراحی برنامه تمرینی متناسب با سطح آمادگی",
      "راهنمایی تغذیه ورزشی",
      "پیشنهاد تمرینات خانگی بدون تجهیزات"
    ]
  },
  {
    id: "11",
    name: "مشاور زبان انگلیسی",
    emoji: "🌍",
    iconType: "english",
    description: "انگلیسیت رو قوی کن",
    level: "مبتدی",
    category: "general",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "تقویت مکالمه و تلفظ صحیح",
      "یادگیری گرامر کاربردی",
      "آمادگی آزمون‌های بین‌المللی"
    ]
  },

  // Freelance & Career
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
    id: "13",
    name: "مشاور تحلیل رزومه",
    emoji: "📄",
    iconType: "resume",
    description: "رزومه‌ت رو حرفه‌ای کن",
    level: "متوسط",
    category: "freelance",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "بررسی و بهینه‌سازی محتوای رزومه",
      "طراحی ساختار حرفه‌ای و جذاب",
      "تطبیق رزومه با موقعیت شغلی هدف"
    ]
  },
  {
    id: "14",
    name: "مشاور ادیت",
    emoji: "✂️",
    iconType: "video-edit",
    description: "ویدیو و عکس حرفه‌ای ادیت کن",
    level: "متوسط",
    category: "freelance",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "آموزش تکنیک‌های ادیت پیشرفته",
      "معرفی نرم‌افزارها و ابزارهای رایگان",
      "ایده‌های خلاقانه برای جلوه‌های بصری"
    ]
  },

  // Social Media Content
  {
    id: "15",
    name: "محتوانویس اینتا و تلگرام",
    emoji: "📝",
    iconType: "content-writing",
    description: "محتوای جذاب فارسی بنویس",
    level: "مبتدی",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "نوشتن پست‌های جذاب و اثرگذار",
      "تولید محتوا متناسب با مخاطب هدف",
      "استراتژی محتوا برای رشد فالوور"
    ]
  },
  {
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
  },
  {
    id: "17",
    name: "ایده‌پردازی محتوا",
    emoji: "💡",
    iconType: "idea",
    description: "ایده محتوای تازه و خلاقانه بگیر",
    level: "مبتدی",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "ژنراتور ایده‌های خلاقانه محتوا",
      "تحلیل ترندهای روز و موضوعات داغ",
      "پیشنهاد فرمت‌های متنوع محتوا"
    ]
  },
  {
    id: "18",
    name: "تبلیغ‌نویس اینتا و تلگرام",
    emoji: "📢",
    iconType: "ads",
    description: "تبلیغات متنی مؤثر بنویس",
    level: "مبتدی",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "نوشتن تبلیغات فروش‌محور",
      "کاربرد روانشناسی در کپی‌رایتینگ",
      "بهینه‌سازی متن برای کلیک و خرید"
    ]
  },
  {
    id: "19",
    name: "مشاور قلاب وایرال",
    emoji: "🪝",
    iconType: "viral-hook",
    description: "هوک‌های وایرال برای محتوا بساز",
    level: "متوسط",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "ساخت هوک‌های جذاب ۳ ثانیه اول",
      "تحلیل محتواهای وایرال",
      "فرمول‌های اثبات شده برای جلب توجه"
    ]
  },
  {
    id: "20",
    name: "تقویم محتوا استوری",
    emoji: "📅",
    iconType: "story-calendar",
    description: "تقویم استوری ۳۰ روزه بگیر",
    level: "مبتدی",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "طراحی تقویم محتوای ۳۰ روزه استوری",
      "ایده‌های متنوع برای هر روز",
      "برنامه‌ریزی استوری‌های تعاملی"
    ]
  },
  {
    id: "21",
    name: "تقویم محتوای اینستاگرام",
    emoji: "🗓️",
    iconType: "post-calendar",
    description: "تقویم پست اینستا بساز",
    level: "مبتدی",
    category: "social",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "برنامه‌ریزی پست‌های ماهانه",
      "توزیع متوازن انواع محتوا",
      "تعیین بهترین زمان انتشار"
    ]
  },

  // YouTube
  {
    id: "22",
    name: "مشاور نیچ یوتیوب",
    emoji: "🎯",
    iconType: "youtube-niche",
    description: "بهترین نیچ یوتیوب رو پیدا کن",
    level: "مبتدی",
    category: "youtube",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "شناسایی نیچ سودآور با رقابت کم",
      "تحلیل پتانسیل رشد و درآمد",
      "بررسی علایق و مهارت‌های شما"
    ]
  },
  {
    id: "23",
    name: "ایده محتوا یوتیوب",
    emoji: "🎬",
    iconType: "video-idea",
    description: "ایده ویدیوی یوتیوب بگیر",
    level: "مبتدی",
    category: "youtube",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "پیشنهاد ایده‌های ویدیو بر اساس نیچ",
      "تحلیل ترندهای یوتیوب فارسی",
      "ساختار ویدیو برای بیشترین بازدید"
    ]
  },
  {
    id: "24",
    name: "مشاور تیتر و تامبنیل",
    emoji: "🖼️",
    iconType: "thumbnail",
    description: "تیتر و تامبنیل کلیک‌خور بساز",
    level: "متوسط",
    category: "youtube",
    rating: 4.8,
    usageCount: "2.1K",
    capabilities: [
      "نوشتن تیتر با CTR بالا",
      "اصول طراحی تامبنیل جذاب",
      "تست A/B برای بهینه‌سازی"
    ]
  },
];

const categories = [
  { id: "all", label: "همه", icon: "" },
  { id: "business", label: "کسب و کار", icon: "💼" },
  { id: "general", label: "عمومی", icon: "📚" },
  { id: "freelance", label: "فریلنسری", icon: "💵" },
  { id: "social", label: "شبکه اجتماعی", icon: "📱" },
  { id: "youtube", label: "یوتیوب", icon: "🎬" },
];

// Popular advisors (specific 4 advisors)
const popularAdvisorIds = ["1", "3", "5", "8"];

// Component for advisor card
function AdvisorCard({
  advisor,
  bookmarked,
  onBookmarkToggle,
  onClick,
  variant = "standard",
  className = ""
}: {
  advisor: Advisor;
  bookmarked: boolean;
  onBookmarkToggle: (id: string) => void;
  onClick: () => void;
  variant?: "standard" | "medium" | "xl";
  className?: string;
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

  // Base hover animation styles
  const baseStyles = "group relative cursor-pointer transition-all duration-300 hover:-translate-y-1";

  // XL Card (Bento Feature)
  if (variant === "xl") {
    return (
      <div
        onClick={onClick}
        className={`${baseStyles} ${className} flex flex-col md:flex-row items-center justify-between overflow-hidden`}
        style={{
          background: "linear-gradient(135deg, rgba(212,168,67,0.08), rgba(139,92,246,0.06))",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "24px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4A843]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Right Side: Icon */}
        <div className="relative z-10 flex-shrink-0 mb-6 md:mb-0 md:ml-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4A843]/20 blur-xl rounded-full scale-150 animate-pulse" />
            <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <DuotoneIcon type={advisor.iconType} size={88} category={advisor.category} />
            </div>
          </div>
        </div>

        {/* Left Side: Content */}
        <div className="relative z-10 flex-1 w-full text-right">
          <div className="flex items-center justify-end gap-3 mb-3">
            {advisor.badge && (
              <div className="px-2 py-0.5 rounded-lg text-[10px] bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/20">
                {advisor.badge === "محبوب" ? "🔥" : "✨"} {advisor.badge}
              </div>
            )}
            <div
              className="px-2 py-0.5 rounded-lg text-[10px]"
              style={{ background: levelColors.bg, color: levelColors.text }}
            >
              {levelColors.dot} {advisor.level}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {advisor.name}
          </h3>
          <p className="text-[#9CA3AF] text-sm mb-6 leading-relaxed line-clamp-2 md:line-clamp-3">
            {advisor.description}
          </p>

          <div className="flex items-center justify-between">
            <button className="bg-[#D4A843] hover:bg-[#E8B84A] text-black font-bold text-sm py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-[#D4A843]/20 transform hover:-translate-y-1">
              دریافت مشاوره
            </button>

            <div className="flex flex-col items-end text-xs gap-1">
              <div className="flex items-center gap-1 text-[#D4A843] font-bold">
                <span>⭐</span>
                <span className="text-sm">{advisor.rating}</span>
              </div>
              <div className="text-[#9CA3AF]">
                👁️ {advisor.usageCount} بازدید
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Medium Card (Compact Horizontal)
  if (variant === "medium") {
    return (
      <div
        onClick={onClick}
        className={`${baseStyles} ${className} flex items-center p-4 pr-5`}
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          overflow: "hidden"
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, transparent, ${levelColors.text}, transparent)` }}
        />

        <div className="flex-shrink-0 ml-4 group-hover:scale-110 transition-transform duration-300">
          <DuotoneIcon type={advisor.iconType} size={56} category={advisor.category} />
        </div>

        <div className="flex-1 text-right min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-bold text-base truncate">{advisor.name}</h3>
            {advisor.badge && <span className="text-[10px] text-[#D4A843]">●</span>}
          </div>
          <p className="text-[#9CA3AF] text-xs line-clamp-1 opacity-80">{advisor.description}</p>
        </div>

        <div className="flex-shrink-0 flex flex-col items-end gap-1.5 pl-2 mr-4 border-r border-white/10 pr-4">
          <div className="font-bold text-[#D4A843] text-sm">⭐ {advisor.rating}</div>
          <div className="text-[10px] text-[#9CA3AF]">{advisor.usageCount}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
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
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(212, 168, 67, 0.3)",
        }}
      />

      {/* Card Header */}
      <div className="relative z-10 flex items-start justify-between mb-3 md:mb-4">
        {/* Icon with Glowing Ring */}
        <div className="relative flex-shrink-0">
          {/* Animated Glowing Ring */}
          <div
            className="absolute inset-0 rounded-2xl animate-pulse-glow"
            style={{
              background: `radial-gradient(circle, rgba(212, 168, 67, 0.25) 0%, transparent 70%)`,
              filter: "blur(8px)",
              transform: "scale(1.2)",
            }}
          />

          {/* Icon Container with Glass Effect */}
          <div
            className="relative transition-all duration-200 ease-out group-hover:scale-110 group-hover:rotate-[5deg]"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "4px",
              boxShadow: "0 0 0 1.5px rgba(212, 168, 67, 0.25)",
            }}
          >
            <DuotoneIcon
              type={advisor.iconType}
              size={48}
              category={advisor.category}
            />
          </div>
        </div>

        {/* Level Badge & Bookmark */}
        <div className="relative z-10 flex items-center gap-2">
          {/* Level Tag */}
          <div
            className="px-2 py-0.5 rounded-lg text-[10px] md:text-[11px] font-medium whitespace-nowrap"
            style={{
              background: levelColors.bg,
              color: levelColors.text,
              backdropFilter: "blur(10px)",
            }}
          >
            {levelColors.dot} {advisor.level}
          </div>

          {/* Bookmark Icon */}
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
        </div>
      </div>

      {/* Badge */}
      {advisor.badge && (
        <div
          className="relative z-10 inline-block px-2.5 py-1 rounded-xl text-[11px] font-medium mb-3"
          style={{
            background: advisor.badge === "محبوب"
              ? "linear-gradient(135deg, rgba(212,168,67,0.2) 0%, rgba(212,168,67,0.1) 100%)"
              : "linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0.1) 100%)",
            color: advisor.badge === "محبوب" ? "#D4A843" : "#22D3EE",
            border: `1px solid ${advisor.badge === "محبوب" ? "rgba(212,168,67,0.3)" : "rgba(34,211,238,0.3)"}`,
            backdropFilter: "blur(10px)",
          }}
        >
          {advisor.badge === "محبوب" ? "🔥" : "✨"} {advisor.badge}
        </div>
      )}

      {/* Name */}
      <h3 className="relative z-10 text-[#EEEEF0] font-bold text-base text-right mt-2 mb-1 transition-colors duration-300 group-hover:text-[#D4A843]">
        {advisor.name}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-[#9CA3AF] text-xs text-right mb-3 line-clamp-2">
        {advisor.description}
      </p>

      {/* Footer: Level & Rating */}
      <div className="relative z-10 flex items-center justify-between text-xs">
        {/* Rating */}
        <div
          className="flex items-center gap-1 font-medium transition-all duration-300 group-hover:scale-105"
          style={{
            color: "#D4A843",
            filter: "drop-shadow(0 0 4px rgba(212, 168, 67, 0.3))",
          }}
        >
          ⭐ {advisor.rating}
        </div>

        {/* Usage Count */}
        <div className="text-[#9CA3AF] text-[11px]">
          👁️ {advisor.usageCount}
        </div>
      </div>
    </div>
  );
}

// Stats Counter Component with count-up animation
function StatsBar() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    conversations: 0,
    advisors: 0,
    satisfaction: 0,
  });

  const targetValues = {
    conversations: 500,
    advisors: 24,
    satisfaction: 98,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress); // Easing function

      setCounts({
        conversations: Math.floor(targetValues.conversations * easeOutQuad),
        advisors: Math.floor(targetValues.advisors * easeOutQuad),
        satisfaction: Math.floor(targetValues.satisfaction * easeOutQuad),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetValues); // Ensure final values are exact
      }
    }, stepDuration);
  };

  const stats = [
    {
      iconType: "conversations",
      category: "business",
      value: counts.conversations,
      label: "بیش از ۵۰۰ هزار گفتگو",
      suffix: "",
    },
    {
      iconType: "advisors",
      category: "general",
      value: counts.advisors,
      label: "۲۴ مشاور تخصصی",
      suffix: "",
    },
    {
      iconType: "satisfaction",
      category: "content",
      value: counts.satisfaction,
      label: "رضایت ۹۸٪ کاربران",
      suffix: "%",
    },
  ];

  return (
    <div
      ref={statsRef}
      className="my-10 md:my-12 p-6 md:p-8 rounded-[24px] border border-white/5"
      style={{
        background: 'linear-gradient(135deg, rgba(212, 168, 67, 0.05) 0%, rgba(76, 29, 149, 0.05) 100%)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            style={{
              animation: hasAnimated ? `fadeInUp 600ms ease-out ${index * 150}ms backwards` : 'none',
            }}
          >
            {/* Icon */}
            <div className="mb-4">
              <DuotoneIcon
                type={stat.iconType}
                size={64}
                category={stat.category}
              />
            </div>

            {/* Counter */}
            <div className="flex items-baseline justify-center mb-2">
              <span
                className="text-3xl md:text-4xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #D4A843 0%, #E8B84A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value.toLocaleString('fa-IR')}
                {stat.suffix}
              </span>
              {index === 0 && (
                <span
                  className="text-xl md:text-2xl font-bold mr-1"
                  style={{
                    background: 'linear-gradient(135deg, #D4A843 0%, #E8B84A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  +
                </span>
              )}
            </div>

            {/* Label */}
            <p className="text-sm md:text-base text-white font-medium" style={{ opacity: 0.9 }}>
              {stat.label}
            </p>

            {/* Decorative line */}
            {index < stats.length - 1 && (
              <div
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(212, 168, 67, 0.3) 50%, transparent 100%)',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConsultationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [bookmarkedAdvisors, setBookmarkedAdvisors] = useState<string[]>([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeQuickStart, setActiveQuickStart] = useState<string | null>(null);

  // Search modal states
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [modalSearchQuery, setModalSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Spotlight advisors data
  const spotlightAdvisors = [
    {
      name: "مشاور استراتژی بازاریابی",
      description: "استراتژی بازاریابی حرفه‌ای بچین و فروش خودت رو چند برابر کن",
      emoji: "📈",
      id: "4",
    },
    {
      name: "مشاور انتخاب نام برند",
      description: "اسم برند جذاب و به‌یادماندنی پیدا کن و در بازار متمایز شو",
      emoji: "🏷️",
      id: "3",
    },
    {
      name: "طراحی سیستم فروش",
      description: "فانل فروش حرفه‌ای بساز و نرخ تبدیل رو بیشتر کن",
      emoji: "🏪",
      id: "5",
    },
  ];

  // Quick start options with advisor mappings
  const quickStartOptions = [
    {
      id: "content",
      label: "میخوام محتوا بسازم",
      icon: "📝",
      advisorIds: ["15", "16", "17", "18", "19", "20", "21"], // Content & Social advisors
    },
    {
      id: "income",
      label: "میخوام درآمدم رو ببرم بالا",
      icon: "💰",
      advisorIds: ["1", "4", "5", "12", "13"], // Business & Freelance advisors
    },
    {
      id: "skill",
      label: "میخوام مهارت یاد بگیرم",
      icon: "🎯",
      advisorIds: ["6", "7", "9", "10", "11"], // General learning advisors
    },
  ];

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % spotlightAdvisors.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [spotlightAdvisors.length]);

  const currentSpotlight = spotlightAdvisors[spotlightIndex];

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
    setTimeout(() => setSelectedAdvisor(null), 200); // Delay to allow animation
  };

  const handleStartChat = () => {
    // Navigate to chat with selected advisor
    console.log("Start chat with:", selectedAdvisor?.name);
    handleCloseBottomSheet();
  };

  const filteredAdvisors = advisors.filter((advisor) => {
    const matchesSearch = advisor.name.includes(searchQuery) || advisor.description.includes(searchQuery);
    const matchesFilter = activeFilter === "all" || advisor.category === activeFilter;
    const matchesQuickStart = !activeQuickStart ||
      quickStartOptions.find(opt => opt.id === activeQuickStart)?.advisorIds.includes(advisor.id);
    return matchesSearch && matchesFilter && matchesQuickStart;
  });

  const handleQuickStartClick = (optionId: string) => {
    if (activeQuickStart === optionId) {
      // Deactivate if already active
      setActiveQuickStart(null);
    } else {
      // Activate new filter
      setActiveQuickStart(optionId);
      setActiveFilter("all"); // Reset category filter
      scrollToAllAdvisors(); // Scroll to results
    }
  };

  const popularAdvisors = advisors.filter((advisor) =>
    popularAdvisorIds.includes(advisor.id)
  );

  // Search Placeholders
  const placeholders = [
    "مشاور بازاریابی رو پیدا کن...",
    "دنبال مشاور محتوا میگردی؟...",
    "مشاور فروش رو امتحان کن..."
  ];

  // Placeholder animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter Pills Logic
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const activeIndex = categories.findIndex(c => c.id === activeFilter);
    const activeTab = tabsRef.current[activeIndex];

    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        opacity: 1
      });
    }
  }, [activeFilter]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return advisors.length;
    return advisors.filter(a => a.category === categoryId).length;
  };

  const getCategoryColor = (id: string) => {
    switch (id) {
      case "all": return "#D4A843";
      case "business": return "#3B82F6";
      case "general": return "#10B981";
      case "freelance": return "#F59E0B";
      case "social": return "#EC4899";
      case "youtube": return "#EF4444";
      default: return "#D4A843";
    }
  };

  const scrollToAllAdvisors = () => {
    const element = document.getElementById("all-advisors");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cursor tracking for glow effect (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Only add listener on desktop
    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen pb-20 md:pb-8 relative">
      {/* Atmospheric Background Effects Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Orb 1: Purple - Top Right */}
        <div
          className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px]"
          style={{
            top: '-10%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(76, 29, 149, 0.25) 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.25,
            animation: 'floatOrb1Mobile 20s ease-in-out infinite',
          }}
        />

        {/* Orb 2: Amber - Bottom Left */}
        <div
          className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px]"
          style={{
            bottom: '10%',
            left: '5%',
            background: 'radial-gradient(circle, rgba(212, 168, 67, 0.25) 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.25,
            animation: 'floatOrb2Mobile 20s ease-in-out infinite',
          }}
        />

        {/* Orb 3: Cyan - Center */}
        <div
          className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
          style={{
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.2,
            animation: 'floatOrb3Mobile 20s ease-in-out infinite',
          }}
        />

        {/* Grain Overlay */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.03 }}>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Cursor Glow (Desktop Only) */}
        <div
          className="hidden md:block absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: `${cursorPosition.x - 150}px`,
            top: `${cursorPosition.y - 150}px`,
            background: 'radial-gradient(circle, rgba(212, 168, 67, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Content - Positioned Above Background */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Hero Spotlight Banner */}
        <div
          className="relative h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden px-6 md:px-8 mb-8"
          style={{
            background: `linear-gradient(135deg, #D4A843 0%, #4C1D95 100%)`,
          }}
        >
          {/* Hero Particles (Desktop Only) */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="hidden md:block absolute rounded-full"
              style={{
                width: `${Math.random() * 2 + 2}px`,
                height: `${Math.random() * 2 + 2}px`,
                background: '#D4A843',
                left: `${Math.random() * 100}%`,
                bottom: '10%',
                animation: `floatParticle ${Math.random() * 4 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.6,
                boxShadow: '0 0 4px rgba(212, 168, 67, 0.8)',
              }}
            />
          ))}

          {/* Animated Gradient Mesh */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `
              radial-gradient(circle at 20% 50%, rgba(212, 168, 67, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(76, 29, 149, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(245, 197, 99, 0.7) 0%, transparent 50%)
            `,
              animation: 'gradientShift 8s ease-in-out infinite',
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Text Content */}
            <div
              className="flex-1 text-center md:text-right"
              key={spotlightIndex}
            >
              {/* Title */}
              <h2
                className="text-[28px] font-bold text-white mb-4"
                style={{
                  animation: 'fadeInUp 600ms ease-out',
                  textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)',
                }}
              >
                مشاور هفته
              </h2>

              {/* Advisor Name */}
              <h3
                className="text-[20px] font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE8B3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'fadeInUp 600ms ease-out 150ms backwards',
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.2)',
                }}
              >
                {currentSpotlight.name}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] text-white mb-6 max-w-[500px] mx-auto md:mx-0 leading-relaxed"
                style={{
                  opacity: 0.95,
                  animation: 'fadeInUp 600ms ease-out 300ms backwards',
                  textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                {currentSpotlight.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const advisor = advisors.find(a => a.id === currentSpotlight.id);
                  if (advisor) handleAdvisorClick(advisor);
                }}
                className="group relative inline-flex items-center justify-center gap-2 bg-[#D4A843] text-white font-bold text-[14px] px-8 py-3.5 rounded-[14px] transition-all duration-300 hover:scale-105 active:brightness-105 min-h-[48px] overflow-hidden"
                style={{
                  boxShadow: '0 8px 24px rgba(212, 168, 67, 0.4)',
                  animation: 'fadeInUp 600ms ease-out 450ms backwards',
                }}
                onMouseEnter={(e) => {
                  // Desktop hover effect
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #E8B84A 0%, #D4A843 100%)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 168, 67, 0.8), 0 12px 32px rgba(212, 168, 67, 0.6)';
                    e.currentTarget.style.filter = 'brightness(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  // Reset desktop hover
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.background = '#D4A843';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 168, 67, 0.4)';
                    e.currentTarget.style.filter = 'brightness(1)';
                  }
                }}
                onTouchStart={(e) => {
                  // Mobile tap feedback
                  e.currentTarget.style.filter = 'brightness(1.05)';
                }}
                onTouchEnd={(e) => {
                  // Reset mobile tap
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              >
                {/* Button shine effect */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                />

                <span className="relative z-10">بیشتر بدانید</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </button>
            </div>

            {/* Right Side: Large Advisor Icon */}
            <div
              className="flex-shrink-0"
              key={`icon-${spotlightIndex}`}
              style={{
                animation: 'floatIcon 3s ease-in-out infinite, fadeIn 600ms ease-out',
              }}
            >
              {(() => {
                const currentAdvisor = advisors.find(a => a.id === currentSpotlight.id);
                return currentAdvisor ? (
                  <DuotoneIcon
                    type={currentAdvisor.iconType}
                    size={180}
                    category={currentAdvisor.category}
                  />
                ) : null;
              })()}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {spotlightAdvisors.map((_, index) => (
              <button
                key={index}
                onClick={() => setSpotlightIndex(index)}
                className="transition-all duration-300"
                style={{
                  width: index === spotlightIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: index === spotlightIndex
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(255, 255, 255, 0.3)',
                  boxShadow: index === spotlightIndex
                    ? '0 0 8px rgba(255, 255, 255, 0.5)'
                    : 'none',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Search and Filters Container */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Search Bar */}
          {/* Search Trigger */}
          <div className="flex justify-center mb-6">
            <div
              className="relative w-full max-w-[600px] h-12 bg-[#1E1E2E] border border-white/10 rounded-[14px] flex items-center px-4 cursor-pointer hover:border-[rgba(212,168,67,0.3)] transition-colors duration-200"
              onClick={() => setIsSearchModalOpen(true)}
            >
              <Search className="w-5 h-5 text-[#D4A843] ml-3" />

              {/* Animated Placeholder */}
              <div className="flex-1 relative h-full overflow-hidden flex items-center">
                <span
                  key={placeholderIndex}
                  className="text-[#9CA3AF] text-sm animate-fadeInOut absolute w-full text-right"
                  style={{ animation: 'fadePlaceholder 3s infinite' }}
                >
                  {placeholders[placeholderIndex]}
                </span>
              </div>

              {/* Shortcut Badge */}
              <div
                className="hidden md:flex items-center justify-center px-2 py-1 rounded-[6px] text-[11px] text-[#9CA3AF]"
                style={{ background: 'rgba(255, 255, 255, 0.06)' }}
              >
                Ctrl + K
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="sticky top-0 z-30 mb-8 -mx-4 px-4 md:mx-0 md:px-0 bg-[#0f0f15]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
            <div className="overflow-x-auto pb-0 pt-2 relative no-scrollbar">
              <div className="flex items-center gap-2 min-w-max md:justify-center px-4 md:px-0 relative pb-3">
                {categories.map((category, index) => {
                  const isActive = activeFilter === category.id;
                  const color = getCategoryColor(category.id);
                  const count = getCategoryCount(category.id);

                  return (
                    <button
                      key={category.id}
                      ref={(el) => { tabsRef.current[index] = el; }}
                      onClick={() => setActiveFilter(category.id)}
                      className={`relative px-4 py-2 rounded-[12px] text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 min-h-[40px] group`}
                      style={isActive ? {
                        background: `${color}1F`,
                        border: `1px solid ${color}`,
                        color: color,
                        boxShadow: `0 0 12px ${color}33`,
                      } : {
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#9CA3AF'
                      }}
                    >
                      {category.icon && <span className="opacity-90">{category.icon}</span>}
                      <span>{category.label}</span>

                      {/* Badge Counter */}
                      <span
                        className="flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full text-[10px] ml-1 transition-colors font-bold"
                        style={{
                          background: isActive ? color : 'rgba(255, 255, 255, 0.1)',
                          color: isActive ? '#000000' : '#9CA3AF',
                          opacity: isActive ? 1 : 0.7
                        }}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}

                {/* Sliding Indicator */}
                <div
                  className="absolute bottom-0 h-[2px] rounded-t-full transition-all duration-300 ease-out z-10"
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                    backgroundColor: getCategoryColor(activeFilter),
                    opacity: indicatorStyle.opacity,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Quick Start Banner - Only visible when filter is "همه" */}
          {activeFilter === "all" && (
            <div
              className="mb-8 p-4 md:p-5 rounded-[20px] border border-white/5"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 168, 67, 0.08) 0%, rgba(76, 29, 149, 0.08) 100%)',
              }}
            >
              {/* Title */}
              <h3 className="text-base md:text-[16px] text-white font-medium mb-3 text-center md:text-right">
                نمیدونی از کجا شروع کنی؟
              </h3>

              {/* Pill Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
                {quickStartOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleQuickStartClick(option.id)}
                    className={`group relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-[20px] text-sm font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 min-h-[44px] w-full md:w-auto md:min-w-[160px]`}
                    style={{
                      background: activeQuickStart === option.id
                        ? 'linear-gradient(135deg, #D4A843 0%, #E8B84A 100%)'
                        : 'rgba(255, 255, 255, 0.05)',
                      color: activeQuickStart === option.id ? '#000000' : '#FFFFFF',
                      border: activeQuickStart === option.id
                        ? '1px solid rgba(212, 168, 67, 0.3)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: activeQuickStart === option.id
                        ? '0 4px 16px rgba(212, 168, 67, 0.3)'
                        : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (activeQuickStart !== option.id) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeQuickStart !== option.id) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      }
                    }}
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-xs md:text-sm">{option.label}</span>

                    {/* Active glow effect */}
                    {activeQuickStart === option.id && (
                      <div
                        className="absolute inset-0 rounded-[20px] opacity-50"
                        style={{
                          background: 'radial-gradient(circle at center, rgba(212, 168, 67, 0.2) 0%, transparent 70%)',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Active filter indicator */}
              {activeQuickStart && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-xs text-[#D4A843]">
                    ✨ نمایش {filteredAdvisors.length} مشاور مرتبط
                  </span>
                  <button
                    onClick={() => setActiveQuickStart(null)}
                    className="text-xs text-[#9CA3AF] hover:text-white transition-colors underline"
                  >
                    پاک کردن فیلتر
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Popular Advisors Section - Only visible when filter is "همه" */}
          {activeFilter === "all" && (
            <div className="mt-8 mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">🔥 پرطرفدارترین‌ها</h2>
                <button
                  onClick={scrollToAllAdvisors}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#D4A843" }}
                >
                  مشاهده همه ←
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(180px,auto)]">
                {popularAdvisors.map((advisor, index) => {
                  let variant: "standard" | "medium" | "xl" = "standard";
                  let className = "";

                  // First card is XL: Spans 2 cols on tablet/desktop, 2 rows on desktop
                  if (index === 0) {
                    variant = "xl";
                    className = "md:col-span-2 lg:row-span-2";
                  }

                  return (
                    <AdvisorCard
                      key={advisor.id}
                      advisor={advisor}
                      bookmarked={bookmarkedAdvisors.includes(advisor.id)}
                      onBookmarkToggle={handleBookmarkToggle}
                      onClick={() => handleAdvisorClick(advisor)}
                      variant={variant}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats Bar - Only visible when filter is "همه" */}
          {activeFilter === "all" && <StatsBar />}

          {/* All Advisors Section */}
          <div id="all-advisors" className="mt-10">
            <h2 className="text-xl font-bold text-white mb-6">
              {activeFilter === "all"
                ? "همه مشاوره‌ها"
                : categories.find((c) => c.id === activeFilter)?.label || "همه مشاوره‌ها"}
            </h2>

            {filteredAdvisors.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#9CA3AF]">هیچ مشاوری یافت نشد</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(180px,auto)]">
                {filteredAdvisors.map((advisor, index) => {
                  // Every 7th card is medium (index 6, 13, 20...)
                  const isMedium = (index + 1) % 7 === 0;

                  return (
                    <AdvisorCard
                      key={advisor.id}
                      advisor={advisor}
                      bookmarked={bookmarkedAdvisors.includes(advisor.id)}
                      onBookmarkToggle={handleBookmarkToggle}
                      onClick={() => handleAdvisorClick(advisor)}
                      variant={isMedium ? "medium" : "standard"}
                      className={isMedium ? "md:col-span-2" : ""}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Advisor Bottom Sheet */}
        {isBottomSheetOpen && selectedAdvisor && (
          <AdvisorBottomSheet
            advisor={selectedAdvisor}
            isOpen={isBottomSheetOpen}
            onClose={handleCloseBottomSheet}
            onStartChat={handleStartChat}
          />
        )}
      </div>
      {/* End Main Content Wrapper */}

      {/* Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(5%, -5%) scale(1.1);
          }
          66% {
            transform: translate(-5%, 5%) scale(0.95);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

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

        /* Orb Float Animations - Mobile Responsive */
        @keyframes floatOrb1Mobile {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-10px, 10px);
          }
          66% {
            transform: translate(10px, -5px);
          }
        }

        /* Desktop version with full amplitude */
        @media (min-width: 768px) {
          @keyframes floatOrb1Mobile {
            0%, 100% {
              transform: translate(0, 0);
            }
            33% {
              transform: translate(-20px, 20px);
            }
            66% {
              transform: translate(20px, -10px);
            }
          }
        }

        @keyframes floatOrb2Mobile {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(8px, -12px);
          }
          66% {
            transform: translate(-8px, 8px);
          }
        }

        /* Desktop version with full amplitude */
        @media (min-width: 768px) {
          @keyframes floatOrb2Mobile {
            0%, 100% {
              transform: translate(0, 0);
            }
            33% {
              transform: translate(15px, -25px);
            }
            66% {
              transform: translate(-15px, 15px);
            }
          }
        }

        @keyframes floatOrb3Mobile {
          0%, 100% {
            transform: translate(-50%, -50%);
          }
          33% {
            transform: translate(calc(-50% + 5px), calc(-50% - 10px));
          }
          66% {
            transform: translate(calc(-50% - 5px), calc(-50% + 5px));
          }
        }

        /* Desktop version with full amplitude */
        @media (min-width: 768px) {
          @keyframes floatOrb3Mobile {
            0%, 100% {
              transform: translate(-50%, -50%);
            }
            33% {
              transform: translate(calc(-50% + 10px), calc(-50% - 20px));
            }
            66% {
              transform: translate(calc(-50% - 10px), calc(-50% + 10px));
            }
          }
        }

        /* Particle Float Animation */
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-200px) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
          style={{
            background: 'rgba(21, 21, 30, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            animation: 'fadeIn 200ms ease-out'
          }}
          onClick={() => setIsSearchModalOpen(false)}
        >
          <div
            className="w-full max-w-[600px] bg-[#1E1E2E] rounded-[24px] overflow-hidden flex flex-col max-h-[70vh] shadow-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
            style={{
              animation: 'modalIn 200ms ease-out',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center gap-3 p-5 border-b border-white/10 bg-[#1E1E2E]">
              <Search className="w-6 h-6 text-[#D4A843]" />
              <input
                autoFocus
                type="text"
                placeholder="جستجو در بین مشاوران..."
                className="flex-1 bg-transparent text-white text-lg placeholder:text-[#9CA3AF] outline-none"
                value={modalSearchQuery}
                onChange={e => setModalSearchQuery(e.target.value)}
              />
              <button
                onClick={() => setIsSearchModalOpen(false)}
                className="hidden md:flex items-center justify-center h-7 px-2 rounded-[6px] bg-[rgba(255,255,255,0.06)] border border-white/10 text-[10px] text-[#9CA3AF] font-medium"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {advisors.filter(advisor =>
                advisor.name.includes(modalSearchQuery) ||
                advisor.description.includes(modalSearchQuery) ||
                advisor.category.includes(modalSearchQuery)
              ).length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {advisors.filter(advisor =>
                    advisor.name.includes(modalSearchQuery) ||
                    advisor.description.includes(modalSearchQuery) ||
                    advisor.category.includes(modalSearchQuery)
                  ).map(advisor => (
                    <div
                      key={advisor.id}
                      onClick={() => {
                        handleAdvisorClick(advisor);
                        setIsSearchModalOpen(false);
                      }}
                      className="flex items-center gap-4 p-3 rounded-[16px] border border-white/5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#D4A843]/30 transition-all cursor-pointer group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-[12px] bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        <DuotoneIcon type={advisor.iconType} size={28} category={advisor.category} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm md:text-base mb-1 truncate group-hover:text-[#D4A843] transition-colors">
                          {advisor.name}
                        </h4>
                        <p className="text-[#9CA3AF] text-xs truncate">
                          {advisor.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#D4A843] text-xs font-medium">
                        <span>⭐</span>
                        <span>{advisor.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="text-4xl mb-4 opacity-50">🔍</span>
                  <p className="text-white font-medium mb-1">نتیجه‌ای یافت نشد</p>
                  <p className="text-[#9CA3AF] text-sm">
                    با کلمات کلیدی دیگری جستجو کنید
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* New Styles */}
      <style>{`
        /* Existing Animations... */

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadePlaceholder {
          0%, 15% {
            opacity: 0;
            transform: translateY(10px);
          }
          20%, 85% {
            opacity: 1;
            transform: translateY(0);
          }
          90%, 100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}