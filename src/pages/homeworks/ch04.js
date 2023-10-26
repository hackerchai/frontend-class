export default function ch_04() {
    return (
        <div className="flex flex-col items-center space-y-5">
            <table className="border-separate border border-slate-500 shadow-lg bg-white">
                <caption>课程表</caption>
                <tr align="center">
                    <th className="bg-blue-100 border text-left px-8 py-4">节次</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">周一</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">周二</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">周三</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">周四</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">周五</th>
                </tr>
                <tr className="border border-slate-600 content-center">
                    <td className="border px-8 py-4">第1-2节</td>
                    <td className="border px-8 py-4"></td>
                    <td className="border px-8 py-4">大学物理</td>
                    <td className="border px-8 py-4">网球</td>
                    <td className="border px-8 py-4">大学物理</td>
                    <td className="border px-8 py-4">高等数学</td>
                </tr>
                <tr className="border border-slate-600 content-center">
                    <td className="border px-8 py-4">第3-4节</td>
                    <td className="border px-8 py-4">Web前端开发技术</td>
                    <td className="border px-8 py-4">大学外语</td>
                    <td className="border px-8 py-4">高等数学</td>
                    <td className="border px-8 py-4">Web前端开发技术</td>
                    <td className="border px-8 py-4">线性代数</td>
                </tr>
                <tr className="border border-slate-600 content-center">
                    <td className="border px-8 py-4">第5-6节</td>
                    <td className="border px-8 py-4">线性代数</td>
                    <td className="border px-8 py-4">中国近代史纲要</td>
                    <td className="border px-8 py-4">大学生职业生涯规划</td>
                    <td className="border px-8 py-4">军事理论</td>
                    <td className="border px-8 py-4">大学外语</td>
                </tr>
                <tr className="border border-slate-600 content-center">
                    <td className="border px-8 py-4">第7-8节</td>
                    <td className="border px-8 py-4">高等数学</td>
                    <td className="border px-8 py-4">面向对象程序设计</td>
                    <td className="border px-8 py-4"></td>
                    <td className="border px-8 py-4">面向对象程序设计</td>
                    <td className="border px-8 py-4">中国近代史纲要</td>
                </tr>
            </table>
            </div>
    )
}