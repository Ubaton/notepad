import { Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout className={'root-layout'}>
        <Sidebar className="p-2 text-red-800">Sidebar</Sidebar>
        <Content className="border bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
