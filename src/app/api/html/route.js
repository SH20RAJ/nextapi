import { NextResponse } from "next/server";
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
  origin: '*'
});

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
  await cors(req, res);

  const { url: rawUrl } = req;
  const urlSearchParams = new URLSearchParams(rawUrl.search);
  const url = getParameterByName("url", rawUrl);
  console.log(rawUrl);

  const result = await i(url);

  return new NextResponse(`${result}`);
}