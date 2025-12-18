/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Movie
 *
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>;
/**
 * Model Review
 *
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>;
/**
 * Model Actor
 *
 */
export type Actor = $Result.DefaultSelection<Prisma.$ActorPayload>;
/**
 * Model Poster
 *
 */
export type Poster = $Result.DefaultSelection<Prisma.$PosterPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model UserQl
 *
 */
export type UserQl = $Result.DefaultSelection<Prisma.$UserQlPayload>;
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model Artist
 *
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Genre: {
    ACTION: 'ACTION';
    DRAMA: 'DRAMA';
    HORROR: 'HORROR';
    COMEDY: 'COMEDY';
  };

  export type Genre = (typeof Genre)[keyof typeof Genre];

  export const UserRoleQl: {
    GUEST: 'GUEST';
    ADMIN: 'ADMIN';
  };

  export type UserRoleQl = (typeof UserRoleQl)[keyof typeof UserRoleQl];

  export const ArtistGenre: {
    ROCK: 'ROCK';
    POP: 'POP';
  };

  export type ArtistGenre = (typeof ArtistGenre)[keyof typeof ArtistGenre];
}

export type Genre = $Enums.Genre;

export const Genre: typeof $Enums.Genre;

export type UserRoleQl = $Enums.UserRoleQl;

export const UserRoleQl: typeof $Enums.UserRoleQl;

export type ArtistGenre = $Enums.ArtistGenre;

export const ArtistGenre: typeof $Enums.ArtistGenre;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Movies
 * const movies = await prisma.movie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  $extends: $Extensions.ExtendsHook<
    'extends',
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
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;
  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
  /**
   * `prisma.actor`: Exposes CRUD operations for the **Actor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Actors
   * const actors = await prisma.actor.findMany()
   * ```
   */
  get actor(): Prisma.ActorDelegate<ExtArgs, ClientOptions>;
  /**
   * `prisma.poster`: Exposes CRUD operations for the **Poster** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posters
   * const posters = await prisma.poster.findMany()
   * ```
   */
  get poster(): Prisma.PosterDelegate<ExtArgs, ClientOptions>;
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
   * `prisma.userQl`: Exposes CRUD operations for the **UserQl** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserQls
   * const userQls = await prisma.userQl.findMany()
   * ```
   */
  get userQl(): Prisma.UserQlDelegate<ExtArgs, ClientOptions>;
  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Artists
   * const artists = await prisma.artist.findMany()
   * ```
   */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;
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
  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;
  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  export type DecimalJsLike = runtime.DecimalJsLike;


  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;


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
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
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
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

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
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
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
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
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
    Movie: 'Movie';
    Review: 'Review';
    Actor: 'Actor';
    Poster: 'Poster';
    User: 'User';
    UserQl: 'UserQl';
    Message: 'Message';
    Artist: 'Artist';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
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
        | 'movie'
        | 'review'
        | 'actor'
        | 'poster'
        | 'user'
        | 'userQl'
        | 'message'
        | 'artist';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>;
        fields: Prisma.MovieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[];
          };
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[];
          };
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[];
          };
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>;
        fields: Prisma.ReviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      Actor: {
        payload: Prisma.$ActorPayload<ExtArgs>;
        fields: Prisma.ActorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ActorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ActorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>;
          };
          findFirst: {
            args: Prisma.ActorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ActorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>;
          };
          findMany: {
            args: Prisma.ActorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[];
          };
          create: {
            args: Prisma.ActorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>;
          };
          createMany: {
            args: Prisma.ActorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ActorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[];
          };
          delete: {
            args: Prisma.ActorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>;
          };
          update: {
            args: Prisma.ActorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>;
          };
          deleteMany: {
            args: Prisma.ActorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ActorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ActorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[];
          };
          upsert: {
            args: Prisma.ActorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>;
          };
          aggregate: {
            args: Prisma.ActorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateActor>;
          };
          groupBy: {
            args: Prisma.ActorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ActorGroupByOutputType>[];
          };
          count: {
            args: Prisma.ActorCountArgs<ExtArgs>;
            result: $Utils.Optional<ActorCountAggregateOutputType> | number;
          };
        };
      };
      Poster: {
        payload: Prisma.$PosterPayload<ExtArgs>;
        fields: Prisma.PosterFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PosterFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PosterFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>;
          };
          findFirst: {
            args: Prisma.PosterFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PosterFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>;
          };
          findMany: {
            args: Prisma.PosterFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>[];
          };
          create: {
            args: Prisma.PosterCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>;
          };
          createMany: {
            args: Prisma.PosterCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PosterCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>[];
          };
          delete: {
            args: Prisma.PosterDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>;
          };
          update: {
            args: Prisma.PosterUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>;
          };
          deleteMany: {
            args: Prisma.PosterDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PosterUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PosterUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>[];
          };
          upsert: {
            args: Prisma.PosterUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PosterPayload>;
          };
          aggregate: {
            args: Prisma.PosterAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePoster>;
          };
          groupBy: {
            args: Prisma.PosterGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PosterGroupByOutputType>[];
          };
          count: {
            args: Prisma.PosterCountArgs<ExtArgs>;
            result: $Utils.Optional<PosterCountAggregateOutputType> | number;
          };
        };
      };
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
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      UserQl: {
        payload: Prisma.$UserQlPayload<ExtArgs>;
        fields: Prisma.UserQlFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserQlFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserQlFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>;
          };
          findFirst: {
            args: Prisma.UserQlFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserQlFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>;
          };
          findMany: {
            args: Prisma.UserQlFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>[];
          };
          create: {
            args: Prisma.UserQlCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>;
          };
          createMany: {
            args: Prisma.UserQlCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserQlCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>[];
          };
          delete: {
            args: Prisma.UserQlDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>;
          };
          update: {
            args: Prisma.UserQlUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>;
          };
          deleteMany: {
            args: Prisma.UserQlDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserQlUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserQlUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>[];
          };
          upsert: {
            args: Prisma.UserQlUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserQlPayload>;
          };
          aggregate: {
            args: Prisma.UserQlAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserQl>;
          };
          groupBy: {
            args: Prisma.UserQlGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserQlGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserQlCountArgs<ExtArgs>;
            result: $Utils.Optional<UserQlCountAggregateOutputType> | number;
          };
        };
      };
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>;
        fields: Prisma.MessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>;
        fields: Prisma.ArtistFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>;
          };
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>;
          };
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[];
          };
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>;
          };
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[];
          };
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>;
          };
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>;
          };
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[];
          };
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>;
          };
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateArtist>;
          };
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ArtistGroupByOutputType>[];
          };
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>;
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
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
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    movie?: MovieOmit;
    review?: ReviewOmit;
    actor?: ActorOmit;
    poster?: PosterOmit;
    user?: UserOmit;
    userQl?: UserQlOmit;
    message?: MessageOmit;
    artist?: ArtistOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

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
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
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
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    reviews: number;
    actors: number;
  };

  export type MovieCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    reviews?: boolean | MovieCountOutputTypeCountReviewsArgs;
    actors?: boolean | MovieCountOutputTypeCountActorsArgs;
  };

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountActorsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActorWhereInput;
  };

  /**
   * Count Type ActorCountOutputType
   */

  export type ActorCountOutputType = {
    movies: number;
  };

  export type ActorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movies?: boolean | ActorCountOutputTypeCountMoviesArgs;
  };

  // Custom InputTypes
  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     */
    select?: ActorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeCountMoviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    releaseYear: number | null;
    rating: number | null;
  };

  export type MovieSumAggregateOutputType = {
    releaseYear: number | null;
    rating: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    releaseYear: number | null;
    rating: number | null;
    isAvailable: boolean | null;
    genre: $Enums.Genre | null;
    posterId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    releaseYear: number | null;
    rating: number | null;
    isAvailable: boolean | null;
    genre: $Enums.Genre | null;
    posterId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    releaseYear: number;
    rating: number;
    isAvailable: number;
    genre: number;
    posterId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    releaseYear?: true;
    rating?: true;
  };

  export type MovieSumAggregateInputType = {
    releaseYear?: true;
    rating?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    releaseYear?: true;
    rating?: true;
    isAvailable?: true;
    genre?: true;
    posterId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    releaseYear?: true;
    rating?: true;
    isAvailable?: true;
    genre?: true;
    posterId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    releaseYear?: true;
    rating?: true;
    isAvailable?: true;
    genre?: true;
    posterId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type MovieGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MovieWhereInput;
    orderBy?:
      | MovieOrderByWithAggregationInput
      | MovieOrderByWithAggregationInput[];
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
    having?: MovieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCountAggregateInputType | true;
    _avg?: MovieAvgAggregateInputType;
    _sum?: MovieSumAggregateInputType;
    _min?: MovieMinAggregateInputType;
    _max?: MovieMaxAggregateInputType;
  };

  export type MovieGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    releaseYear: number;
    rating: number;
    isAvailable: boolean;
    genre: $Enums.Genre;
    posterId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MovieGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>;
        }
      >
    >;

  export type MovieSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      releaseYear?: boolean;
      rating?: boolean;
      isAvailable?: boolean;
      genre?: boolean;
      posterId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      poster?: boolean | Movie$posterArgs<ExtArgs>;
      reviews?: boolean | Movie$reviewsArgs<ExtArgs>;
      actors?: boolean | Movie$actorsArgs<ExtArgs>;
      _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type MovieSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      releaseYear?: boolean;
      rating?: boolean;
      isAvailable?: boolean;
      genre?: boolean;
      posterId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      poster?: boolean | Movie$posterArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type MovieSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      releaseYear?: boolean;
      rating?: boolean;
      isAvailable?: boolean;
      genre?: boolean;
      posterId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      poster?: boolean | Movie$posterArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type MovieSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    releaseYear?: boolean;
    rating?: boolean;
    isAvailable?: boolean;
    genre?: boolean;
    posterId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MovieOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'description'
    | 'releaseYear'
    | 'rating'
    | 'isAvailable'
    | 'genre'
    | 'posterId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['movie']
  >;
  export type MovieInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    poster?: boolean | Movie$posterArgs<ExtArgs>;
    reviews?: boolean | Movie$reviewsArgs<ExtArgs>;
    actors?: boolean | Movie$actorsArgs<ExtArgs>;
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MovieIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    poster?: boolean | Movie$posterArgs<ExtArgs>;
  };
  export type MovieIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    poster?: boolean | Movie$posterArgs<ExtArgs>;
  };

  export type $MoviePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Movie';
    objects: {
      poster: Prisma.$PosterPayload<ExtArgs> | null;
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
      actors: Prisma.$ActorPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        releaseYear: number;
        rating: number;
        isAvailable: boolean;
        genre: $Enums.Genre;
        posterId: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type MovieGetPayload<
    S extends boolean | null | undefined | MovieDefaultArgs,
  > = $Result.GetResult<Prisma.$MoviePayload, S>;

  type MovieCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface MovieDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the Movie model
     */
    readonly fields: MovieFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Movie'];
      meta: { name: 'Movie' };
    };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     */
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     */
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;
    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMovieGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    poster<T extends Movie$posterArgs<ExtArgs> = {}>(
      args?: Subset<T, Movie$posterArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    reviews<T extends Movie$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, Movie$reviewsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReviewPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    actors<T extends Movie$actorsArgs<ExtArgs> = {}>(
      args?: Subset<T, Movie$actorsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ActorPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<'Movie', 'String'>;
    readonly title: FieldRef<'Movie', 'String'>;
    readonly description: FieldRef<'Movie', 'String'>;
    readonly releaseYear: FieldRef<'Movie', 'Int'>;
    readonly rating: FieldRef<'Movie', 'Float'>;
    readonly isAvailable: FieldRef<'Movie', 'Boolean'>;
    readonly genre: FieldRef<'Movie', 'Genre'>;
    readonly posterId: FieldRef<'Movie', 'String'>;
    readonly createdAt: FieldRef<'Movie', 'DateTime'>;
    readonly updatedAt: FieldRef<'Movie', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie create
   */
  export type MovieCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>;
  };

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Movie update
   */
  export type MovieUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>;
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>;
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput;
    /**
     * Limit how many Movies to update.
     */
    limit?: number;
  };

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>;
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput;
    /**
     * Limit how many Movies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput;
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>;
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>;
  };

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput;
    /**
     * Limit how many Movies to delete.
     */
    limit?: number;
  };

  /**
   * Movie.poster
   */
  export type Movie$posterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    where?: PosterWhereInput;
  };

  /**
   * Movie.reviews
   */
  export type Movie$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Movie.actors
   */
  export type Movie$actorsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    where?: ActorWhereInput;
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[];
    cursor?: ActorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[];
  };

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
  };

  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    text: string | null;
    rating: number | null;
    movieId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    text: string | null;
    rating: number | null;
    movieId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    text: number;
    rating: number;
    movieId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    text?: true;
    rating?: true;
    movieId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    text?: true;
    rating?: true;
    movieId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    text?: true;
    rating?: true;
    movieId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type ReviewGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewWhereInput;
    orderBy?:
      | ReviewOrderByWithAggregationInput
      | ReviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: ReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    text: string;
    rating: number;
    movieId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReviewGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
        }
      >
    >;

  export type ReviewSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      rating?: boolean;
      movieId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type ReviewSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      rating?: boolean;
      movieId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type ReviewSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      rating?: boolean;
      movieId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movie?: boolean | MovieDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type ReviewSelectScalar = {
    id?: boolean;
    text?: boolean;
    rating?: boolean;
    movieId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ReviewOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'text' | 'rating' | 'movieId' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['review']
  >;
  export type ReviewInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
  };
  export type ReviewIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
  };
  export type ReviewIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>;
  };

  export type $ReviewPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Review';
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        text: string;
        rating: number;
        movieId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type ReviewGetPayload<
    S extends boolean | null | undefined | ReviewDefaultArgs,
  > = $Result.GetResult<Prisma.$ReviewPayload, S>;

  type ReviewCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface ReviewDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the Review model
     */
    readonly fields: ReviewFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Review'];
      meta: { name: 'Review' };
    };
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     */
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     */
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>,
    ): Prisma__ReviewClient<
      $Result.GetResult<
        Prisma.$ReviewPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;
    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetReviewGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MovieDefaultArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      | $Result.GetResult<
          Prisma.$MoviePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<'Review', 'String'>;
    readonly text: FieldRef<'Review', 'String'>;
    readonly rating: FieldRef<'Review', 'Float'>;
    readonly movieId: FieldRef<'Review', 'String'>;
    readonly createdAt: FieldRef<'Review', 'DateTime'>;
    readonly updatedAt: FieldRef<'Review', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review create
   */
  export type ReviewCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
  };

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Review update
   */
  export type ReviewUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput;
    /**
     * Limit how many Reviews to update.
     */
    limit?: number;
  };

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput;
    /**
     * Limit how many Reviews to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput;
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
  };

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput;
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number;
  };

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
  };

  /**
   * Model Actor
   */

  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null;
    _min: ActorMinAggregateOutputType | null;
    _max: ActorMaxAggregateOutputType | null;
  };

  export type ActorMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ActorMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ActorCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ActorMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ActorMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ActorCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ActorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Actor to aggregate.
     */
    where?: ActorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ActorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Actors
     **/
    _count?: true | ActorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ActorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ActorMaxAggregateInputType;
  };

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
    [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>;
  };

  export type ActorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActorWhereInput;
    orderBy?:
      | ActorOrderByWithAggregationInput
      | ActorOrderByWithAggregationInput[];
    by: ActorScalarFieldEnum[] | ActorScalarFieldEnum;
    having?: ActorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActorCountAggregateInputType | true;
    _min?: ActorMinAggregateInputType;
    _max?: ActorMaxAggregateInputType;
  };

  export type ActorGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ActorCountAggregateOutputType | null;
    _min: ActorMinAggregateOutputType | null;
    _max: ActorMaxAggregateOutputType | null;
  };

  type GetActorGroupByPayload<T extends ActorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ActorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ActorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>;
        }
      >
    >;

  export type ActorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movies?: boolean | Actor$moviesArgs<ExtArgs>;
      _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['actor']
  >;

  export type ActorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['actor']
  >;

  export type ActorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['actor']
  >;

  export type ActorSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ActorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['actor']
  >;
  export type ActorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movies?: boolean | Actor$moviesArgs<ExtArgs>;
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ActorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ActorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ActorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Actor';
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['actor']
    >;
    composites: {};
  };

  type ActorGetPayload<
    S extends boolean | null | undefined | ActorDefaultArgs,
  > = $Result.GetResult<Prisma.$ActorPayload, S>;

  type ActorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ActorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActorCountAggregateInputType | true;
  };

  export interface ActorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the Actor model
     */
    readonly fields: ActorFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Actor'];
      meta: { name: 'Actor' };
    };
    /**
     * Find zero or one Actor that matches the filter.
     * @param {ActorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActorFindUniqueArgs>(
      args: SelectSubset<T, ActorFindUniqueArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one Actor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ActorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActorFindFirstArgs>(
      args?: SelectSubset<T, ActorFindFirstArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     *
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const actorWithIdOnly = await prisma.actor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ActorFindManyArgs>(
      args?: SelectSubset<T, ActorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a Actor.
     * @param {ActorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     *
     */
    create<T extends ActorCreateArgs>(
      args: SelectSubset<T, ActorCreateArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many Actors.
     * @param {ActorCreateManyArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActorCreateManyArgs>(
      args?: SelectSubset<T, ActorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many Actors and returns the data saved in the database.
     * @param {ActorCreateManyAndReturnArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Actors and only return the `id`
     * const actorWithIdOnly = await prisma.actor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ActorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a Actor.
     * @param {ActorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     *
     */
    delete<T extends ActorDeleteArgs>(
      args: SelectSubset<T, ActorDeleteArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one Actor.
     * @param {ActorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActorUpdateArgs>(
      args: SelectSubset<T, ActorUpdateArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more Actors.
     * @param {ActorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActorDeleteManyArgs>(
      args?: SelectSubset<T, ActorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActorUpdateManyArgs>(
      args: SelectSubset<T, ActorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Actors and returns the data updated in the database.
     * @param {ActorUpdateManyAndReturnArgs} args - Arguments to update many Actors.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Actors and only return the `id`
     * const actorWithIdOnly = await prisma.actor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ActorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one Actor.
     * @param {ActorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
     */
    upsert<T extends ActorUpsertArgs>(
      args: SelectSubset<T, ActorUpsertArgs<ExtArgs>>,
    ): Prisma__ActorClient<
      $Result.GetResult<
        Prisma.$ActorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
     **/
    count<T extends ActorCountArgs>(
      args?: Subset<T, ActorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActorAggregateArgs>(
      args: Subset<T, ActorAggregateArgs>,
    ): Prisma.PrismaPromise<GetActorAggregateType<T>>;
    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorGroupByArgs} args - Group by arguments.
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
      T extends ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorGroupByArgs['orderBy'] }
        : { orderBy?: ActorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, ActorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetActorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movies<T extends Actor$moviesArgs<ExtArgs> = {}>(
      args?: Subset<T, Actor$moviesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MoviePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Actor model
   */
  interface ActorFieldRefs {
    readonly id: FieldRef<'Actor', 'String'>;
    readonly name: FieldRef<'Actor', 'String'>;
    readonly createdAt: FieldRef<'Actor', 'DateTime'>;
    readonly updatedAt: FieldRef<'Actor', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Actor findUnique
   */
  export type ActorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput;
  };

  /**
   * Actor findUniqueOrThrow
   */
  export type ActorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput;
  };

  /**
   * Actor findFirst
   */
  export type ActorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[];
  };

  /**
   * Actor findFirstOrThrow
   */
  export type ActorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[];
  };

  /**
   * Actor findMany
   */
  export type ActorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Actors.
     */
    cursor?: ActorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Actors.
     */
    skip?: number;
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[];
  };

  /**
   * Actor create
   */
  export type ActorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Actor.
     */
    data: XOR<ActorCreateInput, ActorUncheckedCreateInput>;
  };

  /**
   * Actor createMany
   */
  export type ActorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Actor createManyAndReturn
   */
  export type ActorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Actor update
   */
  export type ActorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Actor.
     */
    data: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>;
    /**
     * Choose, which Actor to update.
     */
    where: ActorWhereUniqueInput;
  };

  /**
   * Actor updateMany
   */
  export type ActorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>;
    /**
     * Filter which Actors to update
     */
    where?: ActorWhereInput;
    /**
     * Limit how many Actors to update.
     */
    limit?: number;
  };

  /**
   * Actor updateManyAndReturn
   */
  export type ActorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>;
    /**
     * Filter which Actors to update
     */
    where?: ActorWhereInput;
    /**
     * Limit how many Actors to update.
     */
    limit?: number;
  };

  /**
   * Actor upsert
   */
  export type ActorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Actor to update in case it exists.
     */
    where: ActorWhereUniqueInput;
    /**
     * In case the Actor found by the `where` argument doesn't exist, create a new Actor with this data.
     */
    create: XOR<ActorCreateInput, ActorUncheckedCreateInput>;
    /**
     * In case the Actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>;
  };

  /**
   * Actor delete
   */
  export type ActorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
    /**
     * Filter which Actor to delete.
     */
    where: ActorWhereUniqueInput;
  };

  /**
   * Actor deleteMany
   */
  export type ActorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Actors to delete
     */
    where?: ActorWhereInput;
    /**
     * Limit how many Actors to delete.
     */
    limit?: number;
  };

  /**
   * Actor.movies
   */
  export type Actor$moviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    where?: MovieWhereInput;
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    cursor?: MovieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Actor without action
   */
  export type ActorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null;
  };

  /**
   * Model Poster
   */

  export type AggregatePoster = {
    _count: PosterCountAggregateOutputType | null;
    _min: PosterMinAggregateOutputType | null;
    _max: PosterMaxAggregateOutputType | null;
  };

  export type PosterMinAggregateOutputType = {
    id: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PosterMaxAggregateOutputType = {
    id: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PosterCountAggregateOutputType = {
    id: number;
    imageUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PosterMinAggregateInputType = {
    id?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PosterMaxAggregateInputType = {
    id?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PosterCountAggregateInputType = {
    id?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PosterAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Poster to aggregate.
     */
    where?: PosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posters
     **/
    _count?: true | PosterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PosterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PosterMaxAggregateInputType;
  };

  export type GetPosterAggregateType<T extends PosterAggregateArgs> = {
    [P in keyof T & keyof AggregatePoster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoster[P]>
      : GetScalarType<T[P], AggregatePoster[P]>;
  };

  export type PosterGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PosterWhereInput;
    orderBy?:
      | PosterOrderByWithAggregationInput
      | PosterOrderByWithAggregationInput[];
    by: PosterScalarFieldEnum[] | PosterScalarFieldEnum;
    having?: PosterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PosterCountAggregateInputType | true;
    _min?: PosterMinAggregateInputType;
    _max?: PosterMaxAggregateInputType;
  };

  export type PosterGroupByOutputType = {
    id: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PosterCountAggregateOutputType | null;
    _min: PosterMinAggregateOutputType | null;
    _max: PosterMaxAggregateOutputType | null;
  };

  type GetPosterGroupByPayload<T extends PosterGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PosterGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PosterGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosterGroupByOutputType[P]>
            : GetScalarType<T[P], PosterGroupByOutputType[P]>;
        }
      >
    >;

  export type PosterSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imageUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      movie?: boolean | Poster$movieArgs<ExtArgs>;
    },
    ExtArgs['result']['poster']
  >;

  export type PosterSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imageUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['poster']
  >;

  export type PosterSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imageUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['poster']
  >;

  export type PosterSelectScalar = {
    id?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PosterOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'imageUrl' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['poster']
  >;
  export type PosterInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movie?: boolean | Poster$movieArgs<ExtArgs>;
  };
  export type PosterIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type PosterIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $PosterPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Poster';
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['poster']
    >;
    composites: {};
  };

  type PosterGetPayload<
    S extends boolean | null | undefined | PosterDefaultArgs,
  > = $Result.GetResult<Prisma.$PosterPayload, S>;

  type PosterCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PosterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PosterCountAggregateInputType | true;
  };

  export interface PosterDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the Poster model
     */
    readonly fields: PosterFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Poster'];
      meta: { name: 'Poster' };
    };
    /**
     * Find zero or one Poster that matches the filter.
     * @param {PosterFindUniqueArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosterFindUniqueArgs>(
      args: SelectSubset<T, PosterFindUniqueArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one Poster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosterFindUniqueOrThrowArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosterFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PosterFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Poster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindFirstArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosterFindFirstArgs>(
      args?: SelectSubset<T, PosterFindFirstArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Poster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindFirstOrThrowArgs} args - Arguments to find a Poster
     * @example
     * // Get one Poster
     * const poster = await prisma.poster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PosterFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more Posters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posters
     * const posters = await prisma.poster.findMany()
     *
     * // Get first 10 Posters
     * const posters = await prisma.poster.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const posterWithIdOnly = await prisma.poster.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PosterFindManyArgs>(
      args?: SelectSubset<T, PosterFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a Poster.
     * @param {PosterCreateArgs} args - Arguments to create a Poster.
     * @example
     * // Create one Poster
     * const Poster = await prisma.poster.create({
     *   data: {
     *     // ... data to create a Poster
     *   }
     * })
     *
     */
    create<T extends PosterCreateArgs>(
      args: SelectSubset<T, PosterCreateArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many Posters.
     * @param {PosterCreateManyArgs} args - Arguments to create many Posters.
     * @example
     * // Create many Posters
     * const poster = await prisma.poster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PosterCreateManyArgs>(
      args?: SelectSubset<T, PosterCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many Posters and returns the data saved in the database.
     * @param {PosterCreateManyAndReturnArgs} args - Arguments to create many Posters.
     * @example
     * // Create many Posters
     * const poster = await prisma.poster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posters and only return the `id`
     * const posterWithIdOnly = await prisma.poster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PosterCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PosterCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a Poster.
     * @param {PosterDeleteArgs} args - Arguments to delete one Poster.
     * @example
     * // Delete one Poster
     * const Poster = await prisma.poster.delete({
     *   where: {
     *     // ... filter to delete one Poster
     *   }
     * })
     *
     */
    delete<T extends PosterDeleteArgs>(
      args: SelectSubset<T, PosterDeleteArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one Poster.
     * @param {PosterUpdateArgs} args - Arguments to update one Poster.
     * @example
     * // Update one Poster
     * const poster = await prisma.poster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PosterUpdateArgs>(
      args: SelectSubset<T, PosterUpdateArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more Posters.
     * @param {PosterDeleteManyArgs} args - Arguments to filter Posters to delete.
     * @example
     * // Delete a few Posters
     * const { count } = await prisma.poster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PosterDeleteManyArgs>(
      args?: SelectSubset<T, PosterDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Posters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posters
     * const poster = await prisma.poster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PosterUpdateManyArgs>(
      args: SelectSubset<T, PosterUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Posters and returns the data updated in the database.
     * @param {PosterUpdateManyAndReturnArgs} args - Arguments to update many Posters.
     * @example
     * // Update many Posters
     * const poster = await prisma.poster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posters and only return the `id`
     * const posterWithIdOnly = await prisma.poster.updateManyAndReturn({
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
    updateManyAndReturn<T extends PosterUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PosterUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one Poster.
     * @param {PosterUpsertArgs} args - Arguments to update or create a Poster.
     * @example
     * // Update or create a Poster
     * const poster = await prisma.poster.upsert({
     *   create: {
     *     // ... data to create a Poster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poster we want to update
     *   }
     * })
     */
    upsert<T extends PosterUpsertArgs>(
      args: SelectSubset<T, PosterUpsertArgs<ExtArgs>>,
    ): Prisma__PosterClient<
      $Result.GetResult<
        Prisma.$PosterPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of Posters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterCountArgs} args - Arguments to filter Posters to count.
     * @example
     * // Count the number of Posters
     * const count = await prisma.poster.count({
     *   where: {
     *     // ... the filter for the Posters we want to count
     *   }
     * })
     **/
    count<T extends PosterCountArgs>(
      args?: Subset<T, PosterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosterCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a Poster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosterAggregateArgs>(
      args: Subset<T, PosterAggregateArgs>,
    ): Prisma.PrismaPromise<GetPosterAggregateType<T>>;
    /**
     * Group by Poster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosterGroupByArgs} args - Group by arguments.
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
      T extends PosterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosterGroupByArgs['orderBy'] }
        : { orderBy?: PosterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, PosterGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPosterGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosterClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    movie<T extends Poster$movieArgs<ExtArgs> = {}>(
      args?: Subset<T, Poster$movieArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<
        Prisma.$MoviePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Poster model
   */
  interface PosterFieldRefs {
    readonly id: FieldRef<'Poster', 'String'>;
    readonly imageUrl: FieldRef<'Poster', 'String'>;
    readonly createdAt: FieldRef<'Poster', 'DateTime'>;
    readonly updatedAt: FieldRef<'Poster', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Poster findUnique
   */
  export type PosterFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * Filter, which Poster to fetch.
     */
    where: PosterWhereUniqueInput;
  };

  /**
   * Poster findUniqueOrThrow
   */
  export type PosterFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * Filter, which Poster to fetch.
     */
    where: PosterWhereUniqueInput;
  };

  /**
   * Poster findFirst
   */
  export type PosterFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * Filter, which Poster to fetch.
     */
    where?: PosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posters.
     */
    cursor?: PosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posters.
     */
    distinct?: PosterScalarFieldEnum | PosterScalarFieldEnum[];
  };

  /**
   * Poster findFirstOrThrow
   */
  export type PosterFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * Filter, which Poster to fetch.
     */
    where?: PosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posters.
     */
    cursor?: PosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posters.
     */
    distinct?: PosterScalarFieldEnum | PosterScalarFieldEnum[];
  };

  /**
   * Poster findMany
   */
  export type PosterFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * Filter, which Posters to fetch.
     */
    where?: PosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posters to fetch.
     */
    orderBy?: PosterOrderByWithRelationInput | PosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posters.
     */
    cursor?: PosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posters.
     */
    skip?: number;
    distinct?: PosterScalarFieldEnum | PosterScalarFieldEnum[];
  };

  /**
   * Poster create
   */
  export type PosterCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * The data needed to create a Poster.
     */
    data: XOR<PosterCreateInput, PosterUncheckedCreateInput>;
  };

  /**
   * Poster createMany
   */
  export type PosterCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Posters.
     */
    data: PosterCreateManyInput | PosterCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Poster createManyAndReturn
   */
  export type PosterCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * The data used to create many Posters.
     */
    data: PosterCreateManyInput | PosterCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Poster update
   */
  export type PosterUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * The data needed to update a Poster.
     */
    data: XOR<PosterUpdateInput, PosterUncheckedUpdateInput>;
    /**
     * Choose, which Poster to update.
     */
    where: PosterWhereUniqueInput;
  };

  /**
   * Poster updateMany
   */
  export type PosterUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Posters.
     */
    data: XOR<PosterUpdateManyMutationInput, PosterUncheckedUpdateManyInput>;
    /**
     * Filter which Posters to update
     */
    where?: PosterWhereInput;
    /**
     * Limit how many Posters to update.
     */
    limit?: number;
  };

  /**
   * Poster updateManyAndReturn
   */
  export type PosterUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * The data used to update Posters.
     */
    data: XOR<PosterUpdateManyMutationInput, PosterUncheckedUpdateManyInput>;
    /**
     * Filter which Posters to update
     */
    where?: PosterWhereInput;
    /**
     * Limit how many Posters to update.
     */
    limit?: number;
  };

  /**
   * Poster upsert
   */
  export type PosterUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * The filter to search for the Poster to update in case it exists.
     */
    where: PosterWhereUniqueInput;
    /**
     * In case the Poster found by the `where` argument doesn't exist, create a new Poster with this data.
     */
    create: XOR<PosterCreateInput, PosterUncheckedCreateInput>;
    /**
     * In case the Poster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosterUpdateInput, PosterUncheckedUpdateInput>;
  };

  /**
   * Poster delete
   */
  export type PosterDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
    /**
     * Filter which Poster to delete.
     */
    where: PosterWhereUniqueInput;
  };

  /**
   * Poster deleteMany
   */
  export type PosterDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Posters to delete
     */
    where?: PosterWhereInput;
    /**
     * Limit how many Posters to delete.
     */
    limit?: number;
  };

  /**
   * Poster.movie
   */
  export type Poster$movieArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null;
    where?: MovieWhereInput;
  };

  /**
   * Poster without action
   */
  export type PosterDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Poster
     */
    select?: PosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Poster
     */
    omit?: PosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosterInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
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
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
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
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
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
      email?: boolean;
      password?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'password' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >;

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
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
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
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
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
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
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
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
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
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
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
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
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
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
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
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
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
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
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
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
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
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
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
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
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
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
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
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
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
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
      args: Subset<T, UserAggregateArgs>,
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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
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
   * Model UserQl
   */

  export type AggregateUserQl = {
    _count: UserQlCountAggregateOutputType | null;
    _min: UserQlMinAggregateOutputType | null;
    _max: UserQlMaxAggregateOutputType | null;
  };

  export type UserQlMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    role: $Enums.UserRoleQl | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserQlMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    role: $Enums.UserRoleQl | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserQlCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserQlMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserQlMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserQlCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserQlAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserQl to aggregate.
     */
    where?: UserQlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQls to fetch.
     */
    orderBy?: UserQlOrderByWithRelationInput | UserQlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserQlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserQls
     **/
    _count?: true | UserQlCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserQlMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserQlMaxAggregateInputType;
  };

  export type GetUserQlAggregateType<T extends UserQlAggregateArgs> = {
    [P in keyof T & keyof AggregateUserQl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQl[P]>
      : GetScalarType<T[P], AggregateUserQl[P]>;
  };

  export type UserQlGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserQlWhereInput;
    orderBy?:
      | UserQlOrderByWithAggregationInput
      | UserQlOrderByWithAggregationInput[];
    by: UserQlScalarFieldEnum[] | UserQlScalarFieldEnum;
    having?: UserQlScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserQlCountAggregateInputType | true;
    _min?: UserQlMinAggregateInputType;
    _max?: UserQlMaxAggregateInputType;
  };

  export type UserQlGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    name: string;
    role: $Enums.UserRoleQl;
    createdAt: Date;
    updatedAt: Date;
    _count: UserQlCountAggregateOutputType | null;
    _min: UserQlMinAggregateOutputType | null;
    _max: UserQlMaxAggregateOutputType | null;
  };

  type GetUserQlGroupByPayload<T extends UserQlGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserQlGroupByOutputType, T['by']> & {
          [P in keyof T & keyof UserQlGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQlGroupByOutputType[P]>
            : GetScalarType<T[P], UserQlGroupByOutputType[P]>;
        }
      >
    >;

  export type UserQlSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['userQl']
  >;

  export type UserQlSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['userQl']
  >;

  export type UserQlSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['userQl']
  >;

  export type UserQlSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserQlOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'password' | 'name' | 'role' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['userQl']
  >;

  export type $UserQlPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserQl';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        name: string;
        role: $Enums.UserRoleQl;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['userQl']
    >;
    composites: {};
  };

  type UserQlGetPayload<
    S extends boolean | null | undefined | UserQlDefaultArgs,
  > = $Result.GetResult<Prisma.$UserQlPayload, S>;

  type UserQlCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserQlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserQlCountAggregateInputType | true;
  };

  export interface UserQlDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the UserQl model
     */
    readonly fields: UserQlFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserQl'];
      meta: { name: 'UserQl' };
    };
    /**
     * Find zero or one UserQl that matches the filter.
     * @param {UserQlFindUniqueArgs} args - Arguments to find a UserQl
     * @example
     * // Get one UserQl
     * const userQl = await prisma.userQl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQlFindUniqueArgs>(
      args: SelectSubset<T, UserQlFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one UserQl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQlFindUniqueOrThrowArgs} args - Arguments to find a UserQl
     * @example
     * // Get one UserQl
     * const userQl = await prisma.userQl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQlFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserQlFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first UserQl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlFindFirstArgs} args - Arguments to find a UserQl
     * @example
     * // Get one UserQl
     * const userQl = await prisma.userQl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQlFindFirstArgs>(
      args?: SelectSubset<T, UserQlFindFirstArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first UserQl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlFindFirstOrThrowArgs} args - Arguments to find a UserQl
     * @example
     * // Get one UserQl
     * const userQl = await prisma.userQl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQlFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserQlFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more UserQls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQls
     * const userQls = await prisma.userQl.findMany()
     *
     * // Get first 10 UserQls
     * const userQls = await prisma.userQl.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userQlWithIdOnly = await prisma.userQl.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserQlFindManyArgs>(
      args?: SelectSubset<T, UserQlFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a UserQl.
     * @param {UserQlCreateArgs} args - Arguments to create a UserQl.
     * @example
     * // Create one UserQl
     * const UserQl = await prisma.userQl.create({
     *   data: {
     *     // ... data to create a UserQl
     *   }
     * })
     *
     */
    create<T extends UserQlCreateArgs>(
      args: SelectSubset<T, UserQlCreateArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many UserQls.
     * @param {UserQlCreateManyArgs} args - Arguments to create many UserQls.
     * @example
     * // Create many UserQls
     * const userQl = await prisma.userQl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserQlCreateManyArgs>(
      args?: SelectSubset<T, UserQlCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many UserQls and returns the data saved in the database.
     * @param {UserQlCreateManyAndReturnArgs} args - Arguments to create many UserQls.
     * @example
     * // Create many UserQls
     * const userQl = await prisma.userQl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserQls and only return the `id`
     * const userQlWithIdOnly = await prisma.userQl.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserQlCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserQlCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a UserQl.
     * @param {UserQlDeleteArgs} args - Arguments to delete one UserQl.
     * @example
     * // Delete one UserQl
     * const UserQl = await prisma.userQl.delete({
     *   where: {
     *     // ... filter to delete one UserQl
     *   }
     * })
     *
     */
    delete<T extends UserQlDeleteArgs>(
      args: SelectSubset<T, UserQlDeleteArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one UserQl.
     * @param {UserQlUpdateArgs} args - Arguments to update one UserQl.
     * @example
     * // Update one UserQl
     * const userQl = await prisma.userQl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserQlUpdateArgs>(
      args: SelectSubset<T, UserQlUpdateArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more UserQls.
     * @param {UserQlDeleteManyArgs} args - Arguments to filter UserQls to delete.
     * @example
     * // Delete a few UserQls
     * const { count } = await prisma.userQl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserQlDeleteManyArgs>(
      args?: SelectSubset<T, UserQlDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more UserQls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQls
     * const userQl = await prisma.userQl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserQlUpdateManyArgs>(
      args: SelectSubset<T, UserQlUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more UserQls and returns the data updated in the database.
     * @param {UserQlUpdateManyAndReturnArgs} args - Arguments to update many UserQls.
     * @example
     * // Update many UserQls
     * const userQl = await prisma.userQl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserQls and only return the `id`
     * const userQlWithIdOnly = await prisma.userQl.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserQlUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserQlUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one UserQl.
     * @param {UserQlUpsertArgs} args - Arguments to update or create a UserQl.
     * @example
     * // Update or create a UserQl
     * const userQl = await prisma.userQl.upsert({
     *   create: {
     *     // ... data to create a UserQl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQl we want to update
     *   }
     * })
     */
    upsert<T extends UserQlUpsertArgs>(
      args: SelectSubset<T, UserQlUpsertArgs<ExtArgs>>,
    ): Prisma__UserQlClient<
      $Result.GetResult<
        Prisma.$UserQlPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of UserQls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlCountArgs} args - Arguments to filter UserQls to count.
     * @example
     * // Count the number of UserQls
     * const count = await prisma.userQl.count({
     *   where: {
     *     // ... the filter for the UserQls we want to count
     *   }
     * })
     **/
    count<T extends UserQlCountArgs>(
      args?: Subset<T, UserQlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQlCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a UserQl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQlAggregateArgs>(
      args: Subset<T, UserQlAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserQlAggregateType<T>>;
    /**
     * Group by UserQl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQlGroupByArgs} args - Group by arguments.
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
      T extends UserQlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQlGroupByArgs['orderBy'] }
        : { orderBy?: UserQlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, UserQlGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserQlGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQlClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserQl model
   */
  interface UserQlFieldRefs {
    readonly id: FieldRef<'UserQl', 'String'>;
    readonly email: FieldRef<'UserQl', 'String'>;
    readonly password: FieldRef<'UserQl', 'String'>;
    readonly name: FieldRef<'UserQl', 'String'>;
    readonly role: FieldRef<'UserQl', 'UserRoleQl'>;
    readonly createdAt: FieldRef<'UserQl', 'DateTime'>;
    readonly updatedAt: FieldRef<'UserQl', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * UserQl findUnique
   */
  export type UserQlFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * Filter, which UserQl to fetch.
     */
    where: UserQlWhereUniqueInput;
  };

  /**
   * UserQl findUniqueOrThrow
   */
  export type UserQlFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * Filter, which UserQl to fetch.
     */
    where: UserQlWhereUniqueInput;
  };

  /**
   * UserQl findFirst
   */
  export type UserQlFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * Filter, which UserQl to fetch.
     */
    where?: UserQlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQls to fetch.
     */
    orderBy?: UserQlOrderByWithRelationInput | UserQlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserQls.
     */
    cursor?: UserQlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserQls.
     */
    distinct?: UserQlScalarFieldEnum | UserQlScalarFieldEnum[];
  };

  /**
   * UserQl findFirstOrThrow
   */
  export type UserQlFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * Filter, which UserQl to fetch.
     */
    where?: UserQlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQls to fetch.
     */
    orderBy?: UserQlOrderByWithRelationInput | UserQlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserQls.
     */
    cursor?: UserQlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserQls.
     */
    distinct?: UserQlScalarFieldEnum | UserQlScalarFieldEnum[];
  };

  /**
   * UserQl findMany
   */
  export type UserQlFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * Filter, which UserQls to fetch.
     */
    where?: UserQlWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQls to fetch.
     */
    orderBy?: UserQlOrderByWithRelationInput | UserQlOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserQls.
     */
    cursor?: UserQlWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQls.
     */
    skip?: number;
    distinct?: UserQlScalarFieldEnum | UserQlScalarFieldEnum[];
  };

  /**
   * UserQl create
   */
  export type UserQlCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * The data needed to create a UserQl.
     */
    data: XOR<UserQlCreateInput, UserQlUncheckedCreateInput>;
  };

  /**
   * UserQl createMany
   */
  export type UserQlCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserQls.
     */
    data: UserQlCreateManyInput | UserQlCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserQl createManyAndReturn
   */
  export type UserQlCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * The data used to create many UserQls.
     */
    data: UserQlCreateManyInput | UserQlCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserQl update
   */
  export type UserQlUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * The data needed to update a UserQl.
     */
    data: XOR<UserQlUpdateInput, UserQlUncheckedUpdateInput>;
    /**
     * Choose, which UserQl to update.
     */
    where: UserQlWhereUniqueInput;
  };

  /**
   * UserQl updateMany
   */
  export type UserQlUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserQls.
     */
    data: XOR<UserQlUpdateManyMutationInput, UserQlUncheckedUpdateManyInput>;
    /**
     * Filter which UserQls to update
     */
    where?: UserQlWhereInput;
    /**
     * Limit how many UserQls to update.
     */
    limit?: number;
  };

  /**
   * UserQl updateManyAndReturn
   */
  export type UserQlUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * The data used to update UserQls.
     */
    data: XOR<UserQlUpdateManyMutationInput, UserQlUncheckedUpdateManyInput>;
    /**
     * Filter which UserQls to update
     */
    where?: UserQlWhereInput;
    /**
     * Limit how many UserQls to update.
     */
    limit?: number;
  };

  /**
   * UserQl upsert
   */
  export type UserQlUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * The filter to search for the UserQl to update in case it exists.
     */
    where: UserQlWhereUniqueInput;
    /**
     * In case the UserQl found by the `where` argument doesn't exist, create a new UserQl with this data.
     */
    create: XOR<UserQlCreateInput, UserQlUncheckedCreateInput>;
    /**
     * In case the UserQl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQlUpdateInput, UserQlUncheckedUpdateInput>;
  };

  /**
   * UserQl delete
   */
  export type UserQlDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
    /**
     * Filter which UserQl to delete.
     */
    where: UserQlWhereUniqueInput;
  };

  /**
   * UserQl deleteMany
   */
  export type UserQlDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserQls to delete
     */
    where?: UserQlWhereInput;
    /**
     * Limit how many UserQls to delete.
     */
    limit?: number;
  };

  /**
   * UserQl without action
   */
  export type UserQlDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQl
     */
    select?: UserQlSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserQl
     */
    omit?: UserQlOmit<ExtArgs> | null;
  };

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageMinAggregateOutputType = {
    id: string | null;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: string | null;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    text: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithAggregationInput
      | MessageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MessageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>;
        }
      >
    >;

  export type MessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectScalar = {
    id?: boolean;
    text?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MessageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'text' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['message']
  >;

  export type $MessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Message';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        text: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['message']
    >;
    composites: {};
  };

  type MessageGetPayload<
    S extends boolean | null | undefined | MessageDefaultArgs,
  > = $Result.GetResult<Prisma.$MessagePayload, S>;

  type MessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Message'];
      meta: { name: 'Message' };
    };
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     */
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     */
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;
    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'String'>;
    readonly text: FieldRef<'Message', 'String'>;
    readonly createdAt: FieldRef<'Message', 'DateTime'>;
    readonly updatedAt: FieldRef<'Message', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
  };

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
  };

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
  };

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput;
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
  };

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to delete.
     */
    limit?: number;
  };

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
  };

  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null;
    _min: ArtistMinAggregateOutputType | null;
    _max: ArtistMaxAggregateOutputType | null;
  };

  export type ArtistMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    genre: $Enums.ArtistGenre | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ArtistMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    genre: $Enums.ArtistGenre | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ArtistCountAggregateOutputType = {
    id: number;
    name: number;
    genre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ArtistMinAggregateInputType = {
    id?: true;
    name?: true;
    genre?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ArtistMaxAggregateInputType = {
    id?: true;
    name?: true;
    genre?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ArtistCountAggregateInputType = {
    id?: true;
    name?: true;
    genre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ArtistAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Artists
     **/
    _count?: true | ArtistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ArtistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ArtistMaxAggregateInputType;
  };

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
    [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>;
  };

  export type ArtistGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ArtistWhereInput;
    orderBy?:
      | ArtistOrderByWithAggregationInput
      | ArtistOrderByWithAggregationInput[];
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum;
    having?: ArtistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArtistCountAggregateInputType | true;
    _min?: ArtistMinAggregateInputType;
    _max?: ArtistMaxAggregateInputType;
  };

  export type ArtistGroupByOutputType = {
    id: string;
    name: string;
    genre: $Enums.ArtistGenre;
    createdAt: Date;
    updatedAt: Date;
    _count: ArtistCountAggregateOutputType | null;
    _min: ArtistMinAggregateOutputType | null;
    _max: ArtistMaxAggregateOutputType | null;
  };

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ArtistGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ArtistGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>;
        }
      >
    >;

  export type ArtistSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      genre?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['artist']
  >;

  export type ArtistSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      genre?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['artist']
  >;

  export type ArtistSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      genre?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['artist']
  >;

  export type ArtistSelectScalar = {
    id?: boolean;
    name?: boolean;
    genre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ArtistOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'genre' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['artist']
  >;

  export type $ArtistPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Artist';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        genre: $Enums.ArtistGenre;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['artist']
    >;
    composites: {};
  };

  type ArtistGetPayload<
    S extends boolean | null | undefined | ArtistDefaultArgs,
  > = $Result.GetResult<Prisma.$ArtistPayload, S>;

  type ArtistCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArtistCountAggregateInputType | true;
  };

  export interface ArtistDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    /**
     * Fields of the Artist model
     */
    readonly fields: ArtistFieldRefs;
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Artist'];
      meta: { name: 'Artist' };
    };
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(
      args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(
      args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     *
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArtistFindManyArgs>(
      args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;
    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     *
     */
    create<T extends ArtistCreateArgs>(
      args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArtistCreateManyArgs>(
      args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     *
     */
    delete<T extends ArtistDeleteArgs>(
      args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArtistUpdateArgs>(
      args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArtistDeleteManyArgs>(
      args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArtistUpdateManyArgs>(
      args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;
    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(
      args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>,
    ): Prisma__ArtistClient<
      $Result.GetResult<
        Prisma.$ArtistPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
     **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >;
    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(
      args: Subset<T, ArtistAggregateArgs>,
    ): Prisma.PrismaPromise<GetArtistAggregateType<T>>;
    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
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
      args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetArtistGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
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
        | null,
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
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<'Artist', 'String'>;
    readonly name: FieldRef<'Artist', 'String'>;
    readonly genre: FieldRef<'Artist', 'ArtistGenre'>;
    readonly createdAt: FieldRef<'Artist', 'DateTime'>;
    readonly updatedAt: FieldRef<'Artist', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput;
  };

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput;
  };

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[];
  };

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[];
  };

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[];
  };

  /**
   * Artist create
   */
  export type ArtistCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>;
  };

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>;
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput;
  };

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>;
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput;
    /**
     * Limit how many Artists to update.
     */
    limit?: number;
  };

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>;
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput;
    /**
     * Limit how many Artists to update.
     */
    limit?: number;
  };

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput;
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>;
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>;
  };

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput;
  };

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput;
    /**
     * Limit how many Artists to delete.
     */
    limit?: number;
  };

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const MovieScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    releaseYear: 'releaseYear';
    rating: 'rating';
    isAvailable: 'isAvailable';
    genre: 'genre';
    posterId: 'posterId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type MovieScalarFieldEnum =
    (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    text: 'text';
    rating: 'rating';
    movieId: 'movieId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ReviewScalarFieldEnum =
    (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const ActorScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ActorScalarFieldEnum =
    (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum];

  export const PosterScalarFieldEnum: {
    id: 'id';
    imageUrl: 'imageUrl';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PosterScalarFieldEnum =
    (typeof PosterScalarFieldEnum)[keyof typeof PosterScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const UserQlScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    name: 'name';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserQlScalarFieldEnum =
    (typeof UserQlScalarFieldEnum)[keyof typeof UserQlScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    text: 'text';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const ArtistScalarFieldEnum: {
    id: 'id';
    name: 'name';
    genre: 'genre';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ArtistScalarFieldEnum =
    (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Genre'
   */
  export type EnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Genre'
  >;

  /**
   * Reference to a field of type 'Genre[]'
   */
  export type ListEnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Genre[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'UserRoleQl'
   */
  export type EnumUserRoleQlFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRoleQl'
  >;

  /**
   * Reference to a field of type 'UserRoleQl[]'
   */
  export type ListEnumUserRoleQlFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRoleQl[]'
  >;

  /**
   * Reference to a field of type 'ArtistGenre'
   */
  export type EnumArtistGenreFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ArtistGenre'
  >;

  /**
   * Reference to a field of type 'ArtistGenre[]'
   */
  export type ListEnumArtistGenreFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ArtistGenre[]'>;

  /**
   * Deep Input Types
   */

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[];
    OR?: MovieWhereInput[];
    NOT?: MovieWhereInput | MovieWhereInput[];
    id?: StringFilter<'Movie'> | string;
    title?: StringFilter<'Movie'> | string;
    description?: StringNullableFilter<'Movie'> | string | null;
    releaseYear?: IntFilter<'Movie'> | number;
    rating?: FloatFilter<'Movie'> | number;
    isAvailable?: BoolFilter<'Movie'> | boolean;
    genre?: EnumGenreFilter<'Movie'> | $Enums.Genre;
    posterId?: StringNullableFilter<'Movie'> | string | null;
    createdAt?: DateTimeFilter<'Movie'> | Date | string;
    updatedAt?: DateTimeFilter<'Movie'> | Date | string;
    poster?: XOR<PosterNullableScalarRelationFilter, PosterWhereInput> | null;
    reviews?: ReviewListRelationFilter;
    actors?: ActorListRelationFilter;
  };

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    releaseYear?: SortOrder;
    rating?: SortOrder;
    isAvailable?: SortOrder;
    genre?: SortOrder;
    posterId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    poster?: PosterOrderByWithRelationInput;
    reviews?: ReviewOrderByRelationAggregateInput;
    actors?: ActorOrderByRelationAggregateInput;
  };

  export type MovieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      posterId?: string;
      AND?: MovieWhereInput | MovieWhereInput[];
      OR?: MovieWhereInput[];
      NOT?: MovieWhereInput | MovieWhereInput[];
      title?: StringFilter<'Movie'> | string;
      description?: StringNullableFilter<'Movie'> | string | null;
      releaseYear?: IntFilter<'Movie'> | number;
      rating?: FloatFilter<'Movie'> | number;
      isAvailable?: BoolFilter<'Movie'> | boolean;
      genre?: EnumGenreFilter<'Movie'> | $Enums.Genre;
      createdAt?: DateTimeFilter<'Movie'> | Date | string;
      updatedAt?: DateTimeFilter<'Movie'> | Date | string;
      poster?: XOR<PosterNullableScalarRelationFilter, PosterWhereInput> | null;
      reviews?: ReviewListRelationFilter;
      actors?: ActorListRelationFilter;
    },
    'id' | 'posterId'
  >;

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    releaseYear?: SortOrder;
    rating?: SortOrder;
    isAvailable?: SortOrder;
    genre?: SortOrder;
    posterId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MovieCountOrderByAggregateInput;
    _avg?: MovieAvgOrderByAggregateInput;
    _max?: MovieMaxOrderByAggregateInput;
    _min?: MovieMinOrderByAggregateInput;
    _sum?: MovieSumOrderByAggregateInput;
  };

  export type MovieScalarWhereWithAggregatesInput = {
    AND?:
      | MovieScalarWhereWithAggregatesInput
      | MovieScalarWhereWithAggregatesInput[];
    OR?: MovieScalarWhereWithAggregatesInput[];
    NOT?:
      | MovieScalarWhereWithAggregatesInput
      | MovieScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Movie'> | string;
    title?: StringWithAggregatesFilter<'Movie'> | string;
    description?: StringNullableWithAggregatesFilter<'Movie'> | string | null;
    releaseYear?: IntWithAggregatesFilter<'Movie'> | number;
    rating?: FloatWithAggregatesFilter<'Movie'> | number;
    isAvailable?: BoolWithAggregatesFilter<'Movie'> | boolean;
    genre?: EnumGenreWithAggregatesFilter<'Movie'> | $Enums.Genre;
    posterId?: StringNullableWithAggregatesFilter<'Movie'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Movie'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Movie'> | Date | string;
  };

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[];
    OR?: ReviewWhereInput[];
    NOT?: ReviewWhereInput | ReviewWhereInput[];
    id?: StringFilter<'Review'> | string;
    text?: StringFilter<'Review'> | string;
    rating?: FloatFilter<'Review'> | number;
    movieId?: StringFilter<'Review'> | string;
    createdAt?: DateTimeFilter<'Review'> | Date | string;
    updatedAt?: DateTimeFilter<'Review'> | Date | string;
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>;
  };

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    movie?: MovieOrderByWithRelationInput;
  };

  export type ReviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ReviewWhereInput | ReviewWhereInput[];
      OR?: ReviewWhereInput[];
      NOT?: ReviewWhereInput | ReviewWhereInput[];
      text?: StringFilter<'Review'> | string;
      rating?: FloatFilter<'Review'> | number;
      movieId?: StringFilter<'Review'> | string;
      createdAt?: DateTimeFilter<'Review'> | Date | string;
      updatedAt?: DateTimeFilter<'Review'> | Date | string;
      movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>;
    },
    'id'
  >;

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ReviewCountOrderByAggregateInput;
    _avg?: ReviewAvgOrderByAggregateInput;
    _max?: ReviewMaxOrderByAggregateInput;
    _min?: ReviewMinOrderByAggregateInput;
    _sum?: ReviewSumOrderByAggregateInput;
  };

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    OR?: ReviewScalarWhereWithAggregatesInput[];
    NOT?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Review'> | string;
    text?: StringWithAggregatesFilter<'Review'> | string;
    rating?: FloatWithAggregatesFilter<'Review'> | number;
    movieId?: StringWithAggregatesFilter<'Review'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Review'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Review'> | Date | string;
  };

  export type ActorWhereInput = {
    AND?: ActorWhereInput | ActorWhereInput[];
    OR?: ActorWhereInput[];
    NOT?: ActorWhereInput | ActorWhereInput[];
    id?: StringFilter<'Actor'> | string;
    name?: StringFilter<'Actor'> | string;
    createdAt?: DateTimeFilter<'Actor'> | Date | string;
    updatedAt?: DateTimeFilter<'Actor'> | Date | string;
    movies?: MovieListRelationFilter;
  };

  export type ActorOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    movies?: MovieOrderByRelationAggregateInput;
  };

  export type ActorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ActorWhereInput | ActorWhereInput[];
      OR?: ActorWhereInput[];
      NOT?: ActorWhereInput | ActorWhereInput[];
      name?: StringFilter<'Actor'> | string;
      createdAt?: DateTimeFilter<'Actor'> | Date | string;
      updatedAt?: DateTimeFilter<'Actor'> | Date | string;
      movies?: MovieListRelationFilter;
    },
    'id'
  >;

  export type ActorOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ActorCountOrderByAggregateInput;
    _max?: ActorMaxOrderByAggregateInput;
    _min?: ActorMinOrderByAggregateInput;
  };

  export type ActorScalarWhereWithAggregatesInput = {
    AND?:
      | ActorScalarWhereWithAggregatesInput
      | ActorScalarWhereWithAggregatesInput[];
    OR?: ActorScalarWhereWithAggregatesInput[];
    NOT?:
      | ActorScalarWhereWithAggregatesInput
      | ActorScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Actor'> | string;
    name?: StringWithAggregatesFilter<'Actor'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Actor'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Actor'> | Date | string;
  };

  export type PosterWhereInput = {
    AND?: PosterWhereInput | PosterWhereInput[];
    OR?: PosterWhereInput[];
    NOT?: PosterWhereInput | PosterWhereInput[];
    id?: StringFilter<'Poster'> | string;
    imageUrl?: StringFilter<'Poster'> | string;
    createdAt?: DateTimeFilter<'Poster'> | Date | string;
    updatedAt?: DateTimeFilter<'Poster'> | Date | string;
    movie?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null;
  };

  export type PosterOrderByWithRelationInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    movie?: MovieOrderByWithRelationInput;
  };

  export type PosterWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PosterWhereInput | PosterWhereInput[];
      OR?: PosterWhereInput[];
      NOT?: PosterWhereInput | PosterWhereInput[];
      imageUrl?: StringFilter<'Poster'> | string;
      createdAt?: DateTimeFilter<'Poster'> | Date | string;
      updatedAt?: DateTimeFilter<'Poster'> | Date | string;
      movie?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null;
    },
    'id'
  >;

  export type PosterOrderByWithAggregationInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PosterCountOrderByAggregateInput;
    _max?: PosterMaxOrderByAggregateInput;
    _min?: PosterMinOrderByAggregateInput;
  };

  export type PosterScalarWhereWithAggregatesInput = {
    AND?:
      | PosterScalarWhereWithAggregatesInput
      | PosterScalarWhereWithAggregatesInput[];
    OR?: PosterScalarWhereWithAggregatesInput[];
    NOT?:
      | PosterScalarWhereWithAggregatesInput
      | PosterScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Poster'> | string;
    imageUrl?: StringWithAggregatesFilter<'Poster'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Poster'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Poster'> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      name?: StringFilter<'User'> | string;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type UserQlWhereInput = {
    AND?: UserQlWhereInput | UserQlWhereInput[];
    OR?: UserQlWhereInput[];
    NOT?: UserQlWhereInput | UserQlWhereInput[];
    id?: StringFilter<'UserQl'> | string;
    email?: StringFilter<'UserQl'> | string;
    password?: StringFilter<'UserQl'> | string;
    name?: StringFilter<'UserQl'> | string;
    role?: EnumUserRoleQlFilter<'UserQl'> | $Enums.UserRoleQl;
    createdAt?: DateTimeFilter<'UserQl'> | Date | string;
    updatedAt?: DateTimeFilter<'UserQl'> | Date | string;
  };

  export type UserQlOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserQlWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserQlWhereInput | UserQlWhereInput[];
      OR?: UserQlWhereInput[];
      NOT?: UserQlWhereInput | UserQlWhereInput[];
      password?: StringFilter<'UserQl'> | string;
      name?: StringFilter<'UserQl'> | string;
      role?: EnumUserRoleQlFilter<'UserQl'> | $Enums.UserRoleQl;
      createdAt?: DateTimeFilter<'UserQl'> | Date | string;
      updatedAt?: DateTimeFilter<'UserQl'> | Date | string;
    },
    'id' | 'email'
  >;

  export type UserQlOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserQlCountOrderByAggregateInput;
    _max?: UserQlMaxOrderByAggregateInput;
    _min?: UserQlMinOrderByAggregateInput;
  };

  export type UserQlScalarWhereWithAggregatesInput = {
    AND?:
      | UserQlScalarWhereWithAggregatesInput
      | UserQlScalarWhereWithAggregatesInput[];
    OR?: UserQlScalarWhereWithAggregatesInput[];
    NOT?:
      | UserQlScalarWhereWithAggregatesInput
      | UserQlScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'UserQl'> | string;
    email?: StringWithAggregatesFilter<'UserQl'> | string;
    password?: StringWithAggregatesFilter<'UserQl'> | string;
    name?: StringWithAggregatesFilter<'UserQl'> | string;
    role?: EnumUserRoleQlWithAggregatesFilter<'UserQl'> | $Enums.UserRoleQl;
    createdAt?: DateTimeWithAggregatesFilter<'UserQl'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'UserQl'> | Date | string;
  };

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput | MessageWhereInput[];
    id?: StringFilter<'Message'> | string;
    text?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    updatedAt?: DateTimeFilter<'Message'> | Date | string;
  };

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MessageWhereInput | MessageWhereInput[];
      OR?: MessageWhereInput[];
      NOT?: MessageWhereInput | MessageWhereInput[];
      text?: StringFilter<'Message'> | string;
      createdAt?: DateTimeFilter<'Message'> | Date | string;
      updatedAt?: DateTimeFilter<'Message'> | Date | string;
    },
    'id'
  >;

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
  };

  export type MessageScalarWhereWithAggregatesInput = {
    AND?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    OR?: MessageScalarWhereWithAggregatesInput[];
    NOT?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Message'> | string;
    text?: StringWithAggregatesFilter<'Message'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
  };

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[];
    OR?: ArtistWhereInput[];
    NOT?: ArtistWhereInput | ArtistWhereInput[];
    id?: StringFilter<'Artist'> | string;
    name?: StringFilter<'Artist'> | string;
    genre?: EnumArtistGenreFilter<'Artist'> | $Enums.ArtistGenre;
    createdAt?: DateTimeFilter<'Artist'> | Date | string;
    updatedAt?: DateTimeFilter<'Artist'> | Date | string;
  };

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    genre?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ArtistWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ArtistWhereInput | ArtistWhereInput[];
      OR?: ArtistWhereInput[];
      NOT?: ArtistWhereInput | ArtistWhereInput[];
      name?: StringFilter<'Artist'> | string;
      genre?: EnumArtistGenreFilter<'Artist'> | $Enums.ArtistGenre;
      createdAt?: DateTimeFilter<'Artist'> | Date | string;
      updatedAt?: DateTimeFilter<'Artist'> | Date | string;
    },
    'id'
  >;

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    genre?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ArtistCountOrderByAggregateInput;
    _max?: ArtistMaxOrderByAggregateInput;
    _min?: ArtistMinOrderByAggregateInput;
  };

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?:
      | ArtistScalarWhereWithAggregatesInput
      | ArtistScalarWhereWithAggregatesInput[];
    OR?: ArtistScalarWhereWithAggregatesInput[];
    NOT?:
      | ArtistScalarWhereWithAggregatesInput
      | ArtistScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Artist'> | string;
    name?: StringWithAggregatesFilter<'Artist'> | string;
    genre?: EnumArtistGenreWithAggregatesFilter<'Artist'> | $Enums.ArtistGenre;
    createdAt?: DateTimeWithAggregatesFilter<'Artist'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Artist'> | Date | string;
  };

  export type MovieCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    poster?: PosterCreateNestedOneWithoutMovieInput;
    reviews?: ReviewCreateNestedManyWithoutMovieInput;
    actors?: ActorCreateNestedManyWithoutMoviesInput;
  };

  export type MovieUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    posterId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
    actors?: ActorUncheckedCreateNestedManyWithoutMoviesInput;
  };

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    poster?: PosterUpdateOneWithoutMovieNestedInput;
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;
    actors?: ActorUpdateManyWithoutMoviesNestedInput;
  };

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    posterId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput;
    actors?: ActorUncheckedUpdateManyWithoutMoviesNestedInput;
  };

  export type MovieCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    posterId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    posterId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateInput = {
    id?: string;
    text: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie: MovieCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateInput = {
    id?: string;
    text: string;
    rating?: number;
    movieId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateManyInput = {
    id?: string;
    text: string;
    rating?: number;
    movieId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    movieId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActorCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: MovieCreateNestedManyWithoutActorsInput;
  };

  export type ActorUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: MovieUncheckedCreateNestedManyWithoutActorsInput;
  };

  export type ActorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: MovieUpdateManyWithoutActorsNestedInput;
  };

  export type ActorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: MovieUncheckedUpdateManyWithoutActorsNestedInput;
  };

  export type ActorCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ActorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PosterCreateInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie?: MovieCreateNestedOneWithoutPosterInput;
  };

  export type PosterUncheckedCreateInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie?: MovieUncheckedCreateNestedOneWithoutPosterInput;
  };

  export type PosterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUpdateOneWithoutPosterNestedInput;
  };

  export type PosterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: MovieUncheckedUpdateOneWithoutPosterNestedInput;
  };

  export type PosterCreateManyInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PosterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PosterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserQlCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: $Enums.UserRoleQl;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserQlUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: $Enums.UserRoleQl;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserQlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleQlFieldUpdateOperationsInput | $Enums.UserRoleQl;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserQlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleQlFieldUpdateOperationsInput | $Enums.UserRoleQl;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserQlCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: $Enums.UserRoleQl;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserQlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleQlFieldUpdateOperationsInput | $Enums.UserRoleQl;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserQlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleQlFieldUpdateOperationsInput | $Enums.UserRoleQl;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageUncheckedCreateInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateManyInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ArtistCreateInput = {
    id?: string;
    name: string;
    genre?: $Enums.ArtistGenre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ArtistUncheckedCreateInput = {
    id?: string;
    name: string;
    genre?: $Enums.ArtistGenre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    genre?: EnumArtistGenreFieldUpdateOperationsInput | $Enums.ArtistGenre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    genre?: EnumArtistGenreFieldUpdateOperationsInput | $Enums.ArtistGenre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ArtistCreateManyInput = {
    id?: string;
    name: string;
    genre?: $Enums.ArtistGenre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    genre?: EnumArtistGenreFieldUpdateOperationsInput | $Enums.ArtistGenre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    genre?: EnumArtistGenreFieldUpdateOperationsInput | $Enums.ArtistGenre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre;
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

  export type PosterNullableScalarRelationFilter = {
    is?: PosterWhereInput | null;
    isNot?: PosterWhereInput | null;
  };

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput;
    some?: ReviewWhereInput;
    none?: ReviewWhereInput;
  };

  export type ActorListRelationFilter = {
    every?: ActorWhereInput;
    some?: ActorWhereInput;
    none?: ActorWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ActorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    releaseYear?: SortOrder;
    rating?: SortOrder;
    isAvailable?: SortOrder;
    genre?: SortOrder;
    posterId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieAvgOrderByAggregateInput = {
    releaseYear?: SortOrder;
    rating?: SortOrder;
  };

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    releaseYear?: SortOrder;
    rating?: SortOrder;
    isAvailable?: SortOrder;
    genre?: SortOrder;
    posterId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    releaseYear?: SortOrder;
    rating?: SortOrder;
    isAvailable?: SortOrder;
    genre?: SortOrder;
    posterId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieSumOrderByAggregateInput = {
    releaseYear?: SortOrder;
    rating?: SortOrder;
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGenreFilter<$PrismaModel>;
    _max?: NestedEnumGenreFilter<$PrismaModel>;
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

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput;
    isNot?: MovieWhereInput;
  };

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    movieId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type MovieListRelationFilter = {
    every?: MovieWhereInput;
    some?: MovieWhereInput;
    none?: MovieWhereInput;
  };

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ActorCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ActorMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ActorMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MovieNullableScalarRelationFilter = {
    is?: MovieWhereInput | null;
    isNot?: MovieWhereInput | null;
  };

  export type PosterCountOrderByAggregateInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PosterMaxOrderByAggregateInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PosterMinOrderByAggregateInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumUserRoleQlFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleQl | EnumUserRoleQlFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleQlFilter<$PrismaModel> | $Enums.UserRoleQl;
  };

  export type UserQlCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserQlMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserQlMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumUserRoleQlWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleQl | EnumUserRoleQlFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleQlWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRoleQl;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleQlFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleQlFilter<$PrismaModel>;
  };

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumArtistGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtistGenre | EnumArtistGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.ArtistGenre[] | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ArtistGenre[]
      | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
    not?: NestedEnumArtistGenreFilter<$PrismaModel> | $Enums.ArtistGenre;
  };

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    genre?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    genre?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    genre?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumArtistGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtistGenre | EnumArtistGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.ArtistGenre[] | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ArtistGenre[]
      | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumArtistGenreWithAggregatesFilter<$PrismaModel>
      | $Enums.ArtistGenre;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumArtistGenreFilter<$PrismaModel>;
    _max?: NestedEnumArtistGenreFilter<$PrismaModel>;
  };

  export type PosterCreateNestedOneWithoutMovieInput = {
    create?: XOR<
      PosterCreateWithoutMovieInput,
      PosterUncheckedCreateWithoutMovieInput
    >;
    connectOrCreate?: PosterCreateOrConnectWithoutMovieInput;
    connect?: PosterWhereUniqueInput;
  };

  export type ReviewCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type ActorCreateNestedManyWithoutMoviesInput = {
    create?:
      | XOR<
          ActorCreateWithoutMoviesInput,
          ActorUncheckedCreateWithoutMoviesInput
        >
      | ActorCreateWithoutMoviesInput[]
      | ActorUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | ActorCreateOrConnectWithoutMoviesInput
      | ActorCreateOrConnectWithoutMoviesInput[];
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
  };

  export type ReviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type ActorUncheckedCreateNestedManyWithoutMoviesInput = {
    create?:
      | XOR<
          ActorCreateWithoutMoviesInput,
          ActorUncheckedCreateWithoutMoviesInput
        >
      | ActorCreateWithoutMoviesInput[]
      | ActorUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | ActorCreateOrConnectWithoutMoviesInput
      | ActorCreateOrConnectWithoutMoviesInput[];
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumGenreFieldUpdateOperationsInput = {
    set?: $Enums.Genre;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PosterUpdateOneWithoutMovieNestedInput = {
    create?: XOR<
      PosterCreateWithoutMovieInput,
      PosterUncheckedCreateWithoutMovieInput
    >;
    connectOrCreate?: PosterCreateOrConnectWithoutMovieInput;
    upsert?: PosterUpsertWithoutMovieInput;
    disconnect?: PosterWhereInput | boolean;
    delete?: PosterWhereInput | boolean;
    connect?: PosterWhereUniqueInput;
    update?: XOR<
      XOR<
        PosterUpdateToOneWithWhereWithoutMovieInput,
        PosterUpdateWithoutMovieInput
      >,
      PosterUncheckedUpdateWithoutMovieInput
    >;
  };

  export type ReviewUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutMovieInput
      | ReviewUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutMovieInput
      | ReviewUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutMovieInput
      | ReviewUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type ActorUpdateManyWithoutMoviesNestedInput = {
    create?:
      | XOR<
          ActorCreateWithoutMoviesInput,
          ActorUncheckedCreateWithoutMoviesInput
        >
      | ActorCreateWithoutMoviesInput[]
      | ActorUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | ActorCreateOrConnectWithoutMoviesInput
      | ActorCreateOrConnectWithoutMoviesInput[];
    upsert?:
      | ActorUpsertWithWhereUniqueWithoutMoviesInput
      | ActorUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    disconnect?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    delete?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    update?:
      | ActorUpdateWithWhereUniqueWithoutMoviesInput
      | ActorUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?:
      | ActorUpdateManyWithWhereWithoutMoviesInput
      | ActorUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: ActorScalarWhereInput | ActorScalarWhereInput[];
  };

  export type ReviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutMovieInput,
          ReviewUncheckedCreateWithoutMovieInput
        >
      | ReviewCreateWithoutMovieInput[]
      | ReviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutMovieInput
      | ReviewCreateOrConnectWithoutMovieInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutMovieInput
      | ReviewUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: ReviewCreateManyMovieInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutMovieInput
      | ReviewUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutMovieInput
      | ReviewUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type ActorUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?:
      | XOR<
          ActorCreateWithoutMoviesInput,
          ActorUncheckedCreateWithoutMoviesInput
        >
      | ActorCreateWithoutMoviesInput[]
      | ActorUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | ActorCreateOrConnectWithoutMoviesInput
      | ActorCreateOrConnectWithoutMoviesInput[];
    upsert?:
      | ActorUpsertWithWhereUniqueWithoutMoviesInput
      | ActorUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    disconnect?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    delete?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[];
    update?:
      | ActorUpdateWithWhereUniqueWithoutMoviesInput
      | ActorUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?:
      | ActorUpdateManyWithWhereWithoutMoviesInput
      | ActorUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: ActorScalarWhereInput | ActorScalarWhereInput[];
  };

  export type MovieCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput;
    connect?: MovieWhereUniqueInput;
  };

  export type MovieUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput;
    upsert?: MovieUpsertWithoutReviewsInput;
    connect?: MovieWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieUpdateToOneWithWhereWithoutReviewsInput,
        MovieUpdateWithoutReviewsInput
      >,
      MovieUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type MovieCreateNestedManyWithoutActorsInput = {
    create?:
      | XOR<
          MovieCreateWithoutActorsInput,
          MovieUncheckedCreateWithoutActorsInput
        >
      | MovieCreateWithoutActorsInput[]
      | MovieUncheckedCreateWithoutActorsInput[];
    connectOrCreate?:
      | MovieCreateOrConnectWithoutActorsInput
      | MovieCreateOrConnectWithoutActorsInput[];
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
  };

  export type MovieUncheckedCreateNestedManyWithoutActorsInput = {
    create?:
      | XOR<
          MovieCreateWithoutActorsInput,
          MovieUncheckedCreateWithoutActorsInput
        >
      | MovieCreateWithoutActorsInput[]
      | MovieUncheckedCreateWithoutActorsInput[];
    connectOrCreate?:
      | MovieCreateOrConnectWithoutActorsInput
      | MovieCreateOrConnectWithoutActorsInput[];
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
  };

  export type MovieUpdateManyWithoutActorsNestedInput = {
    create?:
      | XOR<
          MovieCreateWithoutActorsInput,
          MovieUncheckedCreateWithoutActorsInput
        >
      | MovieCreateWithoutActorsInput[]
      | MovieUncheckedCreateWithoutActorsInput[];
    connectOrCreate?:
      | MovieCreateOrConnectWithoutActorsInput
      | MovieCreateOrConnectWithoutActorsInput[];
    upsert?:
      | MovieUpsertWithWhereUniqueWithoutActorsInput
      | MovieUpsertWithWhereUniqueWithoutActorsInput[];
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    update?:
      | MovieUpdateWithWhereUniqueWithoutActorsInput
      | MovieUpdateWithWhereUniqueWithoutActorsInput[];
    updateMany?:
      | MovieUpdateManyWithWhereWithoutActorsInput
      | MovieUpdateManyWithWhereWithoutActorsInput[];
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[];
  };

  export type MovieUncheckedUpdateManyWithoutActorsNestedInput = {
    create?:
      | XOR<
          MovieCreateWithoutActorsInput,
          MovieUncheckedCreateWithoutActorsInput
        >
      | MovieCreateWithoutActorsInput[]
      | MovieUncheckedCreateWithoutActorsInput[];
    connectOrCreate?:
      | MovieCreateOrConnectWithoutActorsInput
      | MovieCreateOrConnectWithoutActorsInput[];
    upsert?:
      | MovieUpsertWithWhereUniqueWithoutActorsInput
      | MovieUpsertWithWhereUniqueWithoutActorsInput[];
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[];
    update?:
      | MovieUpdateWithWhereUniqueWithoutActorsInput
      | MovieUpdateWithWhereUniqueWithoutActorsInput[];
    updateMany?:
      | MovieUpdateManyWithWhereWithoutActorsInput
      | MovieUpdateManyWithWhereWithoutActorsInput[];
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[];
  };

  export type MovieCreateNestedOneWithoutPosterInput = {
    create?: XOR<
      MovieCreateWithoutPosterInput,
      MovieUncheckedCreateWithoutPosterInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutPosterInput;
    connect?: MovieWhereUniqueInput;
  };

  export type MovieUncheckedCreateNestedOneWithoutPosterInput = {
    create?: XOR<
      MovieCreateWithoutPosterInput,
      MovieUncheckedCreateWithoutPosterInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutPosterInput;
    connect?: MovieWhereUniqueInput;
  };

  export type MovieUpdateOneWithoutPosterNestedInput = {
    create?: XOR<
      MovieCreateWithoutPosterInput,
      MovieUncheckedCreateWithoutPosterInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutPosterInput;
    upsert?: MovieUpsertWithoutPosterInput;
    disconnect?: MovieWhereInput | boolean;
    delete?: MovieWhereInput | boolean;
    connect?: MovieWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieUpdateToOneWithWhereWithoutPosterInput,
        MovieUpdateWithoutPosterInput
      >,
      MovieUncheckedUpdateWithoutPosterInput
    >;
  };

  export type MovieUncheckedUpdateOneWithoutPosterNestedInput = {
    create?: XOR<
      MovieCreateWithoutPosterInput,
      MovieUncheckedCreateWithoutPosterInput
    >;
    connectOrCreate?: MovieCreateOrConnectWithoutPosterInput;
    upsert?: MovieUpsertWithoutPosterInput;
    disconnect?: MovieWhereInput | boolean;
    delete?: MovieWhereInput | boolean;
    connect?: MovieWhereUniqueInput;
    update?: XOR<
      XOR<
        MovieUpdateToOneWithWhereWithoutPosterInput,
        MovieUpdateWithoutPosterInput
      >,
      MovieUncheckedUpdateWithoutPosterInput
    >;
  };

  export type EnumUserRoleQlFieldUpdateOperationsInput = {
    set?: $Enums.UserRoleQl;
  };

  export type EnumArtistGenreFieldUpdateOperationsInput = {
    set?: $Enums.ArtistGenre;
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre;
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>;
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGenreFilter<$PrismaModel>;
    _max?: NestedEnumGenreFilter<$PrismaModel>;
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

  export type NestedEnumUserRoleQlFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleQl | EnumUserRoleQlFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleQlFilter<$PrismaModel> | $Enums.UserRoleQl;
  };

  export type NestedEnumUserRoleQlWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleQl | EnumUserRoleQlFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRoleQl[] | ListEnumUserRoleQlFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleQlWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRoleQl;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleQlFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleQlFilter<$PrismaModel>;
  };

  export type NestedEnumArtistGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtistGenre | EnumArtistGenreFieldRefInput<$PrismaModel>;
    in?: $Enums.ArtistGenre[] | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ArtistGenre[]
      | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
    not?: NestedEnumArtistGenreFilter<$PrismaModel> | $Enums.ArtistGenre;
  };

  export type NestedEnumArtistGenreWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.ArtistGenre | EnumArtistGenreFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ArtistGenre[]
        | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ArtistGenre[]
        | ListEnumArtistGenreFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumArtistGenreWithAggregatesFilter<$PrismaModel>
        | $Enums.ArtistGenre;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumArtistGenreFilter<$PrismaModel>;
      _max?: NestedEnumArtistGenreFilter<$PrismaModel>;
    };

  export type PosterCreateWithoutMovieInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PosterUncheckedCreateWithoutMovieInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PosterCreateOrConnectWithoutMovieInput = {
    where: PosterWhereUniqueInput;
    create: XOR<
      PosterCreateWithoutMovieInput,
      PosterUncheckedCreateWithoutMovieInput
    >;
  };

  export type ReviewCreateWithoutMovieInput = {
    id?: string;
    text: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUncheckedCreateWithoutMovieInput = {
    id?: string;
    text: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateOrConnectWithoutMovieInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutMovieInput,
      ReviewUncheckedCreateWithoutMovieInput
    >;
  };

  export type ReviewCreateManyMovieInputEnvelope = {
    data: ReviewCreateManyMovieInput | ReviewCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type ActorCreateWithoutMoviesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ActorUncheckedCreateWithoutMoviesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ActorCreateOrConnectWithoutMoviesInput = {
    where: ActorWhereUniqueInput;
    create: XOR<
      ActorCreateWithoutMoviesInput,
      ActorUncheckedCreateWithoutMoviesInput
    >;
  };

  export type PosterUpsertWithoutMovieInput = {
    update: XOR<
      PosterUpdateWithoutMovieInput,
      PosterUncheckedUpdateWithoutMovieInput
    >;
    create: XOR<
      PosterCreateWithoutMovieInput,
      PosterUncheckedCreateWithoutMovieInput
    >;
    where?: PosterWhereInput;
  };

  export type PosterUpdateToOneWithWhereWithoutMovieInput = {
    where?: PosterWhereInput;
    data: XOR<
      PosterUpdateWithoutMovieInput,
      PosterUncheckedUpdateWithoutMovieInput
    >;
  };

  export type PosterUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PosterUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutMovieInput,
      ReviewUncheckedUpdateWithoutMovieInput
    >;
    create: XOR<
      ReviewCreateWithoutMovieInput,
      ReviewUncheckedCreateWithoutMovieInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutMovieInput,
      ReviewUncheckedUpdateWithoutMovieInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutMovieInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutMovieInput
    >;
  };

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    OR?: ReviewScalarWhereInput[];
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    id?: StringFilter<'Review'> | string;
    text?: StringFilter<'Review'> | string;
    rating?: FloatFilter<'Review'> | number;
    movieId?: StringFilter<'Review'> | string;
    createdAt?: DateTimeFilter<'Review'> | Date | string;
    updatedAt?: DateTimeFilter<'Review'> | Date | string;
  };

  export type ActorUpsertWithWhereUniqueWithoutMoviesInput = {
    where: ActorWhereUniqueInput;
    update: XOR<
      ActorUpdateWithoutMoviesInput,
      ActorUncheckedUpdateWithoutMoviesInput
    >;
    create: XOR<
      ActorCreateWithoutMoviesInput,
      ActorUncheckedCreateWithoutMoviesInput
    >;
  };

  export type ActorUpdateWithWhereUniqueWithoutMoviesInput = {
    where: ActorWhereUniqueInput;
    data: XOR<
      ActorUpdateWithoutMoviesInput,
      ActorUncheckedUpdateWithoutMoviesInput
    >;
  };

  export type ActorUpdateManyWithWhereWithoutMoviesInput = {
    where: ActorScalarWhereInput;
    data: XOR<
      ActorUpdateManyMutationInput,
      ActorUncheckedUpdateManyWithoutMoviesInput
    >;
  };

  export type ActorScalarWhereInput = {
    AND?: ActorScalarWhereInput | ActorScalarWhereInput[];
    OR?: ActorScalarWhereInput[];
    NOT?: ActorScalarWhereInput | ActorScalarWhereInput[];
    id?: StringFilter<'Actor'> | string;
    name?: StringFilter<'Actor'> | string;
    createdAt?: DateTimeFilter<'Actor'> | Date | string;
    updatedAt?: DateTimeFilter<'Actor'> | Date | string;
  };

  export type MovieCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    poster?: PosterCreateNestedOneWithoutMovieInput;
    actors?: ActorCreateNestedManyWithoutMoviesInput;
  };

  export type MovieUncheckedCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    posterId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    actors?: ActorUncheckedCreateNestedManyWithoutMoviesInput;
  };

  export type MovieCreateOrConnectWithoutReviewsInput = {
    where: MovieWhereUniqueInput;
    create: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
  };

  export type MovieUpsertWithoutReviewsInput = {
    update: XOR<
      MovieUpdateWithoutReviewsInput,
      MovieUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      MovieCreateWithoutReviewsInput,
      MovieUncheckedCreateWithoutReviewsInput
    >;
    where?: MovieWhereInput;
  };

  export type MovieUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MovieWhereInput;
    data: XOR<
      MovieUpdateWithoutReviewsInput,
      MovieUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type MovieUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    poster?: PosterUpdateOneWithoutMovieNestedInput;
    actors?: ActorUpdateManyWithoutMoviesNestedInput;
  };

  export type MovieUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    posterId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    actors?: ActorUncheckedUpdateManyWithoutMoviesNestedInput;
  };

  export type MovieCreateWithoutActorsInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    poster?: PosterCreateNestedOneWithoutMovieInput;
    reviews?: ReviewCreateNestedManyWithoutMovieInput;
  };

  export type MovieUncheckedCreateWithoutActorsInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    posterId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type MovieCreateOrConnectWithoutActorsInput = {
    where: MovieWhereUniqueInput;
    create: XOR<
      MovieCreateWithoutActorsInput,
      MovieUncheckedCreateWithoutActorsInput
    >;
  };

  export type MovieUpsertWithWhereUniqueWithoutActorsInput = {
    where: MovieWhereUniqueInput;
    update: XOR<
      MovieUpdateWithoutActorsInput,
      MovieUncheckedUpdateWithoutActorsInput
    >;
    create: XOR<
      MovieCreateWithoutActorsInput,
      MovieUncheckedCreateWithoutActorsInput
    >;
  };

  export type MovieUpdateWithWhereUniqueWithoutActorsInput = {
    where: MovieWhereUniqueInput;
    data: XOR<
      MovieUpdateWithoutActorsInput,
      MovieUncheckedUpdateWithoutActorsInput
    >;
  };

  export type MovieUpdateManyWithWhereWithoutActorsInput = {
    where: MovieScalarWhereInput;
    data: XOR<
      MovieUpdateManyMutationInput,
      MovieUncheckedUpdateManyWithoutActorsInput
    >;
  };

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[];
    OR?: MovieScalarWhereInput[];
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[];
    id?: StringFilter<'Movie'> | string;
    title?: StringFilter<'Movie'> | string;
    description?: StringNullableFilter<'Movie'> | string | null;
    releaseYear?: IntFilter<'Movie'> | number;
    rating?: FloatFilter<'Movie'> | number;
    isAvailable?: BoolFilter<'Movie'> | boolean;
    genre?: EnumGenreFilter<'Movie'> | $Enums.Genre;
    posterId?: StringNullableFilter<'Movie'> | string | null;
    createdAt?: DateTimeFilter<'Movie'> | Date | string;
    updatedAt?: DateTimeFilter<'Movie'> | Date | string;
  };

  export type MovieCreateWithoutPosterInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewCreateNestedManyWithoutMovieInput;
    actors?: ActorCreateNestedManyWithoutMoviesInput;
  };

  export type MovieUncheckedCreateWithoutPosterInput = {
    id?: string;
    title: string;
    description?: string | null;
    releaseYear: number;
    rating?: number;
    isAvailable?: boolean;
    genre?: $Enums.Genre;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
    actors?: ActorUncheckedCreateNestedManyWithoutMoviesInput;
  };

  export type MovieCreateOrConnectWithoutPosterInput = {
    where: MovieWhereUniqueInput;
    create: XOR<
      MovieCreateWithoutPosterInput,
      MovieUncheckedCreateWithoutPosterInput
    >;
  };

  export type MovieUpsertWithoutPosterInput = {
    update: XOR<
      MovieUpdateWithoutPosterInput,
      MovieUncheckedUpdateWithoutPosterInput
    >;
    create: XOR<
      MovieCreateWithoutPosterInput,
      MovieUncheckedCreateWithoutPosterInput
    >;
    where?: MovieWhereInput;
  };

  export type MovieUpdateToOneWithWhereWithoutPosterInput = {
    where?: MovieWhereInput;
    data: XOR<
      MovieUpdateWithoutPosterInput,
      MovieUncheckedUpdateWithoutPosterInput
    >;
  };

  export type MovieUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;
    actors?: ActorUpdateManyWithoutMoviesNestedInput;
  };

  export type MovieUncheckedUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput;
    actors?: ActorUncheckedUpdateManyWithoutMoviesNestedInput;
  };

  export type ReviewCreateManyMovieInput = {
    id?: string;
    text: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActorUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActorUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActorUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieUpdateWithoutActorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    poster?: PosterUpdateOneWithoutMovieNestedInput;
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;
  };

  export type MovieUncheckedUpdateWithoutActorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    posterId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type MovieUncheckedUpdateManyWithoutActorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    releaseYear?: IntFieldUpdateOperationsInput | number;
    rating?: FloatFieldUpdateOperationsInput | number;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre;
    posterId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
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
