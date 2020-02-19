const IntervalsParser = require('./src/intervalsParser')
const Toggl = require('./src/togglApi')
const TimeSlotter = require('./src/timeSlotter')
const Asker = require('./src/asker')
const DaysApi = require('./src/daysApi')
const { compilePicky, compileAppend } = require('./src/compileFunctions')

exports.compile = function (command, config) {
  var parser = new IntervalsParser()
  var intervals = parser.parse(config.workingHoursIntervals)
  var daysApi = new DaysApi(config.workingDays, config.googleToken, config.googleLocale)
  var togglApi = new Toggl(config.togglToken)
  var timeSlotter = new TimeSlotter(daysApi, intervals)
  var asker = new Asker()

  switch (command) {
    case 'picky': compilePicky(togglApi, timeSlotter, asker, config); break
    case 'append': compileAppend(togglApi, timeSlotter, asker, config); break
    default: showHelp()
  }
}

function showHelp () {
  console.log('Use one of the following commands:')
  console.log('- append: use it to record from the last recorded activity.')
  console.log('- picky: use it to compile not-filled selected past (and future) holes.')
  console.log('- config: use it to change configuration.')
}
