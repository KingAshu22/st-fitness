"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "lucide-react"

export default function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null)
  const [selectedText, setSelectedText] = useState("")

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleSelection = () => {
    const selection = window.getSelection()
    setSelectedText(selection.toString())
  }

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current.focus()
    handleInput()
  }

  const insertHeading = (level) => {
    const selection = window.getSelection()
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const selectedText = range.toString()

      if (selectedText) {
        const heading = document.createElement(`h${level}`)
        heading.textContent = selectedText
        range.deleteContents()
        range.insertNode(heading)
        selection.removeAllRanges()
      }
    }
    handleInput()
  }

  const insertLink = () => {
    const url = prompt("Enter URL:")
    if (url) {
      execCommand("createLink", url)
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b p-2 flex flex-wrap gap-1">
        <Button type="button" variant="outline" size="sm" onClick={() => insertHeading(1)} title="Heading 1">
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => insertHeading(2)} title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => insertHeading(3)} title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => insertHeading(4)} title="Heading 4">
          <Heading4 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => insertHeading(5)} title="Heading 5">
          <Heading5 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => insertHeading(6)} title="Heading 6">
          <Heading6 className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <Button type="button" variant="outline" size="sm" onClick={() => execCommand("bold")} title="Bold">
          <Bold className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => execCommand("italic")} title="Italic">
          <Italic className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={insertLink} title="Insert Link">
          <Link className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => execCommand("insertUnorderedList")}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => execCommand("insertOrderedList")}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onMouseUp={handleSelection}
        onKeyUp={handleSelection}
        className="min-h-[300px] p-4 focus:outline-none prose max-w-none"
        style={{ minHeight: "300px" }}
        suppressContentEditableWarning={true}
      />
    </div>
  )
}
