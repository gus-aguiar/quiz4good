import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    const pergutasTexto = [
        {texto : 'Pergunta 1',
        resposta : 'Resposta 1',
        stack : 'react'},
        {texto : 'Pergunta 2',
        resposta : 'Resposta 2',
        stack : 'node'},
        {texto : 'Pergunta 3',
        resposta : 'Resposta 3',
        stack : 'javascript'},
        {texto : 'Pergunta 4',
        resposta : 'Resposta 4',
        stack : 'react'},
        {texto : 'Pergunta 5',
        resposta : 'Resposta 5',
        stack : 'node'},
        {texto : 'Pergunta 6',
        resposta : 'Resposta 6',
        stack : 'javascript'},
    ]

    pergutasTexto.forEach(async ({texto, resposta, stack}) => {
        await prisma.pergunta.create({
            data: {
                texto,
                resposta,
                stack,
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


