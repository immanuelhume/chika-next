import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Argument = {
  __typename?: 'Argument';
  command: Command;
  id: Scalars['ID'];
  name: Scalars['String'];
  optional: Scalars['Boolean'];
};

export type Command = {
  __typename?: 'Command';
  aliases?: Maybe<Array<Scalars['String']>>;
  args?: Maybe<Array<Argument>>;
  category: CommandCategory;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum CommandCategory {
  Currency = 'CURRENCY',
  Fun = 'FUN',
  Games = 'GAMES',
  Music = 'MUSIC',
  Utility = 'UTILITY',
}

export type Query = {
  __typename?: 'Query';
  getAllCommands: Array<Command>;
};

export type GetAllCommandsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCommandsQuery = { __typename?: 'Query' } & {
  getAllCommands: Array<
    { __typename?: 'Command' } & Pick<
      Command,
      'name' | 'aliases' | 'description' | 'category'
    > & {
        args?: Maybe<
          Array<
            { __typename?: 'Argument' } & Pick<Argument, 'name' | 'optional'>
          >
        >;
      }
  >;
};

export const GetAllCommandsDocument = gql`
  query getAllCommands {
    getAllCommands {
      name
      aliases
      description
      category
      args {
        name
        optional
      }
    }
  }
`;

/**
 * __useGetAllCommandsQuery__
 *
 * To run a query within a React component, call `useGetAllCommandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCommandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCommandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCommandsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCommandsQuery,
    GetAllCommandsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllCommandsQuery, GetAllCommandsQueryVariables>(
    GetAllCommandsDocument,
    options,
  );
}
export function useGetAllCommandsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCommandsQuery,
    GetAllCommandsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllCommandsQuery, GetAllCommandsQueryVariables>(
    GetAllCommandsDocument,
    options,
  );
}
export type GetAllCommandsQueryHookResult = ReturnType<
  typeof useGetAllCommandsQuery
>;
export type GetAllCommandsLazyQueryHookResult = ReturnType<
  typeof useGetAllCommandsLazyQuery
>;
export type GetAllCommandsQueryResult = Apollo.QueryResult<
  GetAllCommandsQuery,
  GetAllCommandsQueryVariables
>;
