import { FC } from "react";

import Alpha from "./Alpha/Alpha";
import Products from "./Products/Products";
import SignUp from "./SignUp/SignUp";

const Home: FC = () => (
  <>
    <Alpha />
    <Products />
    <SignUp />
  </>
);

export default Home;
