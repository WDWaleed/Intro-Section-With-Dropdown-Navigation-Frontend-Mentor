// Desc: Main App component
import {lazy, Suspense} from "react";
const Header = lazy(() => import("./components/Header"));
const IntroSection = lazy(() => import("./components/IntroSection"));
const renderLoader = () => <div className="spinner"></div>;
function App() {
  return <div className="text-AlmostBlack custom:max-w-[1440px] custom:min-h-screen mx-auto">
  <Suspense fallback={renderLoader()}>
    <Header />
    <IntroSection />
  </Suspense>
  </div>
}

export default App;
