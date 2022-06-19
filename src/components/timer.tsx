import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
