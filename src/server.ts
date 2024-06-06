import dotenv from 'dotenv';  // ModuleJs import ... from .... ; ishlatiladi. // CommonJsda const .... = require("....."); ishlatiladi.
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MOGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
})
.catch((err) => console.log("ERROR on connection MongoDB", err));
