import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    const pergutasTexto = [
        {texto : 'Pergunta 1'},
        {texto : 'Pergunta 2'},
        {texto : 'Pergunta 3'},
        {texto : 'Pergunta 4'},
        {texto : 'Pergunta 5'},
        {texto : 'Pergunta 6'},
    ]

    pergutasTexto.forEach(async ({texto}) => {
        await prisma.pergunta.create({
            data: {
                texto
            }
        })
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


