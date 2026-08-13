export default function handler(req, res) {
    res.status(200).json({
        ok: true,
        channels: [
            {
                id: "general",
                name: "general",
                type: "text"
            },
            {
                id: "announcements",
                name: "announcements",
                type: "text"
            },
            {
                id: "chat",
                name: "chat",
                type: "text"
            },
            {
                id: "memes",
                name: "memes",
                type: "text"
            },
            {
                id: "support",
                name: "support",
                type: "text"
            }
        ]
    });
}
