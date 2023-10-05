import { useState, FC } from "react"; // useStateをインポート]
import axios from 'axios';
import Title from "components/atoms/Title";
import SaulingUploader from "components/molecules/SaulingUploader";

// 1. APIレスポンスの型定義
interface ApiResponse {
    presignedUrl: string;
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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFileUpload = async (file: File) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await apiClient.post<ApiResponse>('', formData);
            const presignedUrl = response.data.presignedUrl;

            // 署名付きURLを使ってファイルをダウンロード
            window.open(presignedUrl, '_blank');

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error('APIのエラーレスポンス:', error.response.data);
            } else {
                console.error('PDFのアップロードに失敗しました。', error);
            }
            alert('アップロードに失敗しました。');
        } finally {
            setIsLoading(false); // ローディング終了
        }
    };

    return (
        <div className="flex flex-col items-center p-8 m-8 bg-gray-100 rounded shadow-md">
            <Title level="h2" className="mb-4">SAULING Uploader</Title>
            <SaulingUploader onFileChange={handleFileUpload} />
            {isLoading && <p>A/Nを取得中です</p>}
        </div>
    );
};

export default SaulingUploadForm;
