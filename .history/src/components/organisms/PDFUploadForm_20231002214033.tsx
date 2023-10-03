import type { FC } from "react";
import axios from 'axios';
import Title from "components/atoms/Title";
import PDFUploader from "components/molecules/PDFUploader";

// 1. APIレスポンスの型定義
interface ApiResponse {
    signedURL: string;
}

// 2. axiosのインスタンス作成
const apiClient = axios.create({
    baseURL: 'https://etxpi6wnfc.execute-api.ap-northeast-2.amazonaws.com/prod/textract',
    headers: {
        'x-api-key': 'yq41hiqhhN6zPO8rEbwCf1CIIhqkuc7s94Wp8PoK',
        'Content-Type': 'multipart/form-data'
    }
});

const PDFUploadForm: FC = () => {
    const handleFileUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            // 型付けされたAPIレスポンス
            const response = await apiClient.post<ApiResponse>('', formData);

            // ポップアップでURLを表示
            window.alert(`S3の署名付きURL: ${response.data.signedURL}`);
        } catch (error) {
            // 4. エラーレスポンスのハンドリング
            if (axios.isAxiosError(error) && error.response) {
                console.error('APIのエラーレスポンス:', error.response.data);
            } else {
                console.error('PDFのアップロードに失敗しました。', error);
            }
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
