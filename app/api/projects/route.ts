export async function GET() {
    const token = process.env.GITHUB_TOKEN;
  
    if (!token) {
      return new Response("Missing token", { status: 500 });
    }
  
    const res = await fetch("https://api.github.com/repos/HJulie11/Projects_Julie/contents", {
      headers: {
        Authorization: `token ${token}`, // Or try `Bearer ${token}`
      },
    });
  
    const data = await res.text();
  
    if (!res.ok) {
      console.error("GitHub API error:", res.status, data);
      return new Response(data, { status: res.status });
    }
  
    return new Response(data, { status: 200 });
  }
  