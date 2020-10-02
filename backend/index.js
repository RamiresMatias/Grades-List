import express from "express";
import cors from "cors";
import {
    db
} from "./models/index.js";
import {
    gradesRouter
} from "./routes/gradesRouter.js";

const app = express();

(async () => {
    try {
        await db.mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.log("Erro ao conectar no banco");
        process.exit();
    }
})();

app.use(
    cors({
        origin: "http://localhost:3001",
    })
);

app.use(express.json());
app.use(gradesRouter);

app.listen(db.port, () => {
    console.log("API Started");
});