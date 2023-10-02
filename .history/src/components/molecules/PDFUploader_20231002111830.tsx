// src/components/molecules/PDFUploader.tsx

import type { FC, ChangeEvent } from "react";
import Button from "../atoms/Button";

interface PDFUploaderProps {
    onFileChange: (file: File) => void;
}

const PDFUploader: FC<PDFUploaderProps> = ({ onFileChange }) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileChange(e.target.files[0]);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <input type="file" accept=".pdf" onChange={handleFileChange}  id="pdfInput"/>
            <label htmlFor="pdfInput" >
                <Button>PDFを選択</Button>
            </label>
        </div>
    );
};

export default PDFUploader;
