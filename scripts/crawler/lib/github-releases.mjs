function normalizeReleaseCandidate(repo, release) {
  const repoName = repo.split('/')[1] || repo;
  const releaseLabel = release.name || release.tag_name || 'release';
  return {
    id: release.id ?? `${repo}:${release.tag_name}`,
    title: `${repoName} ${releaseLabel} release`,
    signalText: [release.name, release.tag_name, release.body].filter(Boolean).join('\n\n'),
    url: release.html_url,
    createdAt: release.published_at || release.created_at,
    replyCount: 0,
    retweetCount: 0,
    likeCount: Math.max(30, Number(release.reactions?.total_count ?? 0) * 3),
    authorUsername: repo.split('/')[0],
    authorName: repo.split('/')[0],
    quotedAuthorUsername: '',
    hasQuotedTweet: false,
    isTrustedAuthor: true,
    discoverySource: 'github-release',
    discoveryQuery: repo,
    hasLink: true,
    hasVideo: /video|demo/i.test(JSON.stringify(release)),
  };
}

export async function fetchGitHubReleaseCandidates(repos, fetchImpl = fetch) {
  const candidates = [];

  for (const repo of repos) {
    const response = await fetchImpl(`https://api.github.com/repos/${repo}/releases?per_page=3`, {
      headers: {
        'accept': 'application/vnd.github+json',
        'user-agent': 'open-news-scout',
      },
    });

    if (!response.ok) {
      if (response.status === 404 || response.status === 403 || response.status === 429) continue;
      throw new Error(`GitHub releases fetch failed for ${repo}: ${response.status}`);
    }

    const releases = await response.json();
    for (const release of releases) {
      if (release.draft || release.prerelease) continue;
      candidates.push(normalizeReleaseCandidate(repo, release));
    }
  }

  return candidates;
}
