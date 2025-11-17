export const SCREEN_MEDIA = [
  { value: '(max-width: 500px)', type: 'mobile' },
  { value: '(min-width: 501px) and (max-width: 1024px)', type: 'tablet' },
  { value: '(min-width: 1025px)', type: 'desktop' },
];
export type SCREEN_TYPE = 'mobile' | 'tablet' | 'desktop';

export const mediaQueries = SCREEN_MEDIA.map((item) => ({
  query: window.matchMedia(item.value),
  type: item.type as SCREEN_TYPE,
}));

export const checkScreen = () => {
  const matched = mediaQueries.find((mq) => mq.query.matches);
  if (matched) {
    return matched.type;
  }
};
