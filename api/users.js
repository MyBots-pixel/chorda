export default function handler(req, res) {

    res.status(200).json({
        ok: true,
        users: [
            {
                id: "alex",
                username: "Alex",
                status: "online",
                avatar: "AX"
            },
            {
                id: "sky",
                username: "Sky",
                status: "online",
                avatar: "SK"
            },
            {
                id: "jamie",
                username: "Jamie",
                status: "online",
                avatar: "JM"
            },
            {
                id: "riley",
                username: "Riley",
                status: "online",
                avatar: "RB"
            }
        ]
    });
}
