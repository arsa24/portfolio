import fs from "fs";
import path from "path";

const pathDocs = path.join(process.cwd(), "public/source/docs");

function dateFormatter(date) {
    const month = ["Januari", "Februari", "Maret", "April"];
    const dateSplit = date.split("-");
    const day = dateSplit[2];
    return `${day.charAt(0).toUpperCase()}${day.substring(1)}, ${dateSplit[1]} - ${month[Number(dateSplit[0]) - 1]} - 2025`;
}

function subpathSlicer(subpath) {
    const pathSlice = subpath.split("-");
    return `${pathSlice[0]}-${pathSlice[1]}`;
}

function parseOrder(order) {
    return order.split("-").map(num => parseInt(num, 10));
}

export default function handler(req, res) {
    try {
        let mingguan = [];
        let minggu = 0;

        fs.readdirSync(pathDocs).forEach((yearMonth) => {
            fs.readdirSync(path.join(pathDocs, yearMonth)).forEach((day) => {
                minggu += 1;
                let subPath = [];

                fs.readdirSync(path.join(pathDocs, yearMonth, day)).forEach((subfolder) => {
                    let img = [];

                    fs.readdirSync(path.join(pathDocs, yearMonth, day, subfolder)).forEach((filename) => {
                        img.push(`/source/docs/${yearMonth}/${day}/${subfolder}/${filename}`);
                    });

                    subPath.push({
                        tanggal: dateFormatter(subfolder),
                        order: subpathSlicer(subfolder),
                        img
                    });
                });

                mingguan.push({ minggu, path: subPath });
            });
        });

        mingguan.forEach((mingguObj) => {
            mingguObj.path.sort((a, b) => {
                const [numA1, numA2] = parseOrder(a.order);
                const [numB1, numB2] = parseOrder(b.order);

                if (numA1 !== numB1) {
                    return numA1 - numB1;
                }
                return numA2 - numB2;
            });
        });

        res.status(200).json(mingguan);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
