export const dynamic = "force-dynamic";

export async function GET() {
	return new Response(
		JSON.stringify({
			error: "No content found",
		}),
		{
			headers: { "content-type": "application/json" },
		}
	);
}
