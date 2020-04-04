const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

yargs.version('1.0.0')

yargs.command({
    'command': 'add',
    'describe': 'Adding a new note',
    'builder': {

        'title': {
            'describe': 'Note title',
            'demandOption': true,
            'type': 'string'
        },
        'body': {
            'describe': 'Body of the new note',
            'demandOption': true,
            'type': 'string'
        }

    },
    handler: (argv) => 
        notes.addNote(argv.title, argv.body)
    
})

yargs.command({
    'command': 'remove',
    'describe': 'Removing a old note',
    'builder': {
        'title': {
            'describe': 'Note title to remove',
            'demandOption': true,
            'type': 'string'
        }
    },
    handler: (argv) => 
        notes.removeNote(argv.title)
})

yargs.command({
    'command': 'read',
    'describe': 'Read a note',
    'builder': {
        'title': {
            'describe': 'Note title to read',
            'demandOption': true,
            'type': 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.command({
    'command': 'list',
    'describe': 'List notes',
    handler: () => 
        notes.listNotes()
})

yargs.parse()
