const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface LatestCommit {
  message: string;
  repo: string;
  date: string;
  url: string;
}

export const fetchLatestCommit = async (username: string): Promise<LatestCommit | null> => {
  try {
    // Ensure we don't double up on /api if VITE_API_URL already includes it
    const baseUrl = API_URL.endsWith('/api') ? API_URL : `${API_URL}/api`;
    const response = await fetch(`${baseUrl}/github/latest-commit?username=${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest commit');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest commit:', error);
    return null;
  }
};
