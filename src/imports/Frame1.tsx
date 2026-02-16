import svgPaths from "./svg-kb3x3lddvq";
import imgProfilePicture from "@/assets/figma/4ab704874c5ef824f438cad5dfa4ef39d2de2130.png";
import imgYooz from "@/assets/figma/9a3274eaaef8651fbba0fd0832dabecde12b3eac.png";
import imgYoozicaLogo from "@/assets/figma/7401bffd5a5a56d045ed2c3d692c49433d1a487b.png";
import { imgSpan } from "./svg-s4f7q";

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
    <div className="absolute bg-white content-stretch flex flex-col h-[34px] items-start right-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[100px]" data-name="div#sidePanelFloatingBtn">
      <Frame />
    </div>
  );
}

function SpanMaskGroup() {
  return (
    <div className="absolute h-[859px] left-0 top-0 w-[24px]" data-name="span:mask-group">
      <div className="absolute bg-white h-[859px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_859px] top-0 w-[24px]" data-name="span" style={{ maskImage: `url('${imgSpan}')` }} />
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-[859px] opacity-0 relative shrink-0 w-[24px]" data-name="div">
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
  return <div className="absolute opacity-75 right-[2px] rounded-bl-[40px] rounded-tl-[40px] shadow-[-2.5px_4px_12px_1px_rgba(0,0,0,0.2)] size-[34px] top-[759px]" data-name="snipp6.svg" />;
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
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
    <div className="content-stretch flex flex-col gap-[15px] items-center pb-[0.6px] relative shrink-0 w-full" data-name="div.spinner-content">
      <Frame2 />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[14.4px] text-center whitespace-nowrap">
        <p className="leading-[21.6px]" dir="auto">
          لطفا صبر کنید ...
        </p>
      </div>
    </div>
  );
}

function DivDialogContent() {
  return (
    <div className="bg-[#393939] content-stretch flex flex-col h-[109.61px] items-start max-w-[250px] min-h-[50px] min-w-[100px] p-[16px] relative rounded-[16px] shrink-0 w-[250px]" data-name="div.dialog-content">
      <DivSpinnerContent />
    </div>
  );
}

function DivDialogRoot() {
  return (
    <div className="absolute bg-[rgba(31,31,31,0.94)] content-stretch flex flex-col items-start left-0 opacity-0 px-[828px] py-[343px] top-0" data-name="div.dialog-root">
      <DivDialogContent />
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="aspect-[30/22.5] flex-[1_0_0] min-h-px min-w-px relative" data-name="profile picture">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePicture} />
      </div>
    </div>
  );
}

function DivAvatar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[15px] shrink-0 size-[30px]" data-name="div._avatar">
      <ProfilePicture />
    </div>
  );
}

function SpanName() {
  return (
    <div className="h-[21.61px] overflow-clip relative shrink-0 w-[73.92px]" data-name="span._name">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-0 not-italic text-[14.4px] text-white top-[10px] w-[74.12px]">
        <p className="leading-[21.6px] whitespace-pre-wrap" dir="auto">
          امیر یوسفی
        </p>
      </div>
    </div>
  );
}

function Yooz() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="yooz">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYooz} />
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[18px]">906</p>
      </div>
    </div>
  );
}

function DivBalance() {
  return (
    <div className="content-stretch flex gap-[3.59px] items-center justify-center opacity-90 relative shrink-0" data-name="div._balance">
      <Yooz />
      <Span />
    </div>
  );
}

function DivUserInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative shrink-0" data-name="div._user-info">
      <SpanName />
      <DivBalance />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
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
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="div.user-menu">
      <DivAvatar />
      <DivUserInfo />
      <Frame3 />
    </div>
  );
}

function DivPopoverTrigger() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.popover-trigger">
      <DivUserMenu />
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="div">
      <DivPopoverTrigger />
    </div>
  );
}

function HeaderHeader() {
  return (
    <div className="content-stretch flex h-[60px] items-center max-w-[1000px] shrink-0 sticky top-0 w-[1000px]" data-name="header.header">
      <Div2 />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[24px] overflow-clip right-[9px] top-[4px]" data-name="div#placeholder">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-right whitespace-nowrap">
        <p className="leading-[normal]" dir="auto">
          جستجو بین مشاورها…...
        </p>
      </div>
    </div>
  );
}

function DivSearchClearMargin() {
  return <div className="h-[11px] shrink-0 w-[15px] z-[2]" data-name="div#search-clear:margin" />;
}

function DivEditingViewPort() {
  return <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px z-[1]" data-name="div#editing-view-port" />;
}

function DivTextFieldContainer() {
  return (
    <div className="absolute content-stretch flex isolate items-center left-[9px] right-[9px] top-[9px]" data-name="div#text-field-container">
      <DivSearchClearMargin />
      <DivEditingViewPort />
    </div>
  );
}

function InputWFull() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[42px] relative rounded-[12px] shrink-0 w-[881px]" data-name="input.w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivPlaceholder />
        <DivTextFieldContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function DivMb() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0" data-name="div.mb-1">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          یوتیوب
        </p>
      </div>
    </div>
  );
}

function DivSwiperSlide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.swiper-slide">
      <DivMb />
    </div>
  );
}

function DivSwiperSlideMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 z-[6]" data-name="div.swiper-slide:margin">
      <DivSwiperSlide />
    </div>
  );
}

function DivMb1() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[125.30000305175781px] p-[16px] relative shrink-0" data-name="div.mb-1">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          شبکه اجتماعی
        </p>
      </div>
    </div>
  );
}

function DivSwiperSlide1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.swiper-slide">
      <DivMb1 />
    </div>
  );
}

function DivSwiperSlideMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 z-[5]" data-name="div.swiper-slide:margin">
      <DivSwiperSlide1 />
    </div>
  );
}

function DivMb2() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0" data-name="div.mb-1">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          فریلنسری
        </p>
      </div>
    </div>
  );
}

function DivSwiperSlide2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.swiper-slide">
      <DivMb2 />
    </div>
  );
}

function DivSwiperSlideMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 z-[4]" data-name="div.swiper-slide:margin">
      <DivSwiperSlide2 />
    </div>
  );
}

function DivMb3() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0" data-name="div.mb-1">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          عمومی
        </p>
      </div>
    </div>
  );
}

function DivSwiperSlide3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.swiper-slide">
      <DivMb3 />
    </div>
  );
}

function DivSwiperSlideMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 z-[3]" data-name="div.swiper-slide:margin">
      <DivSwiperSlide3 />
    </div>
  );
}

function DivMb4() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0" data-name="div.mb-1">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          کسب و کار
        </p>
      </div>
    </div>
  );
}

function DivSwiperSlide4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.swiper-slide">
      <DivMb4 />
    </div>
  );
}

function DivSwiperSlideMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 z-[2]" data-name="div.swiper-slide:margin">
      <DivSwiperSlide4 />
    </div>
  );
}

function DivMb5() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0" data-name="div.mb-1">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
        <p className="leading-[20px]" dir="auto">
          همه
        </p>
      </div>
    </div>
  );
}

function DivSwiperSlide5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.swiper-slide">
      <DivMb5 />
    </div>
  );
}

function DivSwiperSlideMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 z-[1]" data-name="div.swiper-slide:margin">
      <DivSwiperSlide5 />
    </div>
  );
}

function DivSwiperWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.swiper-wrapper">
      <div className="content-stretch flex isolate items-start pl-[249.2px] relative w-full">
        <DivSwiperSlideMargin />
        <DivSwiperSlideMargin1 />
        <DivSwiperSlideMargin2 />
        <DivSwiperSlideMargin3 />
        <DivSwiperSlideMargin4 />
        <DivSwiperSlideMargin5 />
      </div>
    </div>
  );
}

function DivSwiper() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="div.swiper">
      <DivSwiperWrapper />
    </div>
  );
}

function DivMt() {
  return (
    <div className="relative shrink-0 w-[881px]" data-name="div.mt-4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pt-[16px] relative w-full">
        <DivSwiper />
      </div>
    </div>
  );
}

function DivBorder() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[915px]" data-name="div.border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto p-[17px] relative w-full">
        <InputWFull />
        <DivMt />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function H1Text2Xl() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h1.text-2xl">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-right whitespace-nowrap">
        <p className="leading-[32px]" dir="auto">
          مشاوره‌های تخصصی
        </p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          با توجه به نیاز خود از بین دسته‌بندی‌ها، مشاور مناسب را انتخاب کنید.
        </p>
      </div>
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="relative shrink-0 w-[610px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[36px] px-[24px] relative w-full">
        <H1Text2Xl />
        <P />
      </div>
    </div>
  );
}

function DivFlex() {
  return (
    <div className="bg-[#ffc425] relative rounded-[24px] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row justify-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center p-[17px] relative w-full">
          <DivBorder />
          <DivFlex1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#575756] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function H1TextWhite() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h1.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-right text-white whitespace-nowrap">
        <p className="leading-[32px]" dir="auto">
          کسب و کار
        </p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور اس ام اس مارکتینگ">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          مشاور اس ام اس
        </p>
        <p dir="auto">مارکتینگ</p>
      </div>
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite />
      </div>
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component />
        <DivFlex3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/27">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex2 />
    </a>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="4 / 4">
      <ABlock />
    </div>
  );
}

function Component44Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[4]" data-name="4 / 4:margin">
      <Component38 />
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="طراحی محصول">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          طراحی محصول
        </p>
      </div>
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite1 />
      </div>
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component1 />
        <DivFlex5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock1() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/14">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex4 />
    </a>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="3 / 4">
      <ABlock1 />
    </div>
  );
}

function Component34Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[3]" data-name="3 / 4:margin">
      <Component34 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور انتخاب نام برند">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور انتخاب نام برند
        </p>
      </div>
    </div>
  );
}

function DivFlex7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite2 />
      </div>
    </div>
  );
}

function DivFlex6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component2 />
        <DivFlex7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock2() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/9">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex6 />
    </a>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="2 / 4">
      <ABlock2 />
    </div>
  );
}

function Component24Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[2]" data-name="2 / 4:margin">
      <Component24 />
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="طراحی سیستم فروش">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite3() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          طراحی سیستم فروش
        </p>
      </div>
    </div>
  );
}

function DivFlex9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite3 />
      </div>
    </div>
  );
}

function DivFlex8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component3 />
        <DivFlex9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock3() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/4">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex8 />
    </a>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="1 / 4">
      <ABlock3 />
    </div>
  );
}

function Component14Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[1]" data-name="1 / 4:margin">
      <Component14 />
    </div>
  );
}

function DivSwiperWrapper19195B1106Ab50C() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#swiper-wrapper-19195b1106ab50c99">
      <div className="content-stretch flex isolate items-start pl-[711px] relative w-full">
        <Component44Margin />
        <Component34Margin />
        <Component24Margin />
        <Component14Margin />
      </div>
    </div>
  );
}

function DivSwiper1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="div.swiper">
      <DivSwiperWrapper19195B1106Ab50C />
    </div>
  );
}

function ButtonAbsolute() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center left-0 p-[8px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">◀</p>
      </div>
    </div>
  );
}

function ButtonAbsolute1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center p-[8px] right-[-1.22px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">▶</p>
      </div>
    </div>
  );
}

function DivRelative() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="div.relative">
      <DivSwiper1 />
      <ButtonAbsolute />
      <ButtonAbsolute1 />
    </div>
  );
}

function DivMb6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-8">
      <H1TextWhite />
      <DivRelative />
    </div>
  );
}

function H1TextWhite1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h1.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-right text-white whitespace-nowrap">
        <p className="leading-[32px]" dir="auto">
          عمومی
        </p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور طوفان فکری">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite4() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور طوفان فکری
        </p>
      </div>
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite4 />
      </div>
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component4 />
        <DivFlex11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock4() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/25">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex10 />
    </a>
  );
}

function Component47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="8 / 8">
      <ABlock4 />
    </div>
  );
}

function Component88Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[8]" data-name="8 / 8:margin">
      <Component47 />
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور مسیر درآمدزایی">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite5() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور مسیر درآمدزایی
        </p>
      </div>
    </div>
  );
}

function DivFlex13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite5 />
      </div>
    </div>
  );
}

function DivFlex12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component5 />
        <DivFlex13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock5() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/24">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex12 />
    </a>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="7 / 8">
      <ABlock5 />
    </div>
  );
}

function Component78Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[7]" data-name="7 / 8:margin">
      <Component46 />
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور زبان انگلیسی">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite6() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور زبان انگلیسی
        </p>
      </div>
    </div>
  );
}

function DivFlex15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite6 />
      </div>
    </div>
  );
}

function DivFlex14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component6 />
        <DivFlex15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock6() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/20">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex14 />
    </a>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="6 / 8">
      <ABlock6 />
    </div>
  );
}

function Component68Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[6]" data-name="6 / 8:margin">
      <Component44 />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور بدنسازی">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite7() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور بدنسازی
        </p>
      </div>
    </div>
  );
}

function DivFlex17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite7 />
      </div>
    </div>
  );
}

function DivFlex16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component7 />
        <DivFlex17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock7() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/17">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex16 />
    </a>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="5 / 8">
      <ABlock7 />
    </div>
  );
}

function Component58Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[5]" data-name="5 / 8:margin">
      <Component42 />
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور اکسل">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite8() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور اکسل
        </p>
      </div>
    </div>
  );
}

function DivFlex19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite8 />
      </div>
    </div>
  );
}

function DivFlex18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component8 />
        <DivFlex19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock8() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/16">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex18 />
    </a>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="4 / 8">
      <ABlock8 />
    </div>
  );
}

function Component48Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[4]" data-name="4 / 8:margin">
      <Component40 />
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاوره مذاکره میلیاردی">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite9() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          مشاوره مذاکره
        </p>
        <p dir="auto">میلیاردی</p>
      </div>
    </div>
  );
}

function DivFlex21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite9 />
      </div>
    </div>
  );
}

function DivFlex20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component9 />
        <DivFlex21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock9() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/15">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex20 />
    </a>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="3 / 8">
      <ABlock9 />
    </div>
  );
}

function Component38Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[3]" data-name="3 / 8:margin">
      <Component37 />
    </div>
  );
}

function Component10() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور پرامپت نویسی">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite10() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور پرامپت نویسی
        </p>
      </div>
    </div>
  );
}

function DivFlex23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite10 />
      </div>
    </div>
  );
}

function DivFlex22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component10 />
        <DivFlex23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock10() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/6">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex22 />
    </a>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="2 / 8">
      <ABlock10 />
    </div>
  );
}

function Component28Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[2]" data-name="2 / 8:margin">
      <Component28 />
    </div>
  );
}

function Component11() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مربی یادگیری">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite11() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مربی یادگیری
        </p>
      </div>
    </div>
  );
}

function DivFlex25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite11 />
      </div>
    </div>
  );
}

function DivFlex24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component11 />
        <DivFlex25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock11() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/5">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex24 />
    </a>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="1 / 8">
      <ABlock11 />
    </div>
  );
}

function Component18Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[1]" data-name="1 / 8:margin">
      <Component18 />
    </div>
  );
}

function DivSwiperWrapper9C3610A66106E7Fbc() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_0_-153px] isolate items-start" data-name="div#swiper-wrapper-9c3610a66106e7fbc6">
      <Component88Margin />
      <Component78Margin />
      <Component68Margin />
      <Component58Margin />
      <Component48Margin />
      <Component38Margin />
      <Component28Margin />
      <Component18Margin />
    </div>
  );
}

function DivSwiperPagination() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex gap-[8px] items-start left-0 pb-[7px] pt-[9px] px-[759.5px] right-0" data-name="div.swiper-pagination">
      <div className="bg-black opacity-20 rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 4" />
      <div className="bg-black opacity-20 rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 3" />
      <div className="bg-black opacity-20 rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 2" />
      <div className="bg-[#007aff] rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 1" />
    </div>
  );
}

function DivSwiper2() {
  return (
    <div className="h-[380px] overflow-clip relative shrink-0 w-full" data-name="div.swiper">
      <DivSwiperWrapper9C3610A66106E7Fbc />
      <DivSwiperPagination />
    </div>
  );
}

function ButtonAbsolute2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center left-0 p-[8px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">◀</p>
      </div>
    </div>
  );
}

function ButtonAbsolute3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center p-[8px] right-[-1.22px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">▶</p>
      </div>
    </div>
  );
}

function DivRelative1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="div.relative">
      <DivSwiper2 />
      <ButtonAbsolute2 />
      <ButtonAbsolute3 />
    </div>
  );
}

function DivMb7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-8">
      <H1TextWhite1 />
      <DivRelative1 />
    </div>
  );
}

function H1TextWhite2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h1.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-right text-white whitespace-nowrap">
        <p className="leading-[32px]" dir="auto">
          فریلنسری
        </p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور ادیت">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite12() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور ادیت
        </p>
      </div>
    </div>
  );
}

function DivFlex27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite12 />
      </div>
    </div>
  );
}

function DivFlex26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component12 />
        <DivFlex27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock12() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/10">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex26 />
    </a>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="2 / 2">
      <ABlock12 />
    </div>
  );
}

function Component22Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[2]" data-name="2 / 2:margin">
      <Component22 />
    </div>
  );
}

function Component15() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور تحلیل رزومه">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite13() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور تحلیل رزومه
        </p>
      </div>
    </div>
  );
}

function DivFlex29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite13 />
      </div>
    </div>
  );
}

function DivFlex28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component15 />
        <DivFlex29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock13() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/7">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex28 />
    </a>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="1 / 2">
      <ABlock13 />
    </div>
  );
}

function Component12Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[1]" data-name="1 / 2:margin">
      <Component13 />
    </div>
  );
}

function DivSwiperWrapperFcf0Cc2463Ee() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#swiper-wrapper-fcf0cc2463ee6086">
      <div className="content-stretch flex isolate items-start pl-[1143px] relative w-full">
        <Component22Margin />
        <Component12Margin />
      </div>
    </div>
  );
}

function DivSwiper3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="div.swiper">
      <DivSwiperWrapperFcf0Cc2463Ee />
    </div>
  );
}

function ButtonAbsolute4() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col items-center justify-center left-0 p-[8px] rounded-[33554400px] top-1/2" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">◀</p>
      </div>
    </div>
  );
}

function ButtonAbsolute5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center p-[8px] right-[-1.22px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">▶</p>
      </div>
    </div>
  );
}

function DivRelative2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="div.relative">
      <DivSwiper3 />
      <ButtonAbsolute4 />
      <ButtonAbsolute5 />
    </div>
  );
}

function DivMb8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-8">
      <H1TextWhite2 />
      <DivRelative2 />
    </div>
  );
}

function H1TextWhite3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h1.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-right text-white whitespace-nowrap">
        <p className="leading-[32px]" dir="auto">
          شبکه اجتماعی
        </p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور تقویم محتوای اینستاگرام">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite14() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          مشاور تقویم محتوای
        </p>
        <p dir="auto">اینستاگرام</p>
      </div>
    </div>
  );
}

function DivFlex31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite14 />
      </div>
    </div>
  );
}

function DivFlex30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component16 />
        <DivFlex31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock14() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/26">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex30 />
    </a>
  );
}

function Component45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="7 / 7">
      <ABlock14 />
    </div>
  );
}

function Component77Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[7]" data-name="7 / 7:margin">
      <Component45 />
    </div>
  );
}

function Component17() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاوره تقویم محتوا استوری">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite15() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          مشاوره تقویم محتوا
        </p>
        <p dir="auto">استوری</p>
      </div>
    </div>
  );
}

function DivFlex33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite15 />
      </div>
    </div>
  );
}

function DivFlex32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component17 />
        <DivFlex33 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock15() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/23">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex32 />
    </a>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="6 / 7">
      <ABlock15 />
    </div>
  );
}

function Component67Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[6]" data-name="6 / 7:margin">
      <Component43 />
    </div>
  );
}

function Component19() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور قلاب وایرال">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite16() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور قلاب وایرال
        </p>
      </div>
    </div>
  );
}

function DivFlex35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite16 />
      </div>
    </div>
  );
}

function DivFlex34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component19 />
        <DivFlex35 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock16() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/22">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex34 />
    </a>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="5 / 7">
      <ABlock16 />
    </div>
  );
}

function Component57Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[5]" data-name="5 / 7:margin">
      <Component41 />
    </div>
  );
}

function Component20() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="تبلیغ نویس ابتا و تلگرام">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite17() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          تبلیغ نویس ابتا و
        </p>
        <p dir="auto">تلگرام</p>
      </div>
    </div>
  );
}

function DivFlex37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite17 />
      </div>
    </div>
  );
}

function DivFlex36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component20 />
        <DivFlex37 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock17() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/13">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex36 />
    </a>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="4 / 7">
      <ABlock17 />
    </div>
  );
}

function Component47Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[4]" data-name="4 / 7:margin">
      <Component39 />
    </div>
  );
}

function Component21() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="کپشن نویس اینستاگرام">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite18() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          کپشن نویس
        </p>
        <p dir="auto">اینستاگرام</p>
      </div>
    </div>
  );
}

function DivFlex39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite18 />
      </div>
    </div>
  );
}

function DivFlex38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component21 />
        <DivFlex39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock18() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/12">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex38 />
    </a>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="3 / 7">
      <ABlock18 />
    </div>
  );
}

function Component37Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[3]" data-name="3 / 7:margin">
      <Component36 />
    </div>
  );
}

function Component23() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="ایده‌پردازی محتوای متنی ایتا و تلگرام">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite19() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          ایده‌پردازی محتوای
        </p>
        <p dir="auto">متنی ایتا و تلگرام</p>
      </div>
    </div>
  );
}

function DivFlex41() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite19 />
      </div>
    </div>
  );
}

function DivFlex40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component23 />
        <DivFlex41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock19() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/11">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex40 />
    </a>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="2 / 7">
      <ABlock19 />
    </div>
  );
}

function Component27Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[2]" data-name="2 / 7:margin">
      <Component27 />
    </div>
  );
}

function Component26() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور محتوا نویس ایتا و تلگرام">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite20() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          مشاور محتوا نویس ایتا
        </p>
        <p dir="auto">و تلگرام</p>
      </div>
    </div>
  );
}

function DivFlex43() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite20 />
      </div>
    </div>
  );
}

function DivFlex42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component26 />
        <DivFlex43 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock20() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/8">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex42 />
    </a>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="1 / 7">
      <ABlock20 />
    </div>
  );
}

function Component17Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[1]" data-name="1 / 7:margin">
      <Component25 />
    </div>
  );
}

function DivSwiperWrapperEcd28217303F417E() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#swiper-wrapper-ecd28217303f417e">
      <div className="content-stretch flex isolate items-start pl-[63px] relative w-full">
        <Component77Margin />
        <Component67Margin />
        <Component57Margin />
        <Component47Margin />
        <Component37Margin />
        <Component27Margin />
        <Component17Margin />
      </div>
    </div>
  );
}

function DivSwiperPagination1() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex gap-[8px] items-start left-0 pb-[7px] pt-[9px] px-[767.5px] right-0" data-name="div.swiper-pagination">
      <div className="bg-black opacity-20 rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 3" />
      <div className="bg-black opacity-20 rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 2" />
      <div className="bg-[#007aff] rounded-[4px] shrink-0 size-[8px]" data-name="Go to slide 1" />
    </div>
  );
}

function DivSwiper4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="div.swiper">
      <DivSwiperWrapperEcd28217303F417E />
      <DivSwiperPagination1 />
    </div>
  );
}

function ButtonAbsolute6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center left-0 p-[8px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">◀</p>
      </div>
    </div>
  );
}

function ButtonAbsolute7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col items-center justify-center p-[8px] right-[-1.22px] rounded-[33554400px] top-1/2" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">▶</p>
      </div>
    </div>
  );
}

function DivRelative3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="div.relative">
      <DivSwiper4 />
      <ButtonAbsolute6 />
      <ButtonAbsolute7 />
    </div>
  );
}

function DivMb9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-8">
      <H1TextWhite3 />
      <DivRelative3 />
    </div>
  );
}

function H1TextWhite4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h1.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-right text-white whitespace-nowrap">
        <p className="leading-[32px]" dir="auto">
          یوتیوب
        </p>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور ایده محتوا یوتیوب">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite21() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="cursor-pointer flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="mb-0" dir="auto">
          مشاور ایده محتوا
        </p>
        <p dir="auto">یوتیوب</p>
      </div>
    </div>
  );
}

function DivFlex45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite21 />
      </div>
    </div>
  );
}

function DivFlex44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component29 />
        <DivFlex45 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock21() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/21">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex44 />
    </a>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="3 / 3">
      <ABlock21 />
    </div>
  );
}

function Component33Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[3]" data-name="3 / 3:margin">
      <Component33 />
    </div>
  );
}

function Component31() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور نیچ یوتیوب">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite22() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور نیچ یوتیوب
        </p>
      </div>
    </div>
  );
}

function DivFlex47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite22 />
      </div>
    </div>
  );
}

function DivFlex46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component31 />
        <DivFlex47 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock22() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/19">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex46 />
    </a>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="2 / 3">
      <ABlock22 />
    </div>
  );
}

function Component23Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[2]" data-name="2 / 3:margin">
      <Component30 />
    </div>
  );
}

function Component35() {
  return (
    <div className="h-[150px] relative shrink-0 w-[196px]" data-name="مشاور تیتر تامبنیل">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.67%] left-0 max-w-none top-[-15.33%] w-full" src={imgYooz} />
      </div>
    </div>
  );
}

function PTextWhite23() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="p.text-white">
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[24px]" dir="auto">
          مشاور تیتر تامبنیل
        </p>
      </div>
    </div>
  );
}

function DivFlex49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <PTextWhite23 />
      </div>
    </div>
  );
}

function DivFlex48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[198px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Component35 />
        <DivFlex49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f5d04] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ABlock23() {
  return (
    <a className="bg-[#393939] content-stretch cursor-pointer flex flex-col h-[380px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[200px]" data-name="a.block" href="https://app.yoozica.com/adviser/18">
      <div aria-hidden="true" className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[380px] left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[200px]" data-name="a.block:shadow" />
      <DivFlex48 />
    </a>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[200px]" data-name="1 / 3">
      <ABlock23 />
    </div>
  );
}

function Component13Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0 w-[216px] z-[1]" data-name="1 / 3:margin">
      <Component32 />
    </div>
  );
}

function DivSwiperWrapperFf74744A108837Db() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#swiper-wrapper-ff74744a108837db3">
      <div className="content-stretch flex isolate items-start pl-[927px] relative w-full">
        <Component33Margin />
        <Component23Margin />
        <Component13Margin />
      </div>
    </div>
  );
}

function DivSwiper5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="div.swiper">
      <DivSwiperWrapperFf74744A108837Db />
    </div>
  );
}

function ButtonAbsolute8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center left-0 p-[8px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">◀</p>
      </div>
    </div>
  );
}

function ButtonAbsolute9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] bottom-[44.74%] content-stretch flex flex-col items-center justify-center p-[8px] right-[-1.22px] rounded-[33554400px] top-[44.74%]" data-name="button.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">▶</p>
      </div>
    </div>
  );
}

function DivRelative4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="div.relative">
      <DivSwiper5 />
      <ButtonAbsolute8 />
      <ButtonAbsolute9 />
    </div>
  );
}

function DivMb10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-8">
      <H1TextWhite4 />
      <DivRelative4 />
    </div>
  );
}

function DivMt1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-x-clip overflow-y-auto pb-[32px] relative shrink-0 w-full" data-name="div.mt-6">
      <DivMb6 />
      <DivMb7 />
      <DivMb8 />
      <DivMb9 />
      <DivMb10 />
    </div>
  );
}

function MainChatBox() {
  return (
    <div className="relative shrink-0 w-full" data-name="main.chatBox">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <DivFlex />
          <DivMt1 />
        </div>
      </div>
    </div>
  );
}

function MainChatBoxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="main.chatBox:margin">
      <MainChatBox />
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4.81px] items-center pl-[16px] pr-[282px] pt-[11.19px] relative w-full">
          <HeaderHeader />
          <MainChatBoxMargin />
        </div>
      </div>
    </div>
  );
}

function DivRoot() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start min-h-[859px] relative shrink-0 w-full" data-name="div.root">
      <Div1 />
    </div>
  );
}

function YoozicaLogo() {
  return (
    <div className="h-[42.39px] max-w-[218px] relative shrink-0 w-[177.95px]" data-name="Yoozica Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[122.5%] left-[-11.25%] max-w-none top-[-11.25%] w-[122.51%]" src={imgYoozicaLogo} />
      </div>
    </div>
  );
}

function DivPx() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-5">
      <div className="content-stretch flex flex-col items-start px-[20px] relative w-full">
        <YoozicaLogo />
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#c28f05] text-[14.4px] text-right whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            گفتگوی جدید
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <div className="bg-[rgba(236,175,7,0.1)] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.19px] items-center pb-[8.18px] pl-[37.58px] pr-[15.39px] pt-[7.19px] relative w-full">
          <Span1 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-right text-white whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            چت
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M10 6.66667V3.33333H6.66667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34a15680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 11.6667H3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 11.6667H18.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 10.8333V12.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 10.8333V12.5" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DivNavItem1() {
  return (
    <div className="bg-[#393939] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.18px] items-center pb-[8.18px] pl-[37.58px] pr-[15.39px] pt-[7.19px] relative w-full">
          <Span2 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-right text-white whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            تصویر
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <div className="bg-[#393939] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.18px] items-center pb-[8.18px] pl-[37.58px] pr-[15.39px] pt-[7.19px] relative w-full">
          <Span3 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-right text-white whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            صدا
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <div className="bg-[#393939] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.18px] items-center pb-[8.19px] pl-[37.58px] pr-[15.39px] pt-[7.18px] relative w-full">
          <Span4 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-right text-white whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            ویدیو
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <div className="bg-[#393939] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.19px] items-center pb-[8.18px] pl-[37.58px] pr-[15.39px] pt-[7.19px] relative w-full">
          <Span5 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffc425] text-[14.4px] text-right whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            مشاورها
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_678)" id="Frame">
          <path d="M10 15V4.16667" id="Vector" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28aa85e0} id="Vector_2" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2f3a5fc0} id="Vector_3" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28f84600} id="Vector_4" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p281563c0} id="Vector_5" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32939900} id="Vector_6" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p140e6400} id="Vector_7" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3d1c9800} id="Vector_8" stroke="var(--stroke-0, #FFC425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_678">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivNavItem5() {
  return (
    <div className="bg-[#393939] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#ffc425] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.19px] items-center pb-[8.18px] pl-[37.58px] pr-[15.39px] pt-[7.19px] relative w-full">
          <Span6 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.61px] relative w-full">
        <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#c28f05] text-[14.4px] text-right whitespace-nowrap">
          <p className="leading-[21.6px]" dir="auto">
            تاریخچه
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <div className="bg-[rgba(236,175,7,0.1)] relative rounded-[14.4px] shrink-0 w-full" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none rounded-[14.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.18px] items-center pb-[8.18px] pl-[37.58px] pr-[15.39px] pt-[7.19px] relative w-full">
          <Span7 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function DivScrollAreaContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.2px] items-start min-h-px min-w-px relative w-full" data-name="div.scroll-area__content">
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

function DivScrollArea() {
  return (
    <div className="content-stretch flex flex-col h-[579px] items-start justify-center overflow-auto relative shrink-0 w-full" data-name="div.scroll-area">
      <DivScrollAreaContent />
    </div>
  );
}

function DivNavHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.nav-header">
      <DivPx />
      <DivScrollArea />
    </div>
  );
}

function Frame11() {
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
    <div className="absolute content-stretch flex flex-col items-end left-0 right-[30.39px] top-[-0.6px]" data-name="span">
      <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-right text-white whitespace-nowrap">
        <p className="leading-[19.2px]" dir="auto">
          امیر یوسفی
        </p>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-right text-white whitespace-nowrap">
        <p className="leading-[19.2px]" dir="auto">
          اشتراک1ماهه
        </p>
      </div>
    </div>
  );
}

function Span10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-right text-white whitespace-nowrap">
        <p className="leading-[19.2px]">906</p>
      </div>
    </div>
  );
}

function Yooz1() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[14px]" data-name="yooz">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYooz} />
      </div>
    </div>
  );
}

function DivFlex50() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[58.28px] right-[0.01px] top-[25.39px]" data-name="div.flex">
      <Span9 />
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-right text-white whitespace-nowrap">
        <p className="leading-[19.2px]">-</p>
      </div>
      <Span10 />
      <Yooz1 />
    </div>
  );
}

function DivNavFooterItem() {
  return (
    <div className="-translate-y-1/2 absolute h-[45.58px] left-0 right-[-0.01px] top-[calc(50%-36.12px)]" data-name="div.nav-footer-item">
      <Frame11 />
      <Span8 />
      <DivFlex50 />
    </div>
  );
}

function Span11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="span">
      <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-right text-white whitespace-nowrap" role="link" tabIndex={0}>
        <p className="cursor-pointer leading-[19.2px]" dir="auto">
          پشتیبانی تلگرام
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <a className="-translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[10.38px] items-center left-0 right-[-0.01px] top-[calc(50%+6.31px)]" data-name="a" href="https://t.me/zomorodian_support">
      <Span11 />
      <Frame12 />
    </a>
  );
}

function Span12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="span">
      <div className="flex flex-col font-['Inter:Light','Noto_Sans_Arabic:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-right text-white whitespace-nowrap">
        <p className="leading-[19.2px]" dir="auto">
          بستن
        </p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
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
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[10.39px] items-center left-0 pb-[6.38px] pt-[5.8px] px-[6.4px] right-[-0.01px] rounded-[6.4px] top-[calc(50%+43.22px)]" data-name="div.nav-toggle">
      <Span12 />
      <Frame13 />
    </div>
  );
}

function DivNavFooter() {
  return (
    <div className="h-[145.42px] relative shrink-0 w-full" data-name="div.nav-footer">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <DivNavFooterItem />
      <A />
      <DivNavToggle />
    </div>
  );
}

function DivNavFooterMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.nav-footer:margin">
      <div className="content-stretch flex flex-col items-start px-[12.8px] relative w-full">
        <DivNavFooter />
      </div>
    </div>
  );
}

function DivNavContent() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex flex-col h-[799px] items-start justify-between pb-[0.19px] pt-[16px] px-[16px] right-[16px] rounded-[16px] top-[30px] w-[250px]" data-name="div.nav-content">
      <DivNavHeader />
      <DivNavFooterMargin />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#1e1e1e] content-stretch flex flex-col items-start left-0 top-0 w-[1905px]" data-name="body">
      <DivSidePanelFloatingBtn />
      <DivRedeviationBsIndicator />
      <Snipp6Svg />
      <DivDialogRoot />
      <DivRoot />
      <DivNavContent />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Body />
    </div>
  );
}