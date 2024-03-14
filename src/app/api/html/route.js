import { NextResponse } from "next/server";


let i = async (url) => {
  let data = await fetch(url || 'https://example.com');
  data = await data.text();
  return data;
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/\[\\\[\\\]\]/g, '\\\\$&');
  var regex = new RegExp('\[?&\]' + name + '(=(\[^&#\]\*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\\+/g, ' '));
}

export async function GET(req, res) {

  const { url: rawUrl } = req;
  const url = getParameterByName("url", rawUrl);
  console.log(rawUrl);

  const result = await i(url);

  return new NextResponse(result, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}