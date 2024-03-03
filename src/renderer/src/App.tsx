import {
  ActionsButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout className={'root-layout'}>
        <Sidebar className="p-2">
          <ActionsButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList onSelect={resetScroll} className="mt-3 space-y-1" />
        </Sidebar>
        <Content ref={contentContainRef} className="border bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
