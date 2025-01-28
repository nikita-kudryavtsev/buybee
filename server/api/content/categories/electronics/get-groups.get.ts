import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const { category } = getQuery(event)
  try {
    return await prisma.productGroup.findMany({
      // where: { category: { name: category }}}
      // where: { category: { name: category }}}
    });   // Возвращаем роли
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Ошибка при загрузке групп',
    });
  }
  // return [
  //   {
  //   background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //   title: 'Ноутбуки'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Телефоны'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Планшеты'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Всякая всячина'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Электропылесосы'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Микроволновки'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Макроволновки'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Стиральные машины'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Автомобили'
  //   },
  //   {
  //     background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
  //     title: 'Электросамокаты'
  //   },
  // ]
})