import AnotherPagesLayout from '@/app/components/layouts/AnotherPagesLayout'

export const metadata = {
  title: 'Pixelmagnet | Projects',
}

export default function ServiceRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AnotherPagesLayout>{children}</AnotherPagesLayout>
}
