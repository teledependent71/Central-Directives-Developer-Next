import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Central Directives Developer</title>
          <meta
            property="og:title"
            content="test-page - Central Directives Developer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_15c7v4) => (
            <>
              <h1>{context_15c7v4?.Name}</h1>
            </>
          )}
          initialData={props.context15c7v4Prop}
          persistDataDuringLoading={true}
          key={props?.context15c7v4Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context15c7v4Prop = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        context15c7v4Prop: context15c7v4Prop?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
