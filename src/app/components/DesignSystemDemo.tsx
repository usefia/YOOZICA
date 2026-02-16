import { 
  Button, 
  Input, 
  AdvisorCard, 
  TabButton, 
  NavItem, 
  Badge, 
  HeroBanner,
  Sidebar,
  Typography 
} from './design-system';
import { 
  MessageSquare, 
  Sparkles, 
  Image, 
  Mic, 
  Video, 
  Settings,
  Send,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { useState } from 'react';

/**
 * YOOZICA Design System Demo
 * 
 * This page showcases all components from the design system
 * with examples of each variant and state.
 */
export default function DesignSystemDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]" dir="rtl">
      <div className="max-w-7xl mx-auto p-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4" dir="rtl">
          <Typography variant="heading-xl">سیستم طراحی یوزیکا</Typography>
          <Typography variant="body-lg" className="text-[var(--text-secondary)]">
            کتابخانه کامل کامپوننت‌ها برای رابط کاربری فارسی با پشتیبانی RTL
          </Typography>
        </div>

        {/* Color Palette */}
        <section className="space-y-6">
          <Typography variant="heading-lg">پالت رنگی</Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[var(--gold-primary)]" />
              <Typography variant="label-sm">طلایی اصلی</Typography>
              <Typography variant="body-sm">#D4A843</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[var(--gold-hover)]" />
              <Typography variant="label-sm">طلایی هاور</Typography>
              <Typography variant="body-sm">#E8B84A</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-card)]" />
              <Typography variant="label-sm">پس‌زمینه اصلی</Typography>
              <Typography variant="body-sm">#0F0F0F</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[var(--surface-card)] border border-[var(--border-card)]" />
              <Typography variant="label-sm">کارت</Typography>
              <Typography variant="body-sm">#1E1E2E</Typography>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <Typography variant="heading-lg">تایپوگرافی</Typography>
          <div className="space-y-4 bg-[var(--surface-card)] p-6 rounded-lg border border-[var(--border-card)]">
            <Typography variant="heading-xl">عنوان بسیار بزرگ - 32px Bold</Typography>
            <Typography variant="heading-lg">عنوان بزرگ - 24px Bold</Typography>
            <Typography variant="heading-md">عنوان متوسط - 20px Semibold</Typography>
            <Typography variant="heading-sm">عنوان کوچک - 16px Semibold</Typography>
            <Typography variant="body-lg">متن بزرگ - 16px Regular با خوانایی بالا برای کاربران ۴۰-۶۰ ساله</Typography>
            <Typography variant="body-md">متن متوسط - 14px Regular برای محتوای اصلی</Typography>
            <Typography variant="body-sm">متن کوچک - 12px Regular برای توضیحات</Typography>
            <Typography variant="label-md">برچسب متوسط - 14px Medium</Typography>
            <Typography variant="label-sm">برچسب کوچک - 12px Medium</Typography>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <Typography variant="heading-lg">دکمه‌ها</Typography>
          
          <div className="space-y-4">
            <div>
              <Typography variant="heading-sm" className="mb-4">دکمه اصلی (Primary)</Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">دکمه اصلی</Button>
                <Button variant="primary" icon={<Send />}>با آیکون</Button>
                <Button variant="primary" disabled>غیرفعال</Button>
              </div>
            </div>

            <div>
              <Typography variant="heading-sm" className="mb-4">دکمه ثانویه (Secondary)</Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">دکمه ثانویه</Button>
                <Button variant="secondary" icon={<Sparkles />}>با آیکون</Button>
                <Button variant="secondary" disabled>غیرفعال</Button>
              </div>
            </div>

            <div>
              <Typography variant="heading-sm" className="mb-4">دکمه شبح (Ghost)</Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost">دکمه شبح</Button>
                <Button variant="ghost" icon={<Settings />}>با آیکون</Button>
                <Button variant="ghost" disabled>غیرفعال</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input */}
        <section className="space-y-6">
          <Typography variant="heading-lg">فیلد ورودی</Typography>
          <div className="space-y-4 max-w-2xl">
            <Input placeholder="جستجو بین مشاورها..." />
            <Input placeholder="ورودی با خطا" error />
            <Input placeholder="بدون آیکون" icon={undefined} />
          </div>
        </section>

        {/* Tab Buttons */}
        <section className="space-y-6">
          <Typography variant="heading-lg">دکمه‌های تب</Typography>
          <div className="flex flex-wrap gap-3">
            {['همه', 'کسب و کار', 'عمومی', 'فریلنسری', 'شبکه اجتماعی', 'یوتیوب'].map((tab, index) => (
              <TabButton
                key={index}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </TabButton>
            ))}
          </div>
        </section>

        {/* Navigation Items */}
        <section className="space-y-6">
          <Typography variant="heading-lg">آیتم‌های ناوبری</Typography>
          <div className="space-y-2 bg-[var(--bg-secondary)] p-4 rounded-lg max-w-md">
            {[
              { icon: <Sparkles />, label: 'مشاوره‌ها' },
              { icon: <MessageSquare />, label: 'چت', badge: 'جدید' },
              { icon: <Image />, label: 'تصویر' },
              { icon: <Mic />, label: 'صدا' },
              { icon: <Video />, label: 'ویدیو' },
              { icon: <Settings />, label: 'تنظیمات' },
            ].map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                active={activeNav === index}
                onClick={() => setActiveNav(index)}
              />
            ))}
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <Typography variant="heading-lg">نشان‌ها</Typography>
          <div className="flex flex-wrap gap-3">
            <Badge>جدید</Badge>
            <Badge>۳</Badge>
            <Badge>پیشنهاد ویژه</Badge>
            <Badge>محبوب</Badge>
          </div>
        </section>

        {/* Advisor Cards */}
        <section className="space-y-6">
          <Typography variant="heading-lg">کارت مشاور</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AdvisorCard
              logo={<Star className="w-full h-full" />}
              title="مشاور کسب و کار"
              description="راهنمایی در توسعه کسب و کار شما"
              onClick={() => alert('کلیک شد!')}
            />
            <AdvisorCard
              logo={<TrendingUp className="w-full h-full" />}
              title="مشاور بازاریابی"
              description="استراتژی‌های بازاریابی دیجیتال"
              onClick={() => alert('کلیک شد!')}
            />
            <AdvisorCard
              logo={<Users className="w-full h-full" />}
              title="مشاور شبکه اجتماعی"
              description="مدیریت حرفه‌ای شبکه‌های اجتماعی"
              onClick={() => alert('کلیک شد!')}
            />
          </div>
        </section>

        {/* Hero Banner */}
        <section className="space-y-6">
          <Typography variant="heading-lg">بنر قهرمان</Typography>
          <HeroBanner
            title="مشاوره‌های تخصصی"
            subtitle="با توجه به نیاز خود از بین دسته‌بندی‌ها، مشاور مناسب را انتخاب کنید."
          >
            <Input placeholder="جستجو بین مشاورها..." className="max-w-2xl" />
            <div className="flex flex-wrap gap-3 justify-center">
              {['همه', 'کسب و کار', 'عمومی', 'فریلنسری'].map((tab, index) => (
                <TabButton
                  key={index}
                  active={index === 0}
                >
                  {tab}
                </TabButton>
              ))}
            </div>
          </HeroBanner>
        </section>

        {/* Spacing System */}
        <section className="space-y-6">
          <Typography variant="heading-lg">سیستم فاصله‌گذاری (۸px Grid)</Typography>
          <div className="space-y-4 bg-[var(--surface-card)] p-6 rounded-lg border border-[var(--border-card)]">
            <div className="flex items-center gap-4">
              <div className="w-[8px] h-[48px] bg-[var(--gold-primary)]" />
              <Typography variant="body-md">8px - فاصله کوچک</Typography>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[16px] h-[48px] bg-[var(--gold-primary)]" />
              <Typography variant="body-md">16px - فاصله عادی</Typography>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[24px] h-[48px] bg-[var(--gold-primary)]" />
              <Typography variant="body-md">24px - فاصله متوسط</Typography>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[32px] h-[48px] bg-[var(--gold-primary)]" />
              <Typography variant="body-md">32px - فاصله بزرگ</Typography>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] bg-[var(--gold-primary)]" />
              <Typography variant="body-md">48px - فاصله خیلی بزرگ (هدف لمسی)</Typography>
            </div>
          </div>
        </section>

        {/* Accessibility Note */}
        <section className="space-y-6">
          <Typography variant="heading-lg">نکات دسترسی‌پذیری</Typography>
          <div className="bg-[var(--surface-elevated)] p-6 rounded-lg border border-[var(--border-card)] space-y-4">
            <Typography variant="body-md">✓ حداقل اندازه هدف لمسی: 48×48 پیکسل</Typography>
            <Typography variant="body-md">✓ حداقل اندازه متن: 14 پیکسل برای محتوای اصلی</Typography>
            <Typography variant="body-md">✓ کنتراست رنگ: تطابق با استانداردهای WCAG AA</Typography>
            <Typography variant="body-md">✓ حلقه فوکوس: مرز طلایی برای همه عناصر تعاملی</Typography>
            <Typography variant="body-md">✓ فونت Vazirmatn: بهینه برای متن فارسی</Typography>
            <Typography variant="body-md">✓ پشتیبانی کامل RTL: همه کامپوننت‌ها راست‌چین</Typography>
          </div>
        </section>

      </div>
    </div>
  );
}
