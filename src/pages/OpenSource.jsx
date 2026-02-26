import { CTA } from "../components";
import OpenSourceSection from "../components/OpenSourceSection";
import useOpenSourcePRs from "../hooks/useOpenSourcePRs";

const skills = [
  { name: "Apache Kafka",     category: "Distributed Systems", level: 5 },
  { name: "Java",             category: "Backend",             level: 5 },
  { name: "React",            category: "Frontend",            level: 5 },
  { name: "Distributed Systems", category: "Architecture",     level: 5 },
  { name: "Spring Boot",      category: "Backend",             level: 4 },
  { name: "Kubernetes",       category: "DevOps",              level: 4 },
  { name: "PostgreSQL",       category: "Database",            level: 4 },
  { name: "TypeScript",       category: "Frontend",            level: 4 },
  { name: "Go",               category: "Systems",             level: 4 },
  { name: "Docker",           category: "DevOps",              level: 4 },
];

const categoryColor = {
  "Distributed Systems": { bg: "bg-purple-50",  text: "text-purple-600" },
  "Backend":             { bg: "bg-blue-50",    text: "text-blue-600"   },
  "Frontend":            { bg: "bg-cyan-50",    text: "text-cyan-600"   },
  "Architecture":        { bg: "bg-indigo-50",  text: "text-indigo-600" },
  "DevOps":              { bg: "bg-orange-50",  text: "text-orange-500" },
  "Database":            { bg: "bg-green-50",   text: "text-green-600"  },
  "Systems":             { bg: "bg-rose-50",    text: "text-rose-500"   },
};

const SkillCard = ({ name, category, level }) => {
  const color = categoryColor[category] ?? { bg: "bg-gray-50", text: "text-gray-500" };
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-shadow duration-300">
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-[#1d1d1f] text-[15px] leading-snug tracking-tight">{name}</p>
        <span className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full ${color.bg} ${color.text}`}>
          {category}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              i < level ? "bg-[#1d1d1f]" : "bg-[#e5e5ea]"
            }`}
          />
        ))}
      </div>
      <p className="text-[12px] text-[#6e6e73] font-medium tracking-wide">
        {level === 5 ? "Expert" : "Advanced"} · {level}/5
      </p>
    </div>
  );
};

const OpenSource = () => {
  const { prs, loading, error } = useOpenSourcePRs();

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Open Source <span className='blue-gradient_text font-semibold drop-shadow'>Contributions</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Real pull requests to production codebases used by millions of developers worldwide —
          from the React ecosystem to Apache Kafka and the Kubernetes Java client.
          Every entry is pulled live from GitHub.
        </p>
      </div>

      <OpenSourceSection prs={prs} loading={loading} error={error} />

      {/* Skills mastered through open source */}
      <div className="py-10 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="subhead-text">Skills Sharpened Through Open Source</h3>
          <p className="text-slate-500 text-sm">
            Technologies I have been deepening through real contributions to production codebases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`h-2 w-4 rounded-full ${i < 5 ? "bg-[#1d1d1f]" : "bg-[#e5e5ea]"}`} />
              ))}
            </div>
            <span className="text-xs text-[#6e6e73]">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`h-2 w-4 rounded-full ${i < 4 ? "bg-[#1d1d1f]" : "bg-[#e5e5ea]"}`} />
              ))}
            </div>
            <span className="text-xs text-[#6e6e73]">Advanced</span>
          </div>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default OpenSource;
