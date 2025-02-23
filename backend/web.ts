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

import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import type { ComponentType } from 'preact'
import { randomBytes } from 'crypto'
import { h } from 'preact'
import { render } from 'preact-render-to-string'
import fetchExtVersions from './extension'

let manifest: Record<string, string>
let integrity: Record<string, string>
let Html: ComponentType<any>

if (__filename.endsWith('ts')) {
  manifest = require('../dist/manifest.webpack.json')
  integrity = require('../dist/integrity.webpack.json')
  Html = require('../dist/build/html').default
} else {
  manifest = require('./manifest.webpack.json')
  integrity = require('./integrity.webpack.json')
  Html = require('./build/html').default
}

let usersCount: number | null = null
export default async function (this: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
  if (!usersCount) {
    usersCount = await this.mongo.db!.collection('accounts').countDocuments()
    setTimeout(() => (usersCount = null), 3600e3)
  }

  const count = usersCount as number
  const admin = Boolean((request as any).user?.admin)
  const nonce = randomBytes(16).toString('hex')
  const extVersions = await fetchExtVersions()
  reply.type('text/html')
    .header('x-powered-by', 'potatoes')
    .header('x-frame-options', 'DENY')
    .header('content-security-policy', `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net;`)
    .send(`<!doctype html>${render(h(Html, { nonce, count, admin, manifest, integrity, extVersions, url: request.url }))}`)
}
