import { Mail, MessageCircle, Phone } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-white mb-6">پشتیبانی</h1>
        
        <div className="grid gap-4">
          <div className="bg-[#1A1A28]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-[#D4A843]/30 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A843]/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#D4A843]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white mb-1">گفتگوی آنلاین</h3>
                <p className="text-sm text-[#9CA3AF]">با تیم پشتیبانی ما در ارتباط باشید</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A28]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-[#D4A843]/30 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A843]/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#D4A843]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white mb-1">ایمیل</h3>
                <p className="text-sm text-[#9CA3AF]" dir="ltr">support@yoozica.com</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A28]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-[#D4A843]/30 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A843]/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#D4A843]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white mb-1">تلفن پشتیبانی</h3>
                <p className="text-sm text-[#9CA3AF]" dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#1A1A28]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-medium text-white mb-4">سوالات متداول</h2>
          <div className="space-y-3 text-sm text-[#9CA3AF]">
            <p>• چگونه می‌توانم حساب خود را شارژ کنم؟</p>
            <p>• آیا امکان برگشت وجه وجود دارد؟</p>
            <p>• چگونه از خدمات مشاوره استفاده کنم؟</p>
            <p>• زمان پاسخگویی پشتیبانی چقدر است؟</p>
          </div>
        </div>
      </div>
    </div>
  );
}
