import svgPaths from "./svg-ooqiduxosm";
import imgProfilePicture from "@/assets/figma/4ab704874c5ef824f438cad5dfa4ef39d2de2130.png";
import imgYooz from "@/assets/figma/9a3274eaaef8651fbba0fd0832dabecde12b3eac.png";
import imgYoozicaLogo from "@/assets/figma/7401bffd5a5a56d045ed2c3d692c49433d1a487b.png";
import { imgSpan } from "./svg-vfdsk";

function SvgRepoIconCarrier() {
  return (
    <div className="relative shrink-0 size-[28.333px]" data-name="SVGRepo_iconCarrier">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3333 28.3333">
        <g id="SVGRepo_iconCarrier">
          <path d={svgPaths.p20aaff00} fill="var(--fill-0, #7C3AED)" id="Vector" />
          <path d={svgPaths.p173fb00} fill="var(--fill-0, #7C3AED)" id="Vector_2" />
          <path d={svgPaths.p17793e00} fill="var(--fill-0, #7C3AED)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[3px] relative shrink-0" data-name="Frame">
      <SvgRepoIconCarrier />
    </div>
  );
}

function DivSidePanelFloatingBtn() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[1886px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[100px]" data-name="div#sidePanelFloatingBtn">
      <Frame />
    </div>
  );
}

function SpanMaskGroup() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[24px]" data-name="span:mask-group">
      <div className="bg-white h-[859px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-24px_0px] mask-size-[24px_859px] shrink-0 w-[24px]" data-name="span" style={{ maskImage: `url('${imgSpan}')` }} />
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center opacity-0 relative shrink-0" data-name="div">
      <SpanMaskGroup />
    </div>
  );
}

function DivRedeviationBsIndicator() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="div#redeviation-bs-indicator">
      <Div />
    </div>
  );
}

function Snipp6Svg() {
  return <div className="absolute left-[1884px] opacity-75 rounded-bl-[40px] rounded-tl-[40px] shadow-[-2.5px_4px_12px_1px_rgba(0,0,0,0.2)] size-[34px] top-[759px]" data-name="snipp6.svg" />;
}

function ProfilePicture() {
  return (
    <div className="absolute h-[22.5px] left-0 top-[3.75px] w-[30px]" data-name="profile picture">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePicture} />
      </div>
    </div>
  );
}

function DivAvatar() {
  return (
    <div className="absolute bg-white left-0 overflow-clip rounded-[15px] size-[30px] top-[6.4px]" data-name="div._avatar">
      <ProfilePicture />
    </div>
  );
}

function SpanName() {
  return (
    <div className="absolute h-[21.61px] left-0 overflow-clip top-0 w-[73.92px]" data-name="span._name">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[14.4px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          امیر یوسفی
        </p>
      </div>
    </div>
  );
}

function Yooz() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="yooz">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYooz} />
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="absolute h-[18px] left-[17.59px] overflow-clip top-0 w-[23px]" data-name="span">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12px] text-white top-[9px] whitespace-nowrap">
        <p className="leading-[18px]">906</p>
      </div>
    </div>
  );
}

function DivBalance() {
  return (
    <div className="absolute h-[18px] left-0 opacity-90 top-[24.8px] w-[40.59px]" data-name="div._balance">
      <Yooz />
      <Span />
    </div>
  );
}

function DivUserInfo() {
  return (
    <div className="absolute h-[42.8px] left-[46px] top-0 w-[73.92px]" data-name="div._user-info">
      <SpanName />
      <DivBalance />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[135.92px] size-[18px] top-[12.4px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DivUserMenu() {
  return (
    <div className="absolute h-[42.8px] left-0 top-0 w-[153.92px]" data-name="div.user-menu">
      <DivAvatar />
      <DivUserInfo />
      <Frame1 />
    </div>
  );
}

function DivPopoverTrigger() {
  return (
    <div className="absolute h-[42.8px] left-0 top-0 w-[153.92px]" data-name="div.popover-trigger">
      <DivUserMenu />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute h-[42.8px] left-0 top-[8.6px] w-[153.92px]" data-name="div">
      <DivPopoverTrigger />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[12.8px] size-[18px] top-[9.4px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute h-[19.19px] left-[30.8px] overflow-clip top-[8.81px] w-[32.53px]" data-name="div">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[20px] justify-center leading-[0] left-[16.36px] not-italic text-[12.6px] text-center text-white top-[9px] w-[32.73px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Gpt 5</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_783)" id="Frame">
          <path d={svgPaths.p39532800} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_783">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivModelIcon() {
  return (
    <div className="absolute left-[63.33px] overflow-clip size-[24px] top-[6.4px]" data-name="div.model-icon">
      <Frame3 />
    </div>
  );
}

function DivModelSelectBox() {
  return (
    <div className="absolute border border-[#393939] border-solid h-[38.8px] left-0 rounded-[12.8px] top-0 w-[102.13px]" data-name="div.model-select-box">
      <Frame2 />
      <Div3 />
      <DivModelIcon />
    </div>
  );
}

function DivPopoverTrigger1() {
  return (
    <div className="absolute h-[38.8px] left-0 top-0 w-[114.91px]" data-name="div.popover-trigger">
      <DivModelSelectBox />
    </div>
  );
}

function DivFlexCenter() {
  return (
    <div className="absolute h-[38.8px] left-[885.09px] top-[10.6px] w-[114.91px]" data-name="div.flex-center">
      <DivPopoverTrigger1 />
    </div>
  );
}

function HeaderHeader() {
  return (
    <div className="h-[60px] pointer-events-auto sticky top-0 w-[1000px]" data-name="header.header">
      <Div2 />
      <DivFlexCenter />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[16px] size-[35.19px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.19 35.19">
        <g clipPath="url(#clip0_1_769)" id="Frame">
          <path d={svgPaths.p1e2cd080} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_769">
            <rect fill="white" height="35.19" width="35.19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivIc() {
  return (
    <div className="absolute bg-[#1a1a1a] left-0 rounded-[33.6px] size-[67.19px] top-0" data-name="div._ic">
      <Frame4 />
    </div>
  );
}

function DivIcMargin() {
  return (
    <div className="absolute h-[83.19px] left-[466.4px] top-0 w-[67.19px]" data-name="div._ic:margin">
      <DivIc />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[32px] left-0 top-[-1px] w-[213.25px]" data-name="h3">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_Arabic:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[106.63px] not-italic text-[20.8px] text-center text-white top-[16px] whitespace-nowrap">
        <p className="leading-[31.2px]" dir="auto">
          هوش مصنوعی فارسی
        </p>
      </div>
    </div>
  );
}

function H3Margin() {
  return (
    <div className="absolute h-[41.59px] left-[393.38px] top-[83.19px] w-[213.25px]" data-name="h3:margin">
      <H />
    </div>
  );
}

function P() {
  return (
    <div className="absolute h-[24px] left-[359.58px] top-[124.78px] w-[280.84px]" data-name="p">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] left-[140.42px] not-italic text-[#ccc] text-[16px] text-center top-[12px] whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          یوزیکا؛ ابزارهای تولید محتوا، همه یک‌جا
        </p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute h-[148.78px] left-0 top-0 w-[1000px]" data-name="div">
      <DivIcMargin />
      <H3Margin />
      <P />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3cb14e80} id="Vector" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LabelChatAttach() {
  return (
    <div className="absolute left-[24px] rounded-[15px] size-[30px] top-[16px]" data-name="label.chat-attach">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p32002100} id="Vector" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 15.8333V4.16667" id="Vector_2" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonChatButton() {
  return (
    <div className="absolute bg-white left-[62px] opacity-50 rounded-[15px] size-[30px] top-[16px]" data-name="button.chat-button">
      <Frame6 />
    </div>
  );
}

function SpanLabel() {
  return (
    <div className="absolute h-[24px] left-[776.61px] overflow-clip top-[16px] w-[162.59px]" data-name="span._label">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] left-[162.59px] not-italic text-[16px] text-[rgba(255,255,255,0.48)] text-right top-[12px] whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          هرچی میخوای بپرس ...
        </p>
      </div>
    </div>
  );
}

function DivChatTextBoxRow() {
  return (
    <div className="absolute h-[62px] left-0 overflow-clip top-0 w-[1000px]" data-name="div.chat-text-box-row">
      <LabelChatAttach />
      <ButtonChatButton />
      <div className="absolute h-[24px] left-[100px] rounded-[16px] top-[19px] w-[876px]" data-name="div.chat-text-input" />
      <SpanLabel />
    </div>
  );
}

function DivContent() {
  return (
    <div className="absolute bg-[#393939] h-[62px] left-0 overflow-clip rounded-[16px] top-0 w-[1000px]" data-name="div.content">
      <DivChatTextBoxRow />
    </div>
  );
}

function DivChatTextBox() {
  return (
    <div className="absolute h-[68.39px] left-0 top-[180.78px] w-[1000px]" data-name="div.chat-text-box">
      <div className="absolute bg-[#1e1e1e] h-[70px] left-0 top-[16px] w-[1000px]" data-name="::before" />
      <DivContent />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border border-[#393939] border-solid h-[38.4px] left-[170.15px] rounded-[14.4px] top-0 w-[63.8px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[30.9px] not-italic text-[14.4px] text-center text-white top-[18.2px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          بیشتر
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute border border-[#393939] border-solid h-[38.4px] left-[248.35px] rounded-[14.4px] top-0 w-[100.22px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[49.11px] not-italic text-[14.4px] text-center text-white top-[18.2px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          کد بنویس
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute border border-[#393939] border-solid h-[38.4px] left-[362.97px] rounded-[14.4px] top-0 w-[118.8px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[58.4px] not-italic text-[14.4px] text-center text-white top-[18.2px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          تحلیل بازار مالی
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute border border-[#393939] border-solid h-[38.4px] left-[496.17px] rounded-[14.4px] top-0 w-[155.31px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[76.65px] not-italic text-[14.4px] text-center text-white top-[18.2px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          یک ایده بیزنس بده
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute border border-[#393939] border-solid h-[38.4px] left-[665.88px] rounded-[14.4px] top-0 w-[163.97px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[80.99px] not-italic text-[14.4px] text-center text-white top-[18.2px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          من رو شگفت زده کن
        </p>
      </div>
    </div>
  );
}

function DivQs() {
  return (
    <div className="absolute h-[38.4px] left-0 top-[281.17px] w-[1000px]" data-name="div._qs">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function DivScrollAreaContent() {
  return (
    <div className="absolute h-[319.57px] left-0 overflow-x-clip overflow-y-auto top-0 w-[1000px]" data-name="div.scroll-area__content">
      <Div4 />
      <DivChatTextBox />
      <DivQs />
    </div>
  );
}

function DivScrollArea() {
  return (
    <div className="absolute h-[319.57px] left-0 overflow-clip top-[171.7px] w-[1000px]" data-name="div.scroll-area">
      <DivScrollAreaContent />
    </div>
  );
}

function DivChatPage() {
  return (
    <div className="absolute h-[743px] left-0 overflow-auto top-[16px] w-[1000px]" data-name="div.chat-page">
      <DivScrollArea />
    </div>
  );
}

function MainMain() {
  return (
    <div className="absolute h-[759px] left-[327px] top-[76px] w-[1000px]" data-name="main.main">
      <DivChatPage />
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[835px] relative shrink-0 w-[1920px]" data-name="div">
      <div className="absolute bottom-0 h-[823.81px] left-[327px] pointer-events-none top-[11.19px]">
        <HeaderHeader />
      </div>
      <MainMain />
    </div>
  );
}

function DivRoot() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start relative shrink-0" data-name="div.root">
      <Div1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute left-[89px] size-[40px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p130d4d00} id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="1.6 8" strokeLinecap="round" strokeWidth="4" />
          <path d={svgPaths.p130d4d00} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function DivSpinnerContent() {
  return (
    <div className="h-[77.6px] relative shrink-0 w-[218px]" data-name="div.spinner-content">
      <Frame7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] left-[109px] not-italic text-[#ccc] text-[14.4px] text-center top-[66px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          لطفا صبر کنید ...
        </p>
      </div>
    </div>
  );
}

function DivDialogContent() {
  return (
    <div className="bg-[#393939] max-w-[250px] min-h-[50px] min-w-[100px] relative rounded-[16px] shrink-0 w-full" data-name="div.dialog-content">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
        <DivSpinnerContent />
      </div>
    </div>
  );
}

function DivDialogRoot() {
  return (
    <div className="absolute bg-[rgba(31,31,31,0.94)] content-stretch flex flex-col items-start left-0 opacity-0 px-[835px] py-[343px] top-0 w-[1920px]" data-name="div.dialog-root">
      <DivDialogContent />
    </div>
  );
}

function YoozicaLogo() {
  return (
    <div className="absolute h-[42.39px] left-[20px] top-0 w-[177.95px]" data-name="Yoozica Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[122.5%] left-[-11.25%] max-w-none top-[-11.25%] w-[122.51%]" src={imgYoozicaLogo} />
      </div>
    </div>
  );
}

function DivPx() {
  return (
    <div className="h-[42.39px] relative shrink-0 w-[218px]" data-name="div.px-5">
      <YoozicaLogo />
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.19px] w-[133.84px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.84px] not-italic text-[#c28f05] text-[14.4px] text-right top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          گفتگوی جدید
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12dcd500} id="Vector" stroke="var(--stroke-0, #C28F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 9.16667H10.0083" id="Vector_2" stroke="var(--stroke-0, #C28F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 9.16667H13.3417" id="Vector_3" stroke="var(--stroke-0, #C28F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 9.16667H6.675" id="Vector_4" stroke="var(--stroke-0, #C28F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem() {
  return (
    <div className="absolute bg-[rgba(236,175,7,0.1)] border border-[#393939] border-solid h-[37.98px] left-0 rounded-[14.4px] top-0 w-[218px]" data-name="div.nav-item">
      <Span1 />
      <Frame8 />
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.19px] w-[133.85px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.85px] not-italic text-[#ffc425] text-[14.4px] text-right top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          چت
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M10 6.66667V3.33333H6.66667" id="Vector" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34a15680} id="Vector_2" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 11.6667H3.33333" id="Vector_3" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 11.6667H18.3333" id="Vector_4" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 10.8333V12.5" id="Vector_5" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 10.8333V12.5" id="Vector_6" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem1() {
  return (
    <div className="absolute bg-[#393939] border border-[#ffc425] border-solid h-[37.98px] left-0 rounded-[14.4px] top-[45.18px] w-[218px]" data-name="div.nav-item">
      <Span2 />
      <Frame9 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.19px] w-[133.85px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.85px] not-italic text-[14.4px] text-right text-white top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          تصویر
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38772900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p27fa8ca0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem2() {
  return (
    <div className="absolute bg-[#393939] border border-[#393939] border-solid h-[37.98px] left-0 rounded-[14.4px] top-[90.36px] w-[218px]" data-name="div.nav-item">
      <Span3 />
      <Frame10 />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.18px] w-[133.85px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.85px] not-italic text-[14.4px] text-right text-white top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          صدا
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.49px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12197200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34c9bb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p36d3e880} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem3() {
  return (
    <div className="absolute bg-[#393939] border border-[#393939] border-solid h-[37.98px] left-0 rounded-[14.4px] top-[135.54px] w-[218px]" data-name="div.nav-item">
      <Span4 />
      <Frame11 />
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.19px] w-[133.84px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.84px] not-italic text-[14.4px] text-right text-white top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          ویدیو
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p24bc3d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e238c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem4() {
  return (
    <div className="absolute bg-[#393939] border border-[#393939] border-solid h-[37.98px] left-0 rounded-[14.4px] top-[180.72px] w-[218px]" data-name="div.nav-item">
      <Span5 />
      <Frame12 />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.19px] w-[133.84px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.84px] not-italic text-[14.4px] text-right text-white top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          مشاورها
        </p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_753)" id="Frame">
          <path d="M10 15V4.16667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28aa85e0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2f3a5fc0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28f84600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p281563c0} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32939900} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p140e6400} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3d1c9800} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_753">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivNavItem5() {
  return (
    <div className="absolute bg-[#393939] border border-[#393939] border-solid h-[37.98px] left-0 rounded-[14.4px] top-[225.9px] w-[218px]" data-name="div.nav-item">
      <Span6 />
      <Frame13 />
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute h-[22.61px] left-[36.58px] top-[6.19px] w-[133.85px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[133.85px] not-italic text-[#c28f05] text-[14.4px] text-right top-[11px] whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          تاریخچه
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute left-[181.61px] size-[20px] top-[7.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M10 5.83333V17.5" id="Vector" stroke="var(--stroke-0, #C28F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25713000} id="Vector_2" stroke="var(--stroke-0, #C28F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem6() {
  return (
    <div className="absolute bg-[rgba(236,175,7,0.1)] border border-[#393939] border-solid h-[37.98px] left-0 rounded-[14.4px] top-[271.08px] w-[218px]" data-name="div.nav-item">
      <Span7 />
      <Frame14 />
    </div>
  );
}

function DivScrollAreaContent1() {
  return (
    <div className="absolute h-[579px] left-0 top-0 w-[218px]" data-name="div.scroll-area__content">
      <DivNavItem />
      <DivNavItem1 />
      <DivNavItem2 />
      <DivNavItem3 />
      <DivNavItem4 />
      <DivNavItem5 />
      <DivNavItem6 />
    </div>
  );
}

function DivScrollArea1() {
  return (
    <div className="h-[579px] overflow-auto relative shrink-0 w-[218px]" data-name="div.scroll-area">
      <DivScrollAreaContent1 />
    </div>
  );
}

function DivNavHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="div.nav-header">
      <DivPx />
      <DivScrollArea1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute left-[172.4px] size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M13.3333 1.66667V3.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p216c3a70} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 1.66667V3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p20d10600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute h-[20px] left-0 top-[-0.6px] w-[162.02px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[162.02px] not-italic text-[12.8px] text-right text-white top-[10px] whitespace-nowrap">
        <p className="leading-[19.2px]" dir="auto">
          امیر یوسفی
        </p>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[66px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[66px] not-italic text-[12.8px] text-right text-white top-[10px] whitespace-nowrap">
        <p className="leading-[19.2px]" dir="auto">
          اشتراک1ماهه
        </p>
      </div>
    </div>
  );
}

function Span10() {
  return (
    <div className="absolute h-[20px] left-[80px] top-0 w-[24px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[24px] not-italic text-[12.8px] text-right text-white top-[10px] whitespace-nowrap">
        <p className="leading-[19.2px]">906</p>
      </div>
    </div>
  );
}

function Yooz1() {
  return (
    <div className="absolute left-[108px] size-[14px] top-[3px]" data-name="yooz">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYooz} />
      </div>
    </div>
  );
}

function DivFlex() {
  return (
    <div className="absolute h-[20px] left-[58.28px] top-[25.39px] w-[134.12px]" data-name="div.flex">
      <Span9 />
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[76px] not-italic text-[12.8px] text-right text-white top-[10px] whitespace-nowrap">
        <p className="leading-[19.2px]">-</p>
      </div>
      <Span10 />
      <Yooz1 />
    </div>
  );
}

function DivNavFooterItem() {
  return (
    <div className="absolute h-[45.58px] left-0 top-[13.8px] w-[192.41px]" data-name="div.nav-footer-item">
      <Frame15 />
      <Span8 />
      <DivFlex />
    </div>
  );
}

function Span11() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[162.03px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[162.03px] not-italic text-[12.8px] text-right text-white top-[10px] whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[19.2px]" dir="auto">
          پشتیبانی تلگرام
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute left-[172.41px] size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3184cb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function A() {
  return (
    <a className="absolute block cursor-pointer h-[20px] left-0 top-[69.02px] w-[192.41px]" data-name="a" href="https://t.me/zomorodian_support">
      <Span11 />
      <Frame16 />
    </a>
  );
}

function Span12() {
  return (
    <div className="absolute h-[20px] left-[6.4px] top-[5.8px] w-[149.22px]" data-name="span">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] left-[149.22px] not-italic text-[12.8px] text-right text-white top-[10px] whitespace-nowrap">
        <p className="leading-[19.2px]" dir="auto">
          بستن
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute left-[166.01px] size-[20px] top-[5.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M3.33333 4.16667H16.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 10H16.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 15.8333H16.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavToggle() {
  return (
    <div className="absolute h-[32.18px] left-0 rounded-[6.4px] top-[99.84px] w-[192.41px]" data-name="div.nav-toggle">
      <Span12 />
      <Frame17 />
    </div>
  );
}

function DivNavFooter() {
  return (
    <div className="h-[145.42px] relative shrink-0 w-[192.4px]" data-name="div.nav-footer">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <DivNavFooterItem />
      <A />
      <DivNavToggle />
    </div>
  );
}

function DivNavFooterMargin() {
  return (
    <div className="content-stretch flex flex-col items-start px-[13px] relative shrink-0" data-name="div.nav-footer:margin">
      <DivNavFooter />
    </div>
  );
}

function DivNavContent() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex flex-col items-start left-[1654px] px-[16px] rounded-[16px] top-[30px]" data-name="div.nav-content">
      <DivNavHeader />
      <DivNavFooterMargin />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#1e1e1e] content-stretch flex flex-col gap-[10px] items-start left-0 top-0 w-[1920px]" data-name="body">
      <DivSidePanelFloatingBtn />
      <DivRedeviationBsIndicator />
      <Snipp6Svg />
      <DivRoot />
      <DivDialogRoot />
      <DivNavContent />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="صفحه جت">
      <Body />
    </div>
  );
}