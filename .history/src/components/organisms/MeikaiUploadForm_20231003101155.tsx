import type { FC } from "react";
import axios from 'axios';
import Title from "components/atoms/Title";
import PDFUploader from "components/molecules/LinkrunUploader";
import MeikaiUploader from "components/molecules/MeikaiUploader";

// 1. APIレスポンスの型定義
interface ApiResponse {
    signedURL: string;
}

// 2. axiosのインスタンス作成
const apiClient = axios.create({
    baseURL: 'https://etxpi6wnfc.execute-api.ap-northeast-2.amazonaws.com/prod/meikai',
    headers: {
        'x-api-key': 'KD2GUzMTxM8a2kE7a9A8U6xCidt36YWT572CJYjr',
        'Content-Type': 'application/json'  // ← ここを変更
    }
});

const MeikaiUploadForm: FC = () => {
    const handleFileUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await apiClient.post<ApiResponse>('', formData);
            // ポップアップでURLを表示
            window.alert(`S3の署名付きURL: ${response.data.presignedUrl}`);
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
        <div className="flex flex-col items-center p-8 m-8 bg-gray-100 rounded shadow-md">
            <Title level="h2" className="mb-4">MEIKAI Uploader</Title>
            <MeikaiUploader onFileChange={handleFileUpload} />
        </div>
    );
};

export default MeikaiUploadForm;
