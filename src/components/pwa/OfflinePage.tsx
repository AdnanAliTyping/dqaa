
import { Button } from '@/components/ui/button';
import { Wifi, RefreshCw } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const OfflinePage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === 'ml';

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="mb-6">
          <Wifi className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isMalayalam ? "ഓഫ്‌ലൈൻ" : "You're Offline"}
          </h1>
          <p className="text-gray-600">
            {isMalayalam ? 
              "ഇന്റർനെറ്റ് കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക" :
              "Please check your internet connection and try again"
            }
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleRetry}
            className="w-full bg-dqaa-500 hover:bg-dqaa-600"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            {isMalayalam ? "വീണ്ടും ശ്രമിക്കുക" : "Try Again"}
          </Button>

          <div className="text-sm text-gray-500">
            {isMalayalam ? 
              "ചില പേജുകൾ ഓഫ്‌ലൈനിൽ ലഭ്യമായേക്കാം" :
              "Some pages may be available offline"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
