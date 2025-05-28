
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';

const PWAManager = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { currentLanguage } = useTranslation();
  const { toast } = useToast();
  const isMalayalam = currentLanguage === 'ml';

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    // Handle app installed
    const handleAppInstalled = () => {
      setShowInstallButton(false);
      setDeferredPrompt(null);
      toast({
        title: isMalayalam ? "ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്തു" : "App Installed",
        description: isMalayalam ? 
          "DQAA ആപ്പ് വിജയകരമായി ഇൻസ്റ്റാൾ ചെയ്തു" : 
          "DQAA app has been successfully installed"
      });
    };

    // Handle online/offline status
    const handleOnline = () => {
      setIsOnline(true);
      toast({
        title: isMalayalam ? "ഓൺലൈൻ" : "Online",
        description: isMalayalam ? "ഇന്റർനെറ്റ് കണക്ഷൻ പുനഃസ്ഥാപിച്ചു" : "Internet connection restored"
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: isMalayalam ? "ഓഫ്‌ലൈൻ" : "Offline",
        description: isMalayalam ? 
          "ഓഫ്‌ലൈൻ മോഡിൽ പ്രവർത്തിക്കുന്നു" : 
          "Working in offline mode",
        variant: "destructive"
      });
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [toast, isMalayalam]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return (
    <>
      {/* Install Button */}
      {showInstallButton && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            onClick={handleInstallClick}
            className="bg-dqaa-500 hover:bg-dqaa-600 text-white shadow-lg"
            aria-label={isMalayalam ? "ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്യുക" : "Install app"}
          >
            {isMalayalam ? "ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്യുക" : "Install App"}
          </Button>
        </div>
      )}

      {/* Offline Indicator */}
      {!isOnline && (
        <div 
          className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50"
          role="alert"
          aria-live="assertive"
        >
          {isMalayalam ? 
            "ഇന്റർനെറ്റ് കണക്ഷൻ ഇല്ല - ഓഫ്‌ലൈൻ മോഡിൽ പ്രവർത്തിക്കുന്നു" : 
            "No internet connection - Working offline"
          }
        </div>
      )}
    </>
  );
};

export default PWAManager;
