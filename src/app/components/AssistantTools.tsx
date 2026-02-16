import { Search, Filter } from "lucide-react";
import imgYooz from "@/assets/figma/9a3274eaaef8651fbba0fd0832dabecde12b3eac.png";
import { useState } from "react";

const categories = [
  { id: "all", label: "همه" },
  { id: "business", label: "کسب و کار" },
  { id: "general", label: "عمومی" },
  { id: "freelance", label: "فریلنسری" },
  { id: "social", label: "شبکه اجتماعی" },
  { id: "youtube", label: "یوتیوب" },
];

const advisors = [
  {
    id: 1,
    title: "مشاور اس ام اس مارکتینگ",
    category: "business",
    image: imgYooz,
  },
  {
    id: 2,
    title: "طراحی محصول",
    category: "business",
    image: imgYooz,
  },
  {
    id: 3,
    title: "مشاور انتخاب نام برند",
    category: "business",
    image: imgYooz,
  },
  {
    id: 4,
    title: "مشاور استراتژی بازاریابی",
    category: "business",
    image: imgYooz,
  },
  {
    id: 5,
    title: "مترجم فارسی",
    category: "general",
    image: imgYooz,
  },
  {
    id: 6,
    title: "مشاور مالی شخصی",
    category: "general",
    image: imgYooz,
  },
  {
    id: 7,
    title: "مشاور سبک زندگی",
    category: "general",
    image: imgYooz,
  },
  {
    id: 8,
    title: "مشاور پروژه های فریلنسری",
    category: "freelance",
    image: imgYooz,
  },
  {
    id: 9,
    title: "مشاور قیمت گذاری پروژه",
    category: "freelance",
    image: imgYooz,
  },
  {
    id: 10,
    title: "مشاور اینستاگرام",
    category: "social",
    image: imgYooz,
  },
  {
    id: 11,
    title: "مشاور توییتر",
    category: "social",
    image: imgYooz,
  },
  {
    id: 12,
    title: "مشاور یوتیوب",
    category: "youtube",
    image: imgYooz,
  },
];

export default function AssistantTools() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAdvisors = advisors.filter((advisor) => {
    const matchesCategory =
      selectedCategory === "all" || advisor.category === selectedCategory;
    const matchesSearch = advisor.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#ffc425] to-[#f0b500] rounded-3xl p-8 mb-8 border border-[#575756] shadow-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-black mb-4">
              مشاوره‌های تخصصی
            </h1>
            <p className="text-black text-lg mb-8">
              با توجه به نیاز خود از بین دسته‌بندی‌ها، مشاور مناسب را انتخاب کنید.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="relative mb-4">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="جستجو بین مشاورها....."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 rounded-lg border border-[#7f5d04] focus:outline-none focus:ring-2 focus:ring-[#ffc425] text-black"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-lg whitespace-nowrap transition-all ${selectedCategory === category.id
                        ? "bg-black text-[#ffc425] font-bold"
                        : "bg-transparent text-black hover:bg-black/5"
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAdvisors.map((advisor) => (
            <div
              key={advisor.id}
              className="bg-[#393939] rounded-xl overflow-hidden border border-[#4a4a4a] hover:border-[#ffc425] transition-all cursor-pointer group shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-square bg-gradient-to-br from-[#ffc425]/20 to-transparent flex items-center justify-center p-6">
                <img
                  src={advisor.image}
                  alt={advisor.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-4 bg-[#2a2a2a]">
                <h3 className="text-center text-white font-bold group-hover:text-[#ffc425] transition-colors">
                  {advisor.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredAdvisors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">هیچ مشاوری یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
}
