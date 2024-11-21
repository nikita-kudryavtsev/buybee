import authMiddleware from '~/server/serverMiddleware/auth'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  // console.log({query})
  await authMiddleware(event)
  return [
    {
    background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
    title: 'Ноутбуки'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Телефоны'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Планшеты'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Всякая всячина'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Электропылесосы'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Микроволновки'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Макроволновки'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Стиральные машины'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Автомобили'
    },
    {
      background: 'background-image: url(\'https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg\')',
      title: 'Электросамокаты'
    },
  ]
})