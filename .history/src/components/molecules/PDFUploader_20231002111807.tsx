// src/components/molecules/PDFUploader.tsx

import type { FC, ChangeEvent } from "react";
import Button from "../atoms/Button";

interface PDFUploaderProps {
    onFileChange: (file: File) => void;
}

const PDFUploader: FC<PDFUploaderProps> = ({ onFileChange }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileChange(e.target.files[0]);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex items-center space-x-4">
            <input 
                ref={fileInputRef}
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange} 
                className="hidden" 
            />
            <Button onClick={handleButtonClick}>PDFを選択</Button>
        </div>
    );
};

export default PDFUploader;
