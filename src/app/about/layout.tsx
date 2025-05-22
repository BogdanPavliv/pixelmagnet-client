import AnotherPagesLayout from '@/app/components/layouts/AnotherPagesLayout'

export const metadata = {
  title: 'Pixelmagnet | About',
}

export default function AboutRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AnotherPagesLayout>{children}</AnotherPagesLayout>
}
