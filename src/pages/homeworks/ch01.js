import Image from 'next/image'
import blogImage from '../../../public/images/blog.svg'
import githubImage from '../../../public/images/github.svg'

export default function ch_01() {
    return (
        <div className="flex flex-col justify-center space-y-3">
            <h1>Hey there! I am Eason Chai.</h1>
            <blockquote>
                <p>War is peace. Freedom is slavery. Ignorance is strength. ― George Orwell, 1984</p>
            </blockquote>
            <h2>About me</h2>
            <p>Also known as <code>Hackerchai</code>.</p>
            <p>Undergraduate at Chongqing University. I am a backend developer as well as a Barcelona fans. Besides, I am also
                an open-source enthusiast and <a href="https://summerofcode.withgoogle.com/projects/#5810607317581824">GSoC 2020
                    Student</a>. I speak Chinese and English.</p>
            <p>I am focusing on these social issues: <code>Human Rights</code>, <code>Liberty</code>, <code>Privacy</code>,
                <code>Copyright</code>, <code>Information transparency</code>.</p>
            <p><a href="https://github.com/hackerchai"><Image
                src={githubImage} width="93" height="28" alt="Github"/></a> <a
                    href="https://blog.hackerchai.com"><Image
                        src={blogImage} width="77" height="28" alt="Blog"/></a></p>
            <h2>Coding</h2>
            <p>I am using these program languages and tools:</p>
            <ul>
                <li>
                    <p>🛠️ Rust | Java | PHP | Python</p>
                </li>
                <li>
                    <p>🖥️ MacOS | Arch Linux | Kali Linux | Zsh | KDE</p>
                </li>
                <li>
                    <p>⚙️️ VSCode | Vim | Jetbrains | 4 Spaces for Tab</p>
                </li>
                <li>
                    <p>📱️ LineageOS | Magisk | Xposed</p>
                </li>
            </ul>
            <p>I am working on these open-source projects:</p>
            <ul>
                <li>
                    <p><a href="https://casbin.org">Casbin</a>: <a href="https://github.com/casbin-rs/actix-casbin-auth">Actix
                        Casbin Middleware</a> | <a href="https://github.com/casbin-rs/actix-casbin">Actix Casbin Actor</a> |
                        <a href="https://github.com/casbin-rs/diesel-adapter">Casbin Diesel Adapter</a> | <a
                            href="https://github.com/casbin-rs/sqlx-adapter">Casbin Sqlx Adapter</a></p>
                </li>
                <li>
                    <p><a href="https://github.com/hackerchai/Magisk-Revoke-China-Certs">Magisk-Revoke-China-Certs</a>: Revoke
                        risky Chinese certificates in case of potential security and censorship problem</p>
                </li>
                <li>
                    <p><a href="https://github.com/hackerchai/ds1302-stc15-clock">ds1302-stc15-clock</a>: Self-designed clock
                        pcb using DS1302 and LED lights</p>
                </li>
                <li>
                    <p><a href="https://github.com/hackerchai/soccer_dog_reminder">Soccer Dog Reminder</a>: A script can remind
                        you to watch football games written by Python</p>
                </li>
                <li>
                    <p><a href="https://github.com/hackerchai/docker-rust-web">Docker Rust Web</a>: Docker-compose script for
                        Rust Web development</p>
                </li>
                <li>
                    <p><a href="https://github.com/hackerchai/arduino-1602-gps-clock">Arduino GPS Clock</a>: Extremely accurate
                        clock using GPS with 1602 display screen</p>
                </li>
            </ul>
            <p>I contribute to open-source organizations:</p>
            <ul>
                <li><a href="https://github.com/casbin">Casbin</a> | <a href="https://github.com/casbin-rs">Casbin-RS</a> | <a
                    href="https://mirrors.cqu.edu.cn/">CQU-Mirror</a> | <a href="https://github.com/MSC-CQU">MSC-CQU</a> |
                    <a href="https://github.com/OpeningSourceORG">OpenningSourceORG</a></li>
            </ul>
            <h2>Where to find me</h2>
            <ul>
                <li>
                    <p>Email - <a href="mailto:i@hackerchai.com">i@hackerchai.com</a></p>
                </li>
                <li>
                    <p>Matrix - @eason:mozilla.org</p>
                </li>
                <li>
                    <p>Telegram - @hackerchai</p>
                </li>
                <li>
                    <p>Twitter - <a href="https://twitter.com/hackerchaiX">@HackerchaiX</a></p>
                </li>
                <li>
                    <p>Mastodon - <a href="https://sn.angry.im/@hackerchai">@hackerchai@sn.angry.im</a></p>
                </li>
                <li>
                    <p>V2EX - <a href="https://www.v2ex.com/member/Hackerchai">Hackerchai</a></p>
                </li>
                <li>
                    <p>Weibo - <a href="https://weibo.com/hackerchai">Hackerchai</a></p>
                </li>
                <li>
                    <p>Zhihu - <a href="http://www.zhihu.com/people/chai-yi-cheng-11/">Hackerchai</a></p>
                </li>
            </ul>
            <h2>GPG</h2>
            <p>You can find me at <a href="https://keybase.io/hackerchai">Keybase@hackerchai</a>. And my public key can be
                accessed here <a href="https://hackerchai.com/pgp_keys.asc">C8F8CE8A31B9CB559D8A555B8D63427716F4A85A</a>.</p>
            <p>My proof of this domain can be accessed here <a href="https://hackerchai.com/keybase.txt">keybase.txt</a></p>
        </div>
    )
}  