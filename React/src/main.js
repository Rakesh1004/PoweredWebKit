const ReactMarkdown = require('react-markdown')
function Main({activenote, updatedNote}){
    const onEditField = (key,value) => {
        updatedNote({
            ...activenote,
            [key]:value,
            lastModified: Date.now()
        })
    }
    if(!activenote) {
        return <div className="no-active-note">
            No note selected
        </div>
    }
    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" value={activenote.title} onChange={(e)=>onEditField('title',e.target.value)} autoFocus/>
            <textarea id="body" placeholder="Write your text here....." value={activenote.body} onChange={(e)=>onEditField('body',e.target.value)}/>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activenote.title}</h1>
            <ReactMarkdown className="markdown-preview">{activenote.body}</ReactMarkdown>
        </div>
    </div>
}
export default Main;