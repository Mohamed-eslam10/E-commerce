interface List {
  name: string;
  path: string;
}
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const list: List[] = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: 'contact' },
    { name: 'About', path: 'about' },
    { name: 'Sign Up', path: 'login' },

  ]
  return (

    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden bg-slate-100 p-1 rounded cursor-pointer border border-slate-200">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] transition-all duration-500 ease-in-out border border-slate-500 rounded bg-slate-50">
        <div className="mt-8 flex flex-col gap-5 p-3">

          <h1 className="font-semibold text-2xl">Exclusive</h1>
          {
            list.map((item, index) => (
              <Link key={index} className="hover:bg-slate-200 p-2 rounded" href={`/${item.path}`}>{item.name}</Link>

            ))
          }
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu