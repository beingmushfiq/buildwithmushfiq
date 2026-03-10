export interface LatestCommit {
  message: string;
  repo: string;
  date: string;
  url: string;
}

export const fetchLatestCommit = async (username: string): Promise<LatestCommit | null> => {
  try {
    // Direct GitHub API call from frontend
    const response = await fetch(`https://api.github.com/repos/${username}/buildwithmushfiq/commits/main`);
    
    if (!response.ok) {
      // Fallback to searching all repos if specific repo fails or user changed it
      const searchResponse = await fetch(`https://api.github.com/users/${username}/events/public`);
      if (!searchResponse.ok) throw new Error('Failed to fetch from GitHub');
      
      const events = await searchResponse.json();
      const lastPush = events.find((e: any) => e.type === 'PushEvent');
      
      if (!lastPush) return null;

      return {
        message: lastPush.payload.commits[0]?.message || 'No message',
        repo: lastPush.repo.name,
        date: new Date(lastPush.created_at).toLocaleDateString(),
        url: `https://github.com/${lastPush.repo.name}/commit/${lastPush.payload.head}`
      };
    }

    const commitData = await response.json();
    return {
      message: commitData.commit.message,
      repo: `${username}/buildwithmushfiq`,
      date: new Date(commitData.commit.author.date).toLocaleDateString(),
      url: commitData.html_url
    };
  } catch (error) {
    console.error('Error fetching latest commit:', error);
    return null;
  }
};
