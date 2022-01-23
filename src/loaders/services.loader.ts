import { asFunction, AwilixContainer, Lifetime } from 'awilix';
import { MedusaServiceStatic } from '../types';
import { Utils } from '../medusa-utils';

/**
 * @internal
 * Load custom services from the rootDir.
 * @param services Any custom service that implements MedusaService
 * @param container The container to register the custom service under craftshop or override existing one
 */
export function servicesLoader(services: MedusaServiceStatic[], container: AwilixContainer): void {
	for (const service of services) {
		if (service.isHandledByMedusa) {
			const formattedName = `${
				service.name.charAt(0).toLowerCase() + service.name.slice(1, service.name.length)
			}`;
			if (!service.overriddenType) {
				registerService(container, formattedName, service);
			} else {
				overrideService(container, formattedName, service);
			}
		}
	}
}

function registerService(container: AwilixContainer, name: string, service: MedusaServiceStatic) {
	if (!service.resolutionKey) {
		throw new Error('Unable to register the ' + name + '. The static property resolutionKey is missing.');
	}

	const registerServiceName = service.resolutionKey;
	container.register({
		[registerServiceName]: asFunction((cradle) => new service(cradle), { lifetime: service.scope || 'SINGLETON' }),
	});

	const preparedLog = Utils.prepareLog(
		'MedusaLoader#servicesLoader',
		`Service registered - ${service.resolutionKey}`
	);
	console.log(preparedLog);
}

function overrideService(container: AwilixContainer, name: string, service: MedusaServiceStatic): void {
	container.cache.delete(name);
	container.register({
		[name]: asFunction((cradle) => new service(cradle), { lifetime: service.scope || Lifetime.SINGLETON }),
	});

	const preparedLog = Utils.prepareLog('MedusaLoader#servicesLoader', `Service overridden - ${service.name}`);
	console.log(preparedLog);
}
