require("dotenv").config();
export const dynamic = "force-dynamic";

export async function GET() {
	var axios = require("axios");
	var data = JSON.stringify({
		collection: "saari-nav",
		database: process.env.DATABASE,
		dataSource: process.env.DATA_SOURCE,
	});

	var config = {
		method: "post",
		url: process.env.API_URL,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Request-Headers": "*",
			"api-key": process.env.API_KEY,
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
		if (process.env.DEV === "true") {
			obj.visibility = element.visibility;
			data.push(obj);
		} else {
			if (element.visibility) {
				data.push(obj);
			}
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
