import { X, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
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

interface AdvisorBottomSheetProps {
  advisor: Advisor | null;
  isOpen: boolean;
  onClose: () => void;
  onStartChat: () => void;
}

export default function AdvisorBottomSheet({
  advisor,
  isOpen,
  onClose,
  onStartChat,
}: AdvisorBottomSheetProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!advisor || !isOpen) return null;

  // Sample conversations based on advisor type
  const getSampleConversations = (advisorId: string) => {
    const conversations: Record<string, Array<{question: string, answer: string}>> = {
      "1": [
        {
          question: "چطوری یه پیامک فروش خوب بنویسم؟",
          answer: "ابتدا با نام مشتری شروع کن، سپس مزیت اصلی محصولت رو در یک جمله بگو، و با یک CTA واضح (مثل \"همین حالا سفارش دهید\") تمومش کن. مثال: \"سلام علی! تخفیف ۳۰٪ ویژه برای شما. کد: SALE30 - فقط امروز!\""
        },
        {
          question: "آیا باید لینک در پیامک بذارم؟",
          answer: "بله، حتماً یک لینک کوتاه و قابل کلیک اضافه کن. از سرویس‌های کوتاه‌کننده لینک استفاده کن و لینک رو در آخر پیامک قرار بده تا زمینه کلیک بیشتر بشه."
        }
      ],
      "3": [
        {
          question: "چطوری اسم برند خوب پیدا کنم؟",
          answer: "یک اسم خوب باید کوتاه (۲-۳ سیلاب)، به‌یادماندنی، تلفظش راحت باشه و معنی مثبتی داشته باشه. ابتدا ۱۰ تا ایده بنویس، بعد ۳ تای بهترین رو با دوستات تست کن."
        },
        {
          question: "آیا باید معنی خاصی داشته باشه؟",
          answer: "لزوماً نه! برندهای بزرگ مثل Nike یا Apple معنی مستقیم ندارن، ولی حس خوبی منتقل می‌کنن. مهم اینه که اسم با هویت برندت هماهنگ باشه و راحت به خاطر بمونه."
        }
      ],
      "4": [
        {
          question: "از کجا استراتژی بازاریابی شروع کنم؟",
          answer: "اول مشتری ایده‌آلت رو مشخص کن: سنش، علایقش، مشکلاتش. بعد بفهم کجا وقت می‌گذرونه (اینستا، تلگرام، یوتیوب). حالا پیام مناسب رو در همون جا بهش برسون."
        },
        {
          question: "بودجه کم دارم، چیکار کنم؟",
          answer: "با محتوای ارگانیک شروع کن! پست‌های آموزشی و سرگرم‌کننده بساز، از هشتگ‌ها استفاده کن، با مخاطبات تعامل کن. بعداً که فروش داشتی، ۱۰-۲۰٪ درآمدت رو به تبلیغات اختصاص بده."
        }
      ],
      "6": [
        {
          question: "چطوری سریع‌تر یاد بگیرم؟",
          answer: "از تکنیک Feynman استفاده کن: هرچی یاد گرفتی رو به زبون ساده برای یه بچه ۱۰ ساله توضیح بده. جاهایی که گیر میدی، دوباره برو مطالعه کن. همچنین هر ۲۵ دقیقه یادگیری، ۵ دقیقه استراحت کن."
        },
        {
          question: "چند ساعت در روز باید درس بخونم؟",
          answer: "کیفیت مهمتر از کمیته! ۲ ساعت تمرکز کامل بهتر از ۶ ساعت حواس‌پرتی. شروع با ۴۵ دقیقه تمرکز عمیق، استراحت ۱۵ دقیقه، و تکرار این چرخه کافیه."
        }
      ],
      "15": [
        {
          question: "چه نوع محتوایی بنویسم؟",
          answer: "۳ نوع محتوا رو ترکیب کن: آموزشی (۵۰٪)، سرگرم‌کننده (۳۰٪)، فروش (۲۰٪). مثلاً اگه فروشنده‌ای، آموزش بده، داستان مشتریات رو تعریف کن، و هرازگاهی تخفیف اعلام کن."
        },
        {
          question: "چند وقت یکبار پست بذارم؟",
          answer: "برای اینستاگرام ۴-۵ پست در هفته + استوری روزانه بهینه‌ست. برای تلگرام می‌تونی ۱-۲ پست روزانه داشته باشی. مهمتر از تعداد، منظم بودنه!"
        }
      ],
      "22": [
        {
          question: "چطوری نیچ یوتیوب پیدا کنم؟",
          answer: "از سه دایره استفاده کن: ۱) چیزی که دوستش داری ۲) چیزی که بلدی ۳) چیزی که مردم دنبالش می‌گردن. نقطه تلاقی این سه، نیچ ایده‌آل توئه. مثلاً: عاشق بازیی + بلد به نقد بازی + گیمرها دنبال نقدن = کانال نقد بازی."
        },
        {
          question: "آیا باید صورتم رو نشون بدم؟",
          answer: "خیر! کانال‌های بدون صورت (Faceless) خیلی موفقن. می‌تونی از انیمیشن، صفحه‌نمایش، عکس استوک، یا ویس‌اُور استفاده کنی. مثلاً کانال‌های آموزش نرم‌افزار اکثراً بدون صورتن."
        }
      ]
    };

    // Generic fallback conversations
    const genericConversations = [
      {
        question: "این مشاور چطوری بهم کمک می‌کنه؟",
        answer: "من می‌تونم بهت راهنمایی‌های عملی و قدم‌به‌قدم بدم، سوالاتت رو جواب بدم، و با مثال‌های واقعی بهت کمک کنم تا به هدفت برسی. فقط کافیه سوالت رو بپرسی!"
      },
      {
        question: "نتیجه رو کی می‌بینم؟",
        answer: "اگه روزانه ۱۵-۳۰ دقیقه با من کار کنی و نکاتی که یاد میدم رو اجرا کنی، ظرف ۲-۴ هفته نتایج اولیه رو می‌بینی. البته سرعت پیشرفت به تلاش خودت بستگی داره!"
      }
    ];

    return conversations[advisorId] || genericConversations.slice(0, 2);
  };

  // User reviews based on advisor type
  const getUserReviews = (advisorId: string) => {
    const reviews: Record<string, Array<{name: string, avatar: string, text: string, rating: number}>> = {
      "1": [
        {
          name: "محمد رضایی",
          avatar: "👨‍💼",
          text: "با کمک این مشاور نرخ بازگشایی پیامکام از ۱۲٪ به ۳۸٪ رسید! متن‌ها خیلی تاثیرگذار شدن.",
          rating: 5
        },
        {
          name: "سارا احمدی",
          avatar: "👩‍💻",
          text: "قالب‌های آماده‌ای که داد فوق‌العاده بودن. تو یه هفته فروشم ۲ برابر شد!",
          rating: 5
        }
      ],
      "3": [
        {
          name: "علی کریمی",
          avatar: "👨‍🎨",
          text: "بعد از ۲ هفته جستجو، با کمک این مشاور اسم برند کاملاً حرفه‌ای پیدا کردم. حتی دامنه‌ش هم خالی بود!",
          rating: 5
        },
        {
          name: "نیلوفر موسوی",
          avatar: "👩‍🎨",
          text: "راهنماییاش خیلی دقیق بود. از روانشناسی رنگ گرفته تا چک کردن دامنه، همه‌چی رو یادم داد.",
          rating: 5
        }
      ],
      "4": [
        {
          name: "رضا نوری",
          avatar: "👨‍💼",
          text: "استراتژی بازاریابی که باهاش نوشتیم طی ۳ ماه مشتریامو ۵ برابر کرد. عالیه!",
          rating: 5
        },
        {
          name: "مریم صادقی",
          avatar: "👩‍💼",
          text: "قبلاً بی‌هدف تبلیغ می‌کردم. الان استراتژی مشخص دارم و نتیجه می‌گیرم.",
          rating: 5
        }
      ],
      "6": [
        {
          name: "امیر حسینی",
          avatar: "👨‍🎓",
          text: "تکنیک‌هایی که یاد داد سرعت یادگیریم رو دو برابر کرد! خیلی کاربردی بود.",
          rating: 5
        },
        {
          name: "زهرا میرزایی",
          avatar: "👩‍🎓",
          text: "حالا می‌تونم هر مهارتی رو تو کمترین زمان یاد بگیرم. فوق‌العاده‌ست!",
          rating: 5
        }
      ],
      "15": [
        {
          name: "پویا اکبری",
          avatar: "👨‍💻",
          text: "محتواهایی که با کمک این مشاور نوشتم، انگیجمنت پیجم رو ۳ برابر کرد!",
          rating: 5
        },
        {
          name: "مهسا رحیمی",
          avatar: "👩‍💻",
          text: "دیگه هیچ‌وقت برای نوشتن کپشن گیر نمی‌کنم. ایده‌هاش عالین!",
          rating: 5
        }
      ],
      "22": [
        {
          name: "سینا علیزاده",
          avatar: "👨‍🎬",
          text: "کانال یوتیوبم رو با کمک این مشاور راه‌اندازی کردم. تو ۲ ماه ۵ هزار ساب گرفتم!",
          rating: 5
        },
        {
          name: "فاطمه جعفری",
          avatar: "👩‍🎬",
          text: "نیچی رو پیدا کردم که هم دوستش دارم هم سودآوره. демش گرم!",
          rating: 5
        }
      ]
    };

    // Generic fallback reviews
    const genericReviews = [
      {
        name: "کاربر YOOZICA",
        avatar: "👤",
        text: "این مشاور واقعاً حرفه‌ای و مفیده. خیلی کمکم کرد!",
        rating: 5
      },
      {
        name: "کاربر راضی",
        avatar: "😊",
        text: "پاسخ‌ها دقیق و کاربردی بود. پیشنهاد می‌کنم حتماً امتحانش کنید.",
        rating: 5
      }
    ];

    return reviews[advisorId] || genericReviews;
  };

  // Get similar advisors based on category
  const getSimilarAdvisors = (currentAdvisor: Advisor): Advisor[] => {
    // This should be passed from parent component with all advisors
    // For now, we'll create a mock structure
    const mockSimilarAdvisors: Record<string, Advisor[]> = {
      "business": [
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
          capabilities: []
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
          capabilities: []
        },
        {
          id: "5",
          name: "طراحی سیستم فروش",
          emoji: "🏪",
          iconType: "sales-funnel",
          description: "فانل فروش حرفه‌ای بساز",
          level: "متوسط",
          category: "business",
          rating: 4.8,
          usageCount: "2.1K",
          capabilities: []
        }
      ],
      "general": [
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
          capabilities: []
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
          capabilities: []
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
          capabilities: []
        }
      ],
      "social": [
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
          capabilities: []
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
          capabilities: []
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
          capabilities: []
        }
      ],
      "freelance": [
        {
          id: "12",
          name: "مشاور مسیر درآمدزایی",
          emoji: "🧭",
          iconType: "income-path",
          description: "بهترین مسیر درآمد رو پیدا کن",
          level: "مبتدی",
          category: "freelance",
          rating: 4.8,
          usageCount: "2.1K",
          capabilities: []
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
          capabilities: []
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
          capabilities: []
        }
      ],
      "youtube": [
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
          capabilities: []
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
          capabilities: []
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
          capabilities: []
        }
      ]
    };

    const similar = mockSimilarAdvisors[currentAdvisor.category] || [];
    return similar.filter(a => a.id !== currentAdvisor.id).slice(0, 3);
  };

  const sampleConversations = getSampleConversations(advisor.id);
  const userReviews = getUserReviews(advisor.id);
  const similarAdvisors = getSimilarAdvisors(advisor);

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
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-200"
        style={{ backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-[#1A1A28] rounded-t-[24px] z-[1001] max-h-[85vh] overflow-y-auto mx-auto w-full md:max-w-[480px] animate-slide-up"
        style={{
          padding: "24px 20px 32px",
        }}
      >
        {/* Handle Bar */}
        <div
          className="w-10 h-1 bg-[#6B7280] rounded-full mx-auto mb-5"
          style={{ borderRadius: "2px" }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 text-[#9CA3AF] hover:text-[#D4A843] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Advisor Emoji */}
        <div className="flex items-center justify-center mb-3">
          <DuotoneIcon 
            type={advisor.iconType} 
            size={64} 
            category={advisor.category}
          />
        </div>

        {/* Advisor Name */}
        <h2 className="text-2xl font-bold text-[#EEEEF0] text-center mb-1.5">
          {advisor.name}
        </h2>

        {/* Advisor Description */}
        <p className="text-sm text-[#CBD5E1] text-center mx-auto max-w-[400px] mb-4">
          {advisor.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-3 mb-7">
          {/* Level Tag */}
          <div
            className="px-2.5 py-1 rounded-xl text-[11px] font-medium"
            style={{
              background: levelColors.bg,
              color: levelColors.text,
            }}
          >
            {levelColors.dot} {advisor.level}
          </div>

          {/* Rating */}
          <div className="text-xs font-medium" style={{ color: "#D4A843" }}>
            ⭐ {advisor.rating}
          </div>

          {/* Usage Count */}
          <div className="text-[#9CA3AF] text-xs">
            👁️ {advisor.usageCount} استفاده
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-[#EEEEF0] mb-3">
            📋 این مشاور چه کمکی می‌کنه:
          </h3>
          <div className="pr-2">
            {advisor.capabilities.map((capability, index) => (
              <p
                key={index}
                className="text-sm text-[#CBD5E1] mb-2"
                style={{ lineHeight: "1.8" }}
              >
                • {capability}
              </p>
            ))}
          </div>
        </div>

        {/* Cost Info Section */}
        <div
          className="p-4 rounded-xl mb-5"
          style={{
            background: "rgba(212,168,67,0.08)",
            border: "1px solid rgba(212,168,67,0.2)",
          }}
        >
          <p className="text-sm text-[#EEEEF0] mb-1">💰 هر پیام: ۱ یوز</p>
          <p className="text-sm" style={{ color: "#D4A843" }}>
            📊 اعتبار شما: ۹۰۶ یوز
          </p>
        </div>

        {/* Sample Conversation Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-[#EEEEF0] mb-3">
            💬 نمونه گفتگو
          </h3>
          <div className="space-y-4">
            {sampleConversations.map((conv, index) => (
              <div key={index} className="space-y-2">
                {/* User Question */}
                <div 
                  className="p-3 rounded-2xl rounded-tl-sm"
                  style={{
                    background: "rgba(212,168,67,0.1)",
                    border: "1px solid rgba(212,168,67,0.15)",
                  }}
                >
                  <p className="text-xs text-[#D4A843] mb-1 font-medium">شما:</p>
                  <p className="text-sm text-[#EEEEF0]" style={{ lineHeight: "1.6" }}>
                    {conv.question}
                  </p>
                </div>

                {/* Advisor Answer */}
                <div 
                  className="p-3 rounded-2xl rounded-tr-sm"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="text-xs text-[#9CA3AF] mb-1 font-medium">مشاور:</p>
                  <p className="text-sm text-[#CBD5E1]" style={{ lineHeight: "1.6" }}>
                    {conv.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Reviews Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-[#EEEEF0] mb-3">
            ⭐ نظرات کاربران
          </h3>
          <div className="space-y-3">
            {userReviews.map((review, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* User Info Row */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-2xl">{review.avatar}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#EEEEF0]">{review.name}</p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-xs" style={{ color: "#D4A843" }}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#CBD5E1]" style={{ lineHeight: "1.6" }}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Advisors Section */}
        {similarAdvisors.length > 0 && (
          <div className="mb-6">
            <h3 className="text-base font-bold text-[#EEEEF0] mb-3">
              🎯 مشاوران مشابه
            </h3>
            
            {/* Horizontal Scrollable Container */}
            <div 
              className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {similarAdvisors.map((similar) => (
                <div 
                  key={similar.id}
                  onClick={() => {
                    // Handle advisor change - this would typically trigger parent to update
                    console.log("Switch to advisor:", similar.id);
                  }}
                  className="flex-shrink-0 w-[140px] cursor-pointer"
                >
                  <div 
                    className="bg-[#1E1E2E] border border-[rgba(255,255,255,0.04)] rounded-xl p-3 transition-all duration-300 hover:border-[rgba(212,168,67,0.2)] hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-2">
                      <DuotoneIcon 
                        type={similar.iconType} 
                        size={40} 
                        category={similar.category}
                      />
                    </div>

                    {/* Name */}
                    <h4 className="text-xs font-bold text-[#EEEEF0] text-center mb-1 line-clamp-2" style={{ minHeight: "2.5rem" }}>
                      {similar.name}
                    </h4>

                    {/* Rating */}
                    <div className="text-center">
                      <span className="text-xs font-medium" style={{ color: "#D4A843" }}>
                        ⭐ {similar.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hide scrollbar styles */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        )}

        {/* Start Chat Button */}
        <button
          onClick={onStartChat}
          className="w-full h-[52px] rounded-[14px] font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(135deg, #D4A843 0%, #C4982D 100%)",
            boxShadow: "0 4px 12px rgba(212,168,67,0.3)",
            color: "#000000",
            fontSize: "16px",
            fontWeight: 700,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,168,67,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "brightness(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(212,168,67,0.3)";
          }}
        >
          <span>شروع گفتگو</span>
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}