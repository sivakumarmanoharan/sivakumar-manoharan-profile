import {FC, memo, useCallback, useMemo, useState} from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setError(false);
      setSuccess(false);
  
      try {
        const serviceId = 'service_2tefdwk';
        const templateId = 'template_m9yq81x';
        const userId = 'tBZ7iH_YnzlX7qcBO';
  
        // Structure the data to include the `reply_to` field
        const emailData = {
          name: data.name,           // Name field in the form
          email: data.email,         // Sender email
          message: data.message,     // Message content
          reply_to: data.email,      // Ensures replies go to the sender
        };
  
        // Send the email
        await emailjs.send(serviceId, templateId, emailData, userId);
  
        setSuccess(true);
        setData(defaultData); // Reset form
      } catch (err) {
        console.error('EmailJS Error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

    return (
      <form
        className="grid min-h-[320px] grid-cols-1 gap-y-4"
        method="POST"
        onSubmit={handleSendMessage}
      >
        <input
          className={inputClasses}
          name="name"
          onChange={onChange}
          placeholder="Name"
          required
          type="text"
          value={data.name}
        />
        <input
          autoComplete="email"
          className={inputClasses}
          name="email"
          onChange={onChange}
          placeholder="Email"
          required
          type="email"
          value={data.email}
        />
        <textarea
          className={inputClasses}
          maxLength={250}
          name="message"
          onChange={onChange}
          placeholder="Message"
          required
          rows={6}
          value={data.message}
        />
        <button
          aria-label="Submit contact form"
          className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {success && <p className="text-green-500">Message sent successfully!</p>}
        {error && <p className="text-red-500">Failed to send the message. Try again later.</p>}
      </form>
    );
  });

ContactForm.displayName = 'ContactForm';
export default ContactForm;


