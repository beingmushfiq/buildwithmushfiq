import { Request, Response } from 'express';

export const getLatestCommit = async (req: Request, res: Response) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    // Fetch events for the user to find the latest push
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch from GitHub');
    }

    const events = await response.json();
    
    // Find the first PushEvent
    const pushEvent = events.find((event: any) => event.type === 'PushEvent');

    if (!pushEvent) {
      return res.status(404).json({ error: 'No recent push events found' });
    }

    const latestCommit = {
      message: pushEvent.payload.commits[0]?.message || 'No commit message',
      repo: pushEvent.repo.name,
      date: pushEvent.created_at,
      url: `https://github.com/${pushEvent.repo.name}/commit/${pushEvent.payload.head}`
    };

    res.json(latestCommit);
  } catch (error) {
    console.error('GitHub API Error:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
};
