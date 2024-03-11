import { NextResponse } from "next/server";

// export const GET = async () => {

//   const res = await fetch("https://picsum.photos/200/300");
//   const blob = await res.blob();

//   const headers = new Headers();

//   headers.set("Content-Type", "image/*");
  
//   return new NextResponse(blob, { status: 200, statusText: "OK", headers });
// };

export  async function GET(req, res) {
  const img = await fetch("https://picsum.photos/200/300");
  const blob = await img.blob();
  const text = await blob.arrayBuffer();
  res.setHeader("content-Type", "text/plain");
  const encoded = Buffer.from(text).toString("base64");
  res.send(encoded);
}