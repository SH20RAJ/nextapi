import { NextResponse } from "next/server";
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
  origin: '*'
});

let i = async (url) => {
  try {
    const response = await fetch(url || 'https://example.com');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function getParameterByName(name, url = window.location.href) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get(name);
}

export async function GET(req, res) {
  try {
    await cors(req, res);

    const { url: rawUrl } = req;
    const url = getParameterByName("url", rawUrl);
    console.log(rawUrl);

    const result = await i(url);

    return new NextResponse(result, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('An error occurred while processing the request.', { status: 500 });
  }
}