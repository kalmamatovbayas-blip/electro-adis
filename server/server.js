import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { name, phone, course, comment } = req.body;

  const text = `
📥 Жаңы катталуу

👤 Аты: ${name}
📞 Телефон: ${phone}
📚 Курс: ${course}

💬 Комментарий:
${comment}
`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
          text,
        }),
      }
    );

    const data = await response.json();

    console.log("Telegram status:", response.status);
console.log("Telegram response:", data);

    if (!data.ok) {
      return res.status(400).json(data);
    }

    res.json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`);
});