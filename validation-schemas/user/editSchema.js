import * as z from 'zod';

export const editUserSchema = z.object({
	firstName: z.string({
		required_error: "Поле обязательно для ввода",
	}).min(1, { message: "Поле обязательно для ввода" }),
	lastName: z
		.string().min(1, { message: "Поле обязательно для ввода" }),
	login: z
		.string().min(1, { message: "Поле обязательно для ввода" }),
	bio: z.string().nullable().optional(),
	roleId: z.string().nullable().optional(),
})