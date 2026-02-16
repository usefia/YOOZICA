import { Outlet, Link, useLocation } from "react-router";
import imgYoozicaLogo from "@/assets/figma/7401bffd5a5a56d045ed2c3d692c49433d1a487b.png";
import imgProfilePicture from "@/assets/figma/4ab704874c5ef824f438cad5dfa4ef39d2de2130.png";
import imgYooz from "@/assets/figma/9a3274eaaef8651fbba0fd0832dabecde12b3eac.png";
import { MessageSquare, Sparkles, Image, Mic, Video, Settings, ChevronDown, Palette, Plus, Home, Layout, Clock, Wallet, HelpCircle, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { icon: Sparkles, label: "داشبورد", path: "/" },
    { icon: MessageSquare, label: "چت", path: "/chat" },
    { icon: Image, label: "تصویر", path: "/image" },
    { icon: Mic, label: "صدا", path: "/audio" },
    { icon: Video, label: "ویدیو", path: "/video" },
    { icon: Layout, label: "مشاوره‌ها", path: "/consultations", badge: "جدید" },
    { icon: Clock, label: "تاریخچه", path: "/history" },
  ];

  const userItems = [
    { icon: User, label: "پروفایل", path: "/settings" },
    { icon: Wallet, label: "کیف پول", path: "/wallet" },
    { icon: HelpCircle, label: "پشتیبانی", path: "/support" },
  ];

  const bottomNavItems = [
    { icon: Home, label: "خانه", path: "/" },
    { icon: MessageSquare, label: "چت", path: "/chat" },
    { icon: Layout, label: "مشاوره", path: "/consultations" },
    { icon: Clock, label: "تاریخچه", path: "/history" },
    { icon: User, label: "حساب", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white" dir="rtl">
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Menu className="w-5 h-5 text-[#D4A843]" />
      </button>

      {/* Desktop Sidebar */}
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex fixed right-4 top-4 bottom-4 flex-col items-center transition-all duration-300 z-30"
        style={{
          width: sidebarExpanded ? '220px' : '64px',
        }}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        role="navigation"
        aria-label="منوی اصلی"
      >
        {/* Floating Capsule Container */}
        <div
          className="flex flex-col h-full rounded-[28px] overflow-hidden transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
          }}
        >
          {/* Logo */}
          <div
            className="flex items-center justify-center pt-6 pb-4 px-3 transition-all duration-300 flex-shrink-0"
            style={{
              minHeight: '80px',
              opacity: sidebarExpanded ? 1 : 0.9,
            }}
          >
            <img
              src={imgYoozicaLogo}
              alt="Yoozica"
              className="h-8 transition-transform duration-[800ms] ease-in-out hover:rotate-[360deg]"
              style={{
                maxWidth: sidebarExpanded ? '180px' : '40px',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* New Conversation Button */}
          <div className="px-3 mb-4 flex-shrink-0">
            <Link
              to="/chat"
              className="group relative flex items-center justify-center gap-2 h-12 rounded-[20px] bg-gradient-to-br from-[#D4A843] to-[#C89835] text-[#0F0F14] font-medium text-[14px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A843]/30"
              style={{
                minWidth: '48px',
              }}
            >
              {/* Pulse effect on hover */}
              <div className="absolute inset-0 rounded-[20px] bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />

              <Plus className="w-5 h-5 flex-shrink-0 relative z-10" />

              {sidebarExpanded && (
                <span
                  className="relative z-10 whitespace-nowrap transition-opacity duration-300"
                  style={{
                    opacity: sidebarExpanded ? 1 : 0,
                  }}
                >
                  گفتگوی جدید
                </span>
              )}
            </Link>
          </div>

          {/* Navigation Section */}
          <nav className="flex-1 px-2 space-y-1 overflow-y-auto scrollbar-hide py-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              const showDivider = index === 5; // Separator before Consultations/History group

              return (
                <div key={item.path}>
                  {showDivider && (
                    <div className="w-[32px] h-[1px] bg-white/6 mx-auto my-2 flex-shrink-0" />
                  )}
                  <Link
                    to={item.path}
                    className="relative group flex items-center h-12 rounded-[20px] transition-all duration-300 hover:scale-105"
                    style={{
                      minWidth: '48px',
                      transitionDelay: sidebarExpanded ? `${index * 30}ms` : '0ms',
                    }}
                  >
                    {/* Active state: Amber circle glow */}
                    {isActive && (
                      <div
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full transition-all duration-300"
                        style={{
                          background: 'rgba(212, 168, 67, 0.12)',
                          boxShadow: '0 0 20px rgba(212, 168, 67, 0.15)',
                        }}
                      />
                    )}

                    {/* Hover background for inactive items */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-[20px] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center w-12 flex-shrink-0 mr-1">
                      <Icon
                        className={`w-6 h-6 transition-all duration-300`}
                        style={{
                          color: isActive ? '#D4A843' : 'rgba(255, 255, 255, 0.45)'
                        }}
                      />
                    </div>

                    {/* Label */}
                    {sidebarExpanded && (
                      <div className="relative z-10 flex items-center gap-2 flex-1 pr-2 overflow-hidden">
                        <span
                          className={`text-[14px] font-medium whitespace-nowrap transition-all duration-300 ${isActive ? 'text-white' : 'text-[#9CA3AF] group-hover:text-white'}`}
                          style={{
                            opacity: sidebarExpanded ? 1 : 0,
                            transform: sidebarExpanded ? 'translateX(0)' : 'translateX(10px)',
                          }}
                        >
                          {item.label}
                        </span>

                        {item.badge && (
                          <span
                            className="px-2 py-0.5 text-[10px] bg-[#D4A843] text-black rounded-full font-medium whitespace-nowrap"
                            style={{
                              opacity: sidebarExpanded ? 1 : 0,
                              transform: sidebarExpanded ? 'scale(1)' : 'scale(0.8)',
                              transition: 'all 300ms',
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Divider Before Profile */}
          <div className="w-[32px] h-[1px] bg-white/6 mx-auto my-2 flex-shrink-0" />

          {/* User Section */}
          <div className="px-2 pb-4 space-y-1 flex-shrink-0">
            {userItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group flex items-center h-12 rounded-[20px] transition-all duration-300 hover:scale-105"
                  style={{
                    minWidth: '48px',
                    transitionDelay: sidebarExpanded ? `${index * 30}ms` : '0ms',
                  }}
                >
                  {/* Active state: Amber circle glow */}
                  {isActive && (
                    <div
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full transition-all duration-300"
                      style={{
                        background: 'rgba(212, 168, 67, 0.12)',
                        boxShadow: '0 0 20px rgba(212, 168, 67, 0.15)',
                      }}
                    />
                  )}

                  {/* Hover background */}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-[20px] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-12 flex-shrink-0 mr-1">
                    <Icon
                      className={`w-6 h-6 transition-all duration-300`}
                      style={{
                        color: isActive ? '#D4A843' : 'rgba(255, 255, 255, 0.45)'
                      }}
                    />
                  </div>

                  {/* Label */}
                  {sidebarExpanded && (
                    <div className="relative z-10 flex items-center justify-between flex-1 pr-2 overflow-hidden">
                      <span
                        className={`text-[14px] font-medium whitespace-nowrap transition-all duration-300 ${isActive ? 'text-white' : 'text-[#9CA3AF] group-hover:text-white'}`}
                        style={{
                          opacity: sidebarExpanded ? 1 : 0,
                          transform: sidebarExpanded ? 'translateX(0)' : 'translateX(10px)',
                        }}
                      >
                        {item.label}
                      </span>

                      {item.label === "کیف پول" && (
                        <div
                          className="flex items-center gap-1 text-xs whitespace-nowrap"
                          style={{
                            opacity: sidebarExpanded ? 1 : 0,
                            transform: sidebarExpanded ? 'translateX(0)' : 'translateX(10px)',
                            transition: 'all 300ms',
                          }}
                        >
                          <img src={imgYooz} alt="Yooz" className="w-3 h-3" />
                          <span className="text-[#D4A843] font-medium">۹۰۶</span>
                        </div>
                      )}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          {sidebarExpanded && (
            <div
              className="pb-4 text-center text-[10px] text-[#6B7280] transition-opacity duration-300 flex-shrink-0"
              style={{
                opacity: sidebarExpanded ? 1 : 0,
              }}
            >
              © YOOZICA 2026
            </div>
          )}
        </div>
      </aside>

      {/* Content Blur Overlay (when sidebar expanded) */}
      {sidebarExpanded && (
        <div
          className="hidden md:block fixed inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            background: 'rgba(0, 0, 0, 0.05)',
            opacity: sidebarExpanded ? 1 : 0,
          }}
        />
      )}

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] z-50 flex flex-col p-6 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          background: 'rgba(15, 15, 20, 0.98)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Close Button with Glassmorphism */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <X className="w-5 h-5 text-[#9CA3AF]" />
        </button>

        {/* Logo */}
        <div className="mb-8 pt-2">
          <img src={imgYoozicaLogo} alt="Yoozica" className="h-10" />
        </div>

        {/* User Profile Info */}
        <div className="mb-6 flex items-center gap-3 p-3 bg-white/5 rounded-xl">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
            <img src={imgProfilePicture} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">امیر یوسفی</p>
            <div className="flex items-center gap-1 text-xs text-[#D4A843]">
              <img src={imgYooz} alt="Yooz" className="w-3 h-3" />
              <span>۹۰۶ یوز</span>
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <Link
          to="/chat"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-center gap-2 w-full h-12 mb-6 rounded-xl bg-[#D4A843] text-[#0F0F14] font-medium text-[14px] hover:bg-[#E8B84A] transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>گفتگوی جدید</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative flex items-center gap-3 px-4 h-12 rounded-xl text-[14px] transition-all ${isActive
                  ? "bg-[#D4A84320] text-[#D4A843]"
                  : "text-[#9CA3AF] hover:bg-[#FFFFFF08]"
                  }`}
              >
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#D4A843] rounded-l-full" />
                )}
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#D4A843]' : 'text-[#9CA3AF]'}`} />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] bg-[#D4A843] text-black rounded-xl font-medium">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="pt-4 text-center text-xs text-[#9CA3AF]">
          © YOOZICA 2026
        </div>
      </aside>

      {/* Bottom Navigation (Mobile) */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 h-16 z-30 flex items-center justify-around px-2 safe-area-pb"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
        }}
        role="navigation"
        aria-label="منوی اصلی موبایل"
      >
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full py-2 transition-all duration-200 active:scale-95"
              style={{
                minWidth: '48px',
              }}
            >
              {/* Active glow background */}
              {isActive && (
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(212, 168, 67, 0.15) 0%, transparent 70%)',
                  }}
                />
              )}

              {/* Icon with glow effect */}
              <div className="relative">
                <Icon
                  className={`w-6 h-6 transition-all duration-300 ${isActive ? 'text-[#D4A843]' : 'text-[#9CA3AF]'
                    }`}
                  style={{
                    filter: isActive ? 'drop-shadow(0 2px 8px rgba(212, 168, 67, 0.6))' : 'none',
                  }}
                />

                {/* Active indicator dot */}
                {isActive && (
                  <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4A843] transition-all duration-300"
                    style={{
                      boxShadow: '0 0 8px rgba(212, 168, 67, 0.8)',
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-[10px] font-medium transition-all duration-300 ${isActive ? 'text-[#D4A843]' : 'text-[#9CA3AF]'
                  }`}
                style={{
                  textShadow: isActive ? '0 0 8px rgba(212, 168, 67, 0.4)' : 'none',
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content */}
      <main className="md:mr-[100px] pb-20 md:pb-0 min-h-screen">
        <Outlet />
      </main>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}