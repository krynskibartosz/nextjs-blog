/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Head from "next/head";
import Link from "next/link";

const name = "Krynszek";
export const siteTitle = "Next.js Sample Website";

const Layout = ({ children, home }) => (
  <div
    css={css`
      max-width: 36rem;
      padding: 0 1rem;
      margin: 3rem auto 6rem;
    `}
  >
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="learning NextJs" />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary-large-image" />
    </Head>
    <header
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {home ? (
        <>
          <img src="/images/profile.jpg" alt={name} />
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img src="/images/profile.jpg" alt={name} />
            </a>
          </Link>
          <h2>
            <Link href="/">
              <a>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
