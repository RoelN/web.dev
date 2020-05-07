const id = 'has-property';
const Rule = require('./rule');
const {ok, fail} = require('../utils/status');

/**
 * @param {Object} yaml The yaml front matter from the file.
 * @param {string} property The name of the property to check for.
 * @return {Object} The result of the check and any failure/warning messages.
 */
const test = (yaml, property) => {
  if (!(property in yaml) || yaml[property] === '') {
    return fail(`Missing \`${property}\` in YAML front matter.`);
  }

  return ok();
};

module.exports = new Rule(id, test);
