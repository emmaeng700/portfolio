import { useState } from "react";

const PREVIEW_COUNT = 5;

const OpenSourceSection = ({ prs, loading, error }) => {
  const [showAll, setShowAll] = useState(false);
  const [mergedOnly, setMergedOnly] = useState(false);

  const mergedCount = prs.filter((p) => p.status === "Merged").length;
  const filtered = mergedOnly ? prs.filter((p) => p.status === "Merged") : prs;
  const visible = showAll ? filtered : filtered.slice(0, PREVIEW_COUNT);

  return (
    <div className='py-10 flex flex-col gap-6'>
      <h3 className='subhead-text'>Open Source Contributions</h3>
      <p className='text-slate-500'>
        Real contributions to production codebases used by millions of
        developers — pulled live from GitHub.
      </p>

      {loading && (
        <p className='text-slate-400 text-sm'>Loading contributions...</p>
      )}
      {error && (
        <p className='text-red-400 text-sm'>Could not load contributions.</p>
      )}

      <div className='flex flex-col gap-4'>
        {visible.map((contrib) => (
          <a
            key={contrib.id}
            href={contrib.url}
            target='_blank'
            rel='noopener noreferrer'
            className='p-5 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2'
          >
            <div className='flex items-center justify-between flex-wrap gap-2'>
              <div className='flex items-center gap-3'>
                <span className='font-bold text-gray-900'>{contrib.project}</span>
                <span className='text-sm text-slate-500'>{contrib.repo}</span>
                <span className='text-sm font-medium text-blue-600'>
                  {contrib.pr}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-slate-400'>{contrib.createdAt}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${contrib.statusColor}`}
                >
                  {contrib.status}
                </span>
              </div>
            </div>
            <p className='text-slate-700 text-sm font-medium'>{contrib.title}</p>
          </a>
        ))}
      </div>

      <div className='flex items-center gap-3 flex-wrap'>
        {filtered.length > PREVIEW_COUNT && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className='px-5 py-2 rounded-lg border border-blue-500 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors'
          >
            {showAll ? "Show Less" : `View All ${filtered.length} Contributions`}
          </button>
        )}

        <button
          onClick={() => { setMergedOnly((prev) => !prev); setShowAll(false); }}
          className={`relative px-5 py-2 rounded-lg border text-sm font-semibold transition-colors ${
            mergedOnly
              ? "bg-purple-600 border-purple-600 text-white hover:bg-purple-700"
              : "border-purple-400 text-purple-600 hover:bg-purple-50"
          }`}
        >
          {mergedOnly ? "Show All" : "Merged"}
          {mergedCount > 0 && (
            <span className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white'>
              {mergedCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default OpenSourceSection;
