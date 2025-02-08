import fs from "fs";
import path from "path";

const pathDocs = path.join(process.cwd(), "public/source/docs");

export default function handler(req, res) {
    try {
        let mingguan = [];
        let minggu = 0;

        fs.readdirSync(pathDocs).forEach((yearMonth) => {
            fs.readdirSync(`${pathDocs}/${yearMonth}`).forEach((day) => {
                minggu += 1;
                let subPath = [];
                fs.readdirSync(`${pathDocs}/${yearMonth}/${day}`).forEach((subfolder) => {
                    let img = [];
                    fs.readdirSync(`${pathDocs}/${yearMonth}/${day}/${subfolder}`).forEach((filename) => {
                        img.push(
                         path.join(pathDocs, yearMonth, day, subfolder, filename),
                        );
                    });
                    subPath.push({tanggal:subfolder, img});
                });
                mingguan.push({ minggu: minggu, subPath });
            });
        });
        res.status(200).json(mingguan);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
