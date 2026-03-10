const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface LatestCommit {
  message: string;
  repo: string;
  date: string;
  url: string;
}

export const fetchLatestCommit = async (username: string): Promise<LatestCommit | null> => {
  try {
    const response = await fetch(`${API_URL}/api/github/latest-commit?username=${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest commit');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest commit:', error);
    return null;
  }
};
