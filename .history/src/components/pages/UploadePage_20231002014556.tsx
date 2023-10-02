import type { FC } from "react";
import PDFUploadSection from "../organisms/PDFUploadSection";
import MainTemplate from "../templates/MainTemplate";

const UploadPage: FC = () => {
    return (
        <MainTemplate>
            <PDFUploadSection />
        </MainTemplate>
    );
};

export default UploadPage;
