
import { Button } from "@/components/ui/button";

const SkipNavigation = () => {
  const skipToMain = () => {
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  };

  const skipToNav = () => {
    const nav = document.getElementById('main-navigation');
    if (nav) {
      nav.focus();
      nav.scrollIntoView();
    }
  };

  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-0 left-0 z-[9999] bg-white p-4 shadow-lg">
        <Button
          onClick={skipToMain}
          className="mr-2 focus:ring-2 focus:ring-dqaa-500"
          variant="outline"
        >
          Skip to main content
        </Button>
        <Button
          onClick={skipToNav}
          className="focus:ring-2 focus:ring-dqaa-500"
          variant="outline"
        >
          Skip to navigation
        </Button>
      </div>
    </div>
  );
};

export default SkipNavigation;
