'use strict'

const t = (module.exports = require('../tester').createServiceTester())

t.create('grade of https://shields.io')
  .get('/security-headers.json?url=https://shields.io')
  .expectBadge({ label: 'security headers', message: 'F', color: 'red' })

t.create('grade of https://httpstat.us/301 as redirect')
  .get('/security-headers.json?ignoreRedirects&url=https://httpstat.us/301')
  .expectBadge({ label: 'security headers', message: 'R', color: 'blue' })
