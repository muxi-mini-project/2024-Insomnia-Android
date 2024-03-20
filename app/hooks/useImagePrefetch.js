import { useEffect } from 'react';
import { Image } from 'react-native';

export const useImagePrefetch = (imageURIs = ['']) => {
  useEffect(() => {
    imageURIs.forEach((uri) => {
      Image.prefetch(uri)
        .then(() => {
          console.log('Image prefetched:', uri);
        })
        .catch((error) => {
          console.error('Failed to prefetch image:', error);
        });
    });
  }, []);
};
