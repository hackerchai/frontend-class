import Image from 'next/image'
import exImage from '../../../public/images/messi.jpeg'


export default function ch_03() {
    return (
        <div className="grid md:grid-cols-2 gap-6 md:grid-cols-2">
            <div>
                <section className="mb-6">
                    <h2 className="mb-3 text-xl font-bold">球王是谁?</h2>

                    <p>
                        <a href="https://baike.baidu.com/item/%E5%88%A9%E6%98%82%E5%86%85%E5%B0%94%C2%B7%E6%A2%85%E8%A5%BF/3965248">梅西</a> 利昂内尔·安德烈斯·&quot;利奥&quot;·梅西·库西提尼（西班牙语：Lionel Andrés &quot;Leo&quot; Messi Cuccittini，西班牙语发音：[ljoˈnel anˈdɾes ˈmesi] （关于这个音频文件 聆听）；1987年6月24日－），简称梅西，生于阿根廷圣菲省罗萨里奥，现正效力于法甲球会巴黎圣日耳门，同时担任阿根廷国家足球队队长，司职翼锋、前锋及进攻中场。[2]目前他共获得7座金球奖、6次世界足球先生及6座欧洲金靴奖，3项均为世界记录。团体奖方面，他共获得10次西班牙甲组足球联赛冠军、4次欧洲冠军联赛冠军、1次奥运会足球赛冠军、1次美洲国家杯冠军、1次国际足联U-20世界杯冠军、2次南美超级德比杯冠军及2014年国际足协世界杯亚军。
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-xl font-bold">7获金球，前无古人</h2>
                    <p>
                    根据西媒消息，当地时间11月29日晚间，由《法国足球》杂志主办的金球奖年度颁奖盛典在法国巴黎举行，效力于巴黎圣日耳曼俱乐部的阿根廷球星莱昂内尔·梅西获得了象征2021年度最佳球员的金球奖，这是梅西职业生涯第7次收获这一奖项，再度刷新了由自己保持的赢得金球奖次数最多的纪录。梅西在2021年帮助巴塞罗那足球俱乐部赢得了西班牙国王杯冠军，并以队长身份帮助阿根廷国家队赢得了美洲杯冠军。2021年8月，梅西正式从巴塞罗那足球俱乐部转会至巴黎圣日耳曼足球俱乐部。
                    </p>
                </section>
            </div>

            <section className="mb-6">
                <Image src={exImage} width="1897" height="1384" alt="梅西"/>
            </section>
            <section>
                <embed src="/assets/barca.mp3" autostart="true" width="0" height="0"/>
            </section>
            <section>
                <marquee bgcolor="green" width="250" height="100" direction="up"><font 信息 color="white" size="6" center="center">梅西球王！！！</font></marquee>
            </section>

        </div>
    )
}