import type {FC} from "react";
import {useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import UploadPage from "domains/auth/features/top/page/pdf_upload_page";



const IndexRoutes: FC = () => {
    const {hash, pathname} = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate, hash, pathname]);

        return (
            <Routes>
                <Route path="/" element={<UploadPage/>}/>
            </Routes>
        )
};

export default IndexRoutes;
