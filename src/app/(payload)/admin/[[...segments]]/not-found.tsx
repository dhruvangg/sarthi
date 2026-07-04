import { NotFoundPage } from '@payloadcms/next/views'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'

import { importMap } from '../importMap'

const serverFunction = async function (args: any) {
  'use server'
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  })
}

export default function NotFound() {
  return <NotFoundPage config={configPromise} importMap={importMap} serverFunction={serverFunction} />
}
