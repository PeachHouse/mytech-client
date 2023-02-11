import { css } from '@emotion/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { colors } from '@/constants/colors'
import { ROUTING_PATH } from '@/routes'

const styles = {
  container: css`
    width: 90%;
    margin: auto;
    max-width: 640px;
    padding-top: 10%;
  `,

  neg: css`
    text-align: center;
    margin-bottom: 50px;
    color: $blue;
  `,

  bg: css`
    background: ${colors.gray};
    padding: 0 15px 2px 13px;
  `,

  nav: css`
    margin-top: 35px;
    text-align: center;
  `,

  link: css`
    text-decoration: none;
    padding: 0 9px 2px 8px;
    color: ${colors.red};
  `,
}

export const NotFoundPage: FC = () => {
  return (
    <main css={styles.container}>
      <h1 css={styles.neg}>
        <span css={styles.bg}>Error - 404</span>
      </h1>
      <p>An error has occurred, to continue:</p>
      <p>
        * Return to our homepage.
        <br />* Send us an e-mail about this error and try later.
      </p>
      <nav css={styles.nav}>
        <Link to={ROUTING_PATH.HOME} css={styles.link}>
          top
        </Link>
        &nbsp;|&nbsp;
        <a href='#' css={styles.link}>
          webmaster
        </a>
      </nav>
    </main>
  )
}
