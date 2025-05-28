
import { ReactNode } from 'react';
import { useAccessibility } from '@/hooks/useAccessibility';

interface AccessibleFormProps {
  children: ReactNode;
  title: string;
  description?: string;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

const AccessibleForm = ({ 
  children, 
  title, 
  description, 
  onSubmit, 
  className = "" 
}: AccessibleFormProps) => {
  const { announce } = useAccessibility();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    announce("Form submitted successfully", "assertive");
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={className}
      role="form"
      aria-labelledby="form-title"
      aria-describedby={description ? "form-description" : undefined}
    >
      <h2 id="form-title" className="text-xl font-semibold mb-4">
        {title}
      </h2>
      {description && (
        <p id="form-description" className="text-gray-600 mb-6">
          {description}
        </p>
      )}
      {children}
    </form>
  );
};

export default AccessibleForm;
