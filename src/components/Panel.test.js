import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from './Panel';

describe('Panel', () => {
  const postsData = {
    posts: [
      {
        id: 1,
        title: 'Post 1',
        op: {
          name: 'Author 1',
        },
        content: 'Content 1',
      },
      {
        id: 2,
        title: 'Post 2',
        op: {
          name: 'Author 2',
        },
        content: 'Content 2',
      },
    ],
  };

  it('renders the correct number of cards', () => {
    render(<Panel postsData={postsData} />);
    const cards = screen.getAllByTestId(/card-\d+/);
    expect(cards).toHaveLength(postsData.posts.length);
  });

  it('renders the correct card content', () => {
    render(<Panel postsData={postsData} />);
    const card1 = screen.getByTestId('card-0');
    const card2 = screen.getByTestId('card-1');

    expect(card1).toHaveTextContent('Post 1');
    expect(card1).toHaveTextContent('Author 1');
    expect(card1).toHaveTextContent('Content 1');

    expect(card2).toHaveTextContent('Post 2');
    expect(card2).toHaveTextContent('Author 2');
    expect(card2).toHaveTextContent('Content 2');
  });
});
