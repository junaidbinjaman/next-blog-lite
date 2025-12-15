export function caption({children}: {children: string}) {
  return (
    <p className="leading-7 font-source-sans-pro text-xs not-italic">{children}</p>
  )
}
