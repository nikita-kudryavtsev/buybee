import * as z from 'zod';

export const userLoginSchema = z.object({
	login: z.string({
		required_error: "Поле обязательно для ввода",
	}),
	password: z
		.string()
		.min(6, {
			message: "Пароль должен быть не менее 6 символов",
		})
		.max(30, {
			message: "Максимальная длина пароля 30 символов",
		}),
})