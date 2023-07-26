import  express  from "express";
import prisma from "./db";
import CORS from "cors";

const app = express();
app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/perguntas/:quantity", async (req, res) => {
    try {
        const everyIdInTable = await prisma.pergunta.findMany({
            select: { id: true },
        });
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
        
        res.status(200).json({data: randomElementFromTable});
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
        }
        
    }
    
})

export default app;