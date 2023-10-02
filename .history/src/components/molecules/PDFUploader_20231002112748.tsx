import type { FC, ChangeEvent } from "react";
import { useState } from 'react';  // useStateのインポート

interface PDFUploaderProps {
    onFileChange: (file: File) => void;
}

const PDFUploader: FC<PDFUploaderProps> = ({ onFileChange }) => {
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);  // 選択したファイル名を保持するステート

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFileName(file.name);  // ファイル名をステートにセット
            onFileChange(file);
        }
    };

    return (
        <div className="flex flex-col items-start space-y-4">
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
            {selectedFileName ?? <span className="text-sm text-gray-600">選択されたファイル: {selectedFileName}</span>}
        </div>
    );
};

export default PDFUploader;
