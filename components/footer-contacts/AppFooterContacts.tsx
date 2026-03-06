import { cn } from '@/lib/utils'
import { mdiEmail, mdiMapMarker, mdiPhone } from '@mdi/js'
import Icon from '@mdi/react'
import { FooterContacts } from '@mock/footer'
import Link from 'next/link'

interface Props {
  className?: string,
  contacts: FooterContacts
}

export function AppFooterContacts({ className, contacts }: Props) {
  return (
    <ul className={cn(className, "address flex flex-col text-sm text-muted-foreground gap-5")}>
      <li className="flex gap-2">
        <Icon
          path={mdiMapMarker}
          className="size-4 shrink-0"
        />

        { contacts.address }
      </li>
      <li>
        <a
          className="email flex gap-2 hover:text-white transition-colors"
          href={`mailto:${ contacts.email }`}
        >
          <Icon
            path={mdiEmail}
            className="size-4 shrink-0"
          />

          { contacts.email }
        </a>
      </li>
      <li>
        <a
          href={`tel:${ contacts.phone }`}
          className="phone flex gap-2 items-center hover:text-white transition-colors"
        >
          <Icon
            path={mdiPhone}
            className="size-4 shrink-0"
          />
          { contacts.phone }
        </a>
      </li>
    </ul>
  )
}