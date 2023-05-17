import { FC } from "react";
import Head from "next/head";

interface IMetaProps {
  title: string;
}

const Meta: FC<IMetaProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default Meta;
