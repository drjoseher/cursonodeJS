const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) =>  note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note addded!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNote = (title) => {

    const notes = loadNotes()

    const noteToKeep = notes.filter((note) => note.title !== title )

    if (notes.length > noteToKeep.length) {
        saveNotes(noteToKeep)
        console.log(chalk.green.inverse("Note removed!"))
    } else {
        console.log(chalk.red.inverse("Note no found"))
    }

}

const listNotes = () => {

    const notes = loadNotes()
    console.log(chalk.green("Your notes!" ))

    // for (let index = 0; index < notes.length; index++) {
    //     const element = notes[index];
    //     console.log(element.title)
    // }
    
    notes.forEach ((element) => {
        console.log(element.title)
    });

}
 debugger
const readNote = (title) => {
    const notes = loadNotes()

    const getNote = notes.find((note) => note.title === title)
    
    if (getNote) {
        console.log(chalk.inverse.green(getNote.title))
        console.log(getNote.body)
    } else {
        console.log("Note not found!")
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}