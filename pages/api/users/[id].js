import userController from "@/controllers/userController";

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			try {
				const user = await userController.getUser(id);

                if (!user) {
                    return res.status(400).json({ error: "User not found" });
                }

				res.status(200).json(user);
			} catch (error) {
				res.status(500).json({
					error: "Error retrieving the user " + error.message,
				});
			}
			break;

		case "PUT":
			try {
				const { email, name } = req.body;
				const user = await userController.updateUser({
					id,
					email,
                    name,
				});
				res.status(200).json(user);
			} catch (error) {
				res.status(500).json({
					error: "Error updating the user " + error.message,
				});
			}
			break;

		case "DELETE":
			try {
				const user = await userController.deleteUser(id);
				res.status(200).json(user);
			} catch (error) {
				res.status(500).json({
					error: "Error deleting the user " + error.message,
				});
			}
			break;

		default:
			res.status(405).json({ error: "Method not allowed" });
			break;
	}
}