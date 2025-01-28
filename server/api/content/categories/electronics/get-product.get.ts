import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id)
    }
  })

  if (product) {
    return product
  }

  return createError({
    message: 'Продукт не найден',
    statusCode: 500,
  })
})