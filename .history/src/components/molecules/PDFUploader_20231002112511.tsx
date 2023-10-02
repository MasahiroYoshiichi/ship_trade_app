import type { FC, ChangeEvent } from "react";

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
            <label
                htmlFor="pdfInput"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition duration-300 ease-in-out"
            >
                PDFを選択
            </label>
            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                id="pdfInput"
                className="hidden"
            />
        </div>
    );
};

export default PDFUploader;
