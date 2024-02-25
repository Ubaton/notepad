import { ActionsButtonsRow, Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout className={'root-layout'}>
        <Sidebar className="flex justify-between mt-1">
          <ActionsButtonsRow />
        </Sidebar>
        <Content className="border bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
