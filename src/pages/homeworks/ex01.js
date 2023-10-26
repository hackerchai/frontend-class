import login from '../../styles/login.module.css'
import catImage from '../../../public/images/cat.png'
import Image from 'next/image'

export default function ex_01() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-end h-55px">
                <p className="text-xl mr-15 text-blue-600">返回</p>
            </div>
            <div className={login.content}>
                <Image src={catImage} alt="cat" className="rounded-xl" />
                <div className={login.form}>
                    <h2 className={login.header}>请登录</h2>
                    <form>
                        <input className={login.input} type="text" placeholder="用户名" />
                        <input className={login.input} type="password" placeholder="密码" />
                        <div className={login.btns}>
                            <button className={login.button} type="submit">登录</button>
                            <button className={login.button} type="reset">重置</button>
                        </div>
                    </form>
                </div>
                <div className={login.text}>
                    <a className={login.link} href="#">注册</a>
                    <span className={login.span}>|</span>
                    <a className={login.link} href="#">忘记密码</a>
                </div>
            </div>
        </div>
    )
}