import { FC } from "react";
import { ConfirmSignUpForm } from "../../../../types/confirm";

const ConfirmForm: FC<ConfirmSignUpForm> = (ConfirmSignUpForm) => {
    return (
        <div className="space-y-4">
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="text"
                placeholder="確認コード"
                value={ConfirmSignUpForm.confirmationCode}
                onChange={(e) => ConfirmSignUpForm.onConfirmationCodeChange(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                onClick={ConfirmSignUpForm.onConfirmClick}
            >
                確認コードを送信
            </button>
        </div>
    );
};

export default ConfirmForm;
