import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    const pergutasTexto = [
        {texto : 'Pergunta 1',
        resposta : 'Resposta 1'},
        {texto : 'Pergunta 2',
        resposta : 'Resposta 2'},
        {texto : 'Pergunta 3',
        resposta : 'Resposta 3'},
        {texto : 'Pergunta 4',
        resposta : 'Resposta 4'},
        {texto : 'Pergunta 5',
        resposta : 'Resposta 5'},
        {texto : 'Pergunta 6',
        resposta : 'Resposta 6'},
    ]

    pergutasTexto.forEach(async ({texto, resposta}) => {
        await prisma.pergunta.create({
            data: {
                texto,
                resposta,
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


