// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface VolumeIndicatorItem {
  bb30: number;
  date: Date;
}

export function isVolumeIndicatorItem(v: any): v is VolumeIndicatorItem {
  return (
    (v['date'] && (v['date'] instanceof Date)) &&
    ((typeof v['bb30']) === 'number')
  );
}
