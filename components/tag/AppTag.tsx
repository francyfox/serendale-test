import { Fragment } from 'react'

interface Props {
  id: string;
}

export function AppMarker({ id }: Props) {
  return (
    <Fragment>
      <a name={id}></a>
      <h2 className="hidden">{ id }</h2>
    </Fragment>
  )
}