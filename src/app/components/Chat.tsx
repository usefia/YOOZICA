import { useState, useRef, useEffect } from "react";
import { ChevronDown, Send, Paperclip, Mic, Search, Code, FileText, Video, X } from "lucide-react";
import imgYoozicaLogo from "@/assets/figma/7401bffd5a5a56d045ed2c3d692c49433d1a487b.png";

interface AIModel {
  id: string;
  name: string;
  icon: string;
  badge: string;
  badgeColor: string;
  provider: string;
  capabilities: {
    attachFile: boolean;
    microphone: boolean;
    webSearch: boolean;
    codeExecution?: boolean;
    documentAnalysis?: boolean;
    videoAnalysis?: boolean;
  };
}

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  quickReplies?: string[];
  isAnimating?: boolean;
}

const aiModels: AIModel[] = [
  // OpenAI
  {
    id: "gpt-4o",
    name: "GPT-4o",
    icon: "🤖",
    badge: "پیشرفته",
    badgeColor: "bg-[rgba(16,185,129,0.15)] text-[#10B981]",
    provider: "OpenAI",
    capabilities: { attachFile: true, microphone: true, webSearch: true, codeExecution: true },
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    icon: "🤖",
    badge: "پیشرفته",
    badgeColor: "bg-[rgba(16,185,129,0.15)] text-[#10B981]",
    provider: "OpenAI",
    capabilities: { attachFile: true, microphone: true, webSearch: true, codeExecution: true },
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    icon: "🤖",
    badge: "سریع",
    badgeColor: "bg-[rgba(59,130,246,0.15)] text-[#3B82F6]",
    provider: "OpenAI",
    capabilities: { attachFile: false, microphone: true, webSearch: false, codeExecution: false },
  },
  {
    id: "o1-preview",
    name: "o1-preview",
    icon: "🧠",
    badge: "استدلال",
    badgeColor: "bg-[rgba(168,85,247,0.15)] text-[#A855F7]",
    provider: "OpenAI",
    capabilities: { attachFile: true, microphone: true, webSearch: true, codeExecution: true },
  },
  // Anthropic
  {
    id: "claude-opus-4.5",
    name: "Claude Opus 4.5",
    icon: "🎭",
    badge: "پیشرفته",
    badgeColor: "bg-[rgba(16,185,129,0.15)] text-[#10B981]",
    provider: "Anthropic",
    capabilities: { attachFile: true, microphone: true, webSearch: true, documentAnalysis: true },
  },
  {
    id: "claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    icon: "🎭",
    badge: "متعادل",
    badgeColor: "bg-[rgba(245,158,11,0.15)] text-[#F59E0B]",
    provider: "Anthropic",
    capabilities: { attachFile: true, microphone: true, webSearch: true, documentAnalysis: true },
  },
  {
    id: "claude-haiku-4.5",
    name: "Claude Haiku 4.5",
    icon: "🎭",
    badge: "سریع",
    badgeColor: "bg-[rgba(59,130,246,0.15)] text-[#3B82F6]",
    provider: "Anthropic",
    capabilities: { attachFile: true, microphone: true, webSearch: true, documentAnalysis: true },
  },
  // Google
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    icon: "💎",
    badge: "پیشرفته",
    badgeColor: "bg-[rgba(16,185,129,0.15)] text-[#10B981]",
    provider: "Google",
    capabilities: { attachFile: true, microphone: true, webSearch: true, videoAnalysis: true },
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    icon: "💎",
    badge: "متعادل",
    badgeColor: "bg-[rgba(245,158,11,0.15)] text-[#F59E0B]",
    provider: "Google",
    capabilities: { attachFile: true, microphone: true, webSearch: true, videoAnalysis: true },
  },
  // Others
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    icon: "🔍",
    badge: "کد",
    badgeColor: "bg-[rgba(249,115,22,0.15)] text-[#F97316]",
    provider: "سایر مدل‌ها",
    capabilities: { attachFile: true, microphone: true, webSearch: true, codeExecution: true },
  },
  {
    id: "llama-3.3",
    name: "Llama 3.3",
    icon: "🦙",
    badge: "متن‌باز",
    badgeColor: "bg-[rgba(107,114,128,0.15)] text-[#6B7280]",
    provider: "سایر مدل‌ها",
    capabilities: { attachFile: true, microphone: true, webSearch: true },
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    icon: "⚡",
    badge: "سریع",
    badgeColor: "bg-[rgba(59,130,246,0.15)] text-[#3B82F6]",
    provider: "سایر مدل‌ها",
    capabilities: { attachFile: true, microphone: true, webSearch: true },
  },
];

const quickSuggestions = [
  "ایده محتوا بده",
  "کپشن اینستا بنویس",
  "یک ایده بیزنس بده",
  "تحلیل بازار مالی",
  "کد بنویس",
];

const placeholderTexts = [
  "پیام خود را اینجا بنویسید...",
  "سوال خود را بپرسید...",
  "چطور می‌تونم کمکتون کنم؟",
  "از من هرچیزی بپرسید...",
];

export default function Chat() {
  const [selectedModel, setSelectedModel] = useState<AIModel>(
    aiModels.find((m) => m.id === "claude-sonnet-4.5") || aiModels[0]
  );
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [input, setInput] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Rotating placeholder text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowModelDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleModelChange = (model: AIModel) => {
    setSelectedModel(model);
    setShowModelDropdown(false);
    setWebSearchEnabled(false);

    // Show toast
    setToastMessage(`مدل به ${model.name} تغییر کرد`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    textareaRef.current?.focus();
    setShowSuggestions(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
      isAnimating: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setShowSuggestions(false);

    // Remove animation flag
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, isAnimating: false } : msg
        )
      );
    }, 300);

    // Simulate bot typing and response
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const botMessage: Message = {
        id: `msg-${Date.now()}-bot`,
        type: "bot",
        content: `این یک پاسخ نمونه از ${selectedModel.name} است. در نسخه نهایی، پاسخ واقعی از API دریافت می‌شود.`,
        timestamp: new Date(),
        quickReplies: ["ادامه بده", "توضیح بیشتر", "مثال بزن"],
        isAnimating: true,
      };

      setMessages((prev) => [...prev, botMessage]);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessage.id ? { ...msg, isAnimating: false } : msg
          )
        );
      }, 500);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    handleSend();
  };

  const handleToolClick = (tool: string, isActive: boolean) => {
    if (!isActive) return;

    if (tool === "webSearch") {
      setWebSearchEnabled(!webSearchEnabled);
    } else if (tool === "microphone") {
      setIsRecording(!isRecording);
      if (!isRecording) {
        setTimeout(() => setIsRecording(false), 3000);
      }
    } else if (tool === "attachFile") {
      console.log("Open file picker");
    }
  };

  const groupedModels = aiModels.reduce((acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  }, {} as Record<string, AIModel[]>);

  const hasMessages = messages.length > 0;

  // Empty state (redesigned for mobile)
  if (!hasMessages) {
    return (
      <div
        className="min-h-screen flex flex-col px-4 py-6 md:py-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F0F14 0%, #1A1A28 50%, #0F0F14 100%)",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-10 animate-float-slow"
            style={{
              background: "radial-gradient(circle, #FFC107 0%, transparent 70%)",
              top: "10%",
              right: "10%",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-10 animate-float-slower"
            style={{
              background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
              bottom: "15%",
              left: "15%",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[900px] mx-auto flex-1 flex flex-col relative z-10">
          {/* Compact Header */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            {/* Logo - Much Smaller on Mobile */}
            <div className="mb-3 md:mb-4 animate-fadeIn">
              <img
                src={imgYoozicaLogo}
                alt="Yoozica"
                className="h-[40px] md:h-[60px] drop-shadow-2xl"
              />
            </div>

            {/* Compact Greeting */}
            <div className="text-center mb-4 md:mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-lg md:text-2xl font-bold text-white mb-1">
                سلام امیر! 👋
              </h1>
              <p className="text-xs md:text-sm" style={{ color: "#9CA3AF" }}>
                چطور می‌تونم کمکت کنم؟
              </p>
            </div>

            {/* Compact Model Selector */}
            <div className="w-full max-w-[400px] animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowModelDropdown(!showModelDropdown)}
                  className="flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 w-full transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                    border: "1.5px solid rgba(255, 193, 7, 0.3)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-lg flex-shrink-0">
                      {selectedModel.icon}
                    </span>
                    <div className="flex-1 text-right min-w-0">
                      <div className="text-xs md:text-sm font-bold text-white truncate">
                        {selectedModel.name}
                      </div>
                      <div className="text-[10px] md:text-xs truncate" style={{ color: "#9CA3AF" }}>
                        {selectedModel.provider}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${showModelDropdown ? "rotate-180" : ""
                      }`}
                    style={{ color: "#FFC107" }}
                  />
                </button>

                {/* Compact Dropdown Menu */}
                {showModelDropdown && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 rounded-xl p-2 max-h-[60vh] overflow-y-auto z-50 animate-dropdownSlide"
                    style={{
                      background: "rgba(30, 30, 46, 0.98)",
                      backdropFilter: "blur(40px)",
                      WebkitBackdropFilter: "blur(40px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {Object.entries(groupedModels).map(([provider, models]) => (
                      <div key={provider} className="mb-2 last:mb-0">
                        <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider" style={{ color: "#6B7280" }}>
                          {provider}
                        </div>
                        {models.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => handleModelChange(model)}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${selectedModel.id === model.id
                              ? "border-r-2"
                              : "hover:bg-[rgba(255,255,255,0.06)]"
                              }`}
                            style={{
                              background: selectedModel.id === model.id ? "rgba(255, 193, 7, 0.15)" : "transparent",
                              borderColor: selectedModel.id === model.id ? "#FFC107" : "transparent",
                            }}
                          >
                            <span className="text-base">{model.icon}</span>
                            <span className="text-xs font-medium text-white flex-1 text-right truncate">
                              {model.name}
                            </span>
                            <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold ${model.badgeColor} flex-shrink-0`}>
                              {model.badge}
                            </span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Suggestions - Collapsible on Mobile */}
          {showSuggestions && (
            <div className="mb-6 md:mb-8 w-full animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs md:text-sm" style={{ color: "#9CA3AF" }}>
                  پیشنهادهای سریع
                </h3>
                <button
                  onClick={() => setShowSuggestions(false)}
                  className="text-xs text-[#6B7280] hover:text-[#9CA3AF] transition-colors md:hidden"
                >
                  پنهان کردن
                </button>
              </div>
              <div
                className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white whitespace-nowrap transition-all duration-300 hover:scale-105 animate-fadeInStagger flex-shrink-0"
                    style={{
                      background: "rgba(30, 30, 46, 0.8)",
                      border: "1px solid #FFC107",
                      boxShadow: "0 2px 12px rgba(255, 193, 7, 0.2)",
                      animationDelay: `${0.4 + index * 0.1}s`,
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Spacer to push input to bottom */}
          <div className="flex-1" />

          {/* Glassmorphic Input Box - Fixed at Bottom */}
          <div className="w-full animate-fadeIn" style={{ animationDelay: "0.5s" }}>
            <div
              className="rounded-2xl p-3 md:p-4 transition-all duration-500"
              style={{
                background: isFocused
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(255, 255, 255, 0.08)",
                backdropFilter: isFocused ? "blur(60px)" : "blur(40px)",
                WebkitBackdropFilter: isFocused ? "blur(60px)" : "blur(40px)",
                border: isFocused
                  ? "2px solid rgba(255, 193, 7, 0.5)"
                  : "1.5px solid rgba(255, 255, 255, 0.15)",
                boxShadow: isFocused
                  ? "0 8px 32px rgba(255, 193, 7, 0.3)"
                  : "0 4px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex items-end gap-2">
                {/* Textarea */}
                <div className="flex-1 min-w-0">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder={placeholderTexts[currentPlaceholder]}
                    className="w-full bg-transparent text-sm md:text-[15px] text-white focus:outline-none resize-none max-h-[120px] min-h-[24px] transition-all duration-300"
                    style={{
                      caretColor: "#FFC107",
                    }}
                    rows={1}
                    aria-label="پیام خود را وارد کنید"
                  />

                  {/* Indicators */}
                  {(isRecording || webSearchEnabled) && (
                    <div className="flex items-center gap-3 mt-2">
                      {isRecording && (
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ background: "#EF4444" }}
                          />
                          <span className="text-[10px] md:text-xs" style={{ color: "#9CA3AF" }}>
                            در حال ضبط...
                          </span>
                        </div>
                      )}
                      {webSearchEnabled && (
                        <span className="text-[10px] md:text-xs font-medium" style={{ color: "#FFC107" }}>
                          جستجوی وب ✓
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Compact Tool Icons */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {/* Attach File */}
                  <button
                    onClick={() => handleToolClick("attachFile", selectedModel.capabilities.attachFile)}
                    disabled={!selectedModel.capabilities.attachFile}
                    className={`p-2 rounded-lg transition-all duration-300 ${selectedModel.capabilities.attachFile
                      ? "hover:scale-110"
                      : "opacity-40 cursor-not-allowed"
                      }`}
                    style={{
                      background: selectedModel.capabilities.attachFile
                        ? "rgba(255, 193, 7, 0.1)"
                        : "rgba(107, 114, 128, 0.1)",
                      color: selectedModel.capabilities.attachFile ? "#FFC107" : "#6B7280",
                    }}
                    title="پیوست فایل"
                  >
                    <Paperclip className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                  </button>

                  {/* Microphone */}
                  <button
                    onClick={() => handleToolClick("microphone", selectedModel.capabilities.microphone)}
                    disabled={!selectedModel.capabilities.microphone}
                    className={`p-2 rounded-lg transition-all duration-300 ${selectedModel.capabilities.microphone
                      ? isRecording
                        ? "animate-pulse"
                        : "hover:scale-110"
                      : "opacity-40 cursor-not-allowed"
                      }`}
                    style={{
                      background: selectedModel.capabilities.microphone
                        ? isRecording
                          ? "rgba(239, 68, 68, 0.2)"
                          : "rgba(255, 193, 7, 0.1)"
                        : "rgba(107, 114, 128, 0.1)",
                      color: selectedModel.capabilities.microphone
                        ? isRecording
                          ? "#EF4444"
                          : "#FFC107"
                        : "#6B7280",
                    }}
                    title="ورودی صوتی"
                  >
                    <Mic className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                  </button>

                  {/* Web Search */}
                  <button
                    onClick={() => handleToolClick("webSearch", selectedModel.capabilities.webSearch)}
                    disabled={!selectedModel.capabilities.webSearch}
                    className={`p-2 rounded-lg transition-all duration-300 hidden md:flex ${selectedModel.capabilities.webSearch
                      ? "hover:scale-110"
                      : "opacity-40 cursor-not-allowed"
                      }`}
                    style={{
                      background: selectedModel.capabilities.webSearch
                        ? webSearchEnabled
                          ? "rgba(255, 193, 7, 0.25)"
                          : "rgba(255, 193, 7, 0.1)"
                        : "rgba(107, 114, 128, 0.1)",
                      color: selectedModel.capabilities.webSearch ? "#FFC107" : "#6B7280",
                    }}
                    title="جستجوی وب"
                  >
                    <Search className="w-5 h-5" strokeWidth={2.5} />
                  </button>

                  {/* Send Button */}
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${input.trim()
                      ? "hover:scale-110 active:scale-95"
                      : "opacity-50 cursor-not-allowed"
                      }`}
                    style={{
                      background: input.trim()
                        ? "linear-gradient(135deg, #FFC107 0%, #FF9800 100%)"
                        : "rgba(107, 114, 128, 0.3)",
                      boxShadow: input.trim()
                        ? "0 4px 16px rgba(255, 193, 7, 0.4)"
                        : "none",
                    }}
                    aria-label="ارسال پیام"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Capabilities - Only on Desktop */}
          <div
            className="hidden md:flex items-center justify-center gap-2 mt-4 text-[10px] animate-fadeIn"
            style={{ color: "#6B7280", animationDelay: "0.6s" }}
          >
            {selectedModel.capabilities.attachFile && <span>📎</span>}
            {selectedModel.capabilities.microphone && <span>🎤</span>}
            {selectedModel.capabilities.webSearch && <span>🔍</span>}
            {selectedModel.capabilities.codeExecution && <span>💻</span>}
            {selectedModel.capabilities.documentAnalysis && <span>📄</span>}
            {selectedModel.capabilities.videoAnalysis && <span>🎥</span>}
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
            <div
              className="px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2"
              style={{
                background: "rgba(30, 30, 46, 0.95)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: "1px solid rgba(255, 193, 7, 0.4)",
              }}
            >
              <span className="text-sm">✓</span>
              <span className="font-medium text-xs md:text-sm text-white">{toastMessage}</span>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInStagger {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
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
          
          @keyframes dropdownSlide {
            from {
              transform: translateY(-10px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-30px) translateX(20px);
            }
          }
          
          @keyframes float-slower {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(40px) translateX(-30px);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-fadeInStagger {
            animation: fadeInStagger 0.5s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slideDown {
            animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          .animate-dropdownSlide {
            animation: dropdownSlide 0.3s ease-out;
          }
          
          .animate-float-slow {
            animation: float-slow 20s ease-in-out infinite;
          }
          
          .animate-float-slower {
            animation: float-slower 25s ease-in-out infinite;
          }
          
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          textarea::placeholder {
            color: #6B7280;
            transition: opacity 0.3s ease-in-out;
          }
          
          textarea:focus::placeholder {
            opacity: 0.6;
          }
        `}</style>
      </div>
    );
  }

  // Chat interface with messages
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0F0F14 0%, #1A1A28 50%, #0F0F14 100%)",
      }}
    >
      {/* Compact Header */}
      <header
        className="sticky top-0 z-20 px-4 py-3 md:px-6 md:py-4"
        style={{
          background: "rgba(15, 15, 20, 0.95)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3">
          {/* Model Selection - Compact */}
          <div className="flex items-center gap-3 flex-1 min-w-0" ref={dropdownRef}>
            <button
              onClick={() => setShowModelDropdown(!showModelDropdown)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-300 hover:scale-[1.02] min-w-0 flex-1 max-w-[280px]"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 193, 7, 0.3)",
              }}
            >
              <span className="text-base flex-shrink-0">{selectedModel.icon}</span>
              <div className="flex-1 text-right min-w-0">
                <div className="text-xs font-bold text-white truncate">{selectedModel.name}</div>
              </div>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 transition-transform ${showModelDropdown ? "rotate-180" : ""}`}
                style={{ color: "#FFC107" }}
              />
            </button>

            {showModelDropdown && (
              <div
                className="absolute top-full left-4 right-4 md:left-4 md:right-auto md:w-[320px] mt-2 rounded-xl p-2 max-h-[60vh] overflow-y-auto z-50 animate-dropdownSlide"
                style={{
                  background: "rgba(30, 30, 46, 0.98)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
                }}
              >
                {Object.entries(groupedModels).map(([provider, models]) => (
                  <div key={provider} className="mb-2 last:mb-0">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider" style={{ color: "#6B7280" }}>
                      {provider}
                    </div>
                    {models.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => handleModelChange(model)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${selectedModel.id === model.id ? "border-r-2" : "hover:bg-[rgba(255,255,255,0.06)]"
                          }`}
                        style={{
                          background: selectedModel.id === model.id ? "rgba(255, 193, 7, 0.15)" : "transparent",
                          borderColor: selectedModel.id === model.id ? "#FFC107" : "transparent",
                        }}
                      >
                        <span className="text-base">{model.icon}</span>
                        <span className="text-xs font-medium text-white flex-1 text-right truncate">{model.name}</span>
                        <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold ${model.badgeColor}`}>
                          {model.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Clear Chat */}
          <button
            onClick={() => {
              setMessages([]);
              setInput("");
              setShowSuggestions(true);
            }}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              color: "#EF4444",
            }}
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <main
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-6"
      >
        <div className="max-w-[900px] mx-auto space-y-3 md:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-start" : "justify-end"} ${message.isAnimating ? "animate-messageSlideIn" : ""
                }`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-lg`}
                style={{
                  background: message.type === "user"
                    ? "linear-gradient(135deg, #FFC107 0%, #FF9800 100%)"
                    : "rgba(255, 255, 255, 0.08)",
                  backdropFilter: message.type === "bot" ? "blur(40px)" : "none",
                  WebkitBackdropFilter: message.type === "bot" ? "blur(40px)" : "none",
                  border: message.type === "bot" ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                  color: message.type === "user" ? "#1A1A1A" : "#FFFFFF",
                  borderRadius: message.type === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                }}
              >
                <p className="text-sm md:text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                  {message.content}
                </p>

                <div className="mt-1.5 text-[10px] md:text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString("fa-IR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>

                {/* Quick Replies */}
                {message.type === "bot" && message.quickReplies && (
                  <div className="mt-2 flex flex-wrap gap-1.5 md:gap-2">
                    {message.quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs transition-all duration-300 hover:scale-105"
                        style={{
                          background: "rgba(255, 193, 7, 0.15)",
                          border: "1px solid rgba(255, 193, 7, 0.3)",
                          color: "#FFC107",
                        }}
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-end animate-messageSlideIn">
              <div
                className="rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px 16px 16px 4px",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-bounce" style={{ background: "#9CA3AF", animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-bounce" style={{ background: "#9CA3AF", animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-bounce" style={{ background: "#9CA3AF", animationDelay: "300ms" }} />
                  </div>
                  <span className="text-[10px] md:text-xs" style={{ color: "#9CA3AF" }}>در حال تایپ...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Fixed Input Area - Compact */}
      <footer
        className="sticky bottom-0 px-3 py-3 md:px-6 md:py-4"
        style={{
          background: "rgba(15, 15, 20, 0.95)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="max-w-[900px] mx-auto">
          <div
            className="rounded-2xl p-2.5 md:p-3 transition-all duration-500"
            style={{
              background: isFocused ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)",
              backdropFilter: isFocused ? "blur(60px)" : "blur(40px)",
              WebkitBackdropFilter: isFocused ? "blur(60px)" : "blur(40px)",
              border: isFocused ? "2px solid rgba(255, 193, 7, 0.5)" : "1.5px solid rgba(255, 255, 255, 0.15)",
              boxShadow: isFocused
                ? "0 8px 32px rgba(255, 193, 7, 0.3)"
                : "0 4px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="flex items-end gap-2">
              <div className="flex-1 min-w-0">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder={placeholderTexts[currentPlaceholder]}
                  className="w-full bg-transparent text-sm md:text-[15px] text-white focus:outline-none resize-none max-h-[100px]"
                  style={{
                    minHeight: "40px",
                    caretColor: "#FFC107",
                  }}
                  rows={1}
                />

                {/* Indicators */}
                {(isRecording || webSearchEnabled) && (
                  <div className="flex items-center gap-2 mt-1.5">
                    {isRecording && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#EF4444" }} />
                        <span className="text-[10px] md:text-xs" style={{ color: "#9CA3AF" }}>در حال ضبط...</span>
                      </div>
                    )}
                    {webSearchEnabled && (
                      <span className="text-[10px] md:text-xs font-medium" style={{ color: "#FFC107" }}>جستجوی وب ✓</span>
                    )}
                  </div>
                )}
              </div>

              {/* Tool Icons - Minimal */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => handleToolClick("attachFile", selectedModel.capabilities.attachFile)}
                  disabled={!selectedModel.capabilities.attachFile}
                  className={`p-2 rounded-lg transition-all ${selectedModel.capabilities.attachFile ? "hover:scale-110" : "opacity-40"
                    }`}
                  style={{
                    background: selectedModel.capabilities.attachFile ? "rgba(255, 193, 7, 0.1)" : "rgba(107, 114, 128, 0.1)",
                    color: selectedModel.capabilities.attachFile ? "#FFC107" : "#6B7280",
                  }}
                >
                  <Paperclip className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                </button>

                <button
                  onClick={() => handleToolClick("microphone", selectedModel.capabilities.microphone)}
                  disabled={!selectedModel.capabilities.microphone}
                  className={`p-2 rounded-lg transition-all ${selectedModel.capabilities.microphone ? "hover:scale-110" : "opacity-40"
                    }`}
                  style={{
                    background: selectedModel.capabilities.microphone
                      ? isRecording ? "rgba(239, 68, 68, 0.2)" : "rgba(255, 193, 7, 0.1)"
                      : "rgba(107, 114, 128, 0.1)",
                    color: selectedModel.capabilities.microphone ? isRecording ? "#EF4444" : "#FFC107" : "#6B7280",
                  }}
                >
                  <Mic className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                </button>

                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${input.trim() ? "hover:scale-110 active:scale-95" : "opacity-50"
                    }`}
                  style={{
                    background: input.trim() ? "linear-gradient(135deg, #FFC107 0%, #FF9800 100%)" : "rgba(107, 114, 128, 0.3)",
                    boxShadow: input.trim() ? "0 4px 16px rgba(255, 193, 7, 0.4)" : "none",
                  }}
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div
            className="px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2"
            style={{
              background: "rgba(30, 30, 46, 0.95)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 193, 7, 0.4)",
            }}
          >
            <span className="text-sm">✓</span>
            <span className="font-medium text-xs md:text-sm text-white">{toastMessage}</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes messageSlideIn {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-messageSlideIn {
          animation: messageSlideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
