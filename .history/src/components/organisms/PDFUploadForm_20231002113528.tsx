// src/components/organisms/PDFUploadForm.tsx

import type { FC } from "react";
import axios from 'axios';
import PDFUploader from "components/molecules/PDFUploader";
import Title from "components/atoms/Title";


const PDFUploadForm: FC = () => {
    const handleFileUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            await axios.post('/your-api-endpoint', formData);
            alert('アップロードに成功しました！');
        } catch (error) {
            console.error('PDFのアップロードに失敗しました。', error);
            alert('アップロードに失敗しました。');
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 rounded shadow-md">
            <Title level="h2" className="mb-4">PDF Uploader</Tit>
            <PDFUploader onFileChange={handleFileUpload} />
        </div>
    );
};

export default PDFUploadForm;
