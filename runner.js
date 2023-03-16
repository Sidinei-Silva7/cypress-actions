const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJjNTU1NjI1LWQxYTctNDk0ZS1hYTQ2LTlkMzg4ZmI0Y2I2ZS0xNjc4OTczNjAyNzU3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNjNkOWQ2ZWItY2ZlMC00NjY4LTlmM2MtMjcyM2E0ZjQyNjlmIiwidHlwZSI6InQifQ.4hg38xl_JpfUpgXBnQ9K0yeFFD97ql1f4sF8aAZgsh0'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
