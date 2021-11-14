const xmpp = require('simple-xmpp')

xmpp.on('online', data => {
    console.log('Hi, you are online! ')
    console.log(`Connected as ${data.jid.user}`)
    send()
})

function send() {
    setTimeout(send, 5000)
    xmpp.send('admin@localhost', `hi! ${Date.now()}`)
}

xmpp.on('error', error => {
    console.log('something went Wrong:' + error)
})

xmpp.on('chat', (from, message) => {
    console.log(`Got a message from ${message} from ${from}`)
})

xmpp.connect({
    'jid': 'ahmed@localhost',
    'password': 'password',
    'host': 'localhost',
    'port': 5222
})
