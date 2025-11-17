import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { textVariant } from '../utils/motion';
interface IExperience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}
const ExperienceCard = ({ experience }: { experience: IExperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#ffff',
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232631',
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h1 className="text-white text-[24px] font-bold">{experience.title}</h1>
        <p className="text-secondary" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <ul className="list-disc ms-8 mt-5 space-y-2">
          {experience.points.map((p, i) => {
            return <li key={i} className='text-white text-[14px]'>{p}</li>;
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div
        id="work"
        variants={textVariant(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="my-20"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => {
            return <ExperienceCard key={i} experience={exp} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
