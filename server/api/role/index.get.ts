import { defineEventHandler } from 'h3';
import prisma from "~/lib/prisma";

// Обработчик запроса на получение всех ролей
export default defineEventHandler(async () => {
  try {
    return await prisma.role.findMany();   // Возвращаем роли
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Ошибка при получении списка ролей',
    });
  }
});