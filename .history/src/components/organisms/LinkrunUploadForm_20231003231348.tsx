import React, { FC } from "react";
import axios from 'axios';
import Title from "components/atoms/Title";
import LinkrunUploader from "components/molecules/LinkrunUploader";

// APIレスポンスの型定義
interface ApiResponse {
    presignedUrl: string;
}

const apiClient = axios.create({
    baseURL: 'https://etxpi6wnfc.execute-api.ap-northeast-2.amazonaws.com/prod/linkrun',
    headers: {
        'x-api-key': 'KD2GUzMTxM8a2kE7a9A8U6xCidt36YWT572CJYjr',
    }
});

const LinkrunUploadForm: FC = () => {
    const handleFileUpload = async (file: File) => {
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
        }
    };

    return (
        <div className="flex flex-col items-center p-8 m-8 bg-gray-100 rounded shadow-md">
            <Title level="h2" className="mb-4">LINKRUN Uploader</Title>
            <LinkrunUploader onFileChange={handleFileUpload} />
        </div>
    );
};

export default LinkrunUploadForm;
