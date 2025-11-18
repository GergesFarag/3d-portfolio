import {
  useState,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { motion, type Variants } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';
import { sendEmail } from '../utils/sendingEmail';

interface IFormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<IFormState>({
    email: '',
    name: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldValue = e.target.value;
    setForm((fields) => {
      return {
        ...fields,
        [e.target.name]: fieldValue,
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const isSuccess = await sendEmail(form.name, form.email, form.message);
      if (isSuccess) {
        setIsLoading(false);
        formRef.current?.reset();
        alert('Thank You');
        setForm(() => {
          return {
            name: '',
            email: '',
            message: '',
          };
        });
      }
    } catch (error) {
      setIsLoading(false);
      alert('Something Went Wrong');
      console.error('Error : ', error);
    }
  };

  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1) as Variants}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="text-white rounded-lg outlined-none bg-tertiary py-4 px-6 placeholder:text-secondary focus:outline-none focus:border-b"
            />
          </label>
          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="text-white rounded-lg outlined-none bg-tertiary py-4 px-6 placeholder:text-secondary focus:outline-none focus:border-b"
            />
          </label>
          <label className="flex flex-col" htmlFor="message">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="text-white rounded-lg outlined-none bg-tertiary py-4 px-6 placeholder:text-secondary resize-none focus:outline-none focus:border-b"
              rows={7}
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-5 rounded-xl hover:bg-[#050816] transition duration-300 w-fit"
          >
            {isLoading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1) as Variants}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
