"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
async function getLastMigrationState(sequelize) {
    const [lastExecutedMigration] = await sequelize.query('SELECT name FROM SequelizeMeta ORDER BY name desc limit 1', { type: sequelize_1.QueryTypes.SELECT });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const lastRevision = lastExecutedMigration !== undefined
        ? parseInt(lastExecutedMigration.name.split("-")[0])
        : -1;
    const [lastMigration] = await sequelize.query(`SELECT state FROM SequelizeMigrationsMeta where revision = '${lastRevision}'`, { type: sequelize_1.QueryTypes.SELECT });
    if (lastMigration)
        return typeof lastMigration.state === "string"
            ? JSON.parse(lastMigration.state)
            : lastMigration.state;
}
exports.default = getLastMigrationState;
//# sourceMappingURL=getLastMigrationState.js.map