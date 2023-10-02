// src/components/molecules/PDFUploader.tsx

import type { FC, ChangeEvent } from "react";
import Button from "../atoms/Button";

interface PDFUploaderProps {
    onFileChange: (file: File) => void;
}

const PDFUploader: FC<PDFUploaderProps> = ({ onFileChange }) => {

    return (
        <div className="flex items-center space-x-4">
            <label htmlFor="pdfInput" >
                <Button>PDFを選択</Button>
            </label>
        </div>
    );
};

export default PDFUploader;
