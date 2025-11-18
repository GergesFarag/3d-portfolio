import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { technologies } from '../constants';
import { styles } from '../style';

const Tech = () => {
  return (
    <div className="my-7">
      <p className={`${styles.sectionSubText}`}>Tools i worked with &nbsp;</p>
      <h1 className={`${styles.sectionHeadText}`}>Technologies.&nbsp;</h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {technologies.map((tech, i) => {
          return (
            <div className="w-28 h-28" key={i}>
              <BallCanvas key={i} icon={tech.icon} techName={tech.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
