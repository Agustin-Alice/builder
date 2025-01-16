import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BuilderComponent, builder } from '@builder.io/react';
import '../../builder/builder-setup';

builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY);

const BuilderPage: React.FC = () => {
    
  const location = useLocation();
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {

    const fetchContent = async () => {
      const pageContent = await builder
        .get('page', { url: location.pathname })
        .promise();
        setContent(pageContent);
        setNotFound(!pageContent);
        console.log("Va la pegada,",{ pageContent})
    };

    fetchContent();
  }, [location.pathname]);

  if (notFound) {
    return <div>Página no encontrada</div>;
  }

  return (
    <div>
      <BuilderComponent model="page" content={content} />
    </div>
  );
};

export default BuilderPage;