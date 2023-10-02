import type { FC, InputHTMLAttributes } from "react";

const FileInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <input type="file" className="hidden" {...props} />;
};

export default FileInput;
