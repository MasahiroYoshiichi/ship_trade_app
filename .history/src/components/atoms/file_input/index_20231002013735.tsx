import type { FC, InputHTMLAttributes } from "react";

const FileInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <input type="file" {...props} />;
};

export default FileInput;
