const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const rfs = require('rotating-file-stream')
const filePath = path.resolve(__dirname, './build', 'index.html')

const defaultImage =
  'https://res.cloudinary.com/silva/image/upload/v1587376155/goophie-meta-banner.png'

// Log into separate files every day
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log')
})

// use dev mode for console logging
app.use(morgan('dev'))
// use full mode for stored logs
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version"' +
      ':status :res[content-length] :response-time ms ":referrer" ":user-agent"',
    { stream: accessLogStream }
  )
)

var common = (
  request, 
  response, 
  description,
  title = 'Gophie',
  image = defaultImage) => {
  let result = null
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err)
    }
    // edit links for link preview
    data = data.replace(/\$OG_TITLE/g, title)
    data = data.replace(/\$OG_DESCRIPTION/g, description)
    result = data.replace(/\$OG_IMAGE/g, image)
    response.send(result)
  })
}

app.get('/', (request, response) => {
  common(
    request,
    response,
    'Search, stream and download movies, series and anime without bumping into a single ad on your favourite movie aggregator site'
  )
})

app.get('/music', (request, response) => {
  common(
    request,
    response,
    'Search, stream and download music without bumping into a single ad'
  )
})

app.get('/shared/:referralID', (request, response) => {
  const referralID = request.params.referralID
    axios
      .post(
        `https://ocena.gophie.cam/referral/id/?referral_id=${referralID}`
      )
      .then(json => {
        let movie_name = json.data.name
        let description = json.data.description
        let image = json.data.cover_photo_link
        let title = `Gophie - ${movie_name}`
        if (description.length <= 1) {
          description = 'Could not find movie description'
        }
        if (image.length <= 1) {
          image = defaultImage
        }
        common(request, response, description, title, image)
      })
      .catch(error => {
        console.log('Could not retrieve movie details', error)
        response.redirect('/')
      })
})

app.get('/terms', (request, response) => {
  common(request, response, 'Terms and Conditions of Usage')
})

app.use(express.static(path.resolve(__dirname, './build')))

app.get('/:engine', (request, response) => {
  const engine = request.params.engine
  let description = null
  let title = `Gophie - ${engine}`

  switch (engine) {
    case 'Server2':
    case 'Server7':
      description = 'Download your favourite anime for free with a simple click'
      break
    case 'Server4':
      description =
        'Download TV series for free with a simple click of the button'
      break
    case 'Server3':
      description =
        'Download Hollywood, Bollywood HD Movies with a simple click of the button'
      break
    default:
      description = 'Download Movies with a simple click of the button'
      break
  }
  common(request, response, description, title)
})


app.get('*', (request, response) => {
  response.sendFile(filePath)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
