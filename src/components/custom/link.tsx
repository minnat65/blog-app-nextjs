import Link from "next/link"

export default function CutomLink({ label, href }: { label: string, href: string }) {
  return (
    <>
      <Link
        className="text-black hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        aria-current="page"
        href={href}
        data-te-nav-link-ref
      >
        {label}
      </Link>
    </>
  )
}