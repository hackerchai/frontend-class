export default function ch_08() {
    if (typeof window === 'object') {
        var i, sum = 0;
        for (i = 1; i <= 100; i++) {
            sum = sum + i;
        }
        document.write("1~100的和为" + sum);
        for (i = 1; i <= 100; i++) {
            sum = sum + i;
        }
        console.log('1~100的和为' + sum);
        for (i = 1; i <= 100; i++) {
            sum = sum + i;
        }
        alert("1到100的和为:" + sum);
    }
    return (
        <div className="flex flex-col justify-center space-y-5"> /</div>
    )
}