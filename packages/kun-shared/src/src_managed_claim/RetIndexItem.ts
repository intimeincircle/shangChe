// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface RetIndexItem {
  code: string;
  name: string;
}

export function isRetIndexItem(v: any): v is RetIndexItem {
  return (
    ((typeof v['name']) === 'string') &&
    ((typeof v['code']) === 'string')
  );
}
