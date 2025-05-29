import { formatDistanceToNow, parseISO } from "date-fns";

export default function TimeAgo({ isoDate, className = "" }) {
  const date = parseISO(isoDate);
  const result = formatDistanceToNow(date, { addSuffix: true });

  return <span className={className}>{result}</span>;
}