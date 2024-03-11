export default async function GET(req, res) {
    const img = await fetch("https://picsum.photos/200/300");
    const blob = await img.blob();
    const text = await blob.arrayBuffer();
    res.setHeader("content-Type", "text/plain");
    const encoded = Buffer.from(text).toString("base64");
    res.send(encoded);
  }