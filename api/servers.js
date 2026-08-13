export default function handler(req, res) {
    res.status(200).json({
        ok: true,
        servers: [
            {
                id: "chorda",
                name: "Chorda",
                icon: "C"
            },
            {
                id: "gaming",
                name: "Gaming",
                icon: "G"
            },
            {
                id: "study",
                name: "Study",
                icon: "S"
            }
        ]
    });
}
