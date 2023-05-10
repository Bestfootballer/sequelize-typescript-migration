import type { Sequelize } from "sequelize-typescript";
import type { MigrationState } from "../constants";
export default function getLastMigrationState(sequelize: Sequelize): Promise<MigrationState | undefined>;
