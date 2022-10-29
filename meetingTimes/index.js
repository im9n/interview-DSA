/** Meeting Times **
 *
 * Given an array of meeting times, determine if a person can
 * attend all meetings.
 *
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 *
 */

const meetingTimes = (times) => {
  times.sort((a, b) => a - b);

  for(let i = 0; i < times.length - 1; ++i){
    const currentEnd = times[i][1]
    const nextStart = times[i + 1][0]
    if(currentEnd > nextStart){
        return false
    }
  }

  return true
};

module.exports = meetingTimes;
