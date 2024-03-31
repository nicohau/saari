require("dotenv").config();

export const dynamic = "force-dynamic";

export async function GET(request) {
	var axios = require("axios");
	var data = JSON.stringify({
		collection: "saari-content",
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

	// Getting query parameters
	var url = new URL(request.url);
	var params = url.searchParams;

	// Getting data from the database
	var response = await axios(config);
	var content = response.data.documents;

	var data = [];

	// Parsing the data
	content.forEach((element) => {
		// Checking if the element is intended for the requested page
		if (element.page === params.get("page")) {
			var obj = {};

			// Addding items to object
			if (element.type) {
				obj.type = element.type;
			}
			if (element.title) {
				obj.title = element.title;
			}
			if (element.subtitle) {
				obj.subtitle = element.subtitle;
			}
			if (element.text) {
				obj.text = element.text;
			}
			if (element.ctas) {
				obj.ctas = element.ctas;
			}
			if (element.table) {
				obj.table = element.table;
			}
			if (element.priority) {
				obj.priority = element.priority;
			}

			if (element.type === "hero") {
				obj.heroType = element.heroType;
			}

			if (process.env.DEV === "true") {
				obj.dev = element.dev;
				data.push(obj);
			} else {
				if (!element.dev) {
					data.push(obj);
				}
			}
		}
	});

	// Sorting data by priority
	data.sort((a, b) => (a.priority > b.priority ? 1 : -1));

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
