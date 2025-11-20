import { Tilt } from 'react-tilt';
import { motion, type Variants } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface IProject {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: IProject & { index: number }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75) as Variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary flex flex-col justify-between p-5 rounded-2xl w-[300px] h-[500px]"
      >
        <div className="relative h-[200px] w-full">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img src={github} className="p-1" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[17px] font-bold">{name}</h3>
          <p className="text-secondary text-[13px]">{description}</p>
        </div>
        <div className="mt-4 self-end flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p className={`${tag.color} text-[14px]`} key={tag.name}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="my-16"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex flex-col">
        <div className=" flex flex-wrap items-center justify-center gap-x-5 gap-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, 'works');
