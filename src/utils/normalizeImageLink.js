import { ORIGIN } from '../components/App/api';

export const normalizeImageLink = (imageLink) => {
  if (typeof imageLink === 'string' && imageLink.match('base64')) {
    return imageLink;
  }
  return `${ORIGIN}${imageLink}`;
};
