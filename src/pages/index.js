import React from 'react';
import GlobalAlertBar from '../components/GlobalAlertBar';
import Panel from '../components/Panel';

export default function Home({ appUser, postsData }) {
  return (
    <>
      <GlobalAlertBar />
      <Panel postsData={postsData} />
    </>
  );
}

export async function getServerSideProps({ params, req }) {
  const postsData = {};
  // Mock data for posts
  const mockPosts = [];
  for (let i = 0; i < 10; i++) {
    const post = {
      content: `This is the content of Post ${i}`,
      op: {
        id: i,
        name: `opName${i}`,
        avatar: `A${i}`,
        image: `link${i}`,
      },
      id: i,
      title: `Post ${i}`,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
    };
    mockPosts.push(post);
  }

  postsData.posts = mockPosts;

  return {
    props: {
      // appUser,
      postsData,
    },
  };
}
