interface Props {
  id: string;
}

export function AppMarker({ id }: Props) {
  return <span id={id} className="sr-only" aria-hidden="true" />
}