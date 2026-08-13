export default function handler(req, res) {
    res.status(200).json({
        ok: true,
        app: "Chorda",
        message: "Chorda backend is working!"
    });
}
