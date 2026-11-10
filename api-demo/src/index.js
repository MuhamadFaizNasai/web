export default {
  async fetch(request) {
    return Response.json(
      { pesan: "Halo dari Cloudflare Workers", waktu: new Date().toISOString() },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
  },
};