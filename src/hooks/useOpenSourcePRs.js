import { useState, useEffect } from "react";

const REPOS = [
  { owner: "facebook", repo: "react" },
  { owner: "apache", repo: "kafka" },
  { owner: "pgjdbc", repo: "pgjdbc" },
  { owner: "kubernetes-client", repo: "java" },
];

const GITHUB_USER = "emmaeng700";

function useOpenSourcePRs() {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPRs() {
      try {
        const results = await Promise.all(
          REPOS.map(({ owner, repo }) =>
            fetch(
              `https://api.github.com/repos/${owner}/${repo}/pulls?state=all&per_page=100`,
              { headers: { Accept: "application/vnd.github.v3+json" } }
            )
              .then((r) => r.json())
              .then((data) =>
                Array.isArray(data)
                  ? data
                      .filter((pr) => pr.user?.login === GITHUB_USER)
                      .map((pr) => ({
                        id: pr.id,
                        project: repo === "java" ? "Kubernetes Java Client" : repo.charAt(0).toUpperCase() + repo.slice(1),
                        repo: `${owner}/${repo}`,
                        pr: `PR #${pr.number}`,
                        url: pr.html_url,
                        title: pr.title,
                        status: pr.merged_at
                          ? "Merged"
                          : pr.state === "open"
                          ? "Open"
                          : "Closed",
                        statusColor: pr.merged_at
                          ? "bg-purple-100 text-purple-700"
                          : pr.state === "open"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600",
                        createdAt: new Date(pr.created_at).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" }
                        ),
                      }))
                  : []
              )
              .catch(() => [])
          )
        );

        const all = results
          .flat()
          .sort((a, b) => b.id - a.id);

        setPrs(all);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPRs();
  }, []);

  return { prs, loading, error };
}

export default useOpenSourcePRs;
