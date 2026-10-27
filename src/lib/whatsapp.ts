export const WHATSAPP_CONTACTS = [
  { label: '+234 906 870 2472', number: '2349068702472' },
  { label: '+234 706 721 7503', number: '2347067217503' },
] as const;

export type QuoteDetails = {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service: string;
  location?: string;
  projectType?: string;
  budget?: string;
  message: string;
};

export function buildQuoteMessage(details: QuoteDetails) {
  const optionalLines = [
    details.email ? `Email: ${details.email}` : null,
    details.company ? `Company / Organisation: ${details.company}` : null,
    details.location ? `Location: ${details.location}` : null,
    details.projectType ? `Project Type: ${details.projectType}` : null,
    details.budget ? `Budget: ${details.budget}` : null,
  ].filter((line): line is string => line !== null);

  return [
    'Hello Zantex, I would like to request a quotation.',
    '',
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Service: ${details.service}`,
    ...optionalLines,
    `Project Details: ${details.message}`,
    '',
    'Please contact me to discuss the requirements and quotation.',
  ].join('\n');
}

export function getWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
