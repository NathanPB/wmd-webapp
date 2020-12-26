/*
 * Copyright (c) 2020 - Nathan P. Bombana
 *
 * This file is part of Wheres My Duo.
 *
 * Wheres My Duo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wheres My Duo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Wheres My Duo.  If not, see <https://www.gnu.org/licenses/>.
 */

import {ApolloClient, InMemoryCache} from "@apollo/client";

export function createClient(apiKey) {
  return new ApolloClient({
    uri: `${process.env.REACT_APP_API_BASE_URL}/graphql`,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV === 'development',
    queryDeduplication: true,
    headers: {
      Authorization: apiKey
    }
  })
}
