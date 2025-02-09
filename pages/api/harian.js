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
        const harian = fs.readdirSync(pathDocs)
            .flatMap((yearMonth) => {
                const yearMonthPath = path.join(pathDocs, yearMonth);
                return fs.readdirSync(yearMonthPath)
                    .flatMap((day) => {
                        const dayPath = path.join(yearMonthPath, day);
                        return fs.readdirSync(dayPath)
                            .map((subfolder) => {
                                const subfolderPath = path.join(dayPath, subfolder);
                                const images = fs.readdirSync(subfolderPath)
                                    .map((filename) => `/source/docs/${yearMonth}/${day}/${subfolder}/${filename}`);
                                return {
                                    date: dateFormatter(subfolder),
                                    order: subpathSlicer(subfolder),
                                    images
                                };
                            });
                    });
            })
            .flat()
            .sort((a, b) => {
                const [numA1, numA2] = parseOrder(a.order);
                const [numB1, numB2] = parseOrder(b.order);
                
                if (numA1 !== numB1) {
                    return numA1 - numB1;
                }
                return numA2 - numB2;
            });

        res.status(200).json(harian);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
