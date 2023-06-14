import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Panel({ postsData }) {
  return (
    <div>
      {postsData.posts.map((post, index) => (
        <Card
          key={post.id}
          sx={{ marginBottom: '16px' }}
          data-testid={`card-${index}`}
        >
          <CardHeader title={post.title} subheader={post.op.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
