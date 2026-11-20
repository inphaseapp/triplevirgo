const canonicalHostname = 'triplevirgo.com';

export default function withinCanonical(request) {
  const url = new URL(request.url);

  if (url.hostname === canonicalHostname) return;

  url.protocol = 'https:';
  url.hostname = canonicalHostname;
  url.port = '';
  return Response.redirect(url, 307);
}

export const config = {
  path: ['/within', '/within/*'],
  onError: 'fail',
};
