/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model PhotoGallery
 *
 */
export type PhotoGallery =
	$Result.DefaultSelection<Prisma.$PhotoGalleryPayload>;
/**
 * Model ResearchArea
 *
 */
export type ResearchArea =
	$Result.DefaultSelection<Prisma.$ResearchAreaPayload>;
/**
 * Model ResearchFacility
 *
 */
export type ResearchFacility =
	$Result.DefaultSelection<Prisma.$ResearchFacilityPayload>;
/**
 * Model People
 *
 */
export type People = $Result.DefaultSelection<Prisma.$PeoplePayload>;
/**
 * Model Publication
 *
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>;
/**
 * Model Outreach
 *
 */
export type Outreach = $Result.DefaultSelection<Prisma.$OutreachPayload>;
/**
 * Model Event
 *
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>;
/**
 * Model GroupMoment
 *
 */
export type GroupMoment = $Result.DefaultSelection<Prisma.$GroupMomentPayload>;
/**
 * Model Highlight
 *
 */
export type Highlight = $Result.DefaultSelection<Prisma.$HighlightPayload>;
/**
 * Model RecentUpdate
 *
 */
export type RecentUpdate =
	$Result.DefaultSelection<Prisma.$RecentUpdatePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends
		Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	U = "log" extends keyof ClientOptions
		? ClientOptions["log"] extends Array<
				Prisma.LogLevel | Prisma.LogDefinition
			>
			? Prisma.GetEvents<ClientOptions["log"]>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
	);
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
		) => void
	): PrismaClient;

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>;

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>;

	/**
	 * Add a middleware
	 * @deprecated since 4.16.0. For new code, prefer client extensions instead.
	 * @see https://pris.ly/d/extensions
	 */
	$use(cb: Prisma.Middleware): void;

	/**
	 * Executes a prepared raw query and returns the number of affected rows.
	 * @example
	 * ```
	 * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
	 * @example
	 * ```
	 * const [george, bob, alice] = await prisma.$transaction([
	 *   prisma.user.create({ data: { name: 'George' } }),
	 *   prisma.user.create({ data: { name: 'Bob' } }),
	 *   prisma.user.create({ data: { name: 'Alice' } }),
	 * ])
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		}
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<
		"extends",
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.photoGallery`: Exposes CRUD operations for the **PhotoGallery** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more PhotoGalleries
	 * const photoGalleries = await prisma.photoGallery.findMany()
	 * ```
	 */
	get photoGallery(): Prisma.PhotoGalleryDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.researchArea`: Exposes CRUD operations for the **ResearchArea** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more ResearchAreas
	 * const researchAreas = await prisma.researchArea.findMany()
	 * ```
	 */
	get researchArea(): Prisma.ResearchAreaDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.researchFacility`: Exposes CRUD operations for the **ResearchFacility** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more ResearchFacilities
	 * const researchFacilities = await prisma.researchFacility.findMany()
	 * ```
	 */
	get researchFacility(): Prisma.ResearchFacilityDelegate<
		ExtArgs,
		ClientOptions
	>;

	/**
	 * `prisma.people`: Exposes CRUD operations for the **People** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more People
	 * const people = await prisma.people.findMany()
	 * ```
	 */
	get people(): Prisma.PeopleDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Publications
	 * const publications = await prisma.publication.findMany()
	 * ```
	 */
	get publication(): Prisma.PublicationDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.outreach`: Exposes CRUD operations for the **Outreach** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Outreaches
	 * const outreaches = await prisma.outreach.findMany()
	 * ```
	 */
	get outreach(): Prisma.OutreachDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.event`: Exposes CRUD operations for the **Event** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Events
	 * const events = await prisma.event.findMany()
	 * ```
	 */
	get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.groupMoment`: Exposes CRUD operations for the **GroupMoment** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more GroupMoments
	 * const groupMoments = await prisma.groupMoment.findMany()
	 * ```
	 */
	get groupMoment(): Prisma.GroupMomentDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.highlight`: Exposes CRUD operations for the **Highlight** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Highlights
	 * const highlights = await prisma.highlight.findMany()
	 * ```
	 */
	get highlight(): Prisma.HighlightDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.recentUpdate`: Exposes CRUD operations for the **RecentUpdate** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more RecentUpdates
	 * const recentUpdates = await prisma.recentUpdate.findMany()
	 * ```
	 */
	get recentUpdate(): Prisma.RecentUpdateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 6.9.0
	 * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

	/**
	 * Types of the values used to represent different kinds of `null` values when working with JSON fields.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	namespace NullTypes {
		/**
		 * Type of `Prisma.DbNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class DbNull {
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> =
		T extends PromiseLike<infer U> ? U : T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	};

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? "Please either choose `select` or `include`."
		: T extends SelectAndOmit
			? "Please either choose `select` or `omit`."
			: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends BigInt
						? False
						: T extends object
							? True
							: False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> =
		T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<
		__Either<O, K>
	>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown ? (k: U) => void : never
	) extends (k: infer I) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never;
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K];
			} & {};

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K];
	} & {};

	type _Record<K extends keyof any, T> = {
		[P in K]: T;
	};

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never;

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({
							[P in keyof O as P extends K ? P : never]-?: O[P];
					  } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<
		T,
		U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
	> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<"OR", K>, Extends<"AND", K>>,
			Extends<"NOT", K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object
							? Merge<UnEnumerate<TK>>
							: never
					>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		User: "User";
		PhotoGallery: "PhotoGallery";
		ResearchArea: "ResearchArea";
		ResearchFacility: "ResearchFacility";
		People: "People";
		Publication: "Publication";
		Outreach: "Outreach";
		Event: "Event";
		GroupMoment: "GroupMoment";
		Highlight: "Highlight";
		RecentUpdate: "RecentUpdate";
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this["params"]["extArgs"],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps:
				| "user"
				| "photoGallery"
				| "researchArea"
				| "researchFacility"
				| "people"
				| "publication"
				| "outreach"
				| "event"
				| "groupMoment"
				| "highlight"
				| "recentUpdate";
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<UserCountAggregateOutputType>
							| number;
					};
				};
			};
			PhotoGallery: {
				payload: Prisma.$PhotoGalleryPayload<ExtArgs>;
				fields: Prisma.PhotoGalleryFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.PhotoGalleryFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.PhotoGalleryFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>;
					};
					findFirst: {
						args: Prisma.PhotoGalleryFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.PhotoGalleryFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>;
					};
					findMany: {
						args: Prisma.PhotoGalleryFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>[];
					};
					create: {
						args: Prisma.PhotoGalleryCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>;
					};
					createMany: {
						args: Prisma.PhotoGalleryCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.PhotoGalleryCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>[];
					};
					delete: {
						args: Prisma.PhotoGalleryDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>;
					};
					update: {
						args: Prisma.PhotoGalleryUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>;
					};
					deleteMany: {
						args: Prisma.PhotoGalleryDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.PhotoGalleryUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.PhotoGalleryUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>[];
					};
					upsert: {
						args: Prisma.PhotoGalleryUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>;
					};
					aggregate: {
						args: Prisma.PhotoGalleryAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregatePhotoGallery>;
					};
					groupBy: {
						args: Prisma.PhotoGalleryGroupByArgs<ExtArgs>;
						result: $Utils.Optional<PhotoGalleryGroupByOutputType>[];
					};
					count: {
						args: Prisma.PhotoGalleryCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<PhotoGalleryCountAggregateOutputType>
							| number;
					};
				};
			};
			ResearchArea: {
				payload: Prisma.$ResearchAreaPayload<ExtArgs>;
				fields: Prisma.ResearchAreaFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ResearchAreaFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ResearchAreaFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>;
					};
					findFirst: {
						args: Prisma.ResearchAreaFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ResearchAreaFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>;
					};
					findMany: {
						args: Prisma.ResearchAreaFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>[];
					};
					create: {
						args: Prisma.ResearchAreaCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>;
					};
					createMany: {
						args: Prisma.ResearchAreaCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ResearchAreaCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>[];
					};
					delete: {
						args: Prisma.ResearchAreaDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>;
					};
					update: {
						args: Prisma.ResearchAreaUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>;
					};
					deleteMany: {
						args: Prisma.ResearchAreaDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ResearchAreaUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ResearchAreaUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>[];
					};
					upsert: {
						args: Prisma.ResearchAreaUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchAreaPayload>;
					};
					aggregate: {
						args: Prisma.ResearchAreaAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateResearchArea>;
					};
					groupBy: {
						args: Prisma.ResearchAreaGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ResearchAreaGroupByOutputType>[];
					};
					count: {
						args: Prisma.ResearchAreaCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<ResearchAreaCountAggregateOutputType>
							| number;
					};
				};
			};
			ResearchFacility: {
				payload: Prisma.$ResearchFacilityPayload<ExtArgs>;
				fields: Prisma.ResearchFacilityFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ResearchFacilityFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ResearchFacilityFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>;
					};
					findFirst: {
						args: Prisma.ResearchFacilityFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ResearchFacilityFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>;
					};
					findMany: {
						args: Prisma.ResearchFacilityFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>[];
					};
					create: {
						args: Prisma.ResearchFacilityCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>;
					};
					createMany: {
						args: Prisma.ResearchFacilityCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ResearchFacilityCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>[];
					};
					delete: {
						args: Prisma.ResearchFacilityDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>;
					};
					update: {
						args: Prisma.ResearchFacilityUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>;
					};
					deleteMany: {
						args: Prisma.ResearchFacilityDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ResearchFacilityUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ResearchFacilityUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>[];
					};
					upsert: {
						args: Prisma.ResearchFacilityUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResearchFacilityPayload>;
					};
					aggregate: {
						args: Prisma.ResearchFacilityAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateResearchFacility>;
					};
					groupBy: {
						args: Prisma.ResearchFacilityGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ResearchFacilityGroupByOutputType>[];
					};
					count: {
						args: Prisma.ResearchFacilityCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<ResearchFacilityCountAggregateOutputType>
							| number;
					};
				};
			};
			People: {
				payload: Prisma.$PeoplePayload<ExtArgs>;
				fields: Prisma.PeopleFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.PeopleFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.PeopleFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>;
					};
					findFirst: {
						args: Prisma.PeopleFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.PeopleFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>;
					};
					findMany: {
						args: Prisma.PeopleFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>[];
					};
					create: {
						args: Prisma.PeopleCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>;
					};
					createMany: {
						args: Prisma.PeopleCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.PeopleCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>[];
					};
					delete: {
						args: Prisma.PeopleDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>;
					};
					update: {
						args: Prisma.PeopleUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>;
					};
					deleteMany: {
						args: Prisma.PeopleDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.PeopleUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.PeopleUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>[];
					};
					upsert: {
						args: Prisma.PeopleUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PeoplePayload>;
					};
					aggregate: {
						args: Prisma.PeopleAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregatePeople>;
					};
					groupBy: {
						args: Prisma.PeopleGroupByArgs<ExtArgs>;
						result: $Utils.Optional<PeopleGroupByOutputType>[];
					};
					count: {
						args: Prisma.PeopleCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<PeopleCountAggregateOutputType>
							| number;
					};
				};
			};
			Publication: {
				payload: Prisma.$PublicationPayload<ExtArgs>;
				fields: Prisma.PublicationFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.PublicationFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>;
					};
					findFirst: {
						args: Prisma.PublicationFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>;
					};
					findMany: {
						args: Prisma.PublicationFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[];
					};
					create: {
						args: Prisma.PublicationCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>;
					};
					createMany: {
						args: Prisma.PublicationCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.PublicationCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[];
					};
					delete: {
						args: Prisma.PublicationDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>;
					};
					update: {
						args: Prisma.PublicationUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>;
					};
					deleteMany: {
						args: Prisma.PublicationDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.PublicationUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.PublicationUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[];
					};
					upsert: {
						args: Prisma.PublicationUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$PublicationPayload>;
					};
					aggregate: {
						args: Prisma.PublicationAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregatePublication>;
					};
					groupBy: {
						args: Prisma.PublicationGroupByArgs<ExtArgs>;
						result: $Utils.Optional<PublicationGroupByOutputType>[];
					};
					count: {
						args: Prisma.PublicationCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<PublicationCountAggregateOutputType>
							| number;
					};
				};
			};
			Outreach: {
				payload: Prisma.$OutreachPayload<ExtArgs>;
				fields: Prisma.OutreachFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.OutreachFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.OutreachFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>;
					};
					findFirst: {
						args: Prisma.OutreachFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.OutreachFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>;
					};
					findMany: {
						args: Prisma.OutreachFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>[];
					};
					create: {
						args: Prisma.OutreachCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>;
					};
					createMany: {
						args: Prisma.OutreachCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.OutreachCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>[];
					};
					delete: {
						args: Prisma.OutreachDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>;
					};
					update: {
						args: Prisma.OutreachUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>;
					};
					deleteMany: {
						args: Prisma.OutreachDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.OutreachUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.OutreachUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>[];
					};
					upsert: {
						args: Prisma.OutreachUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OutreachPayload>;
					};
					aggregate: {
						args: Prisma.OutreachAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateOutreach>;
					};
					groupBy: {
						args: Prisma.OutreachGroupByArgs<ExtArgs>;
						result: $Utils.Optional<OutreachGroupByOutputType>[];
					};
					count: {
						args: Prisma.OutreachCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<OutreachCountAggregateOutputType>
							| number;
					};
				};
			};
			Event: {
				payload: Prisma.$EventPayload<ExtArgs>;
				fields: Prisma.EventFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.EventFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>;
					};
					findFirst: {
						args: Prisma.EventFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>;
					};
					findMany: {
						args: Prisma.EventFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
					};
					create: {
						args: Prisma.EventCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>;
					};
					createMany: {
						args: Prisma.EventCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
					};
					delete: {
						args: Prisma.EventDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>;
					};
					update: {
						args: Prisma.EventUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>;
					};
					deleteMany: {
						args: Prisma.EventDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.EventUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
					};
					upsert: {
						args: Prisma.EventUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$EventPayload>;
					};
					aggregate: {
						args: Prisma.EventAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateEvent>;
					};
					groupBy: {
						args: Prisma.EventGroupByArgs<ExtArgs>;
						result: $Utils.Optional<EventGroupByOutputType>[];
					};
					count: {
						args: Prisma.EventCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<EventCountAggregateOutputType>
							| number;
					};
				};
			};
			GroupMoment: {
				payload: Prisma.$GroupMomentPayload<ExtArgs>;
				fields: Prisma.GroupMomentFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.GroupMomentFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.GroupMomentFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>;
					};
					findFirst: {
						args: Prisma.GroupMomentFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.GroupMomentFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>;
					};
					findMany: {
						args: Prisma.GroupMomentFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>[];
					};
					create: {
						args: Prisma.GroupMomentCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>;
					};
					createMany: {
						args: Prisma.GroupMomentCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.GroupMomentCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>[];
					};
					delete: {
						args: Prisma.GroupMomentDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>;
					};
					update: {
						args: Prisma.GroupMomentUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>;
					};
					deleteMany: {
						args: Prisma.GroupMomentDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.GroupMomentUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.GroupMomentUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>[];
					};
					upsert: {
						args: Prisma.GroupMomentUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$GroupMomentPayload>;
					};
					aggregate: {
						args: Prisma.GroupMomentAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateGroupMoment>;
					};
					groupBy: {
						args: Prisma.GroupMomentGroupByArgs<ExtArgs>;
						result: $Utils.Optional<GroupMomentGroupByOutputType>[];
					};
					count: {
						args: Prisma.GroupMomentCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<GroupMomentCountAggregateOutputType>
							| number;
					};
				};
			};
			Highlight: {
				payload: Prisma.$HighlightPayload<ExtArgs>;
				fields: Prisma.HighlightFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.HighlightFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.HighlightFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>;
					};
					findFirst: {
						args: Prisma.HighlightFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.HighlightFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>;
					};
					findMany: {
						args: Prisma.HighlightFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[];
					};
					create: {
						args: Prisma.HighlightCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>;
					};
					createMany: {
						args: Prisma.HighlightCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.HighlightCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[];
					};
					delete: {
						args: Prisma.HighlightDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>;
					};
					update: {
						args: Prisma.HighlightUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>;
					};
					deleteMany: {
						args: Prisma.HighlightDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.HighlightUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.HighlightUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[];
					};
					upsert: {
						args: Prisma.HighlightUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$HighlightPayload>;
					};
					aggregate: {
						args: Prisma.HighlightAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateHighlight>;
					};
					groupBy: {
						args: Prisma.HighlightGroupByArgs<ExtArgs>;
						result: $Utils.Optional<HighlightGroupByOutputType>[];
					};
					count: {
						args: Prisma.HighlightCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<HighlightCountAggregateOutputType>
							| number;
					};
				};
			};
			RecentUpdate: {
				payload: Prisma.$RecentUpdatePayload<ExtArgs>;
				fields: Prisma.RecentUpdateFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.RecentUpdateFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.RecentUpdateFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>;
					};
					findFirst: {
						args: Prisma.RecentUpdateFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.RecentUpdateFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>;
					};
					findMany: {
						args: Prisma.RecentUpdateFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>[];
					};
					create: {
						args: Prisma.RecentUpdateCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>;
					};
					createMany: {
						args: Prisma.RecentUpdateCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.RecentUpdateCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>[];
					};
					delete: {
						args: Prisma.RecentUpdateDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>;
					};
					update: {
						args: Prisma.RecentUpdateUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>;
					};
					deleteMany: {
						args: Prisma.RecentUpdateDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.RecentUpdateUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.RecentUpdateUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>[];
					};
					upsert: {
						args: Prisma.RecentUpdateUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecentUpdatePayload>;
					};
					aggregate: {
						args: Prisma.RecentUpdateAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateRecentUpdate>;
					};
					groupBy: {
						args: Prisma.RecentUpdateGroupByArgs<ExtArgs>;
						result: $Utils.Optional<RecentUpdateGroupByOutputType>[];
					};
					count: {
						args: Prisma.RecentUpdateCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<RecentUpdateCountAggregateOutputType>
							| number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRaw: {
					args: [
						query: TemplateStringsArray | Prisma.Sql,
						...values: any[],
					];
					result: any;
				};
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [
						query: TemplateStringsArray | Prisma.Sql,
						...values: any[],
					];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		"define",
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = "pretty" | "colorless" | "minimal";
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
		/**
		 * @example
		 * ```
		 * // Defaults to stdout
		 * log: ['query', 'info', 'warn', 'error']
		 *
		 * // Emit as events
		 * log: [
		 *   { emit: 'stdout', level: 'query' },
		 *   { emit: 'stdout', level: 'info' },
		 *   { emit: 'stdout', level: 'warn' }
		 *   { emit: 'stdout', level: 'error' }
		 * ]
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		};
		/**
		 * Global configuration for omitting model fields by default.
		 *
		 * @example
		 * ```
		 * const prisma = new PrismaClient({
		 *   omit: {
		 *     user: {
		 *       password: true
		 *     }
		 *   }
		 * })
		 * ```
		 */
		omit?: Prisma.GlobalOmitConfig;
	}
	export type GlobalOmitConfig = {
		user?: UserOmit;
		photoGallery?: PhotoGalleryOmit;
		researchArea?: ResearchAreaOmit;
		researchFacility?: ResearchFacilityOmit;
		people?: PeopleOmit;
		publication?: PublicationOmit;
		outreach?: OutreachOmit;
		event?: EventOmit;
		groupMoment?: GroupMomentOmit;
		highlight?: HighlightOmit;
		recentUpdate?: RecentUpdateOmit;
	};

	/* Types for Logging */
	export type LogLevel = "info" | "query" | "warn" | "error";
	export type LogDefinition = {
		level: LogLevel;
		emit: "stdout" | "event";
	};

	export type GetLogType<T extends LogLevel | LogDefinition> =
		T extends LogDefinition
			? T["emit"] extends "event"
				? T["level"]
				: never
			: never;
	export type GetEvents<T extends any> =
		T extends Array<LogLevel | LogDefinition>
			?
					| GetLogType<T[0]>
					| GetLogType<T[1]>
					| GetLogType<T[2]>
					| GetLogType<T[3]>
			: never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
	/* End Types for Logging */

	export type PrismaAction =
		| "findUnique"
		| "findUniqueOrThrow"
		| "findMany"
		| "findFirst"
		| "findFirstOrThrow"
		| "create"
		| "createMany"
		| "createManyAndReturn"
		| "update"
		| "updateMany"
		| "updateManyAndReturn"
		| "upsert"
		| "delete"
		| "deleteMany"
		| "executeRaw"
		| "queryRaw"
		| "aggregate"
		| "count"
		| "runCommandRaw"
		| "findRaw"
		| "groupBy";

	/**
	 * These options are being passed into the middleware as "params"
	 */
	export type MiddlewareParams = {
		model?: ModelName;
		action: PrismaAction;
		args: any;
		dataPath: string[];
		runInTransaction: boolean;
	};

	/**
	 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
	 */
	export type Middleware<T = any> = (
		params: MiddlewareParams,
		next: (params: MiddlewareParams) => $Utils.JsPromise<T>
	) => $Utils.JsPromise<T>;

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>
	): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_avg: UserAvgAggregateOutputType | null;
		_sum: UserSumAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserAvgAggregateOutputType = {
		id: number | null;
	};

	export type UserSumAggregateOutputType = {
		id: number | null;
	};

	export type UserMinAggregateOutputType = {
		id: number | null;
		name: string | null;
		email: string | null;
		password: string | null;
		profileImage: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type UserMaxAggregateOutputType = {
		id: number | null;
		name: string | null;
		email: string | null;
		password: string | null;
		profileImage: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		name: number;
		email: number;
		password: number;
		profileImage: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type UserAvgAggregateInputType = {
		id?: true;
	};

	export type UserSumAggregateInputType = {
		id?: true;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		password?: true;
		profileImage?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		password?: true;
		profileImage?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		password?: true;
		profileImage?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: UserAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: UserSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput;
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[];
		by: UserScalarFieldEnum[] | UserScalarFieldEnum;
		having?: UserScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserCountAggregateInputType | true;
		_avg?: UserAvgAggregateInputType;
		_sum?: UserSumAggregateInputType;
		_min?: UserMinAggregateInputType;
		_max?: UserMaxAggregateInputType;
	};

	export type UserGroupByOutputType = {
		id: number;
		name: string;
		email: string;
		password: string;
		profileImage: string | null;
		createdAt: Date;
		updateAt: Date;
		_count: UserCountAggregateOutputType | null;
		_avg: UserAvgAggregateOutputType | null;
		_sum: UserSumAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<UserGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof UserGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], UserGroupByOutputType[P]>
						: GetScalarType<T[P], UserGroupByOutputType[P]>;
				}
			>
		>;

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			password?: boolean;
			profileImage?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			password?: boolean;
			profileImage?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			password?: boolean;
			profileImage?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectScalar = {
		id?: boolean;
		name?: boolean;
		email?: boolean;
		password?: boolean;
		profileImage?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type UserOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "id"
		| "name"
		| "email"
		| "password"
		| "profileImage"
		| "createdAt"
		| "updateAt",
		ExtArgs["result"]["user"]
	>;

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "User";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				name: string;
				email: string;
				password: string;
				profileImage: string | null;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["user"]
		>;
		composites: {};
	};

	type UserGetPayload<
		S extends boolean | null | undefined | UserDefaultArgs,
	> = $Result.GetResult<Prisma.$UserPayload, S>;

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["User"];
			meta: { name: "User" };
		};
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], UserCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>
		): Prisma.PrismaPromise<GetUserAggregateType<T>>;

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs["orderBy"] }
				: { orderBy?: UserGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<"User", "Int">;
		readonly name: FieldRef<"User", "String">;
		readonly email: FieldRef<"User", "String">;
		readonly password: FieldRef<"User", "String">;
		readonly profileImage: FieldRef<"User", "String">;
		readonly createdAt: FieldRef<"User", "DateTime">;
		readonly updateAt: FieldRef<"User", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number;
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
	};

	/**
	 * Model PhotoGallery
	 */

	export type AggregatePhotoGallery = {
		_count: PhotoGalleryCountAggregateOutputType | null;
		_avg: PhotoGalleryAvgAggregateOutputType | null;
		_sum: PhotoGallerySumAggregateOutputType | null;
		_min: PhotoGalleryMinAggregateOutputType | null;
		_max: PhotoGalleryMaxAggregateOutputType | null;
	};

	export type PhotoGalleryAvgAggregateOutputType = {
		id: number | null;
	};

	export type PhotoGallerySumAggregateOutputType = {
		id: number | null;
	};

	export type PhotoGalleryMinAggregateOutputType = {
		id: number | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type PhotoGalleryMaxAggregateOutputType = {
		id: number | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type PhotoGalleryCountAggregateOutputType = {
		id: number;
		imageURL: number;
		tags: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type PhotoGalleryAvgAggregateInputType = {
		id?: true;
	};

	export type PhotoGallerySumAggregateInputType = {
		id?: true;
	};

	export type PhotoGalleryMinAggregateInputType = {
		id?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type PhotoGalleryMaxAggregateInputType = {
		id?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type PhotoGalleryCountAggregateInputType = {
		id?: true;
		imageURL?: true;
		tags?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type PhotoGalleryAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which PhotoGallery to aggregate.
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PhotoGalleries to fetch.
		 */
		orderBy?:
			| PhotoGalleryOrderByWithRelationInput
			| PhotoGalleryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: PhotoGalleryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PhotoGalleries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PhotoGalleries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned PhotoGalleries
		 **/
		_count?: true | PhotoGalleryCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: PhotoGalleryAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: PhotoGallerySumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: PhotoGalleryMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: PhotoGalleryMaxAggregateInputType;
	};

	export type GetPhotoGalleryAggregateType<
		T extends PhotoGalleryAggregateArgs,
	> = {
		[P in keyof T & keyof AggregatePhotoGallery]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregatePhotoGallery[P]>
			: GetScalarType<T[P], AggregatePhotoGallery[P]>;
	};

	export type PhotoGalleryGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: PhotoGalleryWhereInput;
		orderBy?:
			| PhotoGalleryOrderByWithAggregationInput
			| PhotoGalleryOrderByWithAggregationInput[];
		by: PhotoGalleryScalarFieldEnum[] | PhotoGalleryScalarFieldEnum;
		having?: PhotoGalleryScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: PhotoGalleryCountAggregateInputType | true;
		_avg?: PhotoGalleryAvgAggregateInputType;
		_sum?: PhotoGallerySumAggregateInputType;
		_min?: PhotoGalleryMinAggregateInputType;
		_max?: PhotoGalleryMaxAggregateInputType;
	};

	export type PhotoGalleryGroupByOutputType = {
		id: number;
		imageURL: string;
		tags: string[];
		createdAt: Date;
		updateAt: Date;
		_count: PhotoGalleryCountAggregateOutputType | null;
		_avg: PhotoGalleryAvgAggregateOutputType | null;
		_sum: PhotoGallerySumAggregateOutputType | null;
		_min: PhotoGalleryMinAggregateOutputType | null;
		_max: PhotoGalleryMaxAggregateOutputType | null;
	};

	type GetPhotoGalleryGroupByPayload<T extends PhotoGalleryGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<PhotoGalleryGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof PhotoGalleryGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<
									T[P],
									PhotoGalleryGroupByOutputType[P]
								>
						: GetScalarType<T[P], PhotoGalleryGroupByOutputType[P]>;
				}
			>
		>;

	export type PhotoGallerySelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			imageURL?: boolean;
			tags?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["photoGallery"]
	>;

	export type PhotoGallerySelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			imageURL?: boolean;
			tags?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["photoGallery"]
	>;

	export type PhotoGallerySelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			imageURL?: boolean;
			tags?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["photoGallery"]
	>;

	export type PhotoGallerySelectScalar = {
		id?: boolean;
		imageURL?: boolean;
		tags?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type PhotoGalleryOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "imageURL" | "tags" | "createdAt" | "updateAt",
		ExtArgs["result"]["photoGallery"]
	>;

	export type $PhotoGalleryPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "PhotoGallery";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				imageURL: string;
				tags: string[];
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["photoGallery"]
		>;
		composites: {};
	};

	type PhotoGalleryGetPayload<
		S extends boolean | null | undefined | PhotoGalleryDefaultArgs,
	> = $Result.GetResult<Prisma.$PhotoGalleryPayload, S>;

	type PhotoGalleryCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		PhotoGalleryFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: PhotoGalleryCountAggregateInputType | true;
	};

	export interface PhotoGalleryDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["PhotoGallery"];
			meta: { name: "PhotoGallery" };
		};
		/**
		 * Find zero or one PhotoGallery that matches the filter.
		 * @param {PhotoGalleryFindUniqueArgs} args - Arguments to find a PhotoGallery
		 * @example
		 * // Get one PhotoGallery
		 * const photoGallery = await prisma.photoGallery.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends PhotoGalleryFindUniqueArgs>(
			args: SelectSubset<T, PhotoGalleryFindUniqueArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one PhotoGallery that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {PhotoGalleryFindUniqueOrThrowArgs} args - Arguments to find a PhotoGallery
		 * @example
		 * // Get one PhotoGallery
		 * const photoGallery = await prisma.photoGallery.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends PhotoGalleryFindUniqueOrThrowArgs>(
			args: SelectSubset<T, PhotoGalleryFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first PhotoGallery that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryFindFirstArgs} args - Arguments to find a PhotoGallery
		 * @example
		 * // Get one PhotoGallery
		 * const photoGallery = await prisma.photoGallery.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends PhotoGalleryFindFirstArgs>(
			args?: SelectSubset<T, PhotoGalleryFindFirstArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first PhotoGallery that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryFindFirstOrThrowArgs} args - Arguments to find a PhotoGallery
		 * @example
		 * // Get one PhotoGallery
		 * const photoGallery = await prisma.photoGallery.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends PhotoGalleryFindFirstOrThrowArgs>(
			args?: SelectSubset<T, PhotoGalleryFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more PhotoGalleries that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all PhotoGalleries
		 * const photoGalleries = await prisma.photoGallery.findMany()
		 *
		 * // Get first 10 PhotoGalleries
		 * const photoGalleries = await prisma.photoGallery.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const photoGalleryWithIdOnly = await prisma.photoGallery.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends PhotoGalleryFindManyArgs>(
			args?: SelectSubset<T, PhotoGalleryFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a PhotoGallery.
		 * @param {PhotoGalleryCreateArgs} args - Arguments to create a PhotoGallery.
		 * @example
		 * // Create one PhotoGallery
		 * const PhotoGallery = await prisma.photoGallery.create({
		 *   data: {
		 *     // ... data to create a PhotoGallery
		 *   }
		 * })
		 *
		 */
		create<T extends PhotoGalleryCreateArgs>(
			args: SelectSubset<T, PhotoGalleryCreateArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many PhotoGalleries.
		 * @param {PhotoGalleryCreateManyArgs} args - Arguments to create many PhotoGalleries.
		 * @example
		 * // Create many PhotoGalleries
		 * const photoGallery = await prisma.photoGallery.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends PhotoGalleryCreateManyArgs>(
			args?: SelectSubset<T, PhotoGalleryCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many PhotoGalleries and returns the data saved in the database.
		 * @param {PhotoGalleryCreateManyAndReturnArgs} args - Arguments to create many PhotoGalleries.
		 * @example
		 * // Create many PhotoGalleries
		 * const photoGallery = await prisma.photoGallery.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many PhotoGalleries and only return the `id`
		 * const photoGalleryWithIdOnly = await prisma.photoGallery.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends PhotoGalleryCreateManyAndReturnArgs>(
			args?: SelectSubset<T, PhotoGalleryCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a PhotoGallery.
		 * @param {PhotoGalleryDeleteArgs} args - Arguments to delete one PhotoGallery.
		 * @example
		 * // Delete one PhotoGallery
		 * const PhotoGallery = await prisma.photoGallery.delete({
		 *   where: {
		 *     // ... filter to delete one PhotoGallery
		 *   }
		 * })
		 *
		 */
		delete<T extends PhotoGalleryDeleteArgs>(
			args: SelectSubset<T, PhotoGalleryDeleteArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one PhotoGallery.
		 * @param {PhotoGalleryUpdateArgs} args - Arguments to update one PhotoGallery.
		 * @example
		 * // Update one PhotoGallery
		 * const photoGallery = await prisma.photoGallery.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends PhotoGalleryUpdateArgs>(
			args: SelectSubset<T, PhotoGalleryUpdateArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more PhotoGalleries.
		 * @param {PhotoGalleryDeleteManyArgs} args - Arguments to filter PhotoGalleries to delete.
		 * @example
		 * // Delete a few PhotoGalleries
		 * const { count } = await prisma.photoGallery.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends PhotoGalleryDeleteManyArgs>(
			args?: SelectSubset<T, PhotoGalleryDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more PhotoGalleries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many PhotoGalleries
		 * const photoGallery = await prisma.photoGallery.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends PhotoGalleryUpdateManyArgs>(
			args: SelectSubset<T, PhotoGalleryUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more PhotoGalleries and returns the data updated in the database.
		 * @param {PhotoGalleryUpdateManyAndReturnArgs} args - Arguments to update many PhotoGalleries.
		 * @example
		 * // Update many PhotoGalleries
		 * const photoGallery = await prisma.photoGallery.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more PhotoGalleries and only return the `id`
		 * const photoGalleryWithIdOnly = await prisma.photoGallery.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends PhotoGalleryUpdateManyAndReturnArgs>(
			args: SelectSubset<T, PhotoGalleryUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one PhotoGallery.
		 * @param {PhotoGalleryUpsertArgs} args - Arguments to update or create a PhotoGallery.
		 * @example
		 * // Update or create a PhotoGallery
		 * const photoGallery = await prisma.photoGallery.upsert({
		 *   create: {
		 *     // ... data to create a PhotoGallery
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the PhotoGallery we want to update
		 *   }
		 * })
		 */
		upsert<T extends PhotoGalleryUpsertArgs>(
			args: SelectSubset<T, PhotoGalleryUpsertArgs<ExtArgs>>
		): Prisma__PhotoGalleryClient<
			$Result.GetResult<
				Prisma.$PhotoGalleryPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of PhotoGalleries.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryCountArgs} args - Arguments to filter PhotoGalleries to count.
		 * @example
		 * // Count the number of PhotoGalleries
		 * const count = await prisma.photoGallery.count({
		 *   where: {
		 *     // ... the filter for the PhotoGalleries we want to count
		 *   }
		 * })
		 **/
		count<T extends PhotoGalleryCountArgs>(
			args?: Subset<T, PhotoGalleryCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							PhotoGalleryCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a PhotoGallery.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends PhotoGalleryAggregateArgs>(
			args: Subset<T, PhotoGalleryAggregateArgs>
		): Prisma.PrismaPromise<GetPhotoGalleryAggregateType<T>>;

		/**
		 * Group by PhotoGallery.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PhotoGalleryGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends PhotoGalleryGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: PhotoGalleryGroupByArgs["orderBy"] }
				: { orderBy?: PhotoGalleryGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, PhotoGalleryGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetPhotoGalleryGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the PhotoGallery model
		 */
		readonly fields: PhotoGalleryFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for PhotoGallery.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__PhotoGalleryClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the PhotoGallery model
	 */
	interface PhotoGalleryFieldRefs {
		readonly id: FieldRef<"PhotoGallery", "Int">;
		readonly imageURL: FieldRef<"PhotoGallery", "String">;
		readonly tags: FieldRef<"PhotoGallery", "String[]">;
		readonly createdAt: FieldRef<"PhotoGallery", "DateTime">;
		readonly updateAt: FieldRef<"PhotoGallery", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * PhotoGallery findUnique
	 */
	export type PhotoGalleryFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * Filter, which PhotoGallery to fetch.
		 */
		where: PhotoGalleryWhereUniqueInput;
	};

	/**
	 * PhotoGallery findUniqueOrThrow
	 */
	export type PhotoGalleryFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * Filter, which PhotoGallery to fetch.
		 */
		where: PhotoGalleryWhereUniqueInput;
	};

	/**
	 * PhotoGallery findFirst
	 */
	export type PhotoGalleryFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * Filter, which PhotoGallery to fetch.
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PhotoGalleries to fetch.
		 */
		orderBy?:
			| PhotoGalleryOrderByWithRelationInput
			| PhotoGalleryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for PhotoGalleries.
		 */
		cursor?: PhotoGalleryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PhotoGalleries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PhotoGalleries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of PhotoGalleries.
		 */
		distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[];
	};

	/**
	 * PhotoGallery findFirstOrThrow
	 */
	export type PhotoGalleryFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * Filter, which PhotoGallery to fetch.
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PhotoGalleries to fetch.
		 */
		orderBy?:
			| PhotoGalleryOrderByWithRelationInput
			| PhotoGalleryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for PhotoGalleries.
		 */
		cursor?: PhotoGalleryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PhotoGalleries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PhotoGalleries.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of PhotoGalleries.
		 */
		distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[];
	};

	/**
	 * PhotoGallery findMany
	 */
	export type PhotoGalleryFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * Filter, which PhotoGalleries to fetch.
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of PhotoGalleries to fetch.
		 */
		orderBy?:
			| PhotoGalleryOrderByWithRelationInput
			| PhotoGalleryOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing PhotoGalleries.
		 */
		cursor?: PhotoGalleryWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` PhotoGalleries from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` PhotoGalleries.
		 */
		skip?: number;
		distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[];
	};

	/**
	 * PhotoGallery create
	 */
	export type PhotoGalleryCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * The data needed to create a PhotoGallery.
		 */
		data: XOR<PhotoGalleryCreateInput, PhotoGalleryUncheckedCreateInput>;
	};

	/**
	 * PhotoGallery createMany
	 */
	export type PhotoGalleryCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many PhotoGalleries.
		 */
		data: PhotoGalleryCreateManyInput | PhotoGalleryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * PhotoGallery createManyAndReturn
	 */
	export type PhotoGalleryCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * The data used to create many PhotoGalleries.
		 */
		data: PhotoGalleryCreateManyInput | PhotoGalleryCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * PhotoGallery update
	 */
	export type PhotoGalleryUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * The data needed to update a PhotoGallery.
		 */
		data: XOR<PhotoGalleryUpdateInput, PhotoGalleryUncheckedUpdateInput>;
		/**
		 * Choose, which PhotoGallery to update.
		 */
		where: PhotoGalleryWhereUniqueInput;
	};

	/**
	 * PhotoGallery updateMany
	 */
	export type PhotoGalleryUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update PhotoGalleries.
		 */
		data: XOR<
			PhotoGalleryUpdateManyMutationInput,
			PhotoGalleryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which PhotoGalleries to update
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * Limit how many PhotoGalleries to update.
		 */
		limit?: number;
	};

	/**
	 * PhotoGallery updateManyAndReturn
	 */
	export type PhotoGalleryUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * The data used to update PhotoGalleries.
		 */
		data: XOR<
			PhotoGalleryUpdateManyMutationInput,
			PhotoGalleryUncheckedUpdateManyInput
		>;
		/**
		 * Filter which PhotoGalleries to update
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * Limit how many PhotoGalleries to update.
		 */
		limit?: number;
	};

	/**
	 * PhotoGallery upsert
	 */
	export type PhotoGalleryUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * The filter to search for the PhotoGallery to update in case it exists.
		 */
		where: PhotoGalleryWhereUniqueInput;
		/**
		 * In case the PhotoGallery found by the `where` argument doesn't exist, create a new PhotoGallery with this data.
		 */
		create: XOR<PhotoGalleryCreateInput, PhotoGalleryUncheckedCreateInput>;
		/**
		 * In case the PhotoGallery was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<PhotoGalleryUpdateInput, PhotoGalleryUncheckedUpdateInput>;
	};

	/**
	 * PhotoGallery delete
	 */
	export type PhotoGalleryDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
		/**
		 * Filter which PhotoGallery to delete.
		 */
		where: PhotoGalleryWhereUniqueInput;
	};

	/**
	 * PhotoGallery deleteMany
	 */
	export type PhotoGalleryDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which PhotoGalleries to delete
		 */
		where?: PhotoGalleryWhereInput;
		/**
		 * Limit how many PhotoGalleries to delete.
		 */
		limit?: number;
	};

	/**
	 * PhotoGallery without action
	 */
	export type PhotoGalleryDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the PhotoGallery
		 */
		select?: PhotoGallerySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the PhotoGallery
		 */
		omit?: PhotoGalleryOmit<ExtArgs> | null;
	};

	/**
	 * Model ResearchArea
	 */

	export type AggregateResearchArea = {
		_count: ResearchAreaCountAggregateOutputType | null;
		_avg: ResearchAreaAvgAggregateOutputType | null;
		_sum: ResearchAreaSumAggregateOutputType | null;
		_min: ResearchAreaMinAggregateOutputType | null;
		_max: ResearchAreaMaxAggregateOutputType | null;
	};

	export type ResearchAreaAvgAggregateOutputType = {
		id: number | null;
	};

	export type ResearchAreaSumAggregateOutputType = {
		id: number | null;
	};

	export type ResearchAreaMinAggregateOutputType = {
		id: number | null;
		name: string | null;
		description: string | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type ResearchAreaMaxAggregateOutputType = {
		id: number | null;
		name: string | null;
		description: string | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type ResearchAreaCountAggregateOutputType = {
		id: number;
		name: number;
		description: number;
		imageURL: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type ResearchAreaAvgAggregateInputType = {
		id?: true;
	};

	export type ResearchAreaSumAggregateInputType = {
		id?: true;
	};

	export type ResearchAreaMinAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type ResearchAreaMaxAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type ResearchAreaCountAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type ResearchAreaAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ResearchArea to aggregate.
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchAreas to fetch.
		 */
		orderBy?:
			| ResearchAreaOrderByWithRelationInput
			| ResearchAreaOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ResearchAreaWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchAreas from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchAreas.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned ResearchAreas
		 **/
		_count?: true | ResearchAreaCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ResearchAreaAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ResearchAreaSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ResearchAreaMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ResearchAreaMaxAggregateInputType;
	};

	export type GetResearchAreaAggregateType<
		T extends ResearchAreaAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateResearchArea]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateResearchArea[P]>
			: GetScalarType<T[P], AggregateResearchArea[P]>;
	};

	export type ResearchAreaGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ResearchAreaWhereInput;
		orderBy?:
			| ResearchAreaOrderByWithAggregationInput
			| ResearchAreaOrderByWithAggregationInput[];
		by: ResearchAreaScalarFieldEnum[] | ResearchAreaScalarFieldEnum;
		having?: ResearchAreaScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ResearchAreaCountAggregateInputType | true;
		_avg?: ResearchAreaAvgAggregateInputType;
		_sum?: ResearchAreaSumAggregateInputType;
		_min?: ResearchAreaMinAggregateInputType;
		_max?: ResearchAreaMaxAggregateInputType;
	};

	export type ResearchAreaGroupByOutputType = {
		id: number;
		name: string;
		description: string;
		imageURL: string;
		createdAt: Date;
		updateAt: Date;
		_count: ResearchAreaCountAggregateOutputType | null;
		_avg: ResearchAreaAvgAggregateOutputType | null;
		_sum: ResearchAreaSumAggregateOutputType | null;
		_min: ResearchAreaMinAggregateOutputType | null;
		_max: ResearchAreaMaxAggregateOutputType | null;
	};

	type GetResearchAreaGroupByPayload<T extends ResearchAreaGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ResearchAreaGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof ResearchAreaGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<
									T[P],
									ResearchAreaGroupByOutputType[P]
								>
						: GetScalarType<T[P], ResearchAreaGroupByOutputType[P]>;
				}
			>
		>;

	export type ResearchAreaSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["researchArea"]
	>;

	export type ResearchAreaSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["researchArea"]
	>;

	export type ResearchAreaSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["researchArea"]
	>;

	export type ResearchAreaSelectScalar = {
		id?: boolean;
		name?: boolean;
		description?: boolean;
		imageURL?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type ResearchAreaOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "name" | "description" | "imageURL" | "createdAt" | "updateAt",
		ExtArgs["result"]["researchArea"]
	>;

	export type $ResearchAreaPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "ResearchArea";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				name: string;
				description: string;
				imageURL: string;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["researchArea"]
		>;
		composites: {};
	};

	type ResearchAreaGetPayload<
		S extends boolean | null | undefined | ResearchAreaDefaultArgs,
	> = $Result.GetResult<Prisma.$ResearchAreaPayload, S>;

	type ResearchAreaCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		ResearchAreaFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: ResearchAreaCountAggregateInputType | true;
	};

	export interface ResearchAreaDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["ResearchArea"];
			meta: { name: "ResearchArea" };
		};
		/**
		 * Find zero or one ResearchArea that matches the filter.
		 * @param {ResearchAreaFindUniqueArgs} args - Arguments to find a ResearchArea
		 * @example
		 * // Get one ResearchArea
		 * const researchArea = await prisma.researchArea.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ResearchAreaFindUniqueArgs>(
			args: SelectSubset<T, ResearchAreaFindUniqueArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one ResearchArea that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ResearchAreaFindUniqueOrThrowArgs} args - Arguments to find a ResearchArea
		 * @example
		 * // Get one ResearchArea
		 * const researchArea = await prisma.researchArea.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ResearchAreaFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ResearchAreaFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ResearchArea that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaFindFirstArgs} args - Arguments to find a ResearchArea
		 * @example
		 * // Get one ResearchArea
		 * const researchArea = await prisma.researchArea.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ResearchAreaFindFirstArgs>(
			args?: SelectSubset<T, ResearchAreaFindFirstArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ResearchArea that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaFindFirstOrThrowArgs} args - Arguments to find a ResearchArea
		 * @example
		 * // Get one ResearchArea
		 * const researchArea = await prisma.researchArea.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ResearchAreaFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ResearchAreaFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more ResearchAreas that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all ResearchAreas
		 * const researchAreas = await prisma.researchArea.findMany()
		 *
		 * // Get first 10 ResearchAreas
		 * const researchAreas = await prisma.researchArea.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const researchAreaWithIdOnly = await prisma.researchArea.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ResearchAreaFindManyArgs>(
			args?: SelectSubset<T, ResearchAreaFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a ResearchArea.
		 * @param {ResearchAreaCreateArgs} args - Arguments to create a ResearchArea.
		 * @example
		 * // Create one ResearchArea
		 * const ResearchArea = await prisma.researchArea.create({
		 *   data: {
		 *     // ... data to create a ResearchArea
		 *   }
		 * })
		 *
		 */
		create<T extends ResearchAreaCreateArgs>(
			args: SelectSubset<T, ResearchAreaCreateArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many ResearchAreas.
		 * @param {ResearchAreaCreateManyArgs} args - Arguments to create many ResearchAreas.
		 * @example
		 * // Create many ResearchAreas
		 * const researchArea = await prisma.researchArea.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ResearchAreaCreateManyArgs>(
			args?: SelectSubset<T, ResearchAreaCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many ResearchAreas and returns the data saved in the database.
		 * @param {ResearchAreaCreateManyAndReturnArgs} args - Arguments to create many ResearchAreas.
		 * @example
		 * // Create many ResearchAreas
		 * const researchArea = await prisma.researchArea.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many ResearchAreas and only return the `id`
		 * const researchAreaWithIdOnly = await prisma.researchArea.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ResearchAreaCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ResearchAreaCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a ResearchArea.
		 * @param {ResearchAreaDeleteArgs} args - Arguments to delete one ResearchArea.
		 * @example
		 * // Delete one ResearchArea
		 * const ResearchArea = await prisma.researchArea.delete({
		 *   where: {
		 *     // ... filter to delete one ResearchArea
		 *   }
		 * })
		 *
		 */
		delete<T extends ResearchAreaDeleteArgs>(
			args: SelectSubset<T, ResearchAreaDeleteArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one ResearchArea.
		 * @param {ResearchAreaUpdateArgs} args - Arguments to update one ResearchArea.
		 * @example
		 * // Update one ResearchArea
		 * const researchArea = await prisma.researchArea.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ResearchAreaUpdateArgs>(
			args: SelectSubset<T, ResearchAreaUpdateArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more ResearchAreas.
		 * @param {ResearchAreaDeleteManyArgs} args - Arguments to filter ResearchAreas to delete.
		 * @example
		 * // Delete a few ResearchAreas
		 * const { count } = await prisma.researchArea.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ResearchAreaDeleteManyArgs>(
			args?: SelectSubset<T, ResearchAreaDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ResearchAreas.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many ResearchAreas
		 * const researchArea = await prisma.researchArea.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ResearchAreaUpdateManyArgs>(
			args: SelectSubset<T, ResearchAreaUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ResearchAreas and returns the data updated in the database.
		 * @param {ResearchAreaUpdateManyAndReturnArgs} args - Arguments to update many ResearchAreas.
		 * @example
		 * // Update many ResearchAreas
		 * const researchArea = await prisma.researchArea.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more ResearchAreas and only return the `id`
		 * const researchAreaWithIdOnly = await prisma.researchArea.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends ResearchAreaUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ResearchAreaUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one ResearchArea.
		 * @param {ResearchAreaUpsertArgs} args - Arguments to update or create a ResearchArea.
		 * @example
		 * // Update or create a ResearchArea
		 * const researchArea = await prisma.researchArea.upsert({
		 *   create: {
		 *     // ... data to create a ResearchArea
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the ResearchArea we want to update
		 *   }
		 * })
		 */
		upsert<T extends ResearchAreaUpsertArgs>(
			args: SelectSubset<T, ResearchAreaUpsertArgs<ExtArgs>>
		): Prisma__ResearchAreaClient<
			$Result.GetResult<
				Prisma.$ResearchAreaPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of ResearchAreas.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaCountArgs} args - Arguments to filter ResearchAreas to count.
		 * @example
		 * // Count the number of ResearchAreas
		 * const count = await prisma.researchArea.count({
		 *   where: {
		 *     // ... the filter for the ResearchAreas we want to count
		 *   }
		 * })
		 **/
		count<T extends ResearchAreaCountArgs>(
			args?: Subset<T, ResearchAreaCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							ResearchAreaCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a ResearchArea.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ResearchAreaAggregateArgs>(
			args: Subset<T, ResearchAreaAggregateArgs>
		): Prisma.PrismaPromise<GetResearchAreaAggregateType<T>>;

		/**
		 * Group by ResearchArea.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchAreaGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ResearchAreaGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ResearchAreaGroupByArgs["orderBy"] }
				: { orderBy?: ResearchAreaGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ResearchAreaGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetResearchAreaGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the ResearchArea model
		 */
		readonly fields: ResearchAreaFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for ResearchArea.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ResearchAreaClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the ResearchArea model
	 */
	interface ResearchAreaFieldRefs {
		readonly id: FieldRef<"ResearchArea", "Int">;
		readonly name: FieldRef<"ResearchArea", "String">;
		readonly description: FieldRef<"ResearchArea", "String">;
		readonly imageURL: FieldRef<"ResearchArea", "String">;
		readonly createdAt: FieldRef<"ResearchArea", "DateTime">;
		readonly updateAt: FieldRef<"ResearchArea", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * ResearchArea findUnique
	 */
	export type ResearchAreaFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchArea to fetch.
		 */
		where: ResearchAreaWhereUniqueInput;
	};

	/**
	 * ResearchArea findUniqueOrThrow
	 */
	export type ResearchAreaFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchArea to fetch.
		 */
		where: ResearchAreaWhereUniqueInput;
	};

	/**
	 * ResearchArea findFirst
	 */
	export type ResearchAreaFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchArea to fetch.
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchAreas to fetch.
		 */
		orderBy?:
			| ResearchAreaOrderByWithRelationInput
			| ResearchAreaOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ResearchAreas.
		 */
		cursor?: ResearchAreaWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchAreas from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchAreas.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ResearchAreas.
		 */
		distinct?: ResearchAreaScalarFieldEnum | ResearchAreaScalarFieldEnum[];
	};

	/**
	 * ResearchArea findFirstOrThrow
	 */
	export type ResearchAreaFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchArea to fetch.
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchAreas to fetch.
		 */
		orderBy?:
			| ResearchAreaOrderByWithRelationInput
			| ResearchAreaOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ResearchAreas.
		 */
		cursor?: ResearchAreaWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchAreas from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchAreas.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ResearchAreas.
		 */
		distinct?: ResearchAreaScalarFieldEnum | ResearchAreaScalarFieldEnum[];
	};

	/**
	 * ResearchArea findMany
	 */
	export type ResearchAreaFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchAreas to fetch.
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchAreas to fetch.
		 */
		orderBy?:
			| ResearchAreaOrderByWithRelationInput
			| ResearchAreaOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing ResearchAreas.
		 */
		cursor?: ResearchAreaWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchAreas from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchAreas.
		 */
		skip?: number;
		distinct?: ResearchAreaScalarFieldEnum | ResearchAreaScalarFieldEnum[];
	};

	/**
	 * ResearchArea create
	 */
	export type ResearchAreaCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * The data needed to create a ResearchArea.
		 */
		data: XOR<ResearchAreaCreateInput, ResearchAreaUncheckedCreateInput>;
	};

	/**
	 * ResearchArea createMany
	 */
	export type ResearchAreaCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many ResearchAreas.
		 */
		data: ResearchAreaCreateManyInput | ResearchAreaCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ResearchArea createManyAndReturn
	 */
	export type ResearchAreaCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * The data used to create many ResearchAreas.
		 */
		data: ResearchAreaCreateManyInput | ResearchAreaCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ResearchArea update
	 */
	export type ResearchAreaUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * The data needed to update a ResearchArea.
		 */
		data: XOR<ResearchAreaUpdateInput, ResearchAreaUncheckedUpdateInput>;
		/**
		 * Choose, which ResearchArea to update.
		 */
		where: ResearchAreaWhereUniqueInput;
	};

	/**
	 * ResearchArea updateMany
	 */
	export type ResearchAreaUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update ResearchAreas.
		 */
		data: XOR<
			ResearchAreaUpdateManyMutationInput,
			ResearchAreaUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ResearchAreas to update
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * Limit how many ResearchAreas to update.
		 */
		limit?: number;
	};

	/**
	 * ResearchArea updateManyAndReturn
	 */
	export type ResearchAreaUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * The data used to update ResearchAreas.
		 */
		data: XOR<
			ResearchAreaUpdateManyMutationInput,
			ResearchAreaUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ResearchAreas to update
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * Limit how many ResearchAreas to update.
		 */
		limit?: number;
	};

	/**
	 * ResearchArea upsert
	 */
	export type ResearchAreaUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * The filter to search for the ResearchArea to update in case it exists.
		 */
		where: ResearchAreaWhereUniqueInput;
		/**
		 * In case the ResearchArea found by the `where` argument doesn't exist, create a new ResearchArea with this data.
		 */
		create: XOR<ResearchAreaCreateInput, ResearchAreaUncheckedCreateInput>;
		/**
		 * In case the ResearchArea was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ResearchAreaUpdateInput, ResearchAreaUncheckedUpdateInput>;
	};

	/**
	 * ResearchArea delete
	 */
	export type ResearchAreaDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
		/**
		 * Filter which ResearchArea to delete.
		 */
		where: ResearchAreaWhereUniqueInput;
	};

	/**
	 * ResearchArea deleteMany
	 */
	export type ResearchAreaDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ResearchAreas to delete
		 */
		where?: ResearchAreaWhereInput;
		/**
		 * Limit how many ResearchAreas to delete.
		 */
		limit?: number;
	};

	/**
	 * ResearchArea without action
	 */
	export type ResearchAreaDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchArea
		 */
		select?: ResearchAreaSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchArea
		 */
		omit?: ResearchAreaOmit<ExtArgs> | null;
	};

	/**
	 * Model ResearchFacility
	 */

	export type AggregateResearchFacility = {
		_count: ResearchFacilityCountAggregateOutputType | null;
		_avg: ResearchFacilityAvgAggregateOutputType | null;
		_sum: ResearchFacilitySumAggregateOutputType | null;
		_min: ResearchFacilityMinAggregateOutputType | null;
		_max: ResearchFacilityMaxAggregateOutputType | null;
	};

	export type ResearchFacilityAvgAggregateOutputType = {
		id: number | null;
	};

	export type ResearchFacilitySumAggregateOutputType = {
		id: number | null;
	};

	export type ResearchFacilityMinAggregateOutputType = {
		id: number | null;
		name: string | null;
		description: string | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type ResearchFacilityMaxAggregateOutputType = {
		id: number | null;
		name: string | null;
		description: string | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type ResearchFacilityCountAggregateOutputType = {
		id: number;
		name: number;
		description: number;
		imageURL: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type ResearchFacilityAvgAggregateInputType = {
		id?: true;
	};

	export type ResearchFacilitySumAggregateInputType = {
		id?: true;
	};

	export type ResearchFacilityMinAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type ResearchFacilityMaxAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type ResearchFacilityCountAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type ResearchFacilityAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ResearchFacility to aggregate.
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchFacilities to fetch.
		 */
		orderBy?:
			| ResearchFacilityOrderByWithRelationInput
			| ResearchFacilityOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ResearchFacilityWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchFacilities from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchFacilities.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned ResearchFacilities
		 **/
		_count?: true | ResearchFacilityCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ResearchFacilityAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ResearchFacilitySumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ResearchFacilityMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ResearchFacilityMaxAggregateInputType;
	};

	export type GetResearchFacilityAggregateType<
		T extends ResearchFacilityAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateResearchFacility]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateResearchFacility[P]>
			: GetScalarType<T[P], AggregateResearchFacility[P]>;
	};

	export type ResearchFacilityGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ResearchFacilityWhereInput;
		orderBy?:
			| ResearchFacilityOrderByWithAggregationInput
			| ResearchFacilityOrderByWithAggregationInput[];
		by: ResearchFacilityScalarFieldEnum[] | ResearchFacilityScalarFieldEnum;
		having?: ResearchFacilityScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ResearchFacilityCountAggregateInputType | true;
		_avg?: ResearchFacilityAvgAggregateInputType;
		_sum?: ResearchFacilitySumAggregateInputType;
		_min?: ResearchFacilityMinAggregateInputType;
		_max?: ResearchFacilityMaxAggregateInputType;
	};

	export type ResearchFacilityGroupByOutputType = {
		id: number;
		name: string;
		description: string;
		imageURL: string | null;
		createdAt: Date;
		updateAt: Date;
		_count: ResearchFacilityCountAggregateOutputType | null;
		_avg: ResearchFacilityAvgAggregateOutputType | null;
		_sum: ResearchFacilitySumAggregateOutputType | null;
		_min: ResearchFacilityMinAggregateOutputType | null;
		_max: ResearchFacilityMaxAggregateOutputType | null;
	};

	type GetResearchFacilityGroupByPayload<
		T extends ResearchFacilityGroupByArgs,
	> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<ResearchFacilityGroupByOutputType, T["by"]> & {
				[P in keyof T &
					keyof ResearchFacilityGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<
								T[P],
								ResearchFacilityGroupByOutputType[P]
							>
					: GetScalarType<T[P], ResearchFacilityGroupByOutputType[P]>;
			}
		>
	>;

	export type ResearchFacilitySelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["researchFacility"]
	>;

	export type ResearchFacilitySelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["researchFacility"]
	>;

	export type ResearchFacilitySelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["researchFacility"]
	>;

	export type ResearchFacilitySelectScalar = {
		id?: boolean;
		name?: boolean;
		description?: boolean;
		imageURL?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type ResearchFacilityOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "name" | "description" | "imageURL" | "createdAt" | "updateAt",
		ExtArgs["result"]["researchFacility"]
	>;

	export type $ResearchFacilityPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "ResearchFacility";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				name: string;
				description: string;
				imageURL: string | null;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["researchFacility"]
		>;
		composites: {};
	};

	type ResearchFacilityGetPayload<
		S extends boolean | null | undefined | ResearchFacilityDefaultArgs,
	> = $Result.GetResult<Prisma.$ResearchFacilityPayload, S>;

	type ResearchFacilityCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		ResearchFacilityFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: ResearchFacilityCountAggregateInputType | true;
	};

	export interface ResearchFacilityDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["ResearchFacility"];
			meta: { name: "ResearchFacility" };
		};
		/**
		 * Find zero or one ResearchFacility that matches the filter.
		 * @param {ResearchFacilityFindUniqueArgs} args - Arguments to find a ResearchFacility
		 * @example
		 * // Get one ResearchFacility
		 * const researchFacility = await prisma.researchFacility.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ResearchFacilityFindUniqueArgs>(
			args: SelectSubset<T, ResearchFacilityFindUniqueArgs<ExtArgs>>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one ResearchFacility that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ResearchFacilityFindUniqueOrThrowArgs} args - Arguments to find a ResearchFacility
		 * @example
		 * // Get one ResearchFacility
		 * const researchFacility = await prisma.researchFacility.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ResearchFacilityFindUniqueOrThrowArgs>(
			args: SelectSubset<
				T,
				ResearchFacilityFindUniqueOrThrowArgs<ExtArgs>
			>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ResearchFacility that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityFindFirstArgs} args - Arguments to find a ResearchFacility
		 * @example
		 * // Get one ResearchFacility
		 * const researchFacility = await prisma.researchFacility.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ResearchFacilityFindFirstArgs>(
			args?: SelectSubset<T, ResearchFacilityFindFirstArgs<ExtArgs>>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first ResearchFacility that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityFindFirstOrThrowArgs} args - Arguments to find a ResearchFacility
		 * @example
		 * // Get one ResearchFacility
		 * const researchFacility = await prisma.researchFacility.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ResearchFacilityFindFirstOrThrowArgs>(
			args?: SelectSubset<
				T,
				ResearchFacilityFindFirstOrThrowArgs<ExtArgs>
			>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more ResearchFacilities that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all ResearchFacilities
		 * const researchFacilities = await prisma.researchFacility.findMany()
		 *
		 * // Get first 10 ResearchFacilities
		 * const researchFacilities = await prisma.researchFacility.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const researchFacilityWithIdOnly = await prisma.researchFacility.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ResearchFacilityFindManyArgs>(
			args?: SelectSubset<T, ResearchFacilityFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a ResearchFacility.
		 * @param {ResearchFacilityCreateArgs} args - Arguments to create a ResearchFacility.
		 * @example
		 * // Create one ResearchFacility
		 * const ResearchFacility = await prisma.researchFacility.create({
		 *   data: {
		 *     // ... data to create a ResearchFacility
		 *   }
		 * })
		 *
		 */
		create<T extends ResearchFacilityCreateArgs>(
			args: SelectSubset<T, ResearchFacilityCreateArgs<ExtArgs>>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many ResearchFacilities.
		 * @param {ResearchFacilityCreateManyArgs} args - Arguments to create many ResearchFacilities.
		 * @example
		 * // Create many ResearchFacilities
		 * const researchFacility = await prisma.researchFacility.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ResearchFacilityCreateManyArgs>(
			args?: SelectSubset<T, ResearchFacilityCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many ResearchFacilities and returns the data saved in the database.
		 * @param {ResearchFacilityCreateManyAndReturnArgs} args - Arguments to create many ResearchFacilities.
		 * @example
		 * // Create many ResearchFacilities
		 * const researchFacility = await prisma.researchFacility.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many ResearchFacilities and only return the `id`
		 * const researchFacilityWithIdOnly = await prisma.researchFacility.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ResearchFacilityCreateManyAndReturnArgs>(
			args?: SelectSubset<
				T,
				ResearchFacilityCreateManyAndReturnArgs<ExtArgs>
			>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a ResearchFacility.
		 * @param {ResearchFacilityDeleteArgs} args - Arguments to delete one ResearchFacility.
		 * @example
		 * // Delete one ResearchFacility
		 * const ResearchFacility = await prisma.researchFacility.delete({
		 *   where: {
		 *     // ... filter to delete one ResearchFacility
		 *   }
		 * })
		 *
		 */
		delete<T extends ResearchFacilityDeleteArgs>(
			args: SelectSubset<T, ResearchFacilityDeleteArgs<ExtArgs>>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one ResearchFacility.
		 * @param {ResearchFacilityUpdateArgs} args - Arguments to update one ResearchFacility.
		 * @example
		 * // Update one ResearchFacility
		 * const researchFacility = await prisma.researchFacility.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ResearchFacilityUpdateArgs>(
			args: SelectSubset<T, ResearchFacilityUpdateArgs<ExtArgs>>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more ResearchFacilities.
		 * @param {ResearchFacilityDeleteManyArgs} args - Arguments to filter ResearchFacilities to delete.
		 * @example
		 * // Delete a few ResearchFacilities
		 * const { count } = await prisma.researchFacility.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ResearchFacilityDeleteManyArgs>(
			args?: SelectSubset<T, ResearchFacilityDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ResearchFacilities.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many ResearchFacilities
		 * const researchFacility = await prisma.researchFacility.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ResearchFacilityUpdateManyArgs>(
			args: SelectSubset<T, ResearchFacilityUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more ResearchFacilities and returns the data updated in the database.
		 * @param {ResearchFacilityUpdateManyAndReturnArgs} args - Arguments to update many ResearchFacilities.
		 * @example
		 * // Update many ResearchFacilities
		 * const researchFacility = await prisma.researchFacility.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more ResearchFacilities and only return the `id`
		 * const researchFacilityWithIdOnly = await prisma.researchFacility.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends ResearchFacilityUpdateManyAndReturnArgs>(
			args: SelectSubset<
				T,
				ResearchFacilityUpdateManyAndReturnArgs<ExtArgs>
			>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one ResearchFacility.
		 * @param {ResearchFacilityUpsertArgs} args - Arguments to update or create a ResearchFacility.
		 * @example
		 * // Update or create a ResearchFacility
		 * const researchFacility = await prisma.researchFacility.upsert({
		 *   create: {
		 *     // ... data to create a ResearchFacility
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the ResearchFacility we want to update
		 *   }
		 * })
		 */
		upsert<T extends ResearchFacilityUpsertArgs>(
			args: SelectSubset<T, ResearchFacilityUpsertArgs<ExtArgs>>
		): Prisma__ResearchFacilityClient<
			$Result.GetResult<
				Prisma.$ResearchFacilityPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of ResearchFacilities.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityCountArgs} args - Arguments to filter ResearchFacilities to count.
		 * @example
		 * // Count the number of ResearchFacilities
		 * const count = await prisma.researchFacility.count({
		 *   where: {
		 *     // ... the filter for the ResearchFacilities we want to count
		 *   }
		 * })
		 **/
		count<T extends ResearchFacilityCountArgs>(
			args?: Subset<T, ResearchFacilityCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							ResearchFacilityCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a ResearchFacility.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ResearchFacilityAggregateArgs>(
			args: Subset<T, ResearchFacilityAggregateArgs>
		): Prisma.PrismaPromise<GetResearchFacilityAggregateType<T>>;

		/**
		 * Group by ResearchFacility.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResearchFacilityGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ResearchFacilityGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ResearchFacilityGroupByArgs["orderBy"] }
				: { orderBy?: ResearchFacilityGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<
				T,
				ResearchFacilityGroupByArgs,
				OrderByArg
			> &
				InputErrors
		): {} extends InputErrors
			? GetResearchFacilityGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the ResearchFacility model
		 */
		readonly fields: ResearchFacilityFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for ResearchFacility.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ResearchFacilityClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the ResearchFacility model
	 */
	interface ResearchFacilityFieldRefs {
		readonly id: FieldRef<"ResearchFacility", "Int">;
		readonly name: FieldRef<"ResearchFacility", "String">;
		readonly description: FieldRef<"ResearchFacility", "String">;
		readonly imageURL: FieldRef<"ResearchFacility", "String">;
		readonly createdAt: FieldRef<"ResearchFacility", "DateTime">;
		readonly updateAt: FieldRef<"ResearchFacility", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * ResearchFacility findUnique
	 */
	export type ResearchFacilityFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchFacility to fetch.
		 */
		where: ResearchFacilityWhereUniqueInput;
	};

	/**
	 * ResearchFacility findUniqueOrThrow
	 */
	export type ResearchFacilityFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchFacility to fetch.
		 */
		where: ResearchFacilityWhereUniqueInput;
	};

	/**
	 * ResearchFacility findFirst
	 */
	export type ResearchFacilityFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchFacility to fetch.
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchFacilities to fetch.
		 */
		orderBy?:
			| ResearchFacilityOrderByWithRelationInput
			| ResearchFacilityOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ResearchFacilities.
		 */
		cursor?: ResearchFacilityWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchFacilities from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchFacilities.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ResearchFacilities.
		 */
		distinct?:
			| ResearchFacilityScalarFieldEnum
			| ResearchFacilityScalarFieldEnum[];
	};

	/**
	 * ResearchFacility findFirstOrThrow
	 */
	export type ResearchFacilityFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchFacility to fetch.
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchFacilities to fetch.
		 */
		orderBy?:
			| ResearchFacilityOrderByWithRelationInput
			| ResearchFacilityOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for ResearchFacilities.
		 */
		cursor?: ResearchFacilityWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchFacilities from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchFacilities.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of ResearchFacilities.
		 */
		distinct?:
			| ResearchFacilityScalarFieldEnum
			| ResearchFacilityScalarFieldEnum[];
	};

	/**
	 * ResearchFacility findMany
	 */
	export type ResearchFacilityFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * Filter, which ResearchFacilities to fetch.
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of ResearchFacilities to fetch.
		 */
		orderBy?:
			| ResearchFacilityOrderByWithRelationInput
			| ResearchFacilityOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing ResearchFacilities.
		 */
		cursor?: ResearchFacilityWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` ResearchFacilities from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` ResearchFacilities.
		 */
		skip?: number;
		distinct?:
			| ResearchFacilityScalarFieldEnum
			| ResearchFacilityScalarFieldEnum[];
	};

	/**
	 * ResearchFacility create
	 */
	export type ResearchFacilityCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * The data needed to create a ResearchFacility.
		 */
		data: XOR<
			ResearchFacilityCreateInput,
			ResearchFacilityUncheckedCreateInput
		>;
	};

	/**
	 * ResearchFacility createMany
	 */
	export type ResearchFacilityCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many ResearchFacilities.
		 */
		data:
			| ResearchFacilityCreateManyInput
			| ResearchFacilityCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ResearchFacility createManyAndReturn
	 */
	export type ResearchFacilityCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * The data used to create many ResearchFacilities.
		 */
		data:
			| ResearchFacilityCreateManyInput
			| ResearchFacilityCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * ResearchFacility update
	 */
	export type ResearchFacilityUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * The data needed to update a ResearchFacility.
		 */
		data: XOR<
			ResearchFacilityUpdateInput,
			ResearchFacilityUncheckedUpdateInput
		>;
		/**
		 * Choose, which ResearchFacility to update.
		 */
		where: ResearchFacilityWhereUniqueInput;
	};

	/**
	 * ResearchFacility updateMany
	 */
	export type ResearchFacilityUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update ResearchFacilities.
		 */
		data: XOR<
			ResearchFacilityUpdateManyMutationInput,
			ResearchFacilityUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ResearchFacilities to update
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * Limit how many ResearchFacilities to update.
		 */
		limit?: number;
	};

	/**
	 * ResearchFacility updateManyAndReturn
	 */
	export type ResearchFacilityUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * The data used to update ResearchFacilities.
		 */
		data: XOR<
			ResearchFacilityUpdateManyMutationInput,
			ResearchFacilityUncheckedUpdateManyInput
		>;
		/**
		 * Filter which ResearchFacilities to update
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * Limit how many ResearchFacilities to update.
		 */
		limit?: number;
	};

	/**
	 * ResearchFacility upsert
	 */
	export type ResearchFacilityUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * The filter to search for the ResearchFacility to update in case it exists.
		 */
		where: ResearchFacilityWhereUniqueInput;
		/**
		 * In case the ResearchFacility found by the `where` argument doesn't exist, create a new ResearchFacility with this data.
		 */
		create: XOR<
			ResearchFacilityCreateInput,
			ResearchFacilityUncheckedCreateInput
		>;
		/**
		 * In case the ResearchFacility was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<
			ResearchFacilityUpdateInput,
			ResearchFacilityUncheckedUpdateInput
		>;
	};

	/**
	 * ResearchFacility delete
	 */
	export type ResearchFacilityDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
		/**
		 * Filter which ResearchFacility to delete.
		 */
		where: ResearchFacilityWhereUniqueInput;
	};

	/**
	 * ResearchFacility deleteMany
	 */
	export type ResearchFacilityDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which ResearchFacilities to delete
		 */
		where?: ResearchFacilityWhereInput;
		/**
		 * Limit how many ResearchFacilities to delete.
		 */
		limit?: number;
	};

	/**
	 * ResearchFacility without action
	 */
	export type ResearchFacilityDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ResearchFacility
		 */
		select?: ResearchFacilitySelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the ResearchFacility
		 */
		omit?: ResearchFacilityOmit<ExtArgs> | null;
	};

	/**
	 * Model People
	 */

	export type AggregatePeople = {
		_count: PeopleCountAggregateOutputType | null;
		_avg: PeopleAvgAggregateOutputType | null;
		_sum: PeopleSumAggregateOutputType | null;
		_min: PeopleMinAggregateOutputType | null;
		_max: PeopleMaxAggregateOutputType | null;
	};

	export type PeopleAvgAggregateOutputType = {
		id: number | null;
	};

	export type PeopleSumAggregateOutputType = {
		id: number | null;
	};

	export type PeopleMinAggregateOutputType = {
		id: number | null;
		name: string | null;
		description: string | null;
		linkedIn: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type PeopleMaxAggregateOutputType = {
		id: number | null;
		name: string | null;
		description: string | null;
		linkedIn: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type PeopleCountAggregateOutputType = {
		id: number;
		name: number;
		description: number;
		linkedIn: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type PeopleAvgAggregateInputType = {
		id?: true;
	};

	export type PeopleSumAggregateInputType = {
		id?: true;
	};

	export type PeopleMinAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		linkedIn?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type PeopleMaxAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		linkedIn?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type PeopleCountAggregateInputType = {
		id?: true;
		name?: true;
		description?: true;
		linkedIn?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type PeopleAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which People to aggregate.
		 */
		where?: PeopleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of People to fetch.
		 */
		orderBy?:
			| PeopleOrderByWithRelationInput
			| PeopleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: PeopleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` People from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` People.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned People
		 **/
		_count?: true | PeopleCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: PeopleAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: PeopleSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: PeopleMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: PeopleMaxAggregateInputType;
	};

	export type GetPeopleAggregateType<T extends PeopleAggregateArgs> = {
		[P in keyof T & keyof AggregatePeople]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregatePeople[P]>
			: GetScalarType<T[P], AggregatePeople[P]>;
	};

	export type PeopleGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: PeopleWhereInput;
		orderBy?:
			| PeopleOrderByWithAggregationInput
			| PeopleOrderByWithAggregationInput[];
		by: PeopleScalarFieldEnum[] | PeopleScalarFieldEnum;
		having?: PeopleScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: PeopleCountAggregateInputType | true;
		_avg?: PeopleAvgAggregateInputType;
		_sum?: PeopleSumAggregateInputType;
		_min?: PeopleMinAggregateInputType;
		_max?: PeopleMaxAggregateInputType;
	};

	export type PeopleGroupByOutputType = {
		id: number;
		name: string;
		description: string;
		linkedIn: string | null;
		createdAt: Date;
		updateAt: Date;
		_count: PeopleCountAggregateOutputType | null;
		_avg: PeopleAvgAggregateOutputType | null;
		_sum: PeopleSumAggregateOutputType | null;
		_min: PeopleMinAggregateOutputType | null;
		_max: PeopleMaxAggregateOutputType | null;
	};

	type GetPeopleGroupByPayload<T extends PeopleGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<PeopleGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof PeopleGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], PeopleGroupByOutputType[P]>
						: GetScalarType<T[P], PeopleGroupByOutputType[P]>;
				}
			>
		>;

	export type PeopleSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			linkedIn?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["people"]
	>;

	export type PeopleSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			linkedIn?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["people"]
	>;

	export type PeopleSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			description?: boolean;
			linkedIn?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["people"]
	>;

	export type PeopleSelectScalar = {
		id?: boolean;
		name?: boolean;
		description?: boolean;
		linkedIn?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type PeopleOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "name" | "description" | "linkedIn" | "createdAt" | "updateAt",
		ExtArgs["result"]["people"]
	>;

	export type $PeoplePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "People";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				name: string;
				description: string;
				linkedIn: string | null;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["people"]
		>;
		composites: {};
	};

	type PeopleGetPayload<
		S extends boolean | null | undefined | PeopleDefaultArgs,
	> = $Result.GetResult<Prisma.$PeoplePayload, S>;

	type PeopleCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<PeopleFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: PeopleCountAggregateInputType | true;
	};

	export interface PeopleDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["People"];
			meta: { name: "People" };
		};
		/**
		 * Find zero or one People that matches the filter.
		 * @param {PeopleFindUniqueArgs} args - Arguments to find a People
		 * @example
		 * // Get one People
		 * const people = await prisma.people.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends PeopleFindUniqueArgs>(
			args: SelectSubset<T, PeopleFindUniqueArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one People that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {PeopleFindUniqueOrThrowArgs} args - Arguments to find a People
		 * @example
		 * // Get one People
		 * const people = await prisma.people.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends PeopleFindUniqueOrThrowArgs>(
			args: SelectSubset<T, PeopleFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first People that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleFindFirstArgs} args - Arguments to find a People
		 * @example
		 * // Get one People
		 * const people = await prisma.people.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends PeopleFindFirstArgs>(
			args?: SelectSubset<T, PeopleFindFirstArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first People that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleFindFirstOrThrowArgs} args - Arguments to find a People
		 * @example
		 * // Get one People
		 * const people = await prisma.people.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends PeopleFindFirstOrThrowArgs>(
			args?: SelectSubset<T, PeopleFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more People that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all People
		 * const people = await prisma.people.findMany()
		 *
		 * // Get first 10 People
		 * const people = await prisma.people.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const peopleWithIdOnly = await prisma.people.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends PeopleFindManyArgs>(
			args?: SelectSubset<T, PeopleFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a People.
		 * @param {PeopleCreateArgs} args - Arguments to create a People.
		 * @example
		 * // Create one People
		 * const People = await prisma.people.create({
		 *   data: {
		 *     // ... data to create a People
		 *   }
		 * })
		 *
		 */
		create<T extends PeopleCreateArgs>(
			args: SelectSubset<T, PeopleCreateArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many People.
		 * @param {PeopleCreateManyArgs} args - Arguments to create many People.
		 * @example
		 * // Create many People
		 * const people = await prisma.people.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends PeopleCreateManyArgs>(
			args?: SelectSubset<T, PeopleCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many People and returns the data saved in the database.
		 * @param {PeopleCreateManyAndReturnArgs} args - Arguments to create many People.
		 * @example
		 * // Create many People
		 * const people = await prisma.people.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many People and only return the `id`
		 * const peopleWithIdOnly = await prisma.people.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends PeopleCreateManyAndReturnArgs>(
			args?: SelectSubset<T, PeopleCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a People.
		 * @param {PeopleDeleteArgs} args - Arguments to delete one People.
		 * @example
		 * // Delete one People
		 * const People = await prisma.people.delete({
		 *   where: {
		 *     // ... filter to delete one People
		 *   }
		 * })
		 *
		 */
		delete<T extends PeopleDeleteArgs>(
			args: SelectSubset<T, PeopleDeleteArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one People.
		 * @param {PeopleUpdateArgs} args - Arguments to update one People.
		 * @example
		 * // Update one People
		 * const people = await prisma.people.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends PeopleUpdateArgs>(
			args: SelectSubset<T, PeopleUpdateArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more People.
		 * @param {PeopleDeleteManyArgs} args - Arguments to filter People to delete.
		 * @example
		 * // Delete a few People
		 * const { count } = await prisma.people.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends PeopleDeleteManyArgs>(
			args?: SelectSubset<T, PeopleDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more People.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many People
		 * const people = await prisma.people.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends PeopleUpdateManyArgs>(
			args: SelectSubset<T, PeopleUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more People and returns the data updated in the database.
		 * @param {PeopleUpdateManyAndReturnArgs} args - Arguments to update many People.
		 * @example
		 * // Update many People
		 * const people = await prisma.people.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more People and only return the `id`
		 * const peopleWithIdOnly = await prisma.people.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends PeopleUpdateManyAndReturnArgs>(
			args: SelectSubset<T, PeopleUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one People.
		 * @param {PeopleUpsertArgs} args - Arguments to update or create a People.
		 * @example
		 * // Update or create a People
		 * const people = await prisma.people.upsert({
		 *   create: {
		 *     // ... data to create a People
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the People we want to update
		 *   }
		 * })
		 */
		upsert<T extends PeopleUpsertArgs>(
			args: SelectSubset<T, PeopleUpsertArgs<ExtArgs>>
		): Prisma__PeopleClient<
			$Result.GetResult<
				Prisma.$PeoplePayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of People.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleCountArgs} args - Arguments to filter People to count.
		 * @example
		 * // Count the number of People
		 * const count = await prisma.people.count({
		 *   where: {
		 *     // ... the filter for the People we want to count
		 *   }
		 * })
		 **/
		count<T extends PeopleCountArgs>(
			args?: Subset<T, PeopleCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], PeopleCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a People.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends PeopleAggregateArgs>(
			args: Subset<T, PeopleAggregateArgs>
		): Prisma.PrismaPromise<GetPeopleAggregateType<T>>;

		/**
		 * Group by People.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PeopleGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends PeopleGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: PeopleGroupByArgs["orderBy"] }
				: { orderBy?: PeopleGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, PeopleGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetPeopleGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the People model
		 */
		readonly fields: PeopleFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for People.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__PeopleClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the People model
	 */
	interface PeopleFieldRefs {
		readonly id: FieldRef<"People", "Int">;
		readonly name: FieldRef<"People", "String">;
		readonly description: FieldRef<"People", "String">;
		readonly linkedIn: FieldRef<"People", "String">;
		readonly createdAt: FieldRef<"People", "DateTime">;
		readonly updateAt: FieldRef<"People", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * People findUnique
	 */
	export type PeopleFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * Filter, which People to fetch.
		 */
		where: PeopleWhereUniqueInput;
	};

	/**
	 * People findUniqueOrThrow
	 */
	export type PeopleFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * Filter, which People to fetch.
		 */
		where: PeopleWhereUniqueInput;
	};

	/**
	 * People findFirst
	 */
	export type PeopleFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * Filter, which People to fetch.
		 */
		where?: PeopleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of People to fetch.
		 */
		orderBy?:
			| PeopleOrderByWithRelationInput
			| PeopleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for People.
		 */
		cursor?: PeopleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` People from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` People.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of People.
		 */
		distinct?: PeopleScalarFieldEnum | PeopleScalarFieldEnum[];
	};

	/**
	 * People findFirstOrThrow
	 */
	export type PeopleFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * Filter, which People to fetch.
		 */
		where?: PeopleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of People to fetch.
		 */
		orderBy?:
			| PeopleOrderByWithRelationInput
			| PeopleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for People.
		 */
		cursor?: PeopleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` People from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` People.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of People.
		 */
		distinct?: PeopleScalarFieldEnum | PeopleScalarFieldEnum[];
	};

	/**
	 * People findMany
	 */
	export type PeopleFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * Filter, which People to fetch.
		 */
		where?: PeopleWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of People to fetch.
		 */
		orderBy?:
			| PeopleOrderByWithRelationInput
			| PeopleOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing People.
		 */
		cursor?: PeopleWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` People from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` People.
		 */
		skip?: number;
		distinct?: PeopleScalarFieldEnum | PeopleScalarFieldEnum[];
	};

	/**
	 * People create
	 */
	export type PeopleCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * The data needed to create a People.
		 */
		data: XOR<PeopleCreateInput, PeopleUncheckedCreateInput>;
	};

	/**
	 * People createMany
	 */
	export type PeopleCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many People.
		 */
		data: PeopleCreateManyInput | PeopleCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * People createManyAndReturn
	 */
	export type PeopleCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * The data used to create many People.
		 */
		data: PeopleCreateManyInput | PeopleCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * People update
	 */
	export type PeopleUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * The data needed to update a People.
		 */
		data: XOR<PeopleUpdateInput, PeopleUncheckedUpdateInput>;
		/**
		 * Choose, which People to update.
		 */
		where: PeopleWhereUniqueInput;
	};

	/**
	 * People updateMany
	 */
	export type PeopleUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update People.
		 */
		data: XOR<
			PeopleUpdateManyMutationInput,
			PeopleUncheckedUpdateManyInput
		>;
		/**
		 * Filter which People to update
		 */
		where?: PeopleWhereInput;
		/**
		 * Limit how many People to update.
		 */
		limit?: number;
	};

	/**
	 * People updateManyAndReturn
	 */
	export type PeopleUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * The data used to update People.
		 */
		data: XOR<
			PeopleUpdateManyMutationInput,
			PeopleUncheckedUpdateManyInput
		>;
		/**
		 * Filter which People to update
		 */
		where?: PeopleWhereInput;
		/**
		 * Limit how many People to update.
		 */
		limit?: number;
	};

	/**
	 * People upsert
	 */
	export type PeopleUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * The filter to search for the People to update in case it exists.
		 */
		where: PeopleWhereUniqueInput;
		/**
		 * In case the People found by the `where` argument doesn't exist, create a new People with this data.
		 */
		create: XOR<PeopleCreateInput, PeopleUncheckedCreateInput>;
		/**
		 * In case the People was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<PeopleUpdateInput, PeopleUncheckedUpdateInput>;
	};

	/**
	 * People delete
	 */
	export type PeopleDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
		/**
		 * Filter which People to delete.
		 */
		where: PeopleWhereUniqueInput;
	};

	/**
	 * People deleteMany
	 */
	export type PeopleDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which People to delete
		 */
		where?: PeopleWhereInput;
		/**
		 * Limit how many People to delete.
		 */
		limit?: number;
	};

	/**
	 * People without action
	 */
	export type PeopleDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the People
		 */
		select?: PeopleSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the People
		 */
		omit?: PeopleOmit<ExtArgs> | null;
	};

	/**
	 * Model Publication
	 */

	export type AggregatePublication = {
		_count: PublicationCountAggregateOutputType | null;
		_avg: PublicationAvgAggregateOutputType | null;
		_sum: PublicationSumAggregateOutputType | null;
		_min: PublicationMinAggregateOutputType | null;
		_max: PublicationMaxAggregateOutputType | null;
	};

	export type PublicationAvgAggregateOutputType = {
		id: number | null;
	};

	export type PublicationSumAggregateOutputType = {
		id: number | null;
	};

	export type PublicationMinAggregateOutputType = {
		id: number | null;
		publication: string | null;
		description: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type PublicationMaxAggregateOutputType = {
		id: number | null;
		publication: string | null;
		description: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type PublicationCountAggregateOutputType = {
		id: number;
		publication: number;
		description: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type PublicationAvgAggregateInputType = {
		id?: true;
	};

	export type PublicationSumAggregateInputType = {
		id?: true;
	};

	export type PublicationMinAggregateInputType = {
		id?: true;
		publication?: true;
		description?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type PublicationMaxAggregateInputType = {
		id?: true;
		publication?: true;
		description?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type PublicationCountAggregateInputType = {
		id?: true;
		publication?: true;
		description?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type PublicationAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Publication to aggregate.
		 */
		where?: PublicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publications to fetch.
		 */
		orderBy?:
			| PublicationOrderByWithRelationInput
			| PublicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: PublicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publications.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Publications
		 **/
		_count?: true | PublicationCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: PublicationAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: PublicationSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: PublicationMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: PublicationMaxAggregateInputType;
	};

	export type GetPublicationAggregateType<
		T extends PublicationAggregateArgs,
	> = {
		[P in keyof T & keyof AggregatePublication]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregatePublication[P]>
			: GetScalarType<T[P], AggregatePublication[P]>;
	};

	export type PublicationGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: PublicationWhereInput;
		orderBy?:
			| PublicationOrderByWithAggregationInput
			| PublicationOrderByWithAggregationInput[];
		by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum;
		having?: PublicationScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: PublicationCountAggregateInputType | true;
		_avg?: PublicationAvgAggregateInputType;
		_sum?: PublicationSumAggregateInputType;
		_min?: PublicationMinAggregateInputType;
		_max?: PublicationMaxAggregateInputType;
	};

	export type PublicationGroupByOutputType = {
		id: number;
		publication: string;
		description: string;
		createdAt: Date;
		updateAt: Date;
		_count: PublicationCountAggregateOutputType | null;
		_avg: PublicationAvgAggregateOutputType | null;
		_sum: PublicationSumAggregateOutputType | null;
		_min: PublicationMinAggregateOutputType | null;
		_max: PublicationMaxAggregateOutputType | null;
	};

	type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<PublicationGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof PublicationGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<
									T[P],
									PublicationGroupByOutputType[P]
								>
						: GetScalarType<T[P], PublicationGroupByOutputType[P]>;
				}
			>
		>;

	export type PublicationSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			publication?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["publication"]
	>;

	export type PublicationSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			publication?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["publication"]
	>;

	export type PublicationSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			publication?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["publication"]
	>;

	export type PublicationSelectScalar = {
		id?: boolean;
		publication?: boolean;
		description?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type PublicationOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "publication" | "description" | "createdAt" | "updateAt",
		ExtArgs["result"]["publication"]
	>;

	export type $PublicationPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Publication";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				publication: string;
				description: string;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["publication"]
		>;
		composites: {};
	};

	type PublicationGetPayload<
		S extends boolean | null | undefined | PublicationDefaultArgs,
	> = $Result.GetResult<Prisma.$PublicationPayload, S>;

	type PublicationCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		PublicationFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: PublicationCountAggregateInputType | true;
	};

	export interface PublicationDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Publication"];
			meta: { name: "Publication" };
		};
		/**
		 * Find zero or one Publication that matches the filter.
		 * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
		 * @example
		 * // Get one Publication
		 * const publication = await prisma.publication.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends PublicationFindUniqueArgs>(
			args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
		 * @example
		 * // Get one Publication
		 * const publication = await prisma.publication.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(
			args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Publication that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
		 * @example
		 * // Get one Publication
		 * const publication = await prisma.publication.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends PublicationFindFirstArgs>(
			args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Publication that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
		 * @example
		 * // Get one Publication
		 * const publication = await prisma.publication.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(
			args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Publications that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Publications
		 * const publications = await prisma.publication.findMany()
		 *
		 * // Get first 10 Publications
		 * const publications = await prisma.publication.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends PublicationFindManyArgs>(
			args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Publication.
		 * @param {PublicationCreateArgs} args - Arguments to create a Publication.
		 * @example
		 * // Create one Publication
		 * const Publication = await prisma.publication.create({
		 *   data: {
		 *     // ... data to create a Publication
		 *   }
		 * })
		 *
		 */
		create<T extends PublicationCreateArgs>(
			args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Publications.
		 * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
		 * @example
		 * // Create many Publications
		 * const publication = await prisma.publication.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends PublicationCreateManyArgs>(
			args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Publications and returns the data saved in the database.
		 * @param {PublicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
		 * @example
		 * // Create many Publications
		 * const publication = await prisma.publication.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Publications and only return the `id`
		 * const publicationWithIdOnly = await prisma.publication.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends PublicationCreateManyAndReturnArgs>(
			args?: SelectSubset<T, PublicationCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Publication.
		 * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
		 * @example
		 * // Delete one Publication
		 * const Publication = await prisma.publication.delete({
		 *   where: {
		 *     // ... filter to delete one Publication
		 *   }
		 * })
		 *
		 */
		delete<T extends PublicationDeleteArgs>(
			args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Publication.
		 * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
		 * @example
		 * // Update one Publication
		 * const publication = await prisma.publication.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends PublicationUpdateArgs>(
			args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Publications.
		 * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
		 * @example
		 * // Delete a few Publications
		 * const { count } = await prisma.publication.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends PublicationDeleteManyArgs>(
			args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Publications.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Publications
		 * const publication = await prisma.publication.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends PublicationUpdateManyArgs>(
			args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Publications and returns the data updated in the database.
		 * @param {PublicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
		 * @example
		 * // Update many Publications
		 * const publication = await prisma.publication.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Publications and only return the `id`
		 * const publicationWithIdOnly = await prisma.publication.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends PublicationUpdateManyAndReturnArgs>(
			args: SelectSubset<T, PublicationUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Publication.
		 * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
		 * @example
		 * // Update or create a Publication
		 * const publication = await prisma.publication.upsert({
		 *   create: {
		 *     // ... data to create a Publication
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Publication we want to update
		 *   }
		 * })
		 */
		upsert<T extends PublicationUpsertArgs>(
			args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>
		): Prisma__PublicationClient<
			$Result.GetResult<
				Prisma.$PublicationPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Publications.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
		 * @example
		 * // Count the number of Publications
		 * const count = await prisma.publication.count({
		 *   where: {
		 *     // ... the filter for the Publications we want to count
		 *   }
		 * })
		 **/
		count<T extends PublicationCountArgs>(
			args?: Subset<T, PublicationCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							PublicationCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Publication.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends PublicationAggregateArgs>(
			args: Subset<T, PublicationAggregateArgs>
		): Prisma.PrismaPromise<GetPublicationAggregateType<T>>;

		/**
		 * Group by Publication.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublicationGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends PublicationGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: PublicationGroupByArgs["orderBy"] }
				: { orderBy?: PublicationGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetPublicationGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Publication model
		 */
		readonly fields: PublicationFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Publication.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__PublicationClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Publication model
	 */
	interface PublicationFieldRefs {
		readonly id: FieldRef<"Publication", "Int">;
		readonly publication: FieldRef<"Publication", "String">;
		readonly description: FieldRef<"Publication", "String">;
		readonly createdAt: FieldRef<"Publication", "DateTime">;
		readonly updateAt: FieldRef<"Publication", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * Publication findUnique
	 */
	export type PublicationFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * Filter, which Publication to fetch.
		 */
		where: PublicationWhereUniqueInput;
	};

	/**
	 * Publication findUniqueOrThrow
	 */
	export type PublicationFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * Filter, which Publication to fetch.
		 */
		where: PublicationWhereUniqueInput;
	};

	/**
	 * Publication findFirst
	 */
	export type PublicationFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * Filter, which Publication to fetch.
		 */
		where?: PublicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publications to fetch.
		 */
		orderBy?:
			| PublicationOrderByWithRelationInput
			| PublicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Publications.
		 */
		cursor?: PublicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publications.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Publications.
		 */
		distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
	};

	/**
	 * Publication findFirstOrThrow
	 */
	export type PublicationFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * Filter, which Publication to fetch.
		 */
		where?: PublicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publications to fetch.
		 */
		orderBy?:
			| PublicationOrderByWithRelationInput
			| PublicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Publications.
		 */
		cursor?: PublicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publications.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Publications.
		 */
		distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
	};

	/**
	 * Publication findMany
	 */
	export type PublicationFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * Filter, which Publications to fetch.
		 */
		where?: PublicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publications to fetch.
		 */
		orderBy?:
			| PublicationOrderByWithRelationInput
			| PublicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Publications.
		 */
		cursor?: PublicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publications.
		 */
		skip?: number;
		distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
	};

	/**
	 * Publication create
	 */
	export type PublicationCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * The data needed to create a Publication.
		 */
		data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>;
	};

	/**
	 * Publication createMany
	 */
	export type PublicationCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Publications.
		 */
		data: PublicationCreateManyInput | PublicationCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Publication createManyAndReturn
	 */
	export type PublicationCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * The data used to create many Publications.
		 */
		data: PublicationCreateManyInput | PublicationCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Publication update
	 */
	export type PublicationUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * The data needed to update a Publication.
		 */
		data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>;
		/**
		 * Choose, which Publication to update.
		 */
		where: PublicationWhereUniqueInput;
	};

	/**
	 * Publication updateMany
	 */
	export type PublicationUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Publications.
		 */
		data: XOR<
			PublicationUpdateManyMutationInput,
			PublicationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Publications to update
		 */
		where?: PublicationWhereInput;
		/**
		 * Limit how many Publications to update.
		 */
		limit?: number;
	};

	/**
	 * Publication updateManyAndReturn
	 */
	export type PublicationUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * The data used to update Publications.
		 */
		data: XOR<
			PublicationUpdateManyMutationInput,
			PublicationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Publications to update
		 */
		where?: PublicationWhereInput;
		/**
		 * Limit how many Publications to update.
		 */
		limit?: number;
	};

	/**
	 * Publication upsert
	 */
	export type PublicationUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * The filter to search for the Publication to update in case it exists.
		 */
		where: PublicationWhereUniqueInput;
		/**
		 * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
		 */
		create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>;
		/**
		 * In case the Publication was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>;
	};

	/**
	 * Publication delete
	 */
	export type PublicationDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
		/**
		 * Filter which Publication to delete.
		 */
		where: PublicationWhereUniqueInput;
	};

	/**
	 * Publication deleteMany
	 */
	export type PublicationDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Publications to delete
		 */
		where?: PublicationWhereInput;
		/**
		 * Limit how many Publications to delete.
		 */
		limit?: number;
	};

	/**
	 * Publication without action
	 */
	export type PublicationDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Publication
		 */
		select?: PublicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Publication
		 */
		omit?: PublicationOmit<ExtArgs> | null;
	};

	/**
	 * Model Outreach
	 */

	export type AggregateOutreach = {
		_count: OutreachCountAggregateOutputType | null;
		_avg: OutreachAvgAggregateOutputType | null;
		_sum: OutreachSumAggregateOutputType | null;
		_min: OutreachMinAggregateOutputType | null;
		_max: OutreachMaxAggregateOutputType | null;
	};

	export type OutreachAvgAggregateOutputType = {
		id: number | null;
	};

	export type OutreachSumAggregateOutputType = {
		id: number | null;
	};

	export type OutreachMinAggregateOutputType = {
		id: number | null;
		outreach: string | null;
		description: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type OutreachMaxAggregateOutputType = {
		id: number | null;
		outreach: string | null;
		description: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type OutreachCountAggregateOutputType = {
		id: number;
		outreach: number;
		description: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type OutreachAvgAggregateInputType = {
		id?: true;
	};

	export type OutreachSumAggregateInputType = {
		id?: true;
	};

	export type OutreachMinAggregateInputType = {
		id?: true;
		outreach?: true;
		description?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type OutreachMaxAggregateInputType = {
		id?: true;
		outreach?: true;
		description?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type OutreachCountAggregateInputType = {
		id?: true;
		outreach?: true;
		description?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type OutreachAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Outreach to aggregate.
		 */
		where?: OutreachWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Outreaches to fetch.
		 */
		orderBy?:
			| OutreachOrderByWithRelationInput
			| OutreachOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: OutreachWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Outreaches from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Outreaches.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Outreaches
		 **/
		_count?: true | OutreachCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: OutreachAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: OutreachSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: OutreachMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: OutreachMaxAggregateInputType;
	};

	export type GetOutreachAggregateType<T extends OutreachAggregateArgs> = {
		[P in keyof T & keyof AggregateOutreach]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateOutreach[P]>
			: GetScalarType<T[P], AggregateOutreach[P]>;
	};

	export type OutreachGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: OutreachWhereInput;
		orderBy?:
			| OutreachOrderByWithAggregationInput
			| OutreachOrderByWithAggregationInput[];
		by: OutreachScalarFieldEnum[] | OutreachScalarFieldEnum;
		having?: OutreachScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: OutreachCountAggregateInputType | true;
		_avg?: OutreachAvgAggregateInputType;
		_sum?: OutreachSumAggregateInputType;
		_min?: OutreachMinAggregateInputType;
		_max?: OutreachMaxAggregateInputType;
	};

	export type OutreachGroupByOutputType = {
		id: number;
		outreach: string;
		description: string;
		createdAt: Date;
		updateAt: Date;
		_count: OutreachCountAggregateOutputType | null;
		_avg: OutreachAvgAggregateOutputType | null;
		_sum: OutreachSumAggregateOutputType | null;
		_min: OutreachMinAggregateOutputType | null;
		_max: OutreachMaxAggregateOutputType | null;
	};

	type GetOutreachGroupByPayload<T extends OutreachGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<OutreachGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof OutreachGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], OutreachGroupByOutputType[P]>
						: GetScalarType<T[P], OutreachGroupByOutputType[P]>;
				}
			>
		>;

	export type OutreachSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			outreach?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["outreach"]
	>;

	export type OutreachSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			outreach?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["outreach"]
	>;

	export type OutreachSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			outreach?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["outreach"]
	>;

	export type OutreachSelectScalar = {
		id?: boolean;
		outreach?: boolean;
		description?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type OutreachOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "outreach" | "description" | "createdAt" | "updateAt",
		ExtArgs["result"]["outreach"]
	>;

	export type $OutreachPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Outreach";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				outreach: string;
				description: string;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["outreach"]
		>;
		composites: {};
	};

	type OutreachGetPayload<
		S extends boolean | null | undefined | OutreachDefaultArgs,
	> = $Result.GetResult<Prisma.$OutreachPayload, S>;

	type OutreachCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		OutreachFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: OutreachCountAggregateInputType | true;
	};

	export interface OutreachDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Outreach"];
			meta: { name: "Outreach" };
		};
		/**
		 * Find zero or one Outreach that matches the filter.
		 * @param {OutreachFindUniqueArgs} args - Arguments to find a Outreach
		 * @example
		 * // Get one Outreach
		 * const outreach = await prisma.outreach.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends OutreachFindUniqueArgs>(
			args: SelectSubset<T, OutreachFindUniqueArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Outreach that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {OutreachFindUniqueOrThrowArgs} args - Arguments to find a Outreach
		 * @example
		 * // Get one Outreach
		 * const outreach = await prisma.outreach.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends OutreachFindUniqueOrThrowArgs>(
			args: SelectSubset<T, OutreachFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Outreach that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachFindFirstArgs} args - Arguments to find a Outreach
		 * @example
		 * // Get one Outreach
		 * const outreach = await prisma.outreach.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends OutreachFindFirstArgs>(
			args?: SelectSubset<T, OutreachFindFirstArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Outreach that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachFindFirstOrThrowArgs} args - Arguments to find a Outreach
		 * @example
		 * // Get one Outreach
		 * const outreach = await prisma.outreach.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends OutreachFindFirstOrThrowArgs>(
			args?: SelectSubset<T, OutreachFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Outreaches that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Outreaches
		 * const outreaches = await prisma.outreach.findMany()
		 *
		 * // Get first 10 Outreaches
		 * const outreaches = await prisma.outreach.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const outreachWithIdOnly = await prisma.outreach.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends OutreachFindManyArgs>(
			args?: SelectSubset<T, OutreachFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Outreach.
		 * @param {OutreachCreateArgs} args - Arguments to create a Outreach.
		 * @example
		 * // Create one Outreach
		 * const Outreach = await prisma.outreach.create({
		 *   data: {
		 *     // ... data to create a Outreach
		 *   }
		 * })
		 *
		 */
		create<T extends OutreachCreateArgs>(
			args: SelectSubset<T, OutreachCreateArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Outreaches.
		 * @param {OutreachCreateManyArgs} args - Arguments to create many Outreaches.
		 * @example
		 * // Create many Outreaches
		 * const outreach = await prisma.outreach.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends OutreachCreateManyArgs>(
			args?: SelectSubset<T, OutreachCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Outreaches and returns the data saved in the database.
		 * @param {OutreachCreateManyAndReturnArgs} args - Arguments to create many Outreaches.
		 * @example
		 * // Create many Outreaches
		 * const outreach = await prisma.outreach.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Outreaches and only return the `id`
		 * const outreachWithIdOnly = await prisma.outreach.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends OutreachCreateManyAndReturnArgs>(
			args?: SelectSubset<T, OutreachCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Outreach.
		 * @param {OutreachDeleteArgs} args - Arguments to delete one Outreach.
		 * @example
		 * // Delete one Outreach
		 * const Outreach = await prisma.outreach.delete({
		 *   where: {
		 *     // ... filter to delete one Outreach
		 *   }
		 * })
		 *
		 */
		delete<T extends OutreachDeleteArgs>(
			args: SelectSubset<T, OutreachDeleteArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Outreach.
		 * @param {OutreachUpdateArgs} args - Arguments to update one Outreach.
		 * @example
		 * // Update one Outreach
		 * const outreach = await prisma.outreach.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends OutreachUpdateArgs>(
			args: SelectSubset<T, OutreachUpdateArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Outreaches.
		 * @param {OutreachDeleteManyArgs} args - Arguments to filter Outreaches to delete.
		 * @example
		 * // Delete a few Outreaches
		 * const { count } = await prisma.outreach.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends OutreachDeleteManyArgs>(
			args?: SelectSubset<T, OutreachDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Outreaches.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Outreaches
		 * const outreach = await prisma.outreach.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends OutreachUpdateManyArgs>(
			args: SelectSubset<T, OutreachUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Outreaches and returns the data updated in the database.
		 * @param {OutreachUpdateManyAndReturnArgs} args - Arguments to update many Outreaches.
		 * @example
		 * // Update many Outreaches
		 * const outreach = await prisma.outreach.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Outreaches and only return the `id`
		 * const outreachWithIdOnly = await prisma.outreach.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends OutreachUpdateManyAndReturnArgs>(
			args: SelectSubset<T, OutreachUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Outreach.
		 * @param {OutreachUpsertArgs} args - Arguments to update or create a Outreach.
		 * @example
		 * // Update or create a Outreach
		 * const outreach = await prisma.outreach.upsert({
		 *   create: {
		 *     // ... data to create a Outreach
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Outreach we want to update
		 *   }
		 * })
		 */
		upsert<T extends OutreachUpsertArgs>(
			args: SelectSubset<T, OutreachUpsertArgs<ExtArgs>>
		): Prisma__OutreachClient<
			$Result.GetResult<
				Prisma.$OutreachPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Outreaches.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachCountArgs} args - Arguments to filter Outreaches to count.
		 * @example
		 * // Count the number of Outreaches
		 * const count = await prisma.outreach.count({
		 *   where: {
		 *     // ... the filter for the Outreaches we want to count
		 *   }
		 * })
		 **/
		count<T extends OutreachCountArgs>(
			args?: Subset<T, OutreachCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							OutreachCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Outreach.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends OutreachAggregateArgs>(
			args: Subset<T, OutreachAggregateArgs>
		): Prisma.PrismaPromise<GetOutreachAggregateType<T>>;

		/**
		 * Group by Outreach.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OutreachGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends OutreachGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: OutreachGroupByArgs["orderBy"] }
				: { orderBy?: OutreachGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, OutreachGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetOutreachGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Outreach model
		 */
		readonly fields: OutreachFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Outreach.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__OutreachClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Outreach model
	 */
	interface OutreachFieldRefs {
		readonly id: FieldRef<"Outreach", "Int">;
		readonly outreach: FieldRef<"Outreach", "String">;
		readonly description: FieldRef<"Outreach", "String">;
		readonly createdAt: FieldRef<"Outreach", "DateTime">;
		readonly updateAt: FieldRef<"Outreach", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * Outreach findUnique
	 */
	export type OutreachFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * Filter, which Outreach to fetch.
		 */
		where: OutreachWhereUniqueInput;
	};

	/**
	 * Outreach findUniqueOrThrow
	 */
	export type OutreachFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * Filter, which Outreach to fetch.
		 */
		where: OutreachWhereUniqueInput;
	};

	/**
	 * Outreach findFirst
	 */
	export type OutreachFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * Filter, which Outreach to fetch.
		 */
		where?: OutreachWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Outreaches to fetch.
		 */
		orderBy?:
			| OutreachOrderByWithRelationInput
			| OutreachOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Outreaches.
		 */
		cursor?: OutreachWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Outreaches from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Outreaches.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Outreaches.
		 */
		distinct?: OutreachScalarFieldEnum | OutreachScalarFieldEnum[];
	};

	/**
	 * Outreach findFirstOrThrow
	 */
	export type OutreachFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * Filter, which Outreach to fetch.
		 */
		where?: OutreachWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Outreaches to fetch.
		 */
		orderBy?:
			| OutreachOrderByWithRelationInput
			| OutreachOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Outreaches.
		 */
		cursor?: OutreachWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Outreaches from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Outreaches.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Outreaches.
		 */
		distinct?: OutreachScalarFieldEnum | OutreachScalarFieldEnum[];
	};

	/**
	 * Outreach findMany
	 */
	export type OutreachFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * Filter, which Outreaches to fetch.
		 */
		where?: OutreachWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Outreaches to fetch.
		 */
		orderBy?:
			| OutreachOrderByWithRelationInput
			| OutreachOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Outreaches.
		 */
		cursor?: OutreachWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Outreaches from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Outreaches.
		 */
		skip?: number;
		distinct?: OutreachScalarFieldEnum | OutreachScalarFieldEnum[];
	};

	/**
	 * Outreach create
	 */
	export type OutreachCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * The data needed to create a Outreach.
		 */
		data: XOR<OutreachCreateInput, OutreachUncheckedCreateInput>;
	};

	/**
	 * Outreach createMany
	 */
	export type OutreachCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Outreaches.
		 */
		data: OutreachCreateManyInput | OutreachCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Outreach createManyAndReturn
	 */
	export type OutreachCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * The data used to create many Outreaches.
		 */
		data: OutreachCreateManyInput | OutreachCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Outreach update
	 */
	export type OutreachUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * The data needed to update a Outreach.
		 */
		data: XOR<OutreachUpdateInput, OutreachUncheckedUpdateInput>;
		/**
		 * Choose, which Outreach to update.
		 */
		where: OutreachWhereUniqueInput;
	};

	/**
	 * Outreach updateMany
	 */
	export type OutreachUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Outreaches.
		 */
		data: XOR<
			OutreachUpdateManyMutationInput,
			OutreachUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Outreaches to update
		 */
		where?: OutreachWhereInput;
		/**
		 * Limit how many Outreaches to update.
		 */
		limit?: number;
	};

	/**
	 * Outreach updateManyAndReturn
	 */
	export type OutreachUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * The data used to update Outreaches.
		 */
		data: XOR<
			OutreachUpdateManyMutationInput,
			OutreachUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Outreaches to update
		 */
		where?: OutreachWhereInput;
		/**
		 * Limit how many Outreaches to update.
		 */
		limit?: number;
	};

	/**
	 * Outreach upsert
	 */
	export type OutreachUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * The filter to search for the Outreach to update in case it exists.
		 */
		where: OutreachWhereUniqueInput;
		/**
		 * In case the Outreach found by the `where` argument doesn't exist, create a new Outreach with this data.
		 */
		create: XOR<OutreachCreateInput, OutreachUncheckedCreateInput>;
		/**
		 * In case the Outreach was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<OutreachUpdateInput, OutreachUncheckedUpdateInput>;
	};

	/**
	 * Outreach delete
	 */
	export type OutreachDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
		/**
		 * Filter which Outreach to delete.
		 */
		where: OutreachWhereUniqueInput;
	};

	/**
	 * Outreach deleteMany
	 */
	export type OutreachDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Outreaches to delete
		 */
		where?: OutreachWhereInput;
		/**
		 * Limit how many Outreaches to delete.
		 */
		limit?: number;
	};

	/**
	 * Outreach without action
	 */
	export type OutreachDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Outreach
		 */
		select?: OutreachSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Outreach
		 */
		omit?: OutreachOmit<ExtArgs> | null;
	};

	/**
	 * Model Event
	 */

	export type AggregateEvent = {
		_count: EventCountAggregateOutputType | null;
		_avg: EventAvgAggregateOutputType | null;
		_sum: EventSumAggregateOutputType | null;
		_min: EventMinAggregateOutputType | null;
		_max: EventMaxAggregateOutputType | null;
	};

	export type EventAvgAggregateOutputType = {
		id: number | null;
	};

	export type EventSumAggregateOutputType = {
		id: number | null;
	};

	export type EventMinAggregateOutputType = {
		id: number | null;
		event: string | null;
		description: string | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type EventMaxAggregateOutputType = {
		id: number | null;
		event: string | null;
		description: string | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type EventCountAggregateOutputType = {
		id: number;
		event: number;
		description: number;
		imageURL: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type EventAvgAggregateInputType = {
		id?: true;
	};

	export type EventSumAggregateInputType = {
		id?: true;
	};

	export type EventMinAggregateInputType = {
		id?: true;
		event?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type EventMaxAggregateInputType = {
		id?: true;
		event?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type EventCountAggregateInputType = {
		id?: true;
		event?: true;
		description?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type EventAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Event to aggregate.
		 */
		where?: EventWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Events to fetch.
		 */
		orderBy?:
			| EventOrderByWithRelationInput
			| EventOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: EventWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Events from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Events.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Events
		 **/
		_count?: true | EventCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: EventAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: EventSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: EventMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: EventMaxAggregateInputType;
	};

	export type GetEventAggregateType<T extends EventAggregateArgs> = {
		[P in keyof T & keyof AggregateEvent]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateEvent[P]>
			: GetScalarType<T[P], AggregateEvent[P]>;
	};

	export type EventGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: EventWhereInput;
		orderBy?:
			| EventOrderByWithAggregationInput
			| EventOrderByWithAggregationInput[];
		by: EventScalarFieldEnum[] | EventScalarFieldEnum;
		having?: EventScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: EventCountAggregateInputType | true;
		_avg?: EventAvgAggregateInputType;
		_sum?: EventSumAggregateInputType;
		_min?: EventMinAggregateInputType;
		_max?: EventMaxAggregateInputType;
	};

	export type EventGroupByOutputType = {
		id: number;
		event: string;
		description: string;
		imageURL: string;
		createdAt: Date;
		updateAt: Date;
		_count: EventCountAggregateOutputType | null;
		_avg: EventAvgAggregateOutputType | null;
		_sum: EventSumAggregateOutputType | null;
		_min: EventMinAggregateOutputType | null;
		_max: EventMaxAggregateOutputType | null;
	};

	type GetEventGroupByPayload<T extends EventGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<EventGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof EventGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], EventGroupByOutputType[P]>
						: GetScalarType<T[P], EventGroupByOutputType[P]>;
				}
			>
		>;

	export type EventSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			event?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["event"]
	>;

	export type EventSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			event?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["event"]
	>;

	export type EventSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			event?: boolean;
			description?: boolean;
			imageURL?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["event"]
	>;

	export type EventSelectScalar = {
		id?: boolean;
		event?: boolean;
		description?: boolean;
		imageURL?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type EventOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "event" | "description" | "imageURL" | "createdAt" | "updateAt",
		ExtArgs["result"]["event"]
	>;

	export type $EventPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Event";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				event: string;
				description: string;
				imageURL: string;
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["event"]
		>;
		composites: {};
	};

	type EventGetPayload<
		S extends boolean | null | undefined | EventDefaultArgs,
	> = $Result.GetResult<Prisma.$EventPayload, S>;

	type EventCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<EventFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: EventCountAggregateInputType | true;
	};

	export interface EventDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Event"];
			meta: { name: "Event" };
		};
		/**
		 * Find zero or one Event that matches the filter.
		 * @param {EventFindUniqueArgs} args - Arguments to find a Event
		 * @example
		 * // Get one Event
		 * const event = await prisma.event.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends EventFindUniqueArgs>(
			args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Event that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
		 * @example
		 * // Get one Event
		 * const event = await prisma.event.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
			args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Event that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventFindFirstArgs} args - Arguments to find a Event
		 * @example
		 * // Get one Event
		 * const event = await prisma.event.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends EventFindFirstArgs>(
			args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Event that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
		 * @example
		 * // Get one Event
		 * const event = await prisma.event.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
			args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Events that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Events
		 * const events = await prisma.event.findMany()
		 *
		 * // Get first 10 Events
		 * const events = await prisma.event.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends EventFindManyArgs>(
			args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Event.
		 * @param {EventCreateArgs} args - Arguments to create a Event.
		 * @example
		 * // Create one Event
		 * const Event = await prisma.event.create({
		 *   data: {
		 *     // ... data to create a Event
		 *   }
		 * })
		 *
		 */
		create<T extends EventCreateArgs>(
			args: SelectSubset<T, EventCreateArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Events.
		 * @param {EventCreateManyArgs} args - Arguments to create many Events.
		 * @example
		 * // Create many Events
		 * const event = await prisma.event.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends EventCreateManyArgs>(
			args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Events and returns the data saved in the database.
		 * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
		 * @example
		 * // Create many Events
		 * const event = await prisma.event.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Events and only return the `id`
		 * const eventWithIdOnly = await prisma.event.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends EventCreateManyAndReturnArgs>(
			args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Event.
		 * @param {EventDeleteArgs} args - Arguments to delete one Event.
		 * @example
		 * // Delete one Event
		 * const Event = await prisma.event.delete({
		 *   where: {
		 *     // ... filter to delete one Event
		 *   }
		 * })
		 *
		 */
		delete<T extends EventDeleteArgs>(
			args: SelectSubset<T, EventDeleteArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Event.
		 * @param {EventUpdateArgs} args - Arguments to update one Event.
		 * @example
		 * // Update one Event
		 * const event = await prisma.event.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends EventUpdateArgs>(
			args: SelectSubset<T, EventUpdateArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Events.
		 * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
		 * @example
		 * // Delete a few Events
		 * const { count } = await prisma.event.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends EventDeleteManyArgs>(
			args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Events.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Events
		 * const event = await prisma.event.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends EventUpdateManyArgs>(
			args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Events and returns the data updated in the database.
		 * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
		 * @example
		 * // Update many Events
		 * const event = await prisma.event.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Events and only return the `id`
		 * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(
			args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Event.
		 * @param {EventUpsertArgs} args - Arguments to update or create a Event.
		 * @example
		 * // Update or create a Event
		 * const event = await prisma.event.upsert({
		 *   create: {
		 *     // ... data to create a Event
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Event we want to update
		 *   }
		 * })
		 */
		upsert<T extends EventUpsertArgs>(
			args: SelectSubset<T, EventUpsertArgs<ExtArgs>>
		): Prisma__EventClient<
			$Result.GetResult<
				Prisma.$EventPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Events.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventCountArgs} args - Arguments to filter Events to count.
		 * @example
		 * // Count the number of Events
		 * const count = await prisma.event.count({
		 *   where: {
		 *     // ... the filter for the Events we want to count
		 *   }
		 * })
		 **/
		count<T extends EventCountArgs>(
			args?: Subset<T, EventCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], EventCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Event.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends EventAggregateArgs>(
			args: Subset<T, EventAggregateArgs>
		): Prisma.PrismaPromise<GetEventAggregateType<T>>;

		/**
		 * Group by Event.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EventGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends EventGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: EventGroupByArgs["orderBy"] }
				: { orderBy?: EventGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetEventGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Event model
		 */
		readonly fields: EventFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Event.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__EventClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Event model
	 */
	interface EventFieldRefs {
		readonly id: FieldRef<"Event", "Int">;
		readonly event: FieldRef<"Event", "String">;
		readonly description: FieldRef<"Event", "String">;
		readonly imageURL: FieldRef<"Event", "String">;
		readonly createdAt: FieldRef<"Event", "DateTime">;
		readonly updateAt: FieldRef<"Event", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * Event findUnique
	 */
	export type EventFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * Filter, which Event to fetch.
		 */
		where: EventWhereUniqueInput;
	};

	/**
	 * Event findUniqueOrThrow
	 */
	export type EventFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * Filter, which Event to fetch.
		 */
		where: EventWhereUniqueInput;
	};

	/**
	 * Event findFirst
	 */
	export type EventFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * Filter, which Event to fetch.
		 */
		where?: EventWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Events to fetch.
		 */
		orderBy?:
			| EventOrderByWithRelationInput
			| EventOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Events.
		 */
		cursor?: EventWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Events from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Events.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Events.
		 */
		distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
	};

	/**
	 * Event findFirstOrThrow
	 */
	export type EventFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * Filter, which Event to fetch.
		 */
		where?: EventWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Events to fetch.
		 */
		orderBy?:
			| EventOrderByWithRelationInput
			| EventOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Events.
		 */
		cursor?: EventWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Events from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Events.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Events.
		 */
		distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
	};

	/**
	 * Event findMany
	 */
	export type EventFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * Filter, which Events to fetch.
		 */
		where?: EventWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Events to fetch.
		 */
		orderBy?:
			| EventOrderByWithRelationInput
			| EventOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Events.
		 */
		cursor?: EventWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Events from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Events.
		 */
		skip?: number;
		distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
	};

	/**
	 * Event create
	 */
	export type EventCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * The data needed to create a Event.
		 */
		data: XOR<EventCreateInput, EventUncheckedCreateInput>;
	};

	/**
	 * Event createMany
	 */
	export type EventCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Events.
		 */
		data: EventCreateManyInput | EventCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Event createManyAndReturn
	 */
	export type EventCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * The data used to create many Events.
		 */
		data: EventCreateManyInput | EventCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Event update
	 */
	export type EventUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * The data needed to update a Event.
		 */
		data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
		/**
		 * Choose, which Event to update.
		 */
		where: EventWhereUniqueInput;
	};

	/**
	 * Event updateMany
	 */
	export type EventUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Events.
		 */
		data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
		/**
		 * Filter which Events to update
		 */
		where?: EventWhereInput;
		/**
		 * Limit how many Events to update.
		 */
		limit?: number;
	};

	/**
	 * Event updateManyAndReturn
	 */
	export type EventUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * The data used to update Events.
		 */
		data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
		/**
		 * Filter which Events to update
		 */
		where?: EventWhereInput;
		/**
		 * Limit how many Events to update.
		 */
		limit?: number;
	};

	/**
	 * Event upsert
	 */
	export type EventUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * The filter to search for the Event to update in case it exists.
		 */
		where: EventWhereUniqueInput;
		/**
		 * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
		 */
		create: XOR<EventCreateInput, EventUncheckedCreateInput>;
		/**
		 * In case the Event was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
	};

	/**
	 * Event delete
	 */
	export type EventDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
		/**
		 * Filter which Event to delete.
		 */
		where: EventWhereUniqueInput;
	};

	/**
	 * Event deleteMany
	 */
	export type EventDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Events to delete
		 */
		where?: EventWhereInput;
		/**
		 * Limit how many Events to delete.
		 */
		limit?: number;
	};

	/**
	 * Event without action
	 */
	export type EventDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Event
		 */
		select?: EventSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Event
		 */
		omit?: EventOmit<ExtArgs> | null;
	};

	/**
	 * Model GroupMoment
	 */

	export type AggregateGroupMoment = {
		_count: GroupMomentCountAggregateOutputType | null;
		_avg: GroupMomentAvgAggregateOutputType | null;
		_sum: GroupMomentSumAggregateOutputType | null;
		_min: GroupMomentMinAggregateOutputType | null;
		_max: GroupMomentMaxAggregateOutputType | null;
	};

	export type GroupMomentAvgAggregateOutputType = {
		id: number | null;
	};

	export type GroupMomentSumAggregateOutputType = {
		id: number | null;
	};

	export type GroupMomentMinAggregateOutputType = {
		id: number | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type GroupMomentMaxAggregateOutputType = {
		id: number | null;
		imageURL: string | null;
		createdAt: Date | null;
		updateAt: Date | null;
	};

	export type GroupMomentCountAggregateOutputType = {
		id: number;
		imageURL: number;
		tags: number;
		createdAt: number;
		updateAt: number;
		_all: number;
	};

	export type GroupMomentAvgAggregateInputType = {
		id?: true;
	};

	export type GroupMomentSumAggregateInputType = {
		id?: true;
	};

	export type GroupMomentMinAggregateInputType = {
		id?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type GroupMomentMaxAggregateInputType = {
		id?: true;
		imageURL?: true;
		createdAt?: true;
		updateAt?: true;
	};

	export type GroupMomentCountAggregateInputType = {
		id?: true;
		imageURL?: true;
		tags?: true;
		createdAt?: true;
		updateAt?: true;
		_all?: true;
	};

	export type GroupMomentAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which GroupMoment to aggregate.
		 */
		where?: GroupMomentWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of GroupMoments to fetch.
		 */
		orderBy?:
			| GroupMomentOrderByWithRelationInput
			| GroupMomentOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: GroupMomentWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` GroupMoments from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` GroupMoments.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned GroupMoments
		 **/
		_count?: true | GroupMomentCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: GroupMomentAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: GroupMomentSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: GroupMomentMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: GroupMomentMaxAggregateInputType;
	};

	export type GetGroupMomentAggregateType<
		T extends GroupMomentAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateGroupMoment]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateGroupMoment[P]>
			: GetScalarType<T[P], AggregateGroupMoment[P]>;
	};

	export type GroupMomentGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: GroupMomentWhereInput;
		orderBy?:
			| GroupMomentOrderByWithAggregationInput
			| GroupMomentOrderByWithAggregationInput[];
		by: GroupMomentScalarFieldEnum[] | GroupMomentScalarFieldEnum;
		having?: GroupMomentScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: GroupMomentCountAggregateInputType | true;
		_avg?: GroupMomentAvgAggregateInputType;
		_sum?: GroupMomentSumAggregateInputType;
		_min?: GroupMomentMinAggregateInputType;
		_max?: GroupMomentMaxAggregateInputType;
	};

	export type GroupMomentGroupByOutputType = {
		id: number;
		imageURL: string;
		tags: string[];
		createdAt: Date;
		updateAt: Date;
		_count: GroupMomentCountAggregateOutputType | null;
		_avg: GroupMomentAvgAggregateOutputType | null;
		_sum: GroupMomentSumAggregateOutputType | null;
		_min: GroupMomentMinAggregateOutputType | null;
		_max: GroupMomentMaxAggregateOutputType | null;
	};

	type GetGroupMomentGroupByPayload<T extends GroupMomentGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<GroupMomentGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof GroupMomentGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<
									T[P],
									GroupMomentGroupByOutputType[P]
								>
						: GetScalarType<T[P], GroupMomentGroupByOutputType[P]>;
				}
			>
		>;

	export type GroupMomentSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			imageURL?: boolean;
			tags?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["groupMoment"]
	>;

	export type GroupMomentSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			imageURL?: boolean;
			tags?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["groupMoment"]
	>;

	export type GroupMomentSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			imageURL?: boolean;
			tags?: boolean;
			createdAt?: boolean;
			updateAt?: boolean;
		},
		ExtArgs["result"]["groupMoment"]
	>;

	export type GroupMomentSelectScalar = {
		id?: boolean;
		imageURL?: boolean;
		tags?: boolean;
		createdAt?: boolean;
		updateAt?: boolean;
	};

	export type GroupMomentOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "imageURL" | "tags" | "createdAt" | "updateAt",
		ExtArgs["result"]["groupMoment"]
	>;

	export type $GroupMomentPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "GroupMoment";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				imageURL: string;
				tags: string[];
				createdAt: Date;
				updateAt: Date;
			},
			ExtArgs["result"]["groupMoment"]
		>;
		composites: {};
	};

	type GroupMomentGetPayload<
		S extends boolean | null | undefined | GroupMomentDefaultArgs,
	> = $Result.GetResult<Prisma.$GroupMomentPayload, S>;

	type GroupMomentCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		GroupMomentFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: GroupMomentCountAggregateInputType | true;
	};

	export interface GroupMomentDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["GroupMoment"];
			meta: { name: "GroupMoment" };
		};
		/**
		 * Find zero or one GroupMoment that matches the filter.
		 * @param {GroupMomentFindUniqueArgs} args - Arguments to find a GroupMoment
		 * @example
		 * // Get one GroupMoment
		 * const groupMoment = await prisma.groupMoment.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends GroupMomentFindUniqueArgs>(
			args: SelectSubset<T, GroupMomentFindUniqueArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one GroupMoment that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {GroupMomentFindUniqueOrThrowArgs} args - Arguments to find a GroupMoment
		 * @example
		 * // Get one GroupMoment
		 * const groupMoment = await prisma.groupMoment.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends GroupMomentFindUniqueOrThrowArgs>(
			args: SelectSubset<T, GroupMomentFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first GroupMoment that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentFindFirstArgs} args - Arguments to find a GroupMoment
		 * @example
		 * // Get one GroupMoment
		 * const groupMoment = await prisma.groupMoment.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends GroupMomentFindFirstArgs>(
			args?: SelectSubset<T, GroupMomentFindFirstArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first GroupMoment that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentFindFirstOrThrowArgs} args - Arguments to find a GroupMoment
		 * @example
		 * // Get one GroupMoment
		 * const groupMoment = await prisma.groupMoment.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends GroupMomentFindFirstOrThrowArgs>(
			args?: SelectSubset<T, GroupMomentFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more GroupMoments that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all GroupMoments
		 * const groupMoments = await prisma.groupMoment.findMany()
		 *
		 * // Get first 10 GroupMoments
		 * const groupMoments = await prisma.groupMoment.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const groupMomentWithIdOnly = await prisma.groupMoment.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends GroupMomentFindManyArgs>(
			args?: SelectSubset<T, GroupMomentFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a GroupMoment.
		 * @param {GroupMomentCreateArgs} args - Arguments to create a GroupMoment.
		 * @example
		 * // Create one GroupMoment
		 * const GroupMoment = await prisma.groupMoment.create({
		 *   data: {
		 *     // ... data to create a GroupMoment
		 *   }
		 * })
		 *
		 */
		create<T extends GroupMomentCreateArgs>(
			args: SelectSubset<T, GroupMomentCreateArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many GroupMoments.
		 * @param {GroupMomentCreateManyArgs} args - Arguments to create many GroupMoments.
		 * @example
		 * // Create many GroupMoments
		 * const groupMoment = await prisma.groupMoment.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends GroupMomentCreateManyArgs>(
			args?: SelectSubset<T, GroupMomentCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many GroupMoments and returns the data saved in the database.
		 * @param {GroupMomentCreateManyAndReturnArgs} args - Arguments to create many GroupMoments.
		 * @example
		 * // Create many GroupMoments
		 * const groupMoment = await prisma.groupMoment.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many GroupMoments and only return the `id`
		 * const groupMomentWithIdOnly = await prisma.groupMoment.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends GroupMomentCreateManyAndReturnArgs>(
			args?: SelectSubset<T, GroupMomentCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a GroupMoment.
		 * @param {GroupMomentDeleteArgs} args - Arguments to delete one GroupMoment.
		 * @example
		 * // Delete one GroupMoment
		 * const GroupMoment = await prisma.groupMoment.delete({
		 *   where: {
		 *     // ... filter to delete one GroupMoment
		 *   }
		 * })
		 *
		 */
		delete<T extends GroupMomentDeleteArgs>(
			args: SelectSubset<T, GroupMomentDeleteArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one GroupMoment.
		 * @param {GroupMomentUpdateArgs} args - Arguments to update one GroupMoment.
		 * @example
		 * // Update one GroupMoment
		 * const groupMoment = await prisma.groupMoment.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends GroupMomentUpdateArgs>(
			args: SelectSubset<T, GroupMomentUpdateArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more GroupMoments.
		 * @param {GroupMomentDeleteManyArgs} args - Arguments to filter GroupMoments to delete.
		 * @example
		 * // Delete a few GroupMoments
		 * const { count } = await prisma.groupMoment.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends GroupMomentDeleteManyArgs>(
			args?: SelectSubset<T, GroupMomentDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more GroupMoments.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many GroupMoments
		 * const groupMoment = await prisma.groupMoment.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends GroupMomentUpdateManyArgs>(
			args: SelectSubset<T, GroupMomentUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more GroupMoments and returns the data updated in the database.
		 * @param {GroupMomentUpdateManyAndReturnArgs} args - Arguments to update many GroupMoments.
		 * @example
		 * // Update many GroupMoments
		 * const groupMoment = await prisma.groupMoment.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more GroupMoments and only return the `id`
		 * const groupMomentWithIdOnly = await prisma.groupMoment.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends GroupMomentUpdateManyAndReturnArgs>(
			args: SelectSubset<T, GroupMomentUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one GroupMoment.
		 * @param {GroupMomentUpsertArgs} args - Arguments to update or create a GroupMoment.
		 * @example
		 * // Update or create a GroupMoment
		 * const groupMoment = await prisma.groupMoment.upsert({
		 *   create: {
		 *     // ... data to create a GroupMoment
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the GroupMoment we want to update
		 *   }
		 * })
		 */
		upsert<T extends GroupMomentUpsertArgs>(
			args: SelectSubset<T, GroupMomentUpsertArgs<ExtArgs>>
		): Prisma__GroupMomentClient<
			$Result.GetResult<
				Prisma.$GroupMomentPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of GroupMoments.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentCountArgs} args - Arguments to filter GroupMoments to count.
		 * @example
		 * // Count the number of GroupMoments
		 * const count = await prisma.groupMoment.count({
		 *   where: {
		 *     // ... the filter for the GroupMoments we want to count
		 *   }
		 * })
		 **/
		count<T extends GroupMomentCountArgs>(
			args?: Subset<T, GroupMomentCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							GroupMomentCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a GroupMoment.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends GroupMomentAggregateArgs>(
			args: Subset<T, GroupMomentAggregateArgs>
		): Prisma.PrismaPromise<GetGroupMomentAggregateType<T>>;

		/**
		 * Group by GroupMoment.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GroupMomentGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends GroupMomentGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: GroupMomentGroupByArgs["orderBy"] }
				: { orderBy?: GroupMomentGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, GroupMomentGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetGroupMomentGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the GroupMoment model
		 */
		readonly fields: GroupMomentFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for GroupMoment.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__GroupMomentClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the GroupMoment model
	 */
	interface GroupMomentFieldRefs {
		readonly id: FieldRef<"GroupMoment", "Int">;
		readonly imageURL: FieldRef<"GroupMoment", "String">;
		readonly tags: FieldRef<"GroupMoment", "String[]">;
		readonly createdAt: FieldRef<"GroupMoment", "DateTime">;
		readonly updateAt: FieldRef<"GroupMoment", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * GroupMoment findUnique
	 */
	export type GroupMomentFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * Filter, which GroupMoment to fetch.
		 */
		where: GroupMomentWhereUniqueInput;
	};

	/**
	 * GroupMoment findUniqueOrThrow
	 */
	export type GroupMomentFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * Filter, which GroupMoment to fetch.
		 */
		where: GroupMomentWhereUniqueInput;
	};

	/**
	 * GroupMoment findFirst
	 */
	export type GroupMomentFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * Filter, which GroupMoment to fetch.
		 */
		where?: GroupMomentWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of GroupMoments to fetch.
		 */
		orderBy?:
			| GroupMomentOrderByWithRelationInput
			| GroupMomentOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for GroupMoments.
		 */
		cursor?: GroupMomentWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` GroupMoments from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` GroupMoments.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of GroupMoments.
		 */
		distinct?: GroupMomentScalarFieldEnum | GroupMomentScalarFieldEnum[];
	};

	/**
	 * GroupMoment findFirstOrThrow
	 */
	export type GroupMomentFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * Filter, which GroupMoment to fetch.
		 */
		where?: GroupMomentWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of GroupMoments to fetch.
		 */
		orderBy?:
			| GroupMomentOrderByWithRelationInput
			| GroupMomentOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for GroupMoments.
		 */
		cursor?: GroupMomentWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` GroupMoments from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` GroupMoments.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of GroupMoments.
		 */
		distinct?: GroupMomentScalarFieldEnum | GroupMomentScalarFieldEnum[];
	};

	/**
	 * GroupMoment findMany
	 */
	export type GroupMomentFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * Filter, which GroupMoments to fetch.
		 */
		where?: GroupMomentWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of GroupMoments to fetch.
		 */
		orderBy?:
			| GroupMomentOrderByWithRelationInput
			| GroupMomentOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing GroupMoments.
		 */
		cursor?: GroupMomentWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` GroupMoments from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` GroupMoments.
		 */
		skip?: number;
		distinct?: GroupMomentScalarFieldEnum | GroupMomentScalarFieldEnum[];
	};

	/**
	 * GroupMoment create
	 */
	export type GroupMomentCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * The data needed to create a GroupMoment.
		 */
		data: XOR<GroupMomentCreateInput, GroupMomentUncheckedCreateInput>;
	};

	/**
	 * GroupMoment createMany
	 */
	export type GroupMomentCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many GroupMoments.
		 */
		data: GroupMomentCreateManyInput | GroupMomentCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * GroupMoment createManyAndReturn
	 */
	export type GroupMomentCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * The data used to create many GroupMoments.
		 */
		data: GroupMomentCreateManyInput | GroupMomentCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * GroupMoment update
	 */
	export type GroupMomentUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * The data needed to update a GroupMoment.
		 */
		data: XOR<GroupMomentUpdateInput, GroupMomentUncheckedUpdateInput>;
		/**
		 * Choose, which GroupMoment to update.
		 */
		where: GroupMomentWhereUniqueInput;
	};

	/**
	 * GroupMoment updateMany
	 */
	export type GroupMomentUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update GroupMoments.
		 */
		data: XOR<
			GroupMomentUpdateManyMutationInput,
			GroupMomentUncheckedUpdateManyInput
		>;
		/**
		 * Filter which GroupMoments to update
		 */
		where?: GroupMomentWhereInput;
		/**
		 * Limit how many GroupMoments to update.
		 */
		limit?: number;
	};

	/**
	 * GroupMoment updateManyAndReturn
	 */
	export type GroupMomentUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * The data used to update GroupMoments.
		 */
		data: XOR<
			GroupMomentUpdateManyMutationInput,
			GroupMomentUncheckedUpdateManyInput
		>;
		/**
		 * Filter which GroupMoments to update
		 */
		where?: GroupMomentWhereInput;
		/**
		 * Limit how many GroupMoments to update.
		 */
		limit?: number;
	};

	/**
	 * GroupMoment upsert
	 */
	export type GroupMomentUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * The filter to search for the GroupMoment to update in case it exists.
		 */
		where: GroupMomentWhereUniqueInput;
		/**
		 * In case the GroupMoment found by the `where` argument doesn't exist, create a new GroupMoment with this data.
		 */
		create: XOR<GroupMomentCreateInput, GroupMomentUncheckedCreateInput>;
		/**
		 * In case the GroupMoment was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<GroupMomentUpdateInput, GroupMomentUncheckedUpdateInput>;
	};

	/**
	 * GroupMoment delete
	 */
	export type GroupMomentDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
		/**
		 * Filter which GroupMoment to delete.
		 */
		where: GroupMomentWhereUniqueInput;
	};

	/**
	 * GroupMoment deleteMany
	 */
	export type GroupMomentDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which GroupMoments to delete
		 */
		where?: GroupMomentWhereInput;
		/**
		 * Limit how many GroupMoments to delete.
		 */
		limit?: number;
	};

	/**
	 * GroupMoment without action
	 */
	export type GroupMomentDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the GroupMoment
		 */
		select?: GroupMomentSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the GroupMoment
		 */
		omit?: GroupMomentOmit<ExtArgs> | null;
	};

	/**
	 * Model Highlight
	 */

	export type AggregateHighlight = {
		_count: HighlightCountAggregateOutputType | null;
		_avg: HighlightAvgAggregateOutputType | null;
		_sum: HighlightSumAggregateOutputType | null;
		_min: HighlightMinAggregateOutputType | null;
		_max: HighlightMaxAggregateOutputType | null;
	};

	export type HighlightAvgAggregateOutputType = {
		id: number | null;
	};

	export type HighlightSumAggregateOutputType = {
		id: number | null;
	};

	export type HighlightMinAggregateOutputType = {
		id: number | null;
		highlight: string | null;
		description: string | null;
		link: string | null;
		date: string | null;
		createdAt: Date | null;
	};

	export type HighlightMaxAggregateOutputType = {
		id: number | null;
		highlight: string | null;
		description: string | null;
		link: string | null;
		date: string | null;
		createdAt: Date | null;
	};

	export type HighlightCountAggregateOutputType = {
		id: number;
		highlight: number;
		description: number;
		link: number;
		date: number;
		createdAt: number;
		_all: number;
	};

	export type HighlightAvgAggregateInputType = {
		id?: true;
	};

	export type HighlightSumAggregateInputType = {
		id?: true;
	};

	export type HighlightMinAggregateInputType = {
		id?: true;
		highlight?: true;
		description?: true;
		link?: true;
		date?: true;
		createdAt?: true;
	};

	export type HighlightMaxAggregateInputType = {
		id?: true;
		highlight?: true;
		description?: true;
		link?: true;
		date?: true;
		createdAt?: true;
	};

	export type HighlightCountAggregateInputType = {
		id?: true;
		highlight?: true;
		description?: true;
		link?: true;
		date?: true;
		createdAt?: true;
		_all?: true;
	};

	export type HighlightAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Highlight to aggregate.
		 */
		where?: HighlightWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Highlights to fetch.
		 */
		orderBy?:
			| HighlightOrderByWithRelationInput
			| HighlightOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: HighlightWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Highlights from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Highlights.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Highlights
		 **/
		_count?: true | HighlightCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: HighlightAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: HighlightSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: HighlightMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: HighlightMaxAggregateInputType;
	};

	export type GetHighlightAggregateType<T extends HighlightAggregateArgs> = {
		[P in keyof T & keyof AggregateHighlight]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateHighlight[P]>
			: GetScalarType<T[P], AggregateHighlight[P]>;
	};

	export type HighlightGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: HighlightWhereInput;
		orderBy?:
			| HighlightOrderByWithAggregationInput
			| HighlightOrderByWithAggregationInput[];
		by: HighlightScalarFieldEnum[] | HighlightScalarFieldEnum;
		having?: HighlightScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: HighlightCountAggregateInputType | true;
		_avg?: HighlightAvgAggregateInputType;
		_sum?: HighlightSumAggregateInputType;
		_min?: HighlightMinAggregateInputType;
		_max?: HighlightMaxAggregateInputType;
	};

	export type HighlightGroupByOutputType = {
		id: number;
		highlight: string;
		description: string;
		link: string | null;
		date: string;
		createdAt: Date;
		_count: HighlightCountAggregateOutputType | null;
		_avg: HighlightAvgAggregateOutputType | null;
		_sum: HighlightSumAggregateOutputType | null;
		_min: HighlightMinAggregateOutputType | null;
		_max: HighlightMaxAggregateOutputType | null;
	};

	type GetHighlightGroupByPayload<T extends HighlightGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<HighlightGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof HighlightGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], HighlightGroupByOutputType[P]>
						: GetScalarType<T[P], HighlightGroupByOutputType[P]>;
				}
			>
		>;

	export type HighlightSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			highlight?: boolean;
			description?: boolean;
			link?: boolean;
			date?: boolean;
			createdAt?: boolean;
		},
		ExtArgs["result"]["highlight"]
	>;

	export type HighlightSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			highlight?: boolean;
			description?: boolean;
			link?: boolean;
			date?: boolean;
			createdAt?: boolean;
		},
		ExtArgs["result"]["highlight"]
	>;

	export type HighlightSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			highlight?: boolean;
			description?: boolean;
			link?: boolean;
			date?: boolean;
			createdAt?: boolean;
		},
		ExtArgs["result"]["highlight"]
	>;

	export type HighlightSelectScalar = {
		id?: boolean;
		highlight?: boolean;
		description?: boolean;
		link?: boolean;
		date?: boolean;
		createdAt?: boolean;
	};

	export type HighlightOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "highlight" | "description" | "link" | "date" | "createdAt",
		ExtArgs["result"]["highlight"]
	>;

	export type $HighlightPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Highlight";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				highlight: string;
				description: string;
				link: string | null;
				date: string;
				createdAt: Date;
			},
			ExtArgs["result"]["highlight"]
		>;
		composites: {};
	};

	type HighlightGetPayload<
		S extends boolean | null | undefined | HighlightDefaultArgs,
	> = $Result.GetResult<Prisma.$HighlightPayload, S>;

	type HighlightCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		HighlightFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: HighlightCountAggregateInputType | true;
	};

	export interface HighlightDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Highlight"];
			meta: { name: "Highlight" };
		};
		/**
		 * Find zero or one Highlight that matches the filter.
		 * @param {HighlightFindUniqueArgs} args - Arguments to find a Highlight
		 * @example
		 * // Get one Highlight
		 * const highlight = await prisma.highlight.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends HighlightFindUniqueArgs>(
			args: SelectSubset<T, HighlightFindUniqueArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Highlight that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {HighlightFindUniqueOrThrowArgs} args - Arguments to find a Highlight
		 * @example
		 * // Get one Highlight
		 * const highlight = await prisma.highlight.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends HighlightFindUniqueOrThrowArgs>(
			args: SelectSubset<T, HighlightFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Highlight that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightFindFirstArgs} args - Arguments to find a Highlight
		 * @example
		 * // Get one Highlight
		 * const highlight = await prisma.highlight.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends HighlightFindFirstArgs>(
			args?: SelectSubset<T, HighlightFindFirstArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Highlight that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightFindFirstOrThrowArgs} args - Arguments to find a Highlight
		 * @example
		 * // Get one Highlight
		 * const highlight = await prisma.highlight.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends HighlightFindFirstOrThrowArgs>(
			args?: SelectSubset<T, HighlightFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Highlights that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Highlights
		 * const highlights = await prisma.highlight.findMany()
		 *
		 * // Get first 10 Highlights
		 * const highlights = await prisma.highlight.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const highlightWithIdOnly = await prisma.highlight.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends HighlightFindManyArgs>(
			args?: SelectSubset<T, HighlightFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Highlight.
		 * @param {HighlightCreateArgs} args - Arguments to create a Highlight.
		 * @example
		 * // Create one Highlight
		 * const Highlight = await prisma.highlight.create({
		 *   data: {
		 *     // ... data to create a Highlight
		 *   }
		 * })
		 *
		 */
		create<T extends HighlightCreateArgs>(
			args: SelectSubset<T, HighlightCreateArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Highlights.
		 * @param {HighlightCreateManyArgs} args - Arguments to create many Highlights.
		 * @example
		 * // Create many Highlights
		 * const highlight = await prisma.highlight.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends HighlightCreateManyArgs>(
			args?: SelectSubset<T, HighlightCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Highlights and returns the data saved in the database.
		 * @param {HighlightCreateManyAndReturnArgs} args - Arguments to create many Highlights.
		 * @example
		 * // Create many Highlights
		 * const highlight = await prisma.highlight.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Highlights and only return the `id`
		 * const highlightWithIdOnly = await prisma.highlight.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends HighlightCreateManyAndReturnArgs>(
			args?: SelectSubset<T, HighlightCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Highlight.
		 * @param {HighlightDeleteArgs} args - Arguments to delete one Highlight.
		 * @example
		 * // Delete one Highlight
		 * const Highlight = await prisma.highlight.delete({
		 *   where: {
		 *     // ... filter to delete one Highlight
		 *   }
		 * })
		 *
		 */
		delete<T extends HighlightDeleteArgs>(
			args: SelectSubset<T, HighlightDeleteArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Highlight.
		 * @param {HighlightUpdateArgs} args - Arguments to update one Highlight.
		 * @example
		 * // Update one Highlight
		 * const highlight = await prisma.highlight.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends HighlightUpdateArgs>(
			args: SelectSubset<T, HighlightUpdateArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Highlights.
		 * @param {HighlightDeleteManyArgs} args - Arguments to filter Highlights to delete.
		 * @example
		 * // Delete a few Highlights
		 * const { count } = await prisma.highlight.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends HighlightDeleteManyArgs>(
			args?: SelectSubset<T, HighlightDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Highlights.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Highlights
		 * const highlight = await prisma.highlight.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends HighlightUpdateManyArgs>(
			args: SelectSubset<T, HighlightUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Highlights and returns the data updated in the database.
		 * @param {HighlightUpdateManyAndReturnArgs} args - Arguments to update many Highlights.
		 * @example
		 * // Update many Highlights
		 * const highlight = await prisma.highlight.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Highlights and only return the `id`
		 * const highlightWithIdOnly = await prisma.highlight.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends HighlightUpdateManyAndReturnArgs>(
			args: SelectSubset<T, HighlightUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Highlight.
		 * @param {HighlightUpsertArgs} args - Arguments to update or create a Highlight.
		 * @example
		 * // Update or create a Highlight
		 * const highlight = await prisma.highlight.upsert({
		 *   create: {
		 *     // ... data to create a Highlight
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Highlight we want to update
		 *   }
		 * })
		 */
		upsert<T extends HighlightUpsertArgs>(
			args: SelectSubset<T, HighlightUpsertArgs<ExtArgs>>
		): Prisma__HighlightClient<
			$Result.GetResult<
				Prisma.$HighlightPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Highlights.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightCountArgs} args - Arguments to filter Highlights to count.
		 * @example
		 * // Count the number of Highlights
		 * const count = await prisma.highlight.count({
		 *   where: {
		 *     // ... the filter for the Highlights we want to count
		 *   }
		 * })
		 **/
		count<T extends HighlightCountArgs>(
			args?: Subset<T, HighlightCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							HighlightCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Highlight.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends HighlightAggregateArgs>(
			args: Subset<T, HighlightAggregateArgs>
		): Prisma.PrismaPromise<GetHighlightAggregateType<T>>;

		/**
		 * Group by Highlight.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {HighlightGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends HighlightGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: HighlightGroupByArgs["orderBy"] }
				: { orderBy?: HighlightGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, HighlightGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetHighlightGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Highlight model
		 */
		readonly fields: HighlightFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Highlight.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__HighlightClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Highlight model
	 */
	interface HighlightFieldRefs {
		readonly id: FieldRef<"Highlight", "Int">;
		readonly highlight: FieldRef<"Highlight", "String">;
		readonly description: FieldRef<"Highlight", "String">;
		readonly link: FieldRef<"Highlight", "String">;
		readonly date: FieldRef<"Highlight", "String">;
		readonly createdAt: FieldRef<"Highlight", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * Highlight findUnique
	 */
	export type HighlightFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * Filter, which Highlight to fetch.
		 */
		where: HighlightWhereUniqueInput;
	};

	/**
	 * Highlight findUniqueOrThrow
	 */
	export type HighlightFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * Filter, which Highlight to fetch.
		 */
		where: HighlightWhereUniqueInput;
	};

	/**
	 * Highlight findFirst
	 */
	export type HighlightFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * Filter, which Highlight to fetch.
		 */
		where?: HighlightWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Highlights to fetch.
		 */
		orderBy?:
			| HighlightOrderByWithRelationInput
			| HighlightOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Highlights.
		 */
		cursor?: HighlightWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Highlights from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Highlights.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Highlights.
		 */
		distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[];
	};

	/**
	 * Highlight findFirstOrThrow
	 */
	export type HighlightFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * Filter, which Highlight to fetch.
		 */
		where?: HighlightWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Highlights to fetch.
		 */
		orderBy?:
			| HighlightOrderByWithRelationInput
			| HighlightOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Highlights.
		 */
		cursor?: HighlightWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Highlights from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Highlights.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Highlights.
		 */
		distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[];
	};

	/**
	 * Highlight findMany
	 */
	export type HighlightFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * Filter, which Highlights to fetch.
		 */
		where?: HighlightWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Highlights to fetch.
		 */
		orderBy?:
			| HighlightOrderByWithRelationInput
			| HighlightOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Highlights.
		 */
		cursor?: HighlightWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Highlights from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Highlights.
		 */
		skip?: number;
		distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[];
	};

	/**
	 * Highlight create
	 */
	export type HighlightCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * The data needed to create a Highlight.
		 */
		data: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>;
	};

	/**
	 * Highlight createMany
	 */
	export type HighlightCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Highlights.
		 */
		data: HighlightCreateManyInput | HighlightCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Highlight createManyAndReturn
	 */
	export type HighlightCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * The data used to create many Highlights.
		 */
		data: HighlightCreateManyInput | HighlightCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Highlight update
	 */
	export type HighlightUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * The data needed to update a Highlight.
		 */
		data: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>;
		/**
		 * Choose, which Highlight to update.
		 */
		where: HighlightWhereUniqueInput;
	};

	/**
	 * Highlight updateMany
	 */
	export type HighlightUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Highlights.
		 */
		data: XOR<
			HighlightUpdateManyMutationInput,
			HighlightUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Highlights to update
		 */
		where?: HighlightWhereInput;
		/**
		 * Limit how many Highlights to update.
		 */
		limit?: number;
	};

	/**
	 * Highlight updateManyAndReturn
	 */
	export type HighlightUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * The data used to update Highlights.
		 */
		data: XOR<
			HighlightUpdateManyMutationInput,
			HighlightUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Highlights to update
		 */
		where?: HighlightWhereInput;
		/**
		 * Limit how many Highlights to update.
		 */
		limit?: number;
	};

	/**
	 * Highlight upsert
	 */
	export type HighlightUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * The filter to search for the Highlight to update in case it exists.
		 */
		where: HighlightWhereUniqueInput;
		/**
		 * In case the Highlight found by the `where` argument doesn't exist, create a new Highlight with this data.
		 */
		create: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>;
		/**
		 * In case the Highlight was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>;
	};

	/**
	 * Highlight delete
	 */
	export type HighlightDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
		/**
		 * Filter which Highlight to delete.
		 */
		where: HighlightWhereUniqueInput;
	};

	/**
	 * Highlight deleteMany
	 */
	export type HighlightDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Highlights to delete
		 */
		where?: HighlightWhereInput;
		/**
		 * Limit how many Highlights to delete.
		 */
		limit?: number;
	};

	/**
	 * Highlight without action
	 */
	export type HighlightDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Highlight
		 */
		select?: HighlightSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Highlight
		 */
		omit?: HighlightOmit<ExtArgs> | null;
	};

	/**
	 * Model RecentUpdate
	 */

	export type AggregateRecentUpdate = {
		_count: RecentUpdateCountAggregateOutputType | null;
		_avg: RecentUpdateAvgAggregateOutputType | null;
		_sum: RecentUpdateSumAggregateOutputType | null;
		_min: RecentUpdateMinAggregateOutputType | null;
		_max: RecentUpdateMaxAggregateOutputType | null;
	};

	export type RecentUpdateAvgAggregateOutputType = {
		id: number | null;
	};

	export type RecentUpdateSumAggregateOutputType = {
		id: number | null;
	};

	export type RecentUpdateMinAggregateOutputType = {
		id: number | null;
		update: string | null;
		description: string | null;
		link: string | null;
		date: string | null;
		createdAt: Date | null;
	};

	export type RecentUpdateMaxAggregateOutputType = {
		id: number | null;
		update: string | null;
		description: string | null;
		link: string | null;
		date: string | null;
		createdAt: Date | null;
	};

	export type RecentUpdateCountAggregateOutputType = {
		id: number;
		update: number;
		description: number;
		link: number;
		date: number;
		createdAt: number;
		_all: number;
	};

	export type RecentUpdateAvgAggregateInputType = {
		id?: true;
	};

	export type RecentUpdateSumAggregateInputType = {
		id?: true;
	};

	export type RecentUpdateMinAggregateInputType = {
		id?: true;
		update?: true;
		description?: true;
		link?: true;
		date?: true;
		createdAt?: true;
	};

	export type RecentUpdateMaxAggregateInputType = {
		id?: true;
		update?: true;
		description?: true;
		link?: true;
		date?: true;
		createdAt?: true;
	};

	export type RecentUpdateCountAggregateInputType = {
		id?: true;
		update?: true;
		description?: true;
		link?: true;
		date?: true;
		createdAt?: true;
		_all?: true;
	};

	export type RecentUpdateAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which RecentUpdate to aggregate.
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of RecentUpdates to fetch.
		 */
		orderBy?:
			| RecentUpdateOrderByWithRelationInput
			| RecentUpdateOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: RecentUpdateWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` RecentUpdates from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` RecentUpdates.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned RecentUpdates
		 **/
		_count?: true | RecentUpdateCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: RecentUpdateAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: RecentUpdateSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: RecentUpdateMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: RecentUpdateMaxAggregateInputType;
	};

	export type GetRecentUpdateAggregateType<
		T extends RecentUpdateAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateRecentUpdate]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateRecentUpdate[P]>
			: GetScalarType<T[P], AggregateRecentUpdate[P]>;
	};

	export type RecentUpdateGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: RecentUpdateWhereInput;
		orderBy?:
			| RecentUpdateOrderByWithAggregationInput
			| RecentUpdateOrderByWithAggregationInput[];
		by: RecentUpdateScalarFieldEnum[] | RecentUpdateScalarFieldEnum;
		having?: RecentUpdateScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: RecentUpdateCountAggregateInputType | true;
		_avg?: RecentUpdateAvgAggregateInputType;
		_sum?: RecentUpdateSumAggregateInputType;
		_min?: RecentUpdateMinAggregateInputType;
		_max?: RecentUpdateMaxAggregateInputType;
	};

	export type RecentUpdateGroupByOutputType = {
		id: number;
		update: string;
		description: string;
		link: string | null;
		date: string;
		createdAt: Date;
		_count: RecentUpdateCountAggregateOutputType | null;
		_avg: RecentUpdateAvgAggregateOutputType | null;
		_sum: RecentUpdateSumAggregateOutputType | null;
		_min: RecentUpdateMinAggregateOutputType | null;
		_max: RecentUpdateMaxAggregateOutputType | null;
	};

	type GetRecentUpdateGroupByPayload<T extends RecentUpdateGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<RecentUpdateGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof RecentUpdateGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<
									T[P],
									RecentUpdateGroupByOutputType[P]
								>
						: GetScalarType<T[P], RecentUpdateGroupByOutputType[P]>;
				}
			>
		>;

	export type RecentUpdateSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			update?: boolean;
			description?: boolean;
			link?: boolean;
			date?: boolean;
			createdAt?: boolean;
		},
		ExtArgs["result"]["recentUpdate"]
	>;

	export type RecentUpdateSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			update?: boolean;
			description?: boolean;
			link?: boolean;
			date?: boolean;
			createdAt?: boolean;
		},
		ExtArgs["result"]["recentUpdate"]
	>;

	export type RecentUpdateSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			update?: boolean;
			description?: boolean;
			link?: boolean;
			date?: boolean;
			createdAt?: boolean;
		},
		ExtArgs["result"]["recentUpdate"]
	>;

	export type RecentUpdateSelectScalar = {
		id?: boolean;
		update?: boolean;
		description?: boolean;
		link?: boolean;
		date?: boolean;
		createdAt?: boolean;
	};

	export type RecentUpdateOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "update" | "description" | "link" | "date" | "createdAt",
		ExtArgs["result"]["recentUpdate"]
	>;

	export type $RecentUpdatePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "RecentUpdate";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				update: string;
				description: string;
				link: string | null;
				date: string;
				createdAt: Date;
			},
			ExtArgs["result"]["recentUpdate"]
		>;
		composites: {};
	};

	type RecentUpdateGetPayload<
		S extends boolean | null | undefined | RecentUpdateDefaultArgs,
	> = $Result.GetResult<Prisma.$RecentUpdatePayload, S>;

	type RecentUpdateCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		RecentUpdateFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: RecentUpdateCountAggregateInputType | true;
	};

	export interface RecentUpdateDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["RecentUpdate"];
			meta: { name: "RecentUpdate" };
		};
		/**
		 * Find zero or one RecentUpdate that matches the filter.
		 * @param {RecentUpdateFindUniqueArgs} args - Arguments to find a RecentUpdate
		 * @example
		 * // Get one RecentUpdate
		 * const recentUpdate = await prisma.recentUpdate.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends RecentUpdateFindUniqueArgs>(
			args: SelectSubset<T, RecentUpdateFindUniqueArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one RecentUpdate that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {RecentUpdateFindUniqueOrThrowArgs} args - Arguments to find a RecentUpdate
		 * @example
		 * // Get one RecentUpdate
		 * const recentUpdate = await prisma.recentUpdate.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends RecentUpdateFindUniqueOrThrowArgs>(
			args: SelectSubset<T, RecentUpdateFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first RecentUpdate that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateFindFirstArgs} args - Arguments to find a RecentUpdate
		 * @example
		 * // Get one RecentUpdate
		 * const recentUpdate = await prisma.recentUpdate.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends RecentUpdateFindFirstArgs>(
			args?: SelectSubset<T, RecentUpdateFindFirstArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first RecentUpdate that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateFindFirstOrThrowArgs} args - Arguments to find a RecentUpdate
		 * @example
		 * // Get one RecentUpdate
		 * const recentUpdate = await prisma.recentUpdate.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends RecentUpdateFindFirstOrThrowArgs>(
			args?: SelectSubset<T, RecentUpdateFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more RecentUpdates that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all RecentUpdates
		 * const recentUpdates = await prisma.recentUpdate.findMany()
		 *
		 * // Get first 10 RecentUpdates
		 * const recentUpdates = await prisma.recentUpdate.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const recentUpdateWithIdOnly = await prisma.recentUpdate.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends RecentUpdateFindManyArgs>(
			args?: SelectSubset<T, RecentUpdateFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a RecentUpdate.
		 * @param {RecentUpdateCreateArgs} args - Arguments to create a RecentUpdate.
		 * @example
		 * // Create one RecentUpdate
		 * const RecentUpdate = await prisma.recentUpdate.create({
		 *   data: {
		 *     // ... data to create a RecentUpdate
		 *   }
		 * })
		 *
		 */
		create<T extends RecentUpdateCreateArgs>(
			args: SelectSubset<T, RecentUpdateCreateArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many RecentUpdates.
		 * @param {RecentUpdateCreateManyArgs} args - Arguments to create many RecentUpdates.
		 * @example
		 * // Create many RecentUpdates
		 * const recentUpdate = await prisma.recentUpdate.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends RecentUpdateCreateManyArgs>(
			args?: SelectSubset<T, RecentUpdateCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many RecentUpdates and returns the data saved in the database.
		 * @param {RecentUpdateCreateManyAndReturnArgs} args - Arguments to create many RecentUpdates.
		 * @example
		 * // Create many RecentUpdates
		 * const recentUpdate = await prisma.recentUpdate.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many RecentUpdates and only return the `id`
		 * const recentUpdateWithIdOnly = await prisma.recentUpdate.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends RecentUpdateCreateManyAndReturnArgs>(
			args?: SelectSubset<T, RecentUpdateCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a RecentUpdate.
		 * @param {RecentUpdateDeleteArgs} args - Arguments to delete one RecentUpdate.
		 * @example
		 * // Delete one RecentUpdate
		 * const RecentUpdate = await prisma.recentUpdate.delete({
		 *   where: {
		 *     // ... filter to delete one RecentUpdate
		 *   }
		 * })
		 *
		 */
		delete<T extends RecentUpdateDeleteArgs>(
			args: SelectSubset<T, RecentUpdateDeleteArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one RecentUpdate.
		 * @param {RecentUpdateUpdateArgs} args - Arguments to update one RecentUpdate.
		 * @example
		 * // Update one RecentUpdate
		 * const recentUpdate = await prisma.recentUpdate.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends RecentUpdateUpdateArgs>(
			args: SelectSubset<T, RecentUpdateUpdateArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more RecentUpdates.
		 * @param {RecentUpdateDeleteManyArgs} args - Arguments to filter RecentUpdates to delete.
		 * @example
		 * // Delete a few RecentUpdates
		 * const { count } = await prisma.recentUpdate.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends RecentUpdateDeleteManyArgs>(
			args?: SelectSubset<T, RecentUpdateDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more RecentUpdates.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many RecentUpdates
		 * const recentUpdate = await prisma.recentUpdate.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends RecentUpdateUpdateManyArgs>(
			args: SelectSubset<T, RecentUpdateUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more RecentUpdates and returns the data updated in the database.
		 * @param {RecentUpdateUpdateManyAndReturnArgs} args - Arguments to update many RecentUpdates.
		 * @example
		 * // Update many RecentUpdates
		 * const recentUpdate = await prisma.recentUpdate.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more RecentUpdates and only return the `id`
		 * const recentUpdateWithIdOnly = await prisma.recentUpdate.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends RecentUpdateUpdateManyAndReturnArgs>(
			args: SelectSubset<T, RecentUpdateUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one RecentUpdate.
		 * @param {RecentUpdateUpsertArgs} args - Arguments to update or create a RecentUpdate.
		 * @example
		 * // Update or create a RecentUpdate
		 * const recentUpdate = await prisma.recentUpdate.upsert({
		 *   create: {
		 *     // ... data to create a RecentUpdate
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the RecentUpdate we want to update
		 *   }
		 * })
		 */
		upsert<T extends RecentUpdateUpsertArgs>(
			args: SelectSubset<T, RecentUpdateUpsertArgs<ExtArgs>>
		): Prisma__RecentUpdateClient<
			$Result.GetResult<
				Prisma.$RecentUpdatePayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of RecentUpdates.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateCountArgs} args - Arguments to filter RecentUpdates to count.
		 * @example
		 * // Count the number of RecentUpdates
		 * const count = await prisma.recentUpdate.count({
		 *   where: {
		 *     // ... the filter for the RecentUpdates we want to count
		 *   }
		 * })
		 **/
		count<T extends RecentUpdateCountArgs>(
			args?: Subset<T, RecentUpdateCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							RecentUpdateCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a RecentUpdate.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends RecentUpdateAggregateArgs>(
			args: Subset<T, RecentUpdateAggregateArgs>
		): Prisma.PrismaPromise<GetRecentUpdateAggregateType<T>>;

		/**
		 * Group by RecentUpdate.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecentUpdateGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends RecentUpdateGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: RecentUpdateGroupByArgs["orderBy"] }
				: { orderBy?: RecentUpdateGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, RecentUpdateGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetRecentUpdateGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the RecentUpdate model
		 */
		readonly fields: RecentUpdateFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for RecentUpdate.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__RecentUpdateClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the RecentUpdate model
	 */
	interface RecentUpdateFieldRefs {
		readonly id: FieldRef<"RecentUpdate", "Int">;
		readonly update: FieldRef<"RecentUpdate", "String">;
		readonly description: FieldRef<"RecentUpdate", "String">;
		readonly link: FieldRef<"RecentUpdate", "String">;
		readonly date: FieldRef<"RecentUpdate", "String">;
		readonly createdAt: FieldRef<"RecentUpdate", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * RecentUpdate findUnique
	 */
	export type RecentUpdateFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * Filter, which RecentUpdate to fetch.
		 */
		where: RecentUpdateWhereUniqueInput;
	};

	/**
	 * RecentUpdate findUniqueOrThrow
	 */
	export type RecentUpdateFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * Filter, which RecentUpdate to fetch.
		 */
		where: RecentUpdateWhereUniqueInput;
	};

	/**
	 * RecentUpdate findFirst
	 */
	export type RecentUpdateFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * Filter, which RecentUpdate to fetch.
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of RecentUpdates to fetch.
		 */
		orderBy?:
			| RecentUpdateOrderByWithRelationInput
			| RecentUpdateOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for RecentUpdates.
		 */
		cursor?: RecentUpdateWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` RecentUpdates from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` RecentUpdates.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of RecentUpdates.
		 */
		distinct?: RecentUpdateScalarFieldEnum | RecentUpdateScalarFieldEnum[];
	};

	/**
	 * RecentUpdate findFirstOrThrow
	 */
	export type RecentUpdateFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * Filter, which RecentUpdate to fetch.
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of RecentUpdates to fetch.
		 */
		orderBy?:
			| RecentUpdateOrderByWithRelationInput
			| RecentUpdateOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for RecentUpdates.
		 */
		cursor?: RecentUpdateWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` RecentUpdates from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` RecentUpdates.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of RecentUpdates.
		 */
		distinct?: RecentUpdateScalarFieldEnum | RecentUpdateScalarFieldEnum[];
	};

	/**
	 * RecentUpdate findMany
	 */
	export type RecentUpdateFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * Filter, which RecentUpdates to fetch.
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of RecentUpdates to fetch.
		 */
		orderBy?:
			| RecentUpdateOrderByWithRelationInput
			| RecentUpdateOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing RecentUpdates.
		 */
		cursor?: RecentUpdateWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` RecentUpdates from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` RecentUpdates.
		 */
		skip?: number;
		distinct?: RecentUpdateScalarFieldEnum | RecentUpdateScalarFieldEnum[];
	};

	/**
	 * RecentUpdate create
	 */
	export type RecentUpdateCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * The data needed to create a RecentUpdate.
		 */
		data: XOR<RecentUpdateCreateInput, RecentUpdateUncheckedCreateInput>;
	};

	/**
	 * RecentUpdate createMany
	 */
	export type RecentUpdateCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many RecentUpdates.
		 */
		data: RecentUpdateCreateManyInput | RecentUpdateCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * RecentUpdate createManyAndReturn
	 */
	export type RecentUpdateCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * The data used to create many RecentUpdates.
		 */
		data: RecentUpdateCreateManyInput | RecentUpdateCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * RecentUpdate update
	 */
	export type RecentUpdateUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * The data needed to update a RecentUpdate.
		 */
		data: XOR<RecentUpdateUpdateInput, RecentUpdateUncheckedUpdateInput>;
		/**
		 * Choose, which RecentUpdate to update.
		 */
		where: RecentUpdateWhereUniqueInput;
	};

	/**
	 * RecentUpdate updateMany
	 */
	export type RecentUpdateUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update RecentUpdates.
		 */
		data: XOR<
			RecentUpdateUpdateManyMutationInput,
			RecentUpdateUncheckedUpdateManyInput
		>;
		/**
		 * Filter which RecentUpdates to update
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * Limit how many RecentUpdates to update.
		 */
		limit?: number;
	};

	/**
	 * RecentUpdate updateManyAndReturn
	 */
	export type RecentUpdateUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * The data used to update RecentUpdates.
		 */
		data: XOR<
			RecentUpdateUpdateManyMutationInput,
			RecentUpdateUncheckedUpdateManyInput
		>;
		/**
		 * Filter which RecentUpdates to update
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * Limit how many RecentUpdates to update.
		 */
		limit?: number;
	};

	/**
	 * RecentUpdate upsert
	 */
	export type RecentUpdateUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * The filter to search for the RecentUpdate to update in case it exists.
		 */
		where: RecentUpdateWhereUniqueInput;
		/**
		 * In case the RecentUpdate found by the `where` argument doesn't exist, create a new RecentUpdate with this data.
		 */
		create: XOR<RecentUpdateCreateInput, RecentUpdateUncheckedCreateInput>;
		/**
		 * In case the RecentUpdate was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<RecentUpdateUpdateInput, RecentUpdateUncheckedUpdateInput>;
	};

	/**
	 * RecentUpdate delete
	 */
	export type RecentUpdateDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
		/**
		 * Filter which RecentUpdate to delete.
		 */
		where: RecentUpdateWhereUniqueInput;
	};

	/**
	 * RecentUpdate deleteMany
	 */
	export type RecentUpdateDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which RecentUpdates to delete
		 */
		where?: RecentUpdateWhereInput;
		/**
		 * Limit how many RecentUpdates to delete.
		 */
		limit?: number;
	};

	/**
	 * RecentUpdate without action
	 */
	export type RecentUpdateDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecentUpdate
		 */
		select?: RecentUpdateSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the RecentUpdate
		 */
		omit?: RecentUpdateOmit<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: "ReadUncommitted";
		ReadCommitted: "ReadCommitted";
		RepeatableRead: "RepeatableRead";
		Serializable: "Serializable";
	};

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const UserScalarFieldEnum: {
		id: "id";
		name: "name";
		email: "email";
		password: "password";
		profileImage: "profileImage";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const PhotoGalleryScalarFieldEnum: {
		id: "id";
		imageURL: "imageURL";
		tags: "tags";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type PhotoGalleryScalarFieldEnum =
		(typeof PhotoGalleryScalarFieldEnum)[keyof typeof PhotoGalleryScalarFieldEnum];

	export const ResearchAreaScalarFieldEnum: {
		id: "id";
		name: "name";
		description: "description";
		imageURL: "imageURL";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type ResearchAreaScalarFieldEnum =
		(typeof ResearchAreaScalarFieldEnum)[keyof typeof ResearchAreaScalarFieldEnum];

	export const ResearchFacilityScalarFieldEnum: {
		id: "id";
		name: "name";
		description: "description";
		imageURL: "imageURL";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type ResearchFacilityScalarFieldEnum =
		(typeof ResearchFacilityScalarFieldEnum)[keyof typeof ResearchFacilityScalarFieldEnum];

	export const PeopleScalarFieldEnum: {
		id: "id";
		name: "name";
		description: "description";
		linkedIn: "linkedIn";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type PeopleScalarFieldEnum =
		(typeof PeopleScalarFieldEnum)[keyof typeof PeopleScalarFieldEnum];

	export const PublicationScalarFieldEnum: {
		id: "id";
		publication: "publication";
		description: "description";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type PublicationScalarFieldEnum =
		(typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum];

	export const OutreachScalarFieldEnum: {
		id: "id";
		outreach: "outreach";
		description: "description";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type OutreachScalarFieldEnum =
		(typeof OutreachScalarFieldEnum)[keyof typeof OutreachScalarFieldEnum];

	export const EventScalarFieldEnum: {
		id: "id";
		event: "event";
		description: "description";
		imageURL: "imageURL";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type EventScalarFieldEnum =
		(typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

	export const GroupMomentScalarFieldEnum: {
		id: "id";
		imageURL: "imageURL";
		tags: "tags";
		createdAt: "createdAt";
		updateAt: "updateAt";
	};

	export type GroupMomentScalarFieldEnum =
		(typeof GroupMomentScalarFieldEnum)[keyof typeof GroupMomentScalarFieldEnum];

	export const HighlightScalarFieldEnum: {
		id: "id";
		highlight: "highlight";
		description: "description";
		link: "link";
		date: "date";
		createdAt: "createdAt";
	};

	export type HighlightScalarFieldEnum =
		(typeof HighlightScalarFieldEnum)[keyof typeof HighlightScalarFieldEnum];

	export const RecentUpdateScalarFieldEnum: {
		id: "id";
		update: "update";
		description: "description";
		link: "link";
		date: "date";
		createdAt: "createdAt";
	};

	export type RecentUpdateScalarFieldEnum =
		(typeof RecentUpdateScalarFieldEnum)[keyof typeof RecentUpdateScalarFieldEnum];

	export const SortOrder: {
		asc: "asc";
		desc: "desc";
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: "default";
		insensitive: "insensitive";
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: "first";
		last: "last";
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int"
	>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int[]"
	>;

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String"
	>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String[]"
	>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime"
	>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime[]"
	>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float"
	>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float[]"
	>;

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: IntFilter<"User"> | number;
		name?: StringFilter<"User"> | string;
		email?: StringFilter<"User"> | string;
		password?: StringFilter<"User"> | string;
		profileImage?: StringNullableFilter<"User"> | string | null;
		createdAt?: DateTimeFilter<"User"> | Date | string;
		updateAt?: DateTimeFilter<"User"> | Date | string;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		profileImage?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			email?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			name?: StringFilter<"User"> | string;
			password?: StringFilter<"User"> | string;
			profileImage?: StringNullableFilter<"User"> | string | null;
			createdAt?: DateTimeFilter<"User"> | Date | string;
			updateAt?: DateTimeFilter<"User"> | Date | string;
		},
		"id" | "id" | "email"
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		profileImage?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_avg?: UserAvgOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
		_sum?: UserSumOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"User"> | number;
		name?: StringWithAggregatesFilter<"User"> | string;
		email?: StringWithAggregatesFilter<"User"> | string;
		password?: StringWithAggregatesFilter<"User"> | string;
		profileImage?:
			| StringNullableWithAggregatesFilter<"User">
			| string
			| null;
		createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
		updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
	};

	export type PhotoGalleryWhereInput = {
		AND?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[];
		OR?: PhotoGalleryWhereInput[];
		NOT?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[];
		id?: IntFilter<"PhotoGallery"> | number;
		imageURL?: StringFilter<"PhotoGallery"> | string;
		tags?: StringNullableListFilter<"PhotoGallery">;
		createdAt?: DateTimeFilter<"PhotoGallery"> | Date | string;
		updateAt?: DateTimeFilter<"PhotoGallery"> | Date | string;
	};

	export type PhotoGalleryOrderByWithRelationInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		tags?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PhotoGalleryWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[];
			OR?: PhotoGalleryWhereInput[];
			NOT?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[];
			imageURL?: StringFilter<"PhotoGallery"> | string;
			tags?: StringNullableListFilter<"PhotoGallery">;
			createdAt?: DateTimeFilter<"PhotoGallery"> | Date | string;
			updateAt?: DateTimeFilter<"PhotoGallery"> | Date | string;
		},
		"id" | "id"
	>;

	export type PhotoGalleryOrderByWithAggregationInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		tags?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: PhotoGalleryCountOrderByAggregateInput;
		_avg?: PhotoGalleryAvgOrderByAggregateInput;
		_max?: PhotoGalleryMaxOrderByAggregateInput;
		_min?: PhotoGalleryMinOrderByAggregateInput;
		_sum?: PhotoGallerySumOrderByAggregateInput;
	};

	export type PhotoGalleryScalarWhereWithAggregatesInput = {
		AND?:
			| PhotoGalleryScalarWhereWithAggregatesInput
			| PhotoGalleryScalarWhereWithAggregatesInput[];
		OR?: PhotoGalleryScalarWhereWithAggregatesInput[];
		NOT?:
			| PhotoGalleryScalarWhereWithAggregatesInput
			| PhotoGalleryScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"PhotoGallery"> | number;
		imageURL?: StringWithAggregatesFilter<"PhotoGallery"> | string;
		tags?: StringNullableListFilter<"PhotoGallery">;
		createdAt?:
			| DateTimeWithAggregatesFilter<"PhotoGallery">
			| Date
			| string;
		updateAt?: DateTimeWithAggregatesFilter<"PhotoGallery"> | Date | string;
	};

	export type ResearchAreaWhereInput = {
		AND?: ResearchAreaWhereInput | ResearchAreaWhereInput[];
		OR?: ResearchAreaWhereInput[];
		NOT?: ResearchAreaWhereInput | ResearchAreaWhereInput[];
		id?: IntFilter<"ResearchArea"> | number;
		name?: StringFilter<"ResearchArea"> | string;
		description?: StringFilter<"ResearchArea"> | string;
		imageURL?: StringFilter<"ResearchArea"> | string;
		createdAt?: DateTimeFilter<"ResearchArea"> | Date | string;
		updateAt?: DateTimeFilter<"ResearchArea"> | Date | string;
	};

	export type ResearchAreaOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchAreaWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: ResearchAreaWhereInput | ResearchAreaWhereInput[];
			OR?: ResearchAreaWhereInput[];
			NOT?: ResearchAreaWhereInput | ResearchAreaWhereInput[];
			name?: StringFilter<"ResearchArea"> | string;
			description?: StringFilter<"ResearchArea"> | string;
			imageURL?: StringFilter<"ResearchArea"> | string;
			createdAt?: DateTimeFilter<"ResearchArea"> | Date | string;
			updateAt?: DateTimeFilter<"ResearchArea"> | Date | string;
		},
		"id"
	>;

	export type ResearchAreaOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: ResearchAreaCountOrderByAggregateInput;
		_avg?: ResearchAreaAvgOrderByAggregateInput;
		_max?: ResearchAreaMaxOrderByAggregateInput;
		_min?: ResearchAreaMinOrderByAggregateInput;
		_sum?: ResearchAreaSumOrderByAggregateInput;
	};

	export type ResearchAreaScalarWhereWithAggregatesInput = {
		AND?:
			| ResearchAreaScalarWhereWithAggregatesInput
			| ResearchAreaScalarWhereWithAggregatesInput[];
		OR?: ResearchAreaScalarWhereWithAggregatesInput[];
		NOT?:
			| ResearchAreaScalarWhereWithAggregatesInput
			| ResearchAreaScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"ResearchArea"> | number;
		name?: StringWithAggregatesFilter<"ResearchArea"> | string;
		description?: StringWithAggregatesFilter<"ResearchArea"> | string;
		imageURL?: StringWithAggregatesFilter<"ResearchArea"> | string;
		createdAt?:
			| DateTimeWithAggregatesFilter<"ResearchArea">
			| Date
			| string;
		updateAt?: DateTimeWithAggregatesFilter<"ResearchArea"> | Date | string;
	};

	export type ResearchFacilityWhereInput = {
		AND?: ResearchFacilityWhereInput | ResearchFacilityWhereInput[];
		OR?: ResearchFacilityWhereInput[];
		NOT?: ResearchFacilityWhereInput | ResearchFacilityWhereInput[];
		id?: IntFilter<"ResearchFacility"> | number;
		name?: StringFilter<"ResearchFacility"> | string;
		description?: StringFilter<"ResearchFacility"> | string;
		imageURL?: StringNullableFilter<"ResearchFacility"> | string | null;
		createdAt?: DateTimeFilter<"ResearchFacility"> | Date | string;
		updateAt?: DateTimeFilter<"ResearchFacility"> | Date | string;
	};

	export type ResearchFacilityOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchFacilityWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: ResearchFacilityWhereInput | ResearchFacilityWhereInput[];
			OR?: ResearchFacilityWhereInput[];
			NOT?: ResearchFacilityWhereInput | ResearchFacilityWhereInput[];
			name?: StringFilter<"ResearchFacility"> | string;
			description?: StringFilter<"ResearchFacility"> | string;
			imageURL?: StringNullableFilter<"ResearchFacility"> | string | null;
			createdAt?: DateTimeFilter<"ResearchFacility"> | Date | string;
			updateAt?: DateTimeFilter<"ResearchFacility"> | Date | string;
		},
		"id"
	>;

	export type ResearchFacilityOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: ResearchFacilityCountOrderByAggregateInput;
		_avg?: ResearchFacilityAvgOrderByAggregateInput;
		_max?: ResearchFacilityMaxOrderByAggregateInput;
		_min?: ResearchFacilityMinOrderByAggregateInput;
		_sum?: ResearchFacilitySumOrderByAggregateInput;
	};

	export type ResearchFacilityScalarWhereWithAggregatesInput = {
		AND?:
			| ResearchFacilityScalarWhereWithAggregatesInput
			| ResearchFacilityScalarWhereWithAggregatesInput[];
		OR?: ResearchFacilityScalarWhereWithAggregatesInput[];
		NOT?:
			| ResearchFacilityScalarWhereWithAggregatesInput
			| ResearchFacilityScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"ResearchFacility"> | number;
		name?: StringWithAggregatesFilter<"ResearchFacility"> | string;
		description?: StringWithAggregatesFilter<"ResearchFacility"> | string;
		imageURL?:
			| StringNullableWithAggregatesFilter<"ResearchFacility">
			| string
			| null;
		createdAt?:
			| DateTimeWithAggregatesFilter<"ResearchFacility">
			| Date
			| string;
		updateAt?:
			| DateTimeWithAggregatesFilter<"ResearchFacility">
			| Date
			| string;
	};

	export type PeopleWhereInput = {
		AND?: PeopleWhereInput | PeopleWhereInput[];
		OR?: PeopleWhereInput[];
		NOT?: PeopleWhereInput | PeopleWhereInput[];
		id?: IntFilter<"People"> | number;
		name?: StringFilter<"People"> | string;
		description?: StringFilter<"People"> | string;
		linkedIn?: StringNullableFilter<"People"> | string | null;
		createdAt?: DateTimeFilter<"People"> | Date | string;
		updateAt?: DateTimeFilter<"People"> | Date | string;
	};

	export type PeopleOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		linkedIn?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PeopleWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: PeopleWhereInput | PeopleWhereInput[];
			OR?: PeopleWhereInput[];
			NOT?: PeopleWhereInput | PeopleWhereInput[];
			name?: StringFilter<"People"> | string;
			description?: StringFilter<"People"> | string;
			linkedIn?: StringNullableFilter<"People"> | string | null;
			createdAt?: DateTimeFilter<"People"> | Date | string;
			updateAt?: DateTimeFilter<"People"> | Date | string;
		},
		"id" | "id"
	>;

	export type PeopleOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		linkedIn?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: PeopleCountOrderByAggregateInput;
		_avg?: PeopleAvgOrderByAggregateInput;
		_max?: PeopleMaxOrderByAggregateInput;
		_min?: PeopleMinOrderByAggregateInput;
		_sum?: PeopleSumOrderByAggregateInput;
	};

	export type PeopleScalarWhereWithAggregatesInput = {
		AND?:
			| PeopleScalarWhereWithAggregatesInput
			| PeopleScalarWhereWithAggregatesInput[];
		OR?: PeopleScalarWhereWithAggregatesInput[];
		NOT?:
			| PeopleScalarWhereWithAggregatesInput
			| PeopleScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"People"> | number;
		name?: StringWithAggregatesFilter<"People"> | string;
		description?: StringWithAggregatesFilter<"People"> | string;
		linkedIn?: StringNullableWithAggregatesFilter<"People"> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<"People"> | Date | string;
		updateAt?: DateTimeWithAggregatesFilter<"People"> | Date | string;
	};

	export type PublicationWhereInput = {
		AND?: PublicationWhereInput | PublicationWhereInput[];
		OR?: PublicationWhereInput[];
		NOT?: PublicationWhereInput | PublicationWhereInput[];
		id?: IntFilter<"Publication"> | number;
		publication?: StringFilter<"Publication"> | string;
		description?: StringFilter<"Publication"> | string;
		createdAt?: DateTimeFilter<"Publication"> | Date | string;
		updateAt?: DateTimeFilter<"Publication"> | Date | string;
	};

	export type PublicationOrderByWithRelationInput = {
		id?: SortOrder;
		publication?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PublicationWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: PublicationWhereInput | PublicationWhereInput[];
			OR?: PublicationWhereInput[];
			NOT?: PublicationWhereInput | PublicationWhereInput[];
			publication?: StringFilter<"Publication"> | string;
			description?: StringFilter<"Publication"> | string;
			createdAt?: DateTimeFilter<"Publication"> | Date | string;
			updateAt?: DateTimeFilter<"Publication"> | Date | string;
		},
		"id" | "id"
	>;

	export type PublicationOrderByWithAggregationInput = {
		id?: SortOrder;
		publication?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: PublicationCountOrderByAggregateInput;
		_avg?: PublicationAvgOrderByAggregateInput;
		_max?: PublicationMaxOrderByAggregateInput;
		_min?: PublicationMinOrderByAggregateInput;
		_sum?: PublicationSumOrderByAggregateInput;
	};

	export type PublicationScalarWhereWithAggregatesInput = {
		AND?:
			| PublicationScalarWhereWithAggregatesInput
			| PublicationScalarWhereWithAggregatesInput[];
		OR?: PublicationScalarWhereWithAggregatesInput[];
		NOT?:
			| PublicationScalarWhereWithAggregatesInput
			| PublicationScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"Publication"> | number;
		publication?: StringWithAggregatesFilter<"Publication"> | string;
		description?: StringWithAggregatesFilter<"Publication"> | string;
		createdAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string;
		updateAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string;
	};

	export type OutreachWhereInput = {
		AND?: OutreachWhereInput | OutreachWhereInput[];
		OR?: OutreachWhereInput[];
		NOT?: OutreachWhereInput | OutreachWhereInput[];
		id?: IntFilter<"Outreach"> | number;
		outreach?: StringFilter<"Outreach"> | string;
		description?: StringFilter<"Outreach"> | string;
		createdAt?: DateTimeFilter<"Outreach"> | Date | string;
		updateAt?: DateTimeFilter<"Outreach"> | Date | string;
	};

	export type OutreachOrderByWithRelationInput = {
		id?: SortOrder;
		outreach?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type OutreachWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: OutreachWhereInput | OutreachWhereInput[];
			OR?: OutreachWhereInput[];
			NOT?: OutreachWhereInput | OutreachWhereInput[];
			outreach?: StringFilter<"Outreach"> | string;
			description?: StringFilter<"Outreach"> | string;
			createdAt?: DateTimeFilter<"Outreach"> | Date | string;
			updateAt?: DateTimeFilter<"Outreach"> | Date | string;
		},
		"id" | "id"
	>;

	export type OutreachOrderByWithAggregationInput = {
		id?: SortOrder;
		outreach?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: OutreachCountOrderByAggregateInput;
		_avg?: OutreachAvgOrderByAggregateInput;
		_max?: OutreachMaxOrderByAggregateInput;
		_min?: OutreachMinOrderByAggregateInput;
		_sum?: OutreachSumOrderByAggregateInput;
	};

	export type OutreachScalarWhereWithAggregatesInput = {
		AND?:
			| OutreachScalarWhereWithAggregatesInput
			| OutreachScalarWhereWithAggregatesInput[];
		OR?: OutreachScalarWhereWithAggregatesInput[];
		NOT?:
			| OutreachScalarWhereWithAggregatesInput
			| OutreachScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"Outreach"> | number;
		outreach?: StringWithAggregatesFilter<"Outreach"> | string;
		description?: StringWithAggregatesFilter<"Outreach"> | string;
		createdAt?: DateTimeWithAggregatesFilter<"Outreach"> | Date | string;
		updateAt?: DateTimeWithAggregatesFilter<"Outreach"> | Date | string;
	};

	export type EventWhereInput = {
		AND?: EventWhereInput | EventWhereInput[];
		OR?: EventWhereInput[];
		NOT?: EventWhereInput | EventWhereInput[];
		id?: IntFilter<"Event"> | number;
		event?: StringFilter<"Event"> | string;
		description?: StringFilter<"Event"> | string;
		imageURL?: StringFilter<"Event"> | string;
		createdAt?: DateTimeFilter<"Event"> | Date | string;
		updateAt?: DateTimeFilter<"Event"> | Date | string;
	};

	export type EventOrderByWithRelationInput = {
		id?: SortOrder;
		event?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type EventWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: EventWhereInput | EventWhereInput[];
			OR?: EventWhereInput[];
			NOT?: EventWhereInput | EventWhereInput[];
			event?: StringFilter<"Event"> | string;
			description?: StringFilter<"Event"> | string;
			imageURL?: StringFilter<"Event"> | string;
			createdAt?: DateTimeFilter<"Event"> | Date | string;
			updateAt?: DateTimeFilter<"Event"> | Date | string;
		},
		"id" | "id"
	>;

	export type EventOrderByWithAggregationInput = {
		id?: SortOrder;
		event?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: EventCountOrderByAggregateInput;
		_avg?: EventAvgOrderByAggregateInput;
		_max?: EventMaxOrderByAggregateInput;
		_min?: EventMinOrderByAggregateInput;
		_sum?: EventSumOrderByAggregateInput;
	};

	export type EventScalarWhereWithAggregatesInput = {
		AND?:
			| EventScalarWhereWithAggregatesInput
			| EventScalarWhereWithAggregatesInput[];
		OR?: EventScalarWhereWithAggregatesInput[];
		NOT?:
			| EventScalarWhereWithAggregatesInput
			| EventScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"Event"> | number;
		event?: StringWithAggregatesFilter<"Event"> | string;
		description?: StringWithAggregatesFilter<"Event"> | string;
		imageURL?: StringWithAggregatesFilter<"Event"> | string;
		createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
		updateAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
	};

	export type GroupMomentWhereInput = {
		AND?: GroupMomentWhereInput | GroupMomentWhereInput[];
		OR?: GroupMomentWhereInput[];
		NOT?: GroupMomentWhereInput | GroupMomentWhereInput[];
		id?: IntFilter<"GroupMoment"> | number;
		imageURL?: StringFilter<"GroupMoment"> | string;
		tags?: StringNullableListFilter<"GroupMoment">;
		createdAt?: DateTimeFilter<"GroupMoment"> | Date | string;
		updateAt?: DateTimeFilter<"GroupMoment"> | Date | string;
	};

	export type GroupMomentOrderByWithRelationInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		tags?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type GroupMomentWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: GroupMomentWhereInput | GroupMomentWhereInput[];
			OR?: GroupMomentWhereInput[];
			NOT?: GroupMomentWhereInput | GroupMomentWhereInput[];
			imageURL?: StringFilter<"GroupMoment"> | string;
			tags?: StringNullableListFilter<"GroupMoment">;
			createdAt?: DateTimeFilter<"GroupMoment"> | Date | string;
			updateAt?: DateTimeFilter<"GroupMoment"> | Date | string;
		},
		"id" | "id"
	>;

	export type GroupMomentOrderByWithAggregationInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		tags?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
		_count?: GroupMomentCountOrderByAggregateInput;
		_avg?: GroupMomentAvgOrderByAggregateInput;
		_max?: GroupMomentMaxOrderByAggregateInput;
		_min?: GroupMomentMinOrderByAggregateInput;
		_sum?: GroupMomentSumOrderByAggregateInput;
	};

	export type GroupMomentScalarWhereWithAggregatesInput = {
		AND?:
			| GroupMomentScalarWhereWithAggregatesInput
			| GroupMomentScalarWhereWithAggregatesInput[];
		OR?: GroupMomentScalarWhereWithAggregatesInput[];
		NOT?:
			| GroupMomentScalarWhereWithAggregatesInput
			| GroupMomentScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"GroupMoment"> | number;
		imageURL?: StringWithAggregatesFilter<"GroupMoment"> | string;
		tags?: StringNullableListFilter<"GroupMoment">;
		createdAt?: DateTimeWithAggregatesFilter<"GroupMoment"> | Date | string;
		updateAt?: DateTimeWithAggregatesFilter<"GroupMoment"> | Date | string;
	};

	export type HighlightWhereInput = {
		AND?: HighlightWhereInput | HighlightWhereInput[];
		OR?: HighlightWhereInput[];
		NOT?: HighlightWhereInput | HighlightWhereInput[];
		id?: IntFilter<"Highlight"> | number;
		highlight?: StringFilter<"Highlight"> | string;
		description?: StringFilter<"Highlight"> | string;
		link?: StringNullableFilter<"Highlight"> | string | null;
		date?: StringFilter<"Highlight"> | string;
		createdAt?: DateTimeFilter<"Highlight"> | Date | string;
	};

	export type HighlightOrderByWithRelationInput = {
		id?: SortOrder;
		highlight?: SortOrder;
		description?: SortOrder;
		link?: SortOrderInput | SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type HighlightWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: HighlightWhereInput | HighlightWhereInput[];
			OR?: HighlightWhereInput[];
			NOT?: HighlightWhereInput | HighlightWhereInput[];
			highlight?: StringFilter<"Highlight"> | string;
			description?: StringFilter<"Highlight"> | string;
			link?: StringNullableFilter<"Highlight"> | string | null;
			date?: StringFilter<"Highlight"> | string;
			createdAt?: DateTimeFilter<"Highlight"> | Date | string;
		},
		"id" | "id"
	>;

	export type HighlightOrderByWithAggregationInput = {
		id?: SortOrder;
		highlight?: SortOrder;
		description?: SortOrder;
		link?: SortOrderInput | SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
		_count?: HighlightCountOrderByAggregateInput;
		_avg?: HighlightAvgOrderByAggregateInput;
		_max?: HighlightMaxOrderByAggregateInput;
		_min?: HighlightMinOrderByAggregateInput;
		_sum?: HighlightSumOrderByAggregateInput;
	};

	export type HighlightScalarWhereWithAggregatesInput = {
		AND?:
			| HighlightScalarWhereWithAggregatesInput
			| HighlightScalarWhereWithAggregatesInput[];
		OR?: HighlightScalarWhereWithAggregatesInput[];
		NOT?:
			| HighlightScalarWhereWithAggregatesInput
			| HighlightScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"Highlight"> | number;
		highlight?: StringWithAggregatesFilter<"Highlight"> | string;
		description?: StringWithAggregatesFilter<"Highlight"> | string;
		link?: StringNullableWithAggregatesFilter<"Highlight"> | string | null;
		date?: StringWithAggregatesFilter<"Highlight"> | string;
		createdAt?: DateTimeWithAggregatesFilter<"Highlight"> | Date | string;
	};

	export type RecentUpdateWhereInput = {
		AND?: RecentUpdateWhereInput | RecentUpdateWhereInput[];
		OR?: RecentUpdateWhereInput[];
		NOT?: RecentUpdateWhereInput | RecentUpdateWhereInput[];
		id?: IntFilter<"RecentUpdate"> | number;
		update?: StringFilter<"RecentUpdate"> | string;
		description?: StringFilter<"RecentUpdate"> | string;
		link?: StringNullableFilter<"RecentUpdate"> | string | null;
		date?: StringFilter<"RecentUpdate"> | string;
		createdAt?: DateTimeFilter<"RecentUpdate"> | Date | string;
	};

	export type RecentUpdateOrderByWithRelationInput = {
		id?: SortOrder;
		update?: SortOrder;
		description?: SortOrder;
		link?: SortOrderInput | SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type RecentUpdateWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: RecentUpdateWhereInput | RecentUpdateWhereInput[];
			OR?: RecentUpdateWhereInput[];
			NOT?: RecentUpdateWhereInput | RecentUpdateWhereInput[];
			update?: StringFilter<"RecentUpdate"> | string;
			description?: StringFilter<"RecentUpdate"> | string;
			link?: StringNullableFilter<"RecentUpdate"> | string | null;
			date?: StringFilter<"RecentUpdate"> | string;
			createdAt?: DateTimeFilter<"RecentUpdate"> | Date | string;
		},
		"id" | "id"
	>;

	export type RecentUpdateOrderByWithAggregationInput = {
		id?: SortOrder;
		update?: SortOrder;
		description?: SortOrder;
		link?: SortOrderInput | SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
		_count?: RecentUpdateCountOrderByAggregateInput;
		_avg?: RecentUpdateAvgOrderByAggregateInput;
		_max?: RecentUpdateMaxOrderByAggregateInput;
		_min?: RecentUpdateMinOrderByAggregateInput;
		_sum?: RecentUpdateSumOrderByAggregateInput;
	};

	export type RecentUpdateScalarWhereWithAggregatesInput = {
		AND?:
			| RecentUpdateScalarWhereWithAggregatesInput
			| RecentUpdateScalarWhereWithAggregatesInput[];
		OR?: RecentUpdateScalarWhereWithAggregatesInput[];
		NOT?:
			| RecentUpdateScalarWhereWithAggregatesInput
			| RecentUpdateScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<"RecentUpdate"> | number;
		update?: StringWithAggregatesFilter<"RecentUpdate"> | string;
		description?: StringWithAggregatesFilter<"RecentUpdate"> | string;
		link?:
			| StringNullableWithAggregatesFilter<"RecentUpdate">
			| string
			| null;
		date?: StringWithAggregatesFilter<"RecentUpdate"> | string;
		createdAt?:
			| DateTimeWithAggregatesFilter<"RecentUpdate">
			| Date
			| string;
	};

	export type UserCreateInput = {
		name: string;
		email: string;
		password: string;
		profileImage?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type UserUncheckedCreateInput = {
		id?: number;
		name: string;
		email: string;
		password: string;
		profileImage?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type UserUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserCreateManyInput = {
		id?: number;
		name: string;
		email: string;
		password: string;
		profileImage?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type UserUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PhotoGalleryCreateInput = {
		imageURL: string;
		tags?: PhotoGalleryCreatetagsInput | string[];
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PhotoGalleryUncheckedCreateInput = {
		id?: number;
		imageURL: string;
		tags?: PhotoGalleryCreatetagsInput | string[];
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PhotoGalleryUpdateInput = {
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: PhotoGalleryUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PhotoGalleryUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: PhotoGalleryUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PhotoGalleryCreateManyInput = {
		id?: number;
		imageURL: string;
		tags?: PhotoGalleryCreatetagsInput | string[];
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PhotoGalleryUpdateManyMutationInput = {
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: PhotoGalleryUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PhotoGalleryUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: PhotoGalleryUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchAreaCreateInput = {
		id?: number;
		name: string;
		description: string;
		imageURL: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type ResearchAreaUncheckedCreateInput = {
		id?: number;
		name: string;
		description: string;
		imageURL: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type ResearchAreaUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchAreaUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchAreaCreateManyInput = {
		id?: number;
		name: string;
		description: string;
		imageURL: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type ResearchAreaUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchAreaUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchFacilityCreateInput = {
		name: string;
		description: string;
		imageURL?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type ResearchFacilityUncheckedCreateInput = {
		id?: number;
		name: string;
		description: string;
		imageURL?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type ResearchFacilityUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchFacilityUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchFacilityCreateManyInput = {
		id?: number;
		name: string;
		description: string;
		imageURL?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type ResearchFacilityUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResearchFacilityUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PeopleCreateInput = {
		name: string;
		description: string;
		linkedIn?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PeopleUncheckedCreateInput = {
		id?: number;
		name: string;
		description: string;
		linkedIn?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PeopleUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		linkedIn?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PeopleUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		linkedIn?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PeopleCreateManyInput = {
		id?: number;
		name: string;
		description: string;
		linkedIn?: string | null;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PeopleUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		linkedIn?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PeopleUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		linkedIn?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PublicationCreateInput = {
		publication: string;
		description: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PublicationUncheckedCreateInput = {
		id?: number;
		publication: string;
		description: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PublicationUpdateInput = {
		publication?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PublicationUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		publication?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PublicationCreateManyInput = {
		id?: number;
		publication: string;
		description: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type PublicationUpdateManyMutationInput = {
		publication?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type PublicationUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		publication?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type OutreachCreateInput = {
		outreach: string;
		description: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type OutreachUncheckedCreateInput = {
		id?: number;
		outreach: string;
		description: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type OutreachUpdateInput = {
		outreach?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type OutreachUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		outreach?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type OutreachCreateManyInput = {
		id?: number;
		outreach: string;
		description: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type OutreachUpdateManyMutationInput = {
		outreach?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type OutreachUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		outreach?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type EventCreateInput = {
		event: string;
		description: string;
		imageURL: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type EventUncheckedCreateInput = {
		id?: number;
		event: string;
		description: string;
		imageURL: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type EventUpdateInput = {
		event?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type EventUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		event?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type EventCreateManyInput = {
		id?: number;
		event: string;
		description: string;
		imageURL: string;
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type EventUpdateManyMutationInput = {
		event?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type EventUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		event?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		imageURL?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type GroupMomentCreateInput = {
		imageURL: string;
		tags?: GroupMomentCreatetagsInput | string[];
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type GroupMomentUncheckedCreateInput = {
		id?: number;
		imageURL: string;
		tags?: GroupMomentCreatetagsInput | string[];
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type GroupMomentUpdateInput = {
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: GroupMomentUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type GroupMomentUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: GroupMomentUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type GroupMomentCreateManyInput = {
		id?: number;
		imageURL: string;
		tags?: GroupMomentCreatetagsInput | string[];
		createdAt?: Date | string;
		updateAt?: Date | string;
	};

	export type GroupMomentUpdateManyMutationInput = {
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: GroupMomentUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type GroupMomentUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		imageURL?: StringFieldUpdateOperationsInput | string;
		tags?: GroupMomentUpdatetagsInput | string[];
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type HighlightCreateInput = {
		highlight: string;
		description: string;
		link?: string | null;
		date: string;
		createdAt?: Date | string;
	};

	export type HighlightUncheckedCreateInput = {
		id?: number;
		highlight: string;
		description: string;
		link?: string | null;
		date: string;
		createdAt?: Date | string;
	};

	export type HighlightUpdateInput = {
		highlight?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type HighlightUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		highlight?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type HighlightCreateManyInput = {
		id?: number;
		highlight: string;
		description: string;
		link?: string | null;
		date: string;
		createdAt?: Date | string;
	};

	export type HighlightUpdateManyMutationInput = {
		highlight?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type HighlightUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		highlight?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type RecentUpdateCreateInput = {
		update: string;
		description: string;
		link?: string | null;
		date: string;
		createdAt?: Date | string;
	};

	export type RecentUpdateUncheckedCreateInput = {
		id?: number;
		update: string;
		description: string;
		link?: string | null;
		date: string;
		createdAt?: Date | string;
	};

	export type RecentUpdateUpdateInput = {
		update?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type RecentUpdateUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		update?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type RecentUpdateCreateManyInput = {
		id?: number;
		update: string;
		description: string;
		link?: string | null;
		date: string;
		createdAt?: Date | string;
	};

	export type RecentUpdateUpdateManyMutationInput = {
		update?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type RecentUpdateUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		update?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		link?: NullableStringFieldUpdateOperationsInput | string | null;
		date?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		profileImage?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type UserAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		profileImage?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		profileImage?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type UserSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type StringNullableListFilter<$PrismaModel = never> = {
		equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		has?: string | StringFieldRefInput<$PrismaModel> | null;
		hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
		hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
		isEmpty?: boolean;
	};

	export type PhotoGalleryCountOrderByAggregateInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		tags?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PhotoGalleryAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type PhotoGalleryMaxOrderByAggregateInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PhotoGalleryMinOrderByAggregateInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PhotoGallerySumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type ResearchAreaCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchAreaAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type ResearchAreaMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchAreaMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchAreaSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type ResearchFacilityCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchFacilityAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type ResearchFacilityMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchFacilityMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type ResearchFacilitySumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type PeopleCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		linkedIn?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PeopleAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type PeopleMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		linkedIn?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PeopleMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		description?: SortOrder;
		linkedIn?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PeopleSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type PublicationCountOrderByAggregateInput = {
		id?: SortOrder;
		publication?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PublicationAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type PublicationMaxOrderByAggregateInput = {
		id?: SortOrder;
		publication?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PublicationMinOrderByAggregateInput = {
		id?: SortOrder;
		publication?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type PublicationSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type OutreachCountOrderByAggregateInput = {
		id?: SortOrder;
		outreach?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type OutreachAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type OutreachMaxOrderByAggregateInput = {
		id?: SortOrder;
		outreach?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type OutreachMinOrderByAggregateInput = {
		id?: SortOrder;
		outreach?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type OutreachSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type EventCountOrderByAggregateInput = {
		id?: SortOrder;
		event?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type EventAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type EventMaxOrderByAggregateInput = {
		id?: SortOrder;
		event?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type EventMinOrderByAggregateInput = {
		id?: SortOrder;
		event?: SortOrder;
		description?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type EventSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type GroupMomentCountOrderByAggregateInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		tags?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type GroupMomentAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type GroupMomentMaxOrderByAggregateInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type GroupMomentMinOrderByAggregateInput = {
		id?: SortOrder;
		imageURL?: SortOrder;
		createdAt?: SortOrder;
		updateAt?: SortOrder;
	};

	export type GroupMomentSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type HighlightCountOrderByAggregateInput = {
		id?: SortOrder;
		highlight?: SortOrder;
		description?: SortOrder;
		link?: SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type HighlightAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type HighlightMaxOrderByAggregateInput = {
		id?: SortOrder;
		highlight?: SortOrder;
		description?: SortOrder;
		link?: SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type HighlightMinOrderByAggregateInput = {
		id?: SortOrder;
		highlight?: SortOrder;
		description?: SortOrder;
		link?: SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type HighlightSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type RecentUpdateCountOrderByAggregateInput = {
		id?: SortOrder;
		update?: SortOrder;
		description?: SortOrder;
		link?: SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type RecentUpdateAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type RecentUpdateMaxOrderByAggregateInput = {
		id?: SortOrder;
		update?: SortOrder;
		description?: SortOrder;
		link?: SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type RecentUpdateMinOrderByAggregateInput = {
		id?: SortOrder;
		update?: SortOrder;
		description?: SortOrder;
		link?: SortOrder;
		date?: SortOrder;
		createdAt?: SortOrder;
	};

	export type RecentUpdateSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type PhotoGalleryCreatetagsInput = {
		set: string[];
	};

	export type PhotoGalleryUpdatetagsInput = {
		set?: string[];
		push?: string | string[];
	};

	export type GroupMomentCreatetagsInput = {
		set: string[];
	};

	export type GroupMomentUpdatetagsInput = {
		set?: string[];
		push?: string | string[];
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> =
		{
			equals?: string | StringFieldRefInput<$PrismaModel> | null;
			in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
			notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
			lt?: string | StringFieldRefInput<$PrismaModel>;
			lte?: string | StringFieldRefInput<$PrismaModel>;
			gt?: string | StringFieldRefInput<$PrismaModel>;
			gte?: string | StringFieldRefInput<$PrismaModel>;
			contains?: string | StringFieldRefInput<$PrismaModel>;
			startsWith?: string | StringFieldRefInput<$PrismaModel>;
			endsWith?: string | StringFieldRefInput<$PrismaModel>;
			not?:
				| NestedStringNullableWithAggregatesFilter<$PrismaModel>
				| string
				| null;
			_count?: NestedIntNullableFilter<$PrismaModel>;
			_min?: NestedStringNullableFilter<$PrismaModel>;
			_max?: NestedStringNullableFilter<$PrismaModel>;
		};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
