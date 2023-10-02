// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import PDFUploadForm from "components/organisms/PDFUploadForm";
import MainTemplate from '../../../.history/src/components/templates/MainTemplate_20231002020305';


const UploadPage: FC = () => {
    return (
        <MainTemplate>
            < PDFUploadForm />
        </MainTemplate>
    );
};

export default UploadPage;
