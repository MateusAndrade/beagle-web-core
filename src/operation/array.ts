/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import isEqual from 'lodash/isEqual'
import find from 'lodash/find'
import remove from 'lodash/remove'

export default {
  insert: (array: any[], element: any, index?: number) => {
    const answer = [...array]
    if (index !== undefined) answer.splice(index, 0, element)
    else answer.push(element)
    return answer
  },
  remove: (array: any[], element: any) => {
    const answer = [...array]
    remove(answer, item => isEqual(item, element))
    return answer
  },
  removeIndex: (array: any[], index?: number) => {
    const answer = [...array]
    if (index !== undefined) answer.splice(index, 1)
    else answer.pop()
    return answer
  },
  includes: (array: any[], element: any) => !!find(array, (item: any) => isEqual(item, element)),
  union: (...arrays: any[][]) => arrays.reduce((result, current) => [...result, ...current], []),
}
