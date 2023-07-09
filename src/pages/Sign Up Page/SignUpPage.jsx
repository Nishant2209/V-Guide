import SignUp from "../../Components/SignUp_Section/SignUp";

const SignUpPage = (props) => {
  return (
    <div>
      <SignUp showAlert={props.showAlert} />
    </div>
  );
};

export default SignUpPage;
