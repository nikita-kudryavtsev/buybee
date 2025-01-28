import { defineEventHandler, getQuery } from 'h3';
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Получаем фильтры из query
  const { query, priceFrom, priceTo, group } = getQuery(event);

  const whereConditions: any = {};

  if (group) {
    whereConditions.productGroup = { name: group }; // Сравнение по имени группы
  }

  if (query) {
    whereConditions.display = {
      contains: query,
    }
  }

  if (priceFrom) {
    whereConditions.price = {
      ...(whereConditions.price || {}),
      gte: parseFloat(String(priceFrom)), // Больше или равно
    };
  }

  if (priceTo) {
    whereConditions.price = {
      ...(whereConditions.price || {}),
      lte: parseFloat(String(priceTo)), // Меньше или равно
    };
  }

  return prisma.product.findMany({
    where: whereConditions,
  });
});