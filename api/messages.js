export default function handler(req, res) {

    if (req.method === "GET") {

        res.status(200).json({
            ok: true,
            messages: [
                {
                    id: "1",
                    username: "Alex",
                    avatar: "AX",
                    channel: "general",
                    content: "Welcome to Chorda!",
                    createdAt: new Date().toISOString()
                },
                {
                    id: "2",
                    username: "Sky",
                    avatar: "SK",
                    channel: "general",
                    content: "This is the general channel.",
                    createdAt: new Date().toISOString()
                }
            ]
        });

        return;
    }

    if (req.method === "POST") {

        const body = req.body || {};

        res.status(201).json({
            ok: true,
            message: {
                id: Date.now().toString(),
                username: body.username || "You",
                avatar: body.avatar || "YO",
                channel: body.channel || "general",
                content: body.content || "",
                createdAt: new Date().toISOString()
            }
        });

        return;
    }

    res.status(405).json({
        ok: false,
        error: "Method not allowed"
    });
}
