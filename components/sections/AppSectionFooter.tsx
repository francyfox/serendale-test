import { cn } from '@/lib/utils'
import { AppFooterColumns } from '@components/footer-columns/AppFooterColumns'
import { AppFooterContacts } from '@components/footer-contacts/AppFooterContacts'
import { AppMarker } from '@components/tag/AppTag'
import { FooterData } from '@mock/footer'

interface Props {
  className?: string
  data: FooterData
}

export function AppSectionFooter({ data, className } : Props) {
  return (
    <footer className={cn(className, "section-footer mt-10 pt-20 bg-card border")}>
      <AppMarker id="footer" />

      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="mb-10 flex gap-5 justify-between">
            <AppFooterContacts contacts={data.contacts} />
            <AppFooterColumns columns={data.columns} />
          </div>

          <div className="mb-5 text-md text-muted-foreground text-center">
            { data.copyright }
          </div>
        </div>
      </div>
    </footer>
  )
}