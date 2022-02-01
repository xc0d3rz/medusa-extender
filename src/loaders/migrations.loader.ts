import { Connection, Migration } from 'typeorm';
import { GetInjectableOptions, Utils } from './';

/**
 * @internal
 * Run custom migrations that are find from the provided directory and stored in a `migrations` subdirectory.
 * @param migrationsOptions Any custom migration that implements MigrationInterface
 * @param dbConnection Database connection from medusa internal
 */
export async function migrationsLoader(
	migrationsOptions: GetInjectableOptions<'migration'>,
	dbConnection: Connection
): Promise<void> {
	for (const migrationOptions of migrationsOptions) {
		dbConnection.migrations.push(new migrationOptions.metatype());
	}

	await dbConnection.runMigrations().then((ranMigrations: Migration[]) => {
		for (const migration of ranMigrations) {
			Utils.log('MedusaLoader#runCustomMigrations', `Migration applied - ${migration.name}`);
		}
	});
}
