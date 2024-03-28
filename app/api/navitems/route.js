export const dynamic = "force-dynamic";

export async function GET() {
	var axios = require("axios");
	var data = JSON.stringify({
		collection: "saari-nav",
		database: "saari",
		dataSource: "taco-partio",
	});

	var config = {
		method: "post",
		url: "https://eu-central-1.aws.data.mongodb-api.com/app/data-uhywv/endpoint/data/v1/action/find",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Request-Headers": "*",
			"api-key": "Kjj90lrKC9ezp7oyw9yI3PsXyAWhjtrCQod2h94ghxaFIpA9r57dE4qy2D1oqv6v",
		},
		data: data,
	};

	// Getting data from the database
	var response = await axios(config);
	var content = response.data.documents;

	var data = [];

	// Parsing the data
	content.forEach((element) => {
		var obj = {
			title: element.title,
			uri: element.uri,
			external: element.external,
			isButton: element.isButton,
			priority: element.priority,
		};
		if (element.visibility) {
			data.push(obj);
		}
	});

	// Returning the data
	if (data) {
		return new Response(JSON.stringify(data), {
			headers: { "content-type": "application/json" },
		});
	} else {
		return new Response(
			JSON.stringify({
				error: "No content found",
			}),
			{
				headers: { "content-type": "application/json" },
			}
		);
	}
}
