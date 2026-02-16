import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import AssistantTools from "./components/AssistantTools";
import Chat from "./components/Chat";
import DesignSystemDemo from "./components/DesignSystemDemo";
import ImagePage from "./components/ImagePage";
import AudioPage from "./components/AudioPage";
import VideoPage from "./components/VideoPage";
import SettingsPage from "./components/SettingsPage";
import ConsultationsPage from "./components/ConsultationsPage";
import HistoryPage from "./components/HistoryPage";
import WalletPage from "./components/WalletPage";
import SupportPage from "./components/SupportPage";
import DashboardPage from "./components/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: DashboardPage },
      { path: "chat", Component: Chat },
      { path: "design-system", Component: DesignSystemDemo },
      { path: "image", Component: ImagePage },
      { path: "audio", Component: AudioPage },
      { path: "video", Component: VideoPage },
      { path: "settings", Component: SettingsPage },
      { path: "consultations", Component: ConsultationsPage },
      { path: "history", Component: HistoryPage },
      { path: "wallet", Component: WalletPage },
      { path: "support", Component: SupportPage },
    ],
  },
]);