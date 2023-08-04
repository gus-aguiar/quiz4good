import { Request, Response, NextFunction } from 'express';
import prisma from '../modules/db';

export const fetchPerguntas = async (req: Request, res: Response, next: NextFunction) => {
  try {
        const everyIdInTable = await prisma.pergunta.findMany({
            where: {
                stack: req.params.stack,
            }
        });

        if (everyIdInTable.length >= +req.params.quantity) {
            const idArray = everyIdInTable.map((element) => element.id);
            let perguntas: number[]= [];
            for (let i = 0; i < +req.params.quantity; i++) {
                const randomIndex = Math.floor(Math.random() * idArray.length);
                const randomIdFromTable = idArray[randomIndex];
                if (perguntas.includes(randomIdFromTable)) {
                    i--;
                    continue;
                }
                perguntas.push(randomIdFromTable);
            }
            
            const randomElementFromTable = await prisma.pergunta.findMany({
                where: {
                    id: { in: perguntas },
                },
            });
            
            return res.status(200).json({data: randomElementFromTable});
        } else {
            return res.status(400).json({ message: 'Estás loco' });
        }

        
    } catch (error) {
        next(error);
        
    }
}