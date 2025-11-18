import emailjs from '@emailjs/browser';
export const sendEmail = async (
  name: string,
  email: string,
  message: string
): Promise<boolean> => {
  const response = await emailjs.send(
    (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || '',
    (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || '',
    {
      form_name: name,
      to_name: 'Gerges',
      from_email: email,
      to_email: 'Gerogefarag128@gmail.com',
      message: message,
    },
    (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || ''
  );
  return response.status === 200;
};
