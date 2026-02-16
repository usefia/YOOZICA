import { useState, useRef, useEffect } from "react";
import { Search, Trash2, X } from "lucide-react";

interface Conversation {
  id: string;
  icon: string;
  title: string;
  summary: string;
  date: string;
  messageCount: number;
  type: "chat" | "image" | "audio" | "video" | "advisor";
}

interface RecentAdvisor {
  id: string;
  emoji: string;
  name: string;
  lastUsed: string;
}

const conversations: Conversation[] = [
  {
    id: "1",
    icon: "💬",
    title: "گفتگو درباره استراتژی محتوا",
    summary: "چطور می‌تونم برای اینستاگرام محتوای جذاب بسازم...",
    date: "۲ ساعت پیش",
    messageCount: 12,
    type: "chat",
  },
  {
    id: "2",
    icon: "🤖",
    title: "مشاور پرامپت‌نویسی",
    summary: "کمک به نوشتن پرامپت برای تولید محتوای بلاگ...",
    date: "دیروز",
    messageCount: 8,
    type: "advisor",
  },
  {
    id: "3",
    icon: "🖼️",
    title: "ساخت لوگو برند",
    summary: "تصویر لوگو مینیمال با رنگ‌های آبی و سفید...",
    date: "۳ روز پیش",
    messageCount: 5,
    type: "image",
  },
  {
    id: "4",
    icon: "🎵",
    title: "ساخت موسیقی پس‌زمینه",
    summary: "موزیک آرام برای ویدیوی آموزشی...",
    date: "۱ هفته پیش",
    messageCount: 3,
    type: "audio",
  },
  {
    id: "5",
    icon: "🎬",
    title: "ساخت تیزر تبلیغاتی",
    summary: "ویدیوی کوتاه برای معرفی محصول...",
    date: "۱۳ بهمن",
    messageCount: 6,
    type: "video",
  },
  {
    id: "6",
    icon: "💬",
    title: "سوالات کدنویسی پایتون",
    summary: "راهنمایی برای نوشتن تابع در پایتون...",
    date: "۱۰ بهمن",
    messageCount: 15,
    type: "chat",
  },
  {
    id: "7",
    icon: "🤖",
    title: "مشاور اس ام اس مارکتینگ",
    summary: "نوشتن پیامک تبلیغاتی برای فروش آنلاین...",
    date: "۵ بهمن",
    messageCount: 7,
    type: "advisor",
  },
  {
    id: "8",
    icon: "🖼️",
    title: "پوستر رویداد",
    summary: "طراحی پوستر برای وبینار آموزشی...",
    date: "۱ بهمن",
    messageCount: 4,
    type: "image",
  },
  {
    id: "9",
    icon: "💬",
    title: "ایده‌های کسب‌وکار",
    summary: "بررسی ایده کسب‌وکار آنلاین فروش محصولات دست‌ساز...",
    date: "۲۵ دی",
    messageCount: 20,
    type: "chat",
  },
  {
    id: "10",
    icon: "🤖",
    title: "مشاور مسیر درآمدزایی",
    summary: "شناسایی بهترین راه درآمد با مهارت‌های موجود...",
    date: "۲۰ دی",
    messageCount: 18,
    type: "advisor",
  },
];

const recentAdvisors: RecentAdvisor[] = [
  {
    id: "1",
    emoji: "✍️",
    name: "مشاور پرامپت‌نویسی",
    lastUsed: "دیروز",
  },
  {
    id: "2",
    emoji: "📲",
    name: "مشاور اس ام اس مارکتینگ",
    lastUsed: "۳ روز پیش",
  },
  {
    id: "3",
    emoji: "🧭",
    name: "مشاور مسیر درآمدزایی",
    lastUsed: "۱ هفته پیش",
  },
  {
    id: "4",
    emoji: "🎨",
    name: "طراحی محصول",
    lastUsed: "۲ هفته پیش",
  },
];

type FilterTab = "all" | "chat" | "image" | "audio" | "video" | "advisor";
type SortOption = "newest" | "oldest";

const filterTabs = [
  { id: "all" as FilterTab, label: "همه" },
  { id: "chat" as FilterTab, label: "💬 چت" },
  { id: "image" as FilterTab, label: "🖼️ تصویر" },
  { id: "audio" as FilterTab, label: "🎵 صدا" },
  { id: "video" as FilterTab, label: "🎬 ویدیو" },
  { id: "advisor" as FilterTab, label: "🤖 مشاوره‌ها" },
];

// Swipeable Card Component
function SwipeableCard({
  conversation,
  onDelete,
  onClick,
  onHover,
  isHovered,
}: {
  conversation: Conversation;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
  onHover: (id: string | null) => void;
  isHovered: boolean;
}) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchCurrent, setTouchCurrent] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const SWIPE_THRESHOLD = 80;
  const MAX_SWIPE = 120;

  useEffect(() => {
    if (isDeleting) {
      const timer = setTimeout(() => {
        onDelete(conversation.id);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isDeleting, conversation.id, onDelete]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart(touch.clientX);
    setTouchCurrent(touch.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touch = e.touches[0];
    const diff = touch.clientX - touchStart;
    
    // Only allow right swipe (positive diff for RTL)
    if (diff > 0) {
      setTouchCurrent(touch.clientX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchCurrent === null) return;
    
    const swipeDistance = touchCurrent - touchStart;
    
    if (swipeDistance > SWIPE_THRESHOLD) {
      // Complete delete
      setIsDeleting(true);
    } else {
      // Reset position
      setTouchCurrent(touchStart);
      setTimeout(() => {
        setTouchStart(null);
        setTouchCurrent(null);
        setIsDragging(false);
      }, 300);
    }
  };

  const swipeDistance = touchStart !== null && touchCurrent !== null 
    ? Math.min(touchCurrent - touchStart, MAX_SWIPE) 
    : 0;

  const getCardStyle = () => {
    if (isDeleting) {
      return {
        transform: 'translateX(120%)',
        opacity: 0,
        transition: 'all 200ms ease-out',
      };
    }
    if (isDragging && swipeDistance > 0) {
      // Apply resistance curve
      const resistance = swipeDistance > SWIPE_THRESHOLD ? 0.7 : 1;
      return {
        transform: `translateX(${swipeDistance * resistance}px)`,
        transition: 'none',
      };
    }
    if (touchStart !== null && !isDragging) {
      return {
        transform: 'translateX(0)',
        transition: 'all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      };
    }
    return {};
  };

  return (
    <div className="relative overflow-hidden rounded-[14px]">
      {/* Red Delete Background */}
      {swipeDistance > 0 && (
        <div
          className="absolute inset-0 bg-[#EF4444] flex items-center pr-5 rounded-[14px]"
          style={{
            opacity: Math.min(swipeDistance / SWIPE_THRESHOLD, 1),
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[28px]">🗑️</span>
            <span className="text-white font-bold text-base">حذف</span>
          </div>
        </div>
      )}

      {/* Card */}
      <div
        ref={cardRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => !isDragging && onClick(conversation.id)}
        onMouseEnter={() => onHover(conversation.id)}
        onMouseLeave={() => onHover(null)}
        className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] min-h-[72px] rounded-[16px] p-4 md:px-[18px] md:py-4"
        style={{
          ...getCardStyle(),
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
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

        <div className="relative z-10 flex items-start gap-3">
          {/* Icon */}
          <div className="text-[32px] flex-shrink-0">
            {conversation.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-base font-bold text-[#EEEEF0] mb-1">
              {conversation.title}
            </h3>

            {/* Summary */}
            <p className="text-[13px] text-[#9CA3AF] mb-2 truncate">
              {conversation.summary}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[#6B7280]">
              <span>📅 {conversation.date}</span>
              <span>💬 {conversation.messageCount} پیام</span>
            </div>
          </div>

          {/* Delete Icon (Desktop Only) */}
          {isHovered && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(conversation.id);
              }}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#EF4444] transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [conversationList, setConversationList] = useState(conversations);
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showRefreshMessage, setShowRefreshMessage] = useState(false);
  
  const listRef = useRef<HTMLDivElement>(null);
  const pullStartY = useRef<number | null>(null);

  // Filter and search conversations
  const filteredConversations = conversationList.filter((conv) => {
    const matchesSearch =
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "all" || conv.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Sort conversations
  const sortedConversations = [...filteredConversations].sort((a, b) => {
    if (sortOption === "newest") {
      return conversationList.indexOf(a) - conversationList.indexOf(b);
    } else {
      return conversationList.indexOf(b) - conversationList.indexOf(a);
    }
  });

  const handleConversationClick = (id: string) => {
    console.log("Resume conversation:", id);
    // Navigate to conversation
  };

  const handleDelete = (id: string) => {
    // Desktop delete - show confirmation
    if (window.innerWidth >= 768) {
      setDeleteConfirmId(id);
    } else {
      // Mobile delete - direct from swipe
      setConversationList((prev) =>
        prev.filter((conv) => conv.id !== id)
      );
    }
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmId) {
      setConversationList((prev) =>
        prev.filter((conv) => conv.id !== deleteConfirmId)
      );
      setDeleteConfirmId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmId(null);
  };

  const handleAdvisorClick = (id: string) => {
    console.log("Navigate to advisor:", id);
  };

  // Pull to refresh handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (listRef.current && listRef.current.scrollTop === 0) {
      pullStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (pullStartY.current === null || isRefreshing) return;
    
    const currentY = e.touches[0].clientY;
    const diff = currentY - pullStartY.current;
    
    if (diff > 0 && listRef.current && listRef.current.scrollTop === 0) {
      setPullDistance(Math.min(diff, 100));
      setIsPulling(true);
    }
  };

  const handleTouchEnd = () => {
    if (pullDistance > 60 && !isRefreshing) {
      setIsRefreshing(true);
      setIsPulling(false);
      
      // Simulate refresh
      setTimeout(() => {
        setIsRefreshing(false);
        setPullDistance(0);
        setShowRefreshMessage(true);
        
        setTimeout(() => {
          setShowRefreshMessage(false);
        }, 2000);
      }, 1500);
    } else {
      setPullDistance(0);
      setIsPulling(false);
    }
    pullStartY.current = null;
  };

  return (
    <div
      className="min-h-screen pb-20 md:pb-8 px-4 md:px-6 py-6 md:py-10"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-[28px] font-bold text-[#EEEEF0] mb-4">
            📋 تاریخچه مکالمات
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-[600px]">
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: "#D4A843" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در مکالمات..."
              className="w-full h-12 bg-[#1E1E2E] border border-[rgba(255,255,255,0.1)] rounded-[14px] pr-12 pl-4 text-sm text-white placeholder:text-[#9CA3AF] focus:outline-none focus:border-[rgba(212,168,67,0.3)] transition-colors duration-200"
            />
          </div>
        </div>

        {/* Filter Tabs and Sort Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Filter Tabs */}
            <div className="flex-1 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-3 pb-2 md:pb-0">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeFilter === tab.id
                        ? "bg-[#000000] text-white"
                        : "text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex-shrink-0 hidden md:flex items-center gap-2">
              <span className="text-sm text-[#9CA3AF]">مرتب‌سازی:</span>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="bg-[#1E1E2E] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2 text-sm text-white flex items-center gap-2 hover:border-[rgba(212,168,67,0.3)] transition-colors"
              >
                {sortOption === "newest" ? "جدیدترین" : "قدیمی‌ترین"} ▼
              </button>

              {/* Dropdown Menu */}
              {showSortDropdown && (
                <div className="absolute left-0 top-full mt-2 bg-[#1E1E2E] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden shadow-lg z-10 min-w-[140px]">
                  <button
                    onClick={() => {
                      setSortOption("newest");
                      setShowSortDropdown(false);
                    }}
                    className="w-full px-4 py-2.5 text-sm text-right hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                    style={{
                      color: sortOption === "newest" ? "#D4A843" : "#FFFFFF",
                    }}
                  >
                    جدیدترین
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("oldest");
                      setShowSortDropdown(false);
                    }}
                    className="w-full px-4 py-2.5 text-sm text-right hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                    style={{
                      color: sortOption === "oldest" ? "#D4A843" : "#FFFFFF",
                    }}
                  >
                    قدیمی‌ترین
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pull to Refresh Indicator */}
        {(isPulling || isRefreshing) && (
          <div
            className="flex flex-col items-center justify-center mb-4 md:hidden"
            style={{
              transform: `translateY(${pullDistance}px)`,
              transition: isRefreshing ? 'transform 300ms ease-out' : 'none',
            }}
          >
            <div
              className="w-8 h-8 border-4 border-[#D4A843] border-t-transparent rounded-full mb-2"
              style={{
                animation: isRefreshing ? 'spin 1s linear infinite' : 'none',
              }}
            />
            <p className="text-sm text-[#9CA3AF]">
              {isRefreshing ? 'در حال بارگذاری...' : 'رها کن تا بارگذاری شود'}
            </p>
          </div>
        )}

        {/* Refresh Success Message */}
        {showRefreshMessage && (
          <div className="mb-4 text-center md:hidden">
            <p className="text-sm text-[#9CA3AF]">همه چیز به‌روزه! ✓</p>
          </div>
        )}

        {/* Conversation List */}
        <div ref={listRef}>
          {sortedConversations.length > 0 ? (
            <div className="flex flex-col gap-3">
              {sortedConversations.map((conversation) => (
                <SwipeableCard
                  key={conversation.id}
                  conversation={conversation}
                  onDelete={handleDelete}
                  onClick={handleConversationClick}
                  onHover={setHoveredCardId}
                  isHovered={hoveredCardId === conversation.id}
                />
              ))}
            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-[64px] mb-4">🔍</div>
              <h3 className="text-lg text-[#9CA3AF] mb-2">
                هیچ مکالمه‌ای پیدا نشد
              </h3>
              <p className="text-sm text-[#6B7280]">
                تاریخچه مکالمات شما اینجا نمایش داده می‌شود
              </p>
            </div>
          )}
        </div>

        {/* Recent Advisors Section */}
        {sortedConversations.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#EEEEF0] mb-4">
              🤖 مشاوره‌های اخیر
            </h2>

            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden overflow-x-auto -mx-4 px-4">
              <div className="flex gap-3 pb-2">
                {recentAdvisors.map((advisor) => (
                  <div
                    key={advisor.id}
                    onClick={() => handleAdvisorClick(advisor.id)}
                    className="flex-shrink-0 w-[160px] bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-xl p-3.5 cursor-pointer hover:border-[rgba(212,168,67,0.2)] transition-all"
                  >
                    {/* Emoji */}
                    <div className="text-[40px] text-center mb-2">
                      {advisor.emoji}
                    </div>

                    {/* Name */}
                    <h3 className="text-sm font-bold text-white text-center mb-1 line-clamp-2 min-h-[40px]">
                      {advisor.name}
                    </h3>

                    {/* Last Used */}
                    <p className="text-[11px] text-[#6B7280] text-center mb-2">
                      {advisor.lastUsed}
                    </p>

                    {/* CTA */}
                    <p className="text-xs text-[#D4A843] text-center font-medium">
                      ادامه گفتگو ←
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {recentAdvisors.map((advisor) => (
                <div
                  key={advisor.id}
                  onClick={() => handleAdvisorClick(advisor.id)}
                  className="bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-xl p-3.5 cursor-pointer hover:border-[rgba(212,168,67,0.2)] transition-all"
                >
                  {/* Emoji */}
                  <div className="text-[40px] text-center mb-2">
                    {advisor.emoji}
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-bold text-white text-center mb-1 line-clamp-2 min-h-[40px]">
                    {advisor.name}
                  </h3>

                  {/* Last Used */}
                  <p className="text-[11px] text-[#6B7280] text-center mb-2">
                    {advisor.lastUsed}
                  </p>

                  {/* CTA */}
                  <p className="text-xs text-[#D4A843] text-center font-medium">
                    ادامه گفتگو ←
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog (Desktop Only) */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div
            className="bg-[#1A1A28] rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-[#EEEEF0]">حذف مکالمه</h3>
              <button
                onClick={handleDeleteCancel}
                className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message */}
            <p className="text-sm text-[#9CA3AF] mb-6">
              مطمئنی می‌خوای این مکالمه رو حذف کنی؟
            </p>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 bg-[#EF4444] text-white font-bold text-sm py-3 rounded-xl hover:bg-[#DC2626] transition-colors"
              >
                بله، حذف کن
              </button>
              <button
                onClick={handleDeleteCancel}
                className="flex-1 bg-[#1E1E2E] text-white font-bold text-sm py-3 rounded-xl hover:bg-[#252535] transition-colors border border-[rgba(255,255,255,0.1)]"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}