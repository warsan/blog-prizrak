var config = require("./core/server/config"),
  ghostVersion = require("./core/server/lib/ghost-version");

/**
 * knex-миграторы могут быть использованы через CLI или в приложении
 * - при использовании CLI, мы должны убедиться, что наши глобальные переопределения срабатывают
 */
require("./core/server/overrides");

module.exports = {
  currentVersion: ghostVersion.safe,
  database: config.get("database"),
  migrationPath: config.get("paths:migrationPath")
};
