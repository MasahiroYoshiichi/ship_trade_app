import type { FC } from "react";
import axios from 'axios';
import Title from "components/atoms/Title";
import LinkrunUploader from "components/molecules/LinkrunUploader";

const LinkrunUploadForm: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [presignedUrl, setPresignedUrl] = useState<string | null>(null);

    const handleFileUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await apiClient.post<ApiResponse>('', formData);
            setPresignedUrl(response.data.presignedUrl);
            setShowModal(true);
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

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <p>以下のURLからファイルをダウンロードできます：</p>
                        <a href={presignedUrl} target="_blank" rel="noopener noreferrer">{presignedUrl}</a>
                        <button onClick={() => setShowModal(false)}>閉じる</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default LinkrunUploadForm;
