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

import { h } from 'preact'
import { useTitle, useMeta } from 'hoofd/preact'
import type { RoutableProps } from 'preact-router'

function Privacy (_: RoutableProps) {
  useTitle('Privacy Policy')
  useMeta({ name: 'og:title', content: 'Privacy Policy' })

  return (
    <div className='justified'>
      <div className='page-context'>Legal</div>
      <h2>Privacy Policy</h2>
      <p>Last edited: December 13, 2020</p>

      <p>
        pronoundb.org automatically collect various metadata sent by your web browser: IP address, browser information,
        operating system information, timestamp of your visits, pages visited. This data is only kept for seven days
        and is only used for debugging and troubleshooting purposes. None of this data will be ever shared or sold.
      </p>
      <p>
        pronoundb.org lets you connect to external accounts using the OAuth authentication standard. When connecting
        an external account, pronoundb.org will collect the external account's unique identifier, as well as the
        account's display name on the external platform. You may require the removal of this data directly on the
        website, by pressing the "Unlink" button next to them, in "My account". In some circumstances, as for example
        when you only have a single account linked, not be presented with the "Unlink" option. In this case, your
        only solution is to delete your account.
      </p>
      <p>
        pronoundb.org lets you submit some data through the website. All of the data you submit will be collected and
        stored. You can update it or remove it at any time on the website. You may during your use of pronoundb.org
        be invited to input information regarding your gender identity. By submitting any information on the website,
        you consent to your data to be stored and processed by pronoundb.org to provide its service.
      </p>
      <p>
        Third parties will be able to lookup the information you submitted on the website based on your linked
        external accounts. Third parties will not be able to enumerate your linked accounts, and absolutely no
        information provided by pronoundb.org can be used to personally identify you.
      </p>
      <p>
        pronoundb.org may distribute aggregated information, such as the total user count or some statistics about
        website usage, or percentages about the user repartition. In all cases, pronoundb.org will never specify who
        is included in aggregated information.
      </p>
      <p>
        You may request the entire removal of your data from pronoundb.org's servers by deleting your account. Your
        data will be dropped immediately, but may still live for an additional thirty days on our servers in the
        form of database backups.
      </p>
      <p>
        Those policies may be revised at any time and your continued use of the service will be regarded as acceptance
        of the new policies.
      </p>
    </div>
  )
}

Privacy.displayName = 'Privacy'
export default Privacy
