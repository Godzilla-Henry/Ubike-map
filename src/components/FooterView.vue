<template>
    <footer id="site-footer">
        <section class="horizontal-footer-section" id="footer-top-section">
            <div id="footer-logo">
                <picture>
                    <img :src="require('@/assets/ubike.png')" alt="LOGO">
                </picture>
            </div>
            <div id="footer-top-menu-container" role="menubar">
                <ul id="footer-top-menu" role="menu">
                    <li class="footer-top-menu-item footer-top-menu-item-active" role="menuitem">
                        <a href="#" class="footer-top-menu-link">Front End</a>
                    </li>
                    <li class="footer-top-menu-item" role="menuitem">
                        <a href="#" class="footer-top-menu-link">UI/UX</a>
                    </li>
                </ul>
            </div>
            <div id="footer-buttons-container">
                <a href="#" class="footer-button" role="button">專案連結</a>
            </div>
        </section>
        <section class="horizontal-footer-section" id="footer-middle-section">
            <div id="footer-about" class="footer-columns footer-columns-large">
                <h1>資訊</h1>
                <address>
                    <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png">koberidiculous@gmail.com</p>
                </address>
            </div>
            <div class="footer-columns">
                <h1>參考</h1>
                <ul class="footer-column-menu" role="menu">
                    <li class="footer-column-menu-item" role="menuitem">
                        <a href="#" class="footer-column-menu-item-link">Link</a>
                    </li>
                </ul>
            </div>
            <div class="footer-columns">
                <h1>其他專案</h1>
                <ul class="footer-column-menu" role="menu">
                    <li class="footer-column-menu-item" role="menuitem">
                        <a href="#" class="footer-column-menu-item-link">Other</a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="horizontal-footer-section" id="footer-bottom-section">
            <div id="footer-copyright-info">
                &copy; Henry Inc. 2022. All rights reserved.
            </div>
            <div id="footer-social-buttons">
                <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"/>
                <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"/>
                <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"/>
                <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"/>
            </div>
        </section>
    </footer>
</template>

<style lang="css" scoped>
    footer#site-footer {
        margin: 0 auto;
        width: 100%;
        background: #914e1f;
        padding: 10px 1.5rem;
        color: #e0e0e0;
    } 

    footer#site-footer a {
        color: #e0e0e0;
    }

    footer#site-footer a:hover {
        color: #fff;
    }

    footer#site-footer h1 {
        color: #cecece;
    }

    footer#site-footer section.horizontal-footer-section {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 2.38rem 2rem;
    }

    footer#site-footer section.horizontal-footer-section#footer-top-section {
        justify-content: center;
    }

    footer#site-footer #footer-logo {
        margin-right: auto;
        flex-shrink: 0;
    }

    footer#site-footer #footer-logo img {
        height: 4rem;
    }

    footer#site-footer ul#footer-top-menu {
        padding: 0;
        margin: 0;
    }

    footer#site-footer ul#footer-top-menu li {
        display: inline;
        list-style-type: none;
        margin-right: 1.32rem;
        font-weight: bold;
    }

    footer#site-footer ul#footer-top-menu li a {
        text-decoration: none;
    }

    footer#site-footer .footer-top-menu-item-active {
        position: relative;
    }

    footer#site-footer .footer-top-menu-item-active a {
        color: #fff;
    }

    footer#site-footer .footer-top-menu-item-active a:hover {
        color: #fff;
    }

    footer#site-footer .footer-top-menu-item-active::before {
        content: "";
        background: #f7d494;
        padding: 0.15rem 0;
        width: 100%;
        position: absolute;
        top: 1.68em;
    }

    footer#site-footer .footer-top-menu-item-active:hover::before {
        background: #fff;
        transition-duration: 0.6s;
    }

    footer#site-footer #footer-buttons-container {
        margin-left: auto;
        flex-shrink: 0;
    }

    footer#site-footer a.footer-button {
        background: transparent;
        border: 0.15rem solid #e0e0e0;
        border-radius: 1.38rem;
        padding: 0.5rem 1rem;
        font-weight: bold;
        text-decoration: none;
        display: inline-block;
    }

    footer#site-footer a.footer-button:hover {
        border-color: #fff;
    }

    footer#site-footer section.horizontal-footer-section#footer-middle-section {
        align-items: flex-start;
    }

    footer#site-footer .footer-columns {
        flex-basis: 18%;
        padding-right: 1rem;
    }

    footer#site-footer .footer-columns-large {
        flex-basis: 46%;
        padding-right: 2rem;
    }

    footer#site-footer .footer-columns h1 {
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 800;
    }

    footer#site-footer .footer-columns.footer-columns-large h1 {
        font-size: 1.28rem;
        margin-top: 3rem;
        margin-bottom: 1.32rem;
    }

    footer#site-footer .footer-columns.footer-columns-large h1:first-child {
        margin-top: 0;
    }

    footer#site-footer ul.footer-column-menu {
        margin: 0;
        padding: 0;
    }

    footer#site-footer ul.footer-column-menu li {
        list-style-type: none;
        margin-bottom: 0.68rem;
        font-size: 0.88rem;
    }

    footer#site-footer #footer-about address {
        font-style: normal;
        font-weight: bold;
    }

    footer#site-footer #footer-about address p img {
        margin-right: 0.68rem;
    }

    footer#site-footer #footer-about a.footer-button {
        margin-top: 0.32rem;
    }

    footer#site-footer section.horizontal-footer-section#footer-bottom-section {
        padding: 1.32rem 0;
        margin: 2rem 2rem 1.32rem 2rem;
        border-top: 0.05rem solid #666666;
    }

    footer#site-footer #footer-social-buttons {
        justify-self: flex-end;
        margin-left: auto;
    }

    footer#site-footer #footer-social-buttons img {
        margin-left: 0.68rem;
    }

    footer#site-footer #footer-social-buttons img:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 959px) {
        footer#site-footer {
            width: 100%;
        }

        footer#site-footer section.horizontal-footer-section {
            flex-direction: column;
            flex-wrap: wrap;
        }

        footer#site-footer section.horizontal-footer-section div {
            flex-basis: 100%;
            width: 100%;
        }

        footer#site-footer ul li {
            display: block !important;
            padding: 1em !important;
            border-top: 1px solid #555555;
            border-bottom: none;
            border-left: none;
            border-right: none;
            font-size: 1.15rem !important;
        }

        footer#site-footer ul li:first-child {
            border-top: none;
        }

        footer#site-footer a.footer-button {
            display: block;
            text-align: center;
            max-width: 350px;
            margin: 0.32rem auto;
        }

        footer#site-footer section.horizontal-footer-section#footer-top-section div {
            margin-top: 0;
            margin-bottom: 1.68rem;
        }

        footer#site-footer #footer-logo {
            margin-right: 0;
        }

        footer#site-footer #footer-buttons-container {
            margin-left: 0;
        }

        footer#site-footer ul#footer-top-menu {
            width: 100%;
            margin: 2rem 0 0 0;
        }

        footer#site-footer .footer-top-menu-item-active::before {
            display: none;
        }

        footer#site-footer #footer-about {
            margin-bottom: 3rem;
        }

        footer#site-footer .footer-columns-large,
        footer#site-footer .footer-columns {
            padding-right: 0;
        }

        footer#site-footer .footer-columns {
            margin-top: 0;
            margin-bottom: 4rem;
        }

        footer#site-footer .footer-columns:last-child {
            margin-bottom: 0;
        }

        footer#site-footer .footer-columns h1 {
            text-align: center;
            font-size: 1.3rem;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
        }

        footer#site-footer ul.footer-column-menu li {
            margin-bottom: 0;
            display: block;
            text-align: center;
        }

        footer#site-footer section#footer-bottom-section div {
            text-align: center;
        }

        footer#site-footer section.horizontal-footer-section#footer-bottom-section {
            margin: 1.32rem 0;
            padding: 0;
            border-top: 0;
        }

        footer#site-footer section#footer-bottom-section #footer-social-buttons {
            margin-top: 1.32rem;
        }
    }
</style>