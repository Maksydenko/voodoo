import { FC } from "react";
import Form from "./Form/Form";

const SignUp: FC = () => (
  <section className="sign-up">
    <div className="sign-up__container">
      <h2 className="sign-up__title">
        Be the first one to know when we launch our beta!
      </h2>
      <Form />
    </div>
  </section>
);

export default SignUp;
