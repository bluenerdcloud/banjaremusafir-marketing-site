import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./screens/Home";
import { JourneyFeed } from "./screens/JourneyFeed";
import { JourneyDetail } from "./screens/JourneyDetail";
import { PersonProfile } from "./screens/PersonProfile";
import { ContributorProfile } from "./screens/ContributorProfile";
import { Standards } from "./screens/Standards";
import { ApplyToContribute } from "./screens/ApplyToContribute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "journeys", Component: JourneyFeed },
      { path: "journeys/:id", Component: JourneyDetail },
      { path: "people/:id", Component: PersonProfile },
      { path: "contributors/:id", Component: ContributorProfile },
      { path: "contributors", Component: ContributorProfile },
      { path: "standards", Component: Standards },
      { path: "contribute", Component: ApplyToContribute },
      { path: "about", Component: Standards },
    ],
  },
]);
