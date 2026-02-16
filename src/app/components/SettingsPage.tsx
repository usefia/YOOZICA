import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Camera, Save } from "lucide-react";
import imgProfilePicture from "@/assets/figma/4ab704874c5ef824f438cad5dfa4ef39d2de2130.png";

type TabType = "profile" | "wallet";

export default function SettingsPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [avatarUrl, setAvatarUrl] = useState(imgProfilePicture);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "امیر",
    lastName: "یوسفی",
    email: "amir@example.com",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
  });

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setAvatarUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("لطفاً ایمیل معتبر وارد کنید");
      return;
    }

    // Show success message
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    console.log("Saving profile data:", formData);
  };

  const handleRenewSubscription = () => {
    navigate("/wallet");
  };

  const handleTabClick = (tab: TabType) => {
    if (tab === "wallet") {
      navigate("/wallet");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Mobile Tabs */}
      <div className="md:hidden grid grid-cols-2 gap-2 px-4 pt-6 pb-4">
        <button
          onClick={() => handleTabClick("profile")}
          className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "profile"
              ? "bg-[#000000] text-white"
              : "bg-[#1A1A28] text-[#9CA3AF]"
            }`}
        >
          <span className="text-lg">👤</span>
          <span>پروفایل</span>
        </button>
        <button
          onClick={() => handleTabClick("wallet")}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-[#1A1A28] text-[#9CA3AF] transition-all"
        >
          <span className="text-lg">💰</span>
          <span>کیف پول</span>
        </button>
      </div>

      <div className="flex gap-6 px-4 md:px-6 md:py-10">
        {/* Desktop Sidebar Tabs */}
        <div className="hidden md:block w-[240px] flex-shrink-0">
          <div className="bg-[#1A1A28] rounded-2xl p-2 sticky top-6">
            <button
              onClick={() => handleTabClick("profile")}
              className={`w-full flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "profile"
                  ? "bg-[#000000] text-white"
                  : "text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
            >
              <span className="text-xl">👤</span>
              <span>پروفایل</span>
            </button>
            <button
              onClick={() => handleTabClick("wallet")}
              className="w-full flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.05)] transition-all mt-2"
            >
              <span className="text-xl">💰</span>
              <span>کیف پول</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-[800px]">
          {/* Compact Header Banner */}
          <div
            className="relative h-[100px] md:h-[120px] rounded-b-3xl mb-12 md:mb-14"
            style={{
              background: "linear-gradient(135deg, #D4A843 0%, #C89835 100%)",
            }}
          >
            {/* Avatar */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-10">
              <div className="relative">
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-[#D4A843] object-cover"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
                />
                {/* Camera Icon */}
                <button
                  onClick={handleAvatarClick}
                  className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#D4A843] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E5BA54] transition-colors"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                >
                  <Camera className="w-4 h-4 text-black" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-[#EEEEF0] mb-2">
              {formData.firstName} {formData.lastName}
            </h1>
            <p className="text-sm text-[#9CA3AF] mb-1">
              <span className="text-[#D4A843]">•</span> اشتراک ۱ ماهه
            </p>
            <p className="text-xs text-[#6B7280]">انقضا: ۱۵ اسفند ۱۴۰۵</p>
          </div>

          {/* Profile Form Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#EEEEF0] mb-5">
              اطلاعات شخصی
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-4 md:gap-y-5">
              {/* First Name */}
              <div>
                <label className="block text-sm text-[#9CA3AF] mb-2">نام</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="امیر"
                  className="w-full h-12 bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 text-sm text-[#EEEEF0] placeholder:text-[#6B7280] focus:outline-none focus:border-[rgba(212,168,67,0.5)] transition-colors"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm text-[#9CA3AF] mb-2">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="یوسفی"
                  className="w-full h-12 bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 text-sm text-[#EEEEF0] placeholder:text-[#6B7280] focus:outline-none focus:border-[rgba(212,168,67,0.5)] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-[#9CA3AF] mb-2">ایمیل</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="amir@example.com"
                  className="w-full h-12 bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 text-sm text-[#EEEEF0] placeholder:text-[#6B7280] focus:outline-none focus:border-[rgba(212,168,67,0.5)] transition-colors"
                  dir="ltr"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-[#9CA3AF] mb-2">
                  شماره تماس
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  className="w-full h-12 bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 text-sm text-[#EEEEF0] placeholder:text-[#6B7280] focus:outline-none focus:border-[rgba(212,168,67,0.5)] transition-colors"
                  dir="ltr"
                />
              </div>
            </div>
          </div>

          {/* Subscription Info Card */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#EEEEF0] mb-4">
              اطلاعات اشتراک
            </h2>

            <div
              className="rounded-2xl p-5 md:p-6 relative transition-all duration-300 group"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(212, 168, 67, 0.3)",
              }}
            >
              {/* Glassmorphic overlay on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "1px solid rgba(212, 168, 67, 0.4)",
                }}
              />

              {/* Subscription Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  <span className="text-sm text-[#9CA3AF]">نوع اشتراک:</span>
                </div>
                <span className="text-sm font-bold text-[#EEEEF0]">
                  اشتراک ۱ ماهه
                </span>
              </div>

              {/* Start Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <span className="text-sm text-[#9CA3AF]">تاریخ شروع:</span>
                </div>
                <span className="text-sm text-[#EEEEF0]">۱۵ بهمن ۱۴۰۵</span>
              </div>

              {/* Expiry Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  <span className="text-sm text-[#9CA3AF]">تاریخ انقضا:</span>
                </div>
                <span className="text-sm text-[#EEEEF0]">۱۵ اسفند ۱۴۰۵</span>
              </div>

              {/* Remaining Credit */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">💰</span>
                  <span className="text-sm text-[#9CA3AF]">اعتبار باقی‌مانده:</span>
                </div>
                <span className="text-base font-bold" style={{ color: "#D4A843" }}>
                  ۹۰۶ یوز
                </span>
              </div>

              {/* Renew Button */}
              <button
                onClick={handleRenewSubscription}
                className="w-full mt-5 h-12 rounded-xl text-black font-bold text-[15px] transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #D4A843 0%, #C89835 100%)",
                }}
              >
                تمدید اشتراک
              </button>
            </div>
          </div>

          {/* Save Button - Desktop */}
          <div className="hidden md:flex justify-center">
            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 w-full max-w-[400px] h-[52px] bg-[#D4A843] text-black font-bold text-base rounded-[14px] transition-all hover:scale-[1.02]"
              style={{ boxShadow: "0 4px 12px rgba(212,168,67,0.3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(212,168,67,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(212,168,67,0.3)";
              }}
            >
              <Save className="w-5 h-5" />
              <span>ثبت تغییرات</span>
            </button>
          </div>
        </div>
      </div>

      {/* Save Button - Mobile Fixed */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0F0F14] border-t border-[rgba(255,255,255,0.08)] z-50">
        <button
          onClick={handleSave}
          className="flex items-center justify-center gap-2 w-full h-14 bg-[#D4A843] text-black font-bold text-base rounded-[14px]"
          style={{ boxShadow: "0 4px 12px rgba(212,168,67,0.3)" }}
        >
          <Save className="w-5 h-5" />
          <span>ثبت تغییرات</span>
        </button>
      </div>

      {/* Success Toast */}
      {showSuccessMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div
            className="bg-[#10B981] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
          >
            <span className="text-lg">✓</span>
            <span className="font-medium">تغییرات با موفقیت ذخیره شد</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 300ms ease-out;
        }
      `}</style>
    </div>
  );
}