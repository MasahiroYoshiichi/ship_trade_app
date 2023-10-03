// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import LinkrunUploadForm from "components/organisms/LinkrunUploadForm";
import MeikaiUploadForm from "components/organisms/MeikaiUploadForm";
import SaulingUploadForm from "components/organisms/SaulingUploadForm";
import UniwinUploadForm from "components/organisms/UniwinUploadForm";
import MainTemplate from "components/templates/MainTemplate";



const UploadPage: FC = () => {
    return (
        <MainTemplate>
            <LinkrunUploadForm/>
            <UniwinUploadForm/>
            <SaulingUploadForm/>
            <MeikaiUploadForm/>
        </MainTemplate>
    );
};

export default UploadPage;
