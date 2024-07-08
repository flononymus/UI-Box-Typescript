[
    {
        "key": "ctrl+oem_2",
        "command": "terminal.focus",
        "when": "editorFocus",
    },
    {
        "key": "ctrl+oem_2",
        "command": "workbench.action.focusActiveEditorGroup",
        "when": "terminalFocus",
    },
    {
        "key": "ctrl+tab",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "ctrl+n",
        "command": "-selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "ctrl+1",
        "command": "workbench.action.previousEditor"
    },
    {
        "key": "ctrl+2",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "alt+cmd+left",
        "command": "-workbench.action.previousEditor"
    },
    {
        "key": "alt+tab",
        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
        "when": "!activeEditorGroupEmpty"
    },
    {
        "key": "ctrl+[IntlBackslash]",
        "command": "workbench.action.focusFirstEditorGroup",
        "when": "terminalFocus"
    },
    {
        "key": "alt+1",
        "command": "-workbench.action.openEditorAtIndex1"
    },
    {
        "key": "shift+ctrl+7",
        "command": "editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+1",
        "command": "-workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "ctrl+2",
        "command": "-workbench.action.focusSecondEditorGroup"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+f4",
        "command": "-workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+f",
        "command": "-actions.find",
        "when": "editorFocus || editorIsOpen"
    },
    {
        "key": "ctrl+f",
        "command": "actions.find"
    },
    {
        "key": "ctrl+a",
        "command": "-extension.vim_ctrl+a",
        "when": "editorTextFocus && vim.active && vim.use<C-a> && !inDebugRepl"
    },
    {
        "key": "alt+k",
        "command": "-keybindings.editor.recordSearchKeys",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "ctrl+s",
        "command": "workbench.action.files.save"
    },
    {
        "key": "alt+w",
        "command": "-toggleSearchEditorWholeWord",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+w",
        "command": "-workbench.action.terminal.toggleFindWholeWord",
        "when": "terminalFindVisible && terminalHasBeenCreated || terminalFindVisible && terminalProcessSupported"
    },
    {
        "key": "alt+w",
        "command": "-toggleFindWholeWord",
        "when": "editorFocus"
    },
    {
        "key": "alt+w",
        "command": "-toggleSearchWholeWord",
        "when": "searchViewletFocus"
    },
    {
        "key": "ctrl+a",
        "command": "editor.action.selectAll"
    },
    {
        "key": "alt+c",
        "command": "-toggleSearchEditorCaseSensitive",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+c",
        "command": "-workbench.action.terminal.toggleFindCaseSensitive",
        "when": "terminalFindVisible && terminalHasBeenCreated || terminalFindVisible && terminalProcessSupported"
    },
    {
        "key": "alt+c",
        "command": "-toggleFindCaseSensitive",
        "when": "editorFocus"
    },
    {
        "key": "alt+c",
        "command": "-toggleSearchCaseSensitive",
        "when": "searchViewletFocus"
    },
    // {
    //     "key": "alt+c",
    //     "command": "editor.action.clipboardCopyAction"
    // },
    {
        "key": "ctrl+c",
        "command": "editor.action.clipboardCopyAction"
    },
    // {
    //     "key": "alt+v",
    //     "command": "editor.action.clipboardPasteAction"
    // },
    {
        "key": "ctrl+v",
        "command": "editor.action.clipboardPasteAction"
    },
    {
        "key": "alt+z",
        "command": "-editor.action.toggleWordWrap"
    },
    {
        "key": "alt+z",
        "command": "-workbench.action.terminal.sizeToContentWidth",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen || terminalFocus && terminalIsOpen && terminalProcessSupported"
    },
    {
        "key": "ctrl+z",
        "command": "undo"
    },
    {
        "key": "shift+als+z",
        "command": "redo"
    },
    {
        "key": "ctrl+shift+e",
        "command": "workbench.view.explorer",
        "when": "viewContainer.workbench.view.explorer.enabled"
    },
    {
        "key": "shift+alt+e shift+alt+e",
        "command": "workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "ctrl+shift+e",
        "command": "-workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "shift+alt+f",
        "command": "-search.action.restrictSearchToFolder",
        "when": "folderMatchWithResourceFocus && searchViewletVisible"
    },
    {
        "key": "shift+alt+f",
        "command": "-filesExplorer.findInFolder",
        "when": "explorerResourceIsFolder && filesExplorerFocus && foldersViewVisible && !inputFocus"
    },
    {
        "key": "shift+alt+f",
        "command": "-notebook.format",
        "when": "notebookEditable && !editorTextFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "shift+alt+f",
        "command": "-editor.action.formatDocument.none",
        "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
        "key": "shift+alt+f",
        "command": "-notebook.formatCell",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && inCompositeEditor && notebookEditable && !editorReadonly && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "shift+alt+f",
        "command": "-editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "shift+alt+f12",
        "command": "-references-view.findReferences",
        "when": "editorHasReferenceProvider"
    },
    {
        "key": "ctrl+shift+m",
        "command": "workbench.view.scm",
        "when": "workbench.scm.active"
    },
    {
        "key": "ctrl+shift+m",
        "command": "-workbench.actions.view.problems",
        "when": "workbench.panel.markers.view.active"
    },
    {
        "key": "ctrl+tab",
        "command": "-workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
        "when": "!activeEditorGroupEmpty"
    },
    {
        "key": "ctrl+tab",
        "command": "-workbench.action.quickOpenNavigateNextInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    // {
    //     "key": "ctrl+shift+g",
    //     "command": "-workbench.view.scm",
    //     "when": "workbench.scm.active"
    // }
]  