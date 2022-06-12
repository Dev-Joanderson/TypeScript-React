import React from 'react';
import { useIterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useIterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>ola mundo{secondsToTime(mainTime)}</div>;
}
