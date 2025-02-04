- [Introduction](#introduction)
- [Getting started :rocket:](#getting-started-rocket)
	- [Existing medusa project](#existing-medusa-project)
	- [From server starter](#from-server-starter)
- [Application Architecture](#application-architecture)
- [CLI `medex`](#cli-medex)
	- [Commands references](#commands-references)
		- [Command `generate` reference](#command-generate-reference)
			- [Usage](#usage)
			- [Options](#options)
			- [Examples](#examples)
		- [Command `migrate` reference](#command-migrate-reference)
			- [Usage](#usage-1)
			- [Config](#config)
			- [Options](#options-1)
- [Full code API :mag:](#full-code-api-mag)
- [API documentation :bulb:](#api-documentation-bulb)
	- [Decorators](#decorators)
		- [@Entity](#entity)
		- [@Repository](#repository)
		- [@Migration](#migration)
		- [@Service](#service)
		- [@Middleware](#middleware)
		- [@Router](#router)
		- [@Validator](#validator)
		- [@Module](#module)
		- [@Module (Dynamic module)](#module-dynamic-module)
		- [@OnMedusaEntityEvent](#onmedusaentityevent)
	- [Utilities :wrench:](#utilities-wrench)
		- [attachOrReplaceEntitySubscriber](#attachorreplaceentitysubscriber)
		- [repositoryMixin](#repositorymixin)
		- [Omit](#omit)
- [Starters](#starters)
- [Internal modules (Optional)](#internal-modules-optional)
	- [Monitoring](#monitoring)
	- [Multi-tenancy](#multi-tenancy)
- [Resources](#resources)
	- [Marketplace tutorial](#marketplace-tutorial)
- [Discussions](#discussions)
- [Like my work? :heartbeat:](#like-my-work-heartbeat)
- [Contribute](#contribute)