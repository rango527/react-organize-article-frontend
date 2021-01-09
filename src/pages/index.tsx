import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { OgpCard } from '~src/components/organisms/OgpCard';

const url = 'https://qiita.com/';

const Index: React.FC = () => {
  const [image, setImage] = useState('image');
  const [description, setDescription] = useState('description');
  const [title, setTitle] = useState('title');

  useEffect(() => {
    const retrieveOgp = async (): Promise<void> => {
      const res = await axios.get(`/api/ogp?url=${url}`);
      const { image, description, title } = res.data;
      console.log(res.data);
      setImage(image);
      setDescription(description);
      setTitle(title);
    };
    retrieveOgp();
  }, []);

  return (
    <div>
      <OgpCard url={url} image={image} description={description} title={title} />
    </div>
  );
};

export default Index;
