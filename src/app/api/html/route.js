import NextResponse from 'next/server';

export async function GET(req, res) {
  const url = req.url.searchParams.get('url');

  try {
    const corsResponse = await fetch('https://your-domain.com/api/cors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const corsData = await corsResponse.json();

    if (corsData.status === 'ok') {
      const htmlResponse = await fetch(`https://whollyapi.vercel.app/api/html?url=${url}`);
      const htmlData = await htmlResponse.text();

      return new NextResponse(htmlData, {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      });
    } else {
      return new NextResponse('An error occurred while processing the request.', {
        status: 500,
      });
    }
  } catch (error) {
    console.error(error);

    return new NextResponse('An error occurred while processing the request.', {
      status: 500,
    });
  }
}