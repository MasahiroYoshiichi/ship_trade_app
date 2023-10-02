import type { FC } from "react";
import axios from "axios";
import Title from "../atoms/Title";
import PDFUploader from "../molecules/PDFUploader";

const PDFUploadSection: FC = () => {
    const handleFileSelected = (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        axios.post("/api/upload-to-s3", formData)
            .then(response => {
                console.log("Successfully uploaded to S3:", response.data);
            })
            .catch(error => {
                console.error("Failed to upload to S3:", error);
            });
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 rounded shadow-md">
             <Title level="h2" className="mb-4">PDFアップロード</Title>
            <PDFUploader onFileSelected={handleFileSelected} />
        </div>
    );
};

export default PDFUploadSection;
