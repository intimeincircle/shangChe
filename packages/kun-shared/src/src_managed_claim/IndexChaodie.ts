// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface IndexChaodie {
  chaodie: number;
  date: string;
}

export function isIndexChaodie(v: any): v is IndexChaodie {
  return (
    ((typeof v['date']) === 'string') &&
    ((typeof v['chaodie']) === 'number')
  );
}
