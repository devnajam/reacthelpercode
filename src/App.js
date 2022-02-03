import { useEffect, useState } from 'react';
import {
  useAllPrismicDocumentsByType,
  PrismicRichText,
} from '@prismicio/react';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts] = useAllPrismicDocumentsByType('posts');

  useEffect(() => {
    if (posts) {
      setIsLoading(false);
    }
  }, [posts]);

  return (
    <div className='App'>
      <div className='posts'>
        {isLoading && 'Loading...'}
        {!isLoading &&
          posts &&
          posts.map((p) => (
            <Post
              key={p.id}
              title={p.data.post_title[0].text}
              body={p.data.post_body}
            />
          ))}
      </div>
    </div>
  );
}

function Post({ title, body }) {
  return (
    <div className='blogpost'>
      <h1>{title}</h1>
      <PrismicRichText field={body} />
    </div>
  );
}

export default App;
