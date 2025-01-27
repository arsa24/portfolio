import fs from "fs";
import path from "path";

const pathDocs = path.join(process.cwd(), "public/source/docs");

export default function handler(req, res) {
  try {
    const docs = fs.readdirSync(pathDocs);
    let documentation = [];

    docs.forEach((data) => {
      const folderPath = path.join(pathDocs, data);
      if (fs.lstatSync(folderPath).isDirectory()) {
        const subfolders = fs.readdirSync(folderPath);
        subfolders.forEach((subfolder) => {
          const subfolderPath = path.join(folderPath, subfolder);
          const preview = path
            .join(subfolderPath, fs.readdirSync(subfolderPath)[0])
            .split("/public")[1];
          let finalPath = subfolderPath.split("/public")[1];
          if (fs.lstatSync(subfolderPath).isDirectory()) {
            const files = fs.readdirSync(subfolderPath);
            let x = []
            files.forEach((file) => {
              let finalImg = path.join(subfolderPath, file).split("/public")[1];
              x.push(finalImg);
            });

            documentation.push({ finalPath, subfolder, preview, images: x });
          }
        });
      }
    });

    res.status(200).json({ documentation });
  } catch (error) {
    console.error("Error reading directories:", error.message);
    res.status(500).json({ error: "Failed to read directory structure." });
  }
}
