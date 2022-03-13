
import Image from 'next/image'

export default function ch_03() {
    return (
        <div className="grid md:grid-cols-2 gap-6 md:grid-cols-2">
            <div>
                <section className="mb-6">
                    <h2 className="mb-3 text-xl font-bold">蛤是谁?</h2>

                    <p>
                        <a href="https://baike.baidu.com/item/%E6%B1%9F%E6%B3%BD%E6%B0%91/115299">江泽民</a>（1926年8月17日－），男，汉族，祖籍安徽省徽州府婺源县江湾，江苏省扬州市人。1943年考入中央大学电机工程系二年级（今南京大学）并开始参加地下党领导的学生运动，1946年4月加入中国共产党，1947年毕业于上海交通大学电机系。曾任中华人民共和国最高领导人，中国共产党中央委员会总书记、中华人民共和国主席、中国共产党中央军事委员会主席、中华人民共和国中央军事委员会主席，中国共产党中央政治局委员、常委等职务。
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-xl font-bold">为什么香港记者跑得快?</h2>
                    <p>
                        江泽民怒斥香港记者，指2000年10月27日，香港有线电视女记者张宝华在记者会上詢問时任中共中央总书记、中国国家主席江泽民是否钦点董建华两年後连任香港特别行政区行政长官，江泽民不满「钦点」一词，澄清自己只是「支持」，並斥责张宝华之事。最终2002年香港行政長官選舉董建华自动当选。此事對膜蛤文化影響甚深。
                    </p>
                </section>
            </div>

            <section className="mb-6">
                <Image src="/images/ta.jpg" width="200" height="200" /><br />
            </section>
            <section>
                <embed src="/assets/jounalist.mp3" autostart="true" />
            </section>
            <section>
                <marquee bgcolor="green" width="285" height="100" direction="up"><font 信息 color="white" size="6" center="center">我给长者续一秒+1s</font></marquee>
            </section>

        </div>
    )
}