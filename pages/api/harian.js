import fs from "fs";
import path from "path";

const pathDocs = path.join(process.cwd(), "public/source/docs");

export default function handler(req, res) {
    try {
        const harian = fs.readdirSync(pathDocs).map((yearMonth) => {
            return fs.readdirSync(`${pathDocs}/${yearMonth}`).map((day) => {
                return fs.readdirSync(`${pathDocs}/${yearMonth}/${day}`).map((subfolder) => {
                    const images = fs.readdirSync(`${pathDocs}/${yearMonth}/${day}/${subfolder}`)
                        .map((filename) => (
                            path.join(pathDocs, yearMonth, day, subfolder, filename)
                        ));
                    return {
                        subfolder,
                        images
                    };
                });
            }).flat();
        }).flat();

        res.status(200).json(harian);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

