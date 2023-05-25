import userController from "@/controllers/userController";

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const users = await userController.getUsers();
				res.status(200).json(users);
			} catch (error) {
				res.status(500).json({
					error: "Error retrieving the users " + error.message,
				});
			}
			break;

		case "POST":
			try {
				const { email, name } = req.body;

				if (!email) {
					return res.status(400).json({ error: "Name is required" });
				}

				const user = await userController.createUser({ email, name });
				res.status(201).json(user);
			} catch (error) {
				res.status(500).json({
					error: "Error creating the user " + error.message,
				});
			}
			break;

		default:
			res.status(405).json({ error: "Method not allowed" });
			break;
	}
}
