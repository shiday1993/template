q(function() {
    const $chartDom = q('#salesChart');
    if (!$chartDom) return;
    const myChart = echarts.init($chartDom[0]);
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
                'Senin', 'Selasa', 'Rabu', 'Kamis', 
                'Jumat', 'Sabtu', 'Minggu']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Penjualan',
                type: 'line',
                smooth: true,
                data: [120, 182, 191, 234, 290, 330, 310],
                areaStyle: {
                    opacity: 0.15
                },
                itemStyle: {
                    color: '#0d6efd'
                }
            }
        ]
    };
    myChart.setOption(option);
    q(window).on('resize', function() {
        myChart.resize();
    });
});
