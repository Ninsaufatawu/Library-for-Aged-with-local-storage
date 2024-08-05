import FeaturedSection from "../components/FeaturedSection";
import { Home } from "../components/Home";
import SideBar from "../components/SideBar";

export const HomePage = () => {
  return (
    <div className="container max-w-screen mx-auto h-screen grid grid-cols-[auto_1fr_auto] ">
      {/* Navigation on the far left */}
      <div className="h-full">
        <SideBar />
      </div>

      {/* Middle content that scrolls vertically */}
      <div className="overflow-y-scroll h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .overflow-y-scroll::-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .overflow-y-scroll {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}
        </style>
        <Home />
      </div>

      {/* Listening bar on the far right */}
      <div className="h-full">
        <FeaturedSection />
      </div>
    </div>
  );
};
