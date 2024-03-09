// src/app/api/html/route.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL query parameter' });
  }

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch website HTML');
    }

    const html = await response.text();
    res.status(200).send(html);
  } catch (error) {
    console.error('Error fetching website HTML:', error);
    res.status(500).json({ error: 'Failed to fetch website HTML' });
  }
}
