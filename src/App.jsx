// Desc: Main App component
import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/Header"));
const IntroSection = lazy(() => import("./components/IntroSection"));
const renderLoader = () => <div className="spinner"></div>;
function App() {
  return (
    <div className="mx-auto text-AlmostBlack custom:min-h-screen custom:max-w-[1440px]">
      <Suspense fallback={renderLoader()}>
        <Header />
        <IntroSection />
      </Suspense>
    </div>
  );
}

export default App;
