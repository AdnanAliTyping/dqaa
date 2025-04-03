
import { useEffect, useRef } from 'react';

interface RazorpayDonateButtonProps {
  buttonId?: string;
  className?: string;
}

const RazorpayDonateButton = ({ 
  buttonId = "pl_QEBC8u1SAAat14",
  className
}: RazorpayDonateButtonProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;
    
    // Append the script to the form
    if (formRef.current) {
      formRef.current.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      if (formRef.current && script.parentNode === formRef.current) {
        formRef.current.removeChild(script);
      }
    };
  }, [buttonId]);
  
  return <form ref={formRef} className={className} />;
};

export default RazorpayDonateButton;
