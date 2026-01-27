import { CTA } from "../components";
import { experiences, skills } from "../constants";
import resumePdf from "../assets/Emmanuel Oppong(updated resume).pdf";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Emmanuel
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Aspiring Software Engineer based in Grambling, LA, specializing in
          hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex flex-col gap-12'>
          {experiences.map((experience) => (
            <div 
              key={experience.company_name}
              className='flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-md border-l-4'
              style={{ borderLeftColor: experience.iconBg }}
            >
              <div className='flex-shrink-0'>
                <div 
                  className='w-16 h-16 rounded-full flex items-center justify-center'
                  style={{ backgroundColor: experience.iconBg }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-10 h-10 object-contain'
                  />
                </div>
              </div>
              
              <div className='flex-1'>
                <div className='mb-4'>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium text-base'>
                    {experience.company_name}
                  </p>
                  <p className='text-gray-500 text-sm mt-1'>{experience.date}</p>
                </div>

                <ul className='list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <div className='mt-10 flex flex-col gap-4'>
        <h3 className='subhead-text'>Resume</h3>
        <p className='text-slate-500'>View-only preview. Download is disabled.</p>
        <div className='rounded-xl border border-slate-200 shadow-md bg-white overflow-hidden'>
          <div className='h-[75vh] sm:h-[85vh] lg:h-[92vh] overflow-y-auto'>
            <iframe
              title='Emmanuel Oppong resume'
              src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
              className='w-full h-full min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh]'
              loading='lazy'
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default About;