import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { technologies } from '../constants';
import { styles } from '../style';

const Tech = () => {
  return (
    <div className="my-12">
      <p className={`${styles.sectionSubText}`}>Tools i worked with &nbsp;</p>
      <h1 className={`${styles.sectionHeadText}`}>Technologies.&nbsp;</h1>
      <div className="flex flex-wrap justify-center items-center gap-16 mt-16 mb-12">
        {technologies.map((tech) => (
          <BallCanvas key={tech.name} icon={tech.icon} techName={tech.name} />
        ))}
      </div>
      <p className={`${styles.sectionSubText} text-center`}>And many more...</p>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
