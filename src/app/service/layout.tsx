import AnotherPagesLayout from '@/app/components/layouts/AnotherPagesLayout'

export const metadata = {
  title: 'Pixelmagnet | Service',
}

export default function ServiceRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AnotherPagesLayout>{children}</AnotherPagesLayout>
}
