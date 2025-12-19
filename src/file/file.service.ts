import { Injectable } from '@nestjs/common';
import path from 'node:path';
import * as fs from 'node:fs';

@Injectable()
export class FileService {
  upload(file: Express.Multer.File) {
    const uploadDir = path.join(process.cwd(), 'uploads');
    const safeName = path.basename(file.originalname);
    const filePath = path.join(uploadDir, safeName);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    fs.writeFileSync(filePath, file.buffer);

    return { path: path.relative(process.cwd(), filePath) };
  }
}
