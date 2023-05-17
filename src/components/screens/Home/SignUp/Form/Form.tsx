import { FC, FormEvent } from "react";

const Form: FC = () => {
  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="sign-up__form form" onSubmit={handleSubmit}>
      <input type="email" placeholder="E-mail" className="form__input" />
      <button type="submit" className="form__submit">
        Sign-up
      </button>
    </form>
  );
};

export default Form;
