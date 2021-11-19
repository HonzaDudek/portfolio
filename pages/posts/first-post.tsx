import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <span>Back to home</span>
        </Link>
      </h2>
    </Layout>
  );
}
