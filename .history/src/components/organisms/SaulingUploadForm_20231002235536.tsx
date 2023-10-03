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
    baseURL: 'https://etxpi6wnfc.execute-api.ap-northeast-2.amazonaws.com/prod/sauling',
    headers: {
        'x-api-key': 'KD2GUzMTxM8a2kE7a9A8U6xCidt36YWT572CJYjr',
        'Content-Type': 'application/json'  // ← ここを変更
    }
});

const SaulingUploadForm: FC = () => {
    const handleFileUpload = async (file: File) => {
        try {
            // FileオブジェクトをBase64でエンコード
            const base64 = await fileToBase64(file);
            
            // Base64エンコードされたデータをJSON形式でAPIに送信
            const response = await apiClient.post<ApiResponse>('', { pdf: base64 });

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
        <div className="flex flex-col items-center p-8 m-8 bg-gray-100 rounded shadow-md">
            <Title level="h2" className="mb-4">PDF Uploader</Title>
            <PDFUploader onFileChange={handleFileUpload} />
        </div>
    );
};

// FileオブジェクトをBase64に変換する関数
const fileToBase64 = async (file: File): Promise<string> => {
    return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
}

export default SaulingUploadForm;
