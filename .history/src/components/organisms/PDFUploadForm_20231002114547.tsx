｀// PDFUploadForm.tsx

import type { FC } from "react";
import axios from 'axios';
import Title from "components/atoms/Title";
import PDFUploader from "components/molecules/PDFUploader";

const API_ENDPOINT = '/your-api-endpoint';
const API_KEY = 'YOUR_API_KEY_HERE';

const PDFUploadForm: FC = () => {
    const handleFileUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await axios.post(API_ENDPOINT, formData, {
                headers: {
                    'x-api-key': API_KEY,
                    'Content-Type': 'multipart/form-data'
                }
            });

            // レスポンスからS3の署名付きURLを取得
            const signedURL = response.data.signedURL;

            // ポップアップでURLを表示
            window.alert(`S3の署名付きURL: ${signedURL}`);
        } catch (error) {
            console.error('PDFのアップロードに失敗しました。', error);
            alert('アップロードに失敗しました。');
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 rounded shadow-md">
            <Title level="h2" className="mb-4">PDF Uploader</Title>
            <PDFUploader onFileChange={handleFileUpload} />
        </div>
    );
};

export default PDFUploadForm;
