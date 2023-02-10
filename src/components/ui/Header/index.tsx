/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { RiArticleLine, AiOutlineSearch, TbLogout } from "react-icons/all"
import { Notification } from "@/components/ui/Notification";

const headerStyles = {
    container: css `
      padding: 30px;
    `,
    navigation: css `
      display: flex;
      justify-content: space-between;
    `,
    list: css `
      display: flex;
      gap: 15px;
    `,
    icon: css `
      width: 70px;
      height: 70px;
    `
}

export const Header: FC = () => {
    return (
        <header css={headerStyles.container}>
            <nav css={headerStyles.navigation}>
                <h2>mytech</h2>
                <ul css={headerStyles.list}>
                    <li><AiOutlineSearch size={22}/></li>
                    <li><Notification size={22}/></li>
                    <li><RiArticleLine size={22}/></li>
                    <li><TbLogout size={22}/></li>
                </ul>
            </nav>
        </header>
    )
}
