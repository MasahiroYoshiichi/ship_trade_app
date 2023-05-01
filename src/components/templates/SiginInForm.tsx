import type {FC} from "react";
import AwsSignInForm from "../ecosystems/AwsSignInForm";
import Header from "../molecules/Header";


const SignInForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsSignInForm></AwsSignInForm>
        </div>
    )
};

export default SignInForm;
