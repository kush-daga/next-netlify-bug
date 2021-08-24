import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useEffect } from 'react';

const Id = ({ id }: { id: string }) => {
  return <div>Dynamic route - {id}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Id;
