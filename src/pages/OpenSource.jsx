import { CTA } from "../components";
import OpenSourceSection from "../components/OpenSourceSection";
import useOpenSourcePRs from "../hooks/useOpenSourcePRs";

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

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default OpenSource;
