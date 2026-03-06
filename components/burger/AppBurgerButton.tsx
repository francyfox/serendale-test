'use client'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js'
interface Props {
  className?: string,
  children?: React.ReactNode
}
export function AppBurgerButton({ className, children }: Props) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Icon path={mdiMenu}
                className="size-6"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
          <div className="flex justify-end">
            <DrawerClose asChild>
              <Button variant="outline">
                <Icon
                  path={mdiClose}
                  aria-label="Close"
                  className="size-6"
                />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="px-2">
          { children }
        </div>
      </DrawerContent>
    </Drawer>
  )
}