/*
 * Copyright (c) 2020-2021 Cynthia K. Rey, All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import type { RoutableProps } from 'preact-router'
import { h } from 'preact'
import { useMemo } from 'preact/hooks'
import { useTitle, useMeta } from 'hoofd/preact'
import { Platforms } from '@shared'

function Supported (_: RoutableProps) {
  useTitle('Supported Platforms')
  useMeta({ name: 'og:title', content: 'Supported Platforms' })

  const [ supported, soon ] = useMemo(() => {
    const supported: string[] = []
    const soon: string[] = []
    Object.values(Platforms).forEach((v) => v.soon ? soon.push(v.name) : supported.push(v.name))
    return [ supported, soon ]
  }, [])
  
  return (
    <div>
      <div className='page-context'>About PronounDB</div>
      <h2>Supported platforms</h2>
      <p>
        PronounDB aims to support a wide range of platforms, to help as many people as possible to share their pronouns
        online. Here's the list of services supported, previews are coming soon!
      </p>
      <ul>
        {supported.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <p>
        Support coming soon:
      </p>
      <ul>
        {soon.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <p>
        Want to see another service supported? Shoot an issue on the issue tracker!
      </p>
    </div>
  )
}

Supported.displayName = 'Supported'
export default Supported
