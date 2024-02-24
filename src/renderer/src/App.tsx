import { Content, RootLayout, Sidebar } from '@/components'

function App() {
  return (
    <>
      <RootLayout className={'root-layout'}>
        <Sidebar className="p-2">Sidebar</Sidebar>
        <Content className="border bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
