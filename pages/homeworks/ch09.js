export default function ch_09() {
    if (typeof window === 'object') {
        var color = "";
        for (var i = 1; i <= 9; i++) {
            var out1 = "<div style='width:" + (i * 144) + "px;height:54px;'>";
            document.write(out1);

            for (var j = 1; j <= i; j++) {
                if (i == 5) {
                    color = "red";
                }
                else {
                    color = "blue";
                }
                var out2 = "<div id='aa' style='background-color:" + color + ";'>";
                document.write(out2);
                document.write(j + "&times;" + i + "=" + j * i);
                document.write("</div>");
            }
            document.write("</div>");
        }
    }
    return (<style jsx global>{`        
    #aa {
        float: left;
        width: 140px;
        height: 50px;
        margin: 2px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
    }`}</style>)
}