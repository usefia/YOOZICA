import imgYooz from "@/assets/figma/9a3274eaaef8651fbba0fd0832dabecde12b3eac.png";

export default function WalletPage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-white mb-6">کیف پول</h1>

        <div className="bg-[#1A1A28]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <p className="text-sm text-[#9CA3AF] mb-2">موجودی کل</p>
            <div className="flex items-center justify-center gap-2">
              <img src={imgYooz} alt="Yooz" className="w-8 h-8" />
              <span className="text-4xl font-bold text-[#D4A843]">۹۰۶</span>
              <span className="text-xl text-[#9CA3AF]">یوز</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-[#D4A843] text-[#0F0F14] rounded-xl font-medium hover:bg-[#E8B84A] transition-all">
              شارژ حساب
            </button>
            <button className="px-6 py-3 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-all">
              تاریخچه تراکنش‌ها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
