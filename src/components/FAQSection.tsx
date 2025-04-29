
import { FC } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

export interface FAQItem {
  question: string;
  answer: string;
  questionMl?: string;
  answerMl?: string;
}

interface FAQSectionProps {
  title?: string;
  titleMl?: string;
  subtitle?: string;
  subtitleMl?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection: FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  titleMl = "സാധാരണ ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
  subtitle,
  subtitleMl,
  faqs,
  className
}) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  return (
    <div className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? titleMl : title}
            </h2>
            {(subtitle || subtitleMl) && (
              <p className="text-gray-600 text-lg">
                {isMalayalam && subtitleMl ? subtitleMl : subtitle}
              </p>
            )}
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg font-medium text-dqaa-500 hover:no-underline">
                  {isMalayalam && faq.questionMl ? faq.questionMl : faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <div 
                    className="prose max-w-none" 
                    dangerouslySetInnerHTML={{ 
                      __html: isMalayalam && faq.answerMl ? faq.answerMl : faq.answer 
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
