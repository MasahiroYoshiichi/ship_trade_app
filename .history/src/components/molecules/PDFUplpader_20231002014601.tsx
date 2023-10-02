import type { FC, ChangeEvent } from "react";
import Button from "../atoms/Button";
import FileInput from "../atoms/FileInput";

interface PDFUploaderProps {
    onFileSelected: (file: File) => void;
}

const PDFUploader: FC<PDFUploaderProps> = ({ onFileSelected }) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            onFileSelected(file);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <label className="cursor-pointer">
                <FileInput onChange={handleFileChange} accept=".pdf" />
                <Button>ファイルを選択</Button>
            </label>
            <Button>アップロード</Button>
        </div>
    );
};

export default PDFUploader;
