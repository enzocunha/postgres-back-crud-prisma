import prisma from "@/lib/prisma";

const userController = {
	async getUsers() {
		const users = await prisma.User.findMany();
		return users;
	},

	async getUser(id) {
		const user = await prisma.User.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		return user;
	},

	async createUser({ email, name }) {
		const user = await prisma.User.create({
			data: {
				email: email,
                name: name,
			},
		});
		return user;
	},

	async updateUser({ id, email, name }) {
		const user = await prisma.User.update({
			where: {
				id: parseInt(id),
			},
			data: {
				email: email,
                name: name,
			},
		});
		return user;
	},

	async deleteUser(id) {
		const user = await prisma.User.delete({
			where: {
				id: parseInt(id),
			},
		});
		return user;
	},
};

export default userController;