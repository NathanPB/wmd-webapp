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

import React from 'react';

import Styles from './index.module.scss';
import {useUserProfile} from "../../../hooks/useUserProfile";

export default function UserProfileCard({ uid, header, onClick }) {

  const [userData] = useUserProfile(uid)

  if (!userData) {
    return null
  }

  return (
    <div className={Styles.Card} onClick={onClick}>
      <img
        alt={userData?.name}
        className={Styles.Cover}
        src={userData?.photoURL}
      />
      <div className={Styles.Header}>{ header || null }</div>
      <span
        style={userData.nickname.length > 15 ? { fontSize: '.7rem' } : undefined}
        className={Styles.Nickname}
      >
        {userData?.nickname}
      </span>
    </div>
  )
}
