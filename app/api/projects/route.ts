// app/api/projects/route.ts
export async function GET() {
    const headers = {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    };
  
    const res = await fetch("https://api.github.com/repos/HJulie11/Projects_Julie/contents", {
      headers,
    });
  
    const folders = await res.json();
    return Response.json(folders);
  }
  