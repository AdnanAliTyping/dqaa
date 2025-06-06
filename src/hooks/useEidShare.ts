
import { useCallback } from "react";

interface UseEidShareProps {
  isMalayalam: boolean;
  shareUrl: string;
}

export const useEidShare = ({ isMalayalam, shareUrl }: UseEidShareProps) => {
  const shareText = isMalayalam 
    ? "ഈദുൽ അദ്ഹാ മുബാറക്! ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുടെ ഈദ് ആശംസകൾ"
    : "Eid Al-Adha Mubarak! Warm wishes from Darul Quran Abdulla Academy";

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          url: shareUrl,
          text: shareText
        });
      } catch (error) {
        console.log('Error sharing:', error);
        handleFallbackShare();
      }
    } else {
      handleFallbackShare();
    }
  }, [shareText, shareUrl]);

  const handleFallbackShare = useCallback(() => {
    navigator.clipboard.writeText(shareUrl);
    alert(isMalayalam ? 'ലിങ്ക് കോപ്പി ചെയ്തു!' : 'Link copied to clipboard!');
  }, [shareUrl, isMalayalam]);

  const handleWhatsAppShare = useCallback(() => {
    const whatsappText = `${shareText}\n\n${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText)}`, '_blank');
  }, [shareText, shareUrl]);

  const handleDownload = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 1000;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#059669');
    gradient.addColorStop(0.5, '#10b981');
    gradient.addColorStop(1, '#047857');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text content
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('عيد مبارك', canvas.width / 2, 200);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 36px Arial';
    ctx.fillText(isMalayalam ? 'ഈദുൽ അദ്ഹാ മുബാറക്!' : 'Eid Al-Adha Mubarak!', canvas.width / 2, 300);

    ctx.font = '24px Arial';
    const message = isMalayalam 
      ? 'ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി'
      : 'Darul Quran Abdulla Academy';
    ctx.fillText(message, canvas.width / 2, 800);

    // Download the image
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `eid-greeting-${isMalayalam ? 'malayalam' : 'english'}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }, [isMalayalam]);

  return {
    handleShare,
    handleWhatsAppShare,
    handleDownload
  };
};
