
// Islamic date calculations and Eid Al-Adha detection
export interface IslamicEvent {
  name: string;
  date: Date;
  isActive: boolean;
}

// Approximate Eid Al-Adha dates for 2024-2026 (these should be updated with exact dates)
const EID_AL_ADHA_DATES = {
  2024: new Date('2024-06-16'),
  2025: new Date('2025-06-06'),
  2026: new Date('2025-05-27'),
};

export const getEidAlAdhaDate = (year: number): Date | null => {
  return EID_AL_ADHA_DATES[year as keyof typeof EID_AL_ADHA_DATES] || null;
};

export const isEidAlAdhaPeriod = (): boolean => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const eidDate = getEidAlAdhaDate(currentYear);
  
  if (!eidDate) return false;
  
  // Show popup 2 days before through 3 days after Eid
  const startDate = new Date(eidDate);
  startDate.setDate(eidDate.getDate() - 2);
  
  const endDate = new Date(eidDate);
  endDate.setDate(eidDate.getDate() + 3);
  
  return today >= startDate && today <= endDate;
};

export const shouldShowEidGreeting = (): boolean => {
  if (!isEidAlAdhaPeriod()) return false;
  
  const lastShown = localStorage.getItem('eid-adha-greeting-shown');
  const currentYear = new Date().getFullYear();
  
  // Show once per Eid period (year)
  return lastShown !== currentYear.toString();
};

export const markEidGreetingShown = (): void => {
  const currentYear = new Date().getFullYear();
  localStorage.setItem('eid-adha-greeting-shown', currentYear.toString());
};
