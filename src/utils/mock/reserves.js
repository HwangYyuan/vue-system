import Mock from 'mockjs';
var Random = Mock.Random;
var arr = ["0001","0002","0003","0004"]
var dataList = [];
var name = ['hipop']
for(let i = 0;i<100;i++){
    var info = Mock.mock({
        "idNumber": /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        "reservePhone": /^1(3|4|5|6|7|8|9)\d{9}$/,
        "reserveStatus|0-2": 1,
        "signStatus|1": arr,
        "reserveName": '@cname',
        "doctorName" : '@cname',
        "reserveStart": Random.date(),
        "reserveEnd": Random.date(),
        "reserveRemark": Random.word()
    })
    dataList.push(info)
}
Mock.mock('/api/getReserve','post',(params) => {
    let info = JSON.parse(params.body);
    let [index,size,total] = [info.current,info.pageSize,dataList.length];
    let len = total / size;
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    var newDataList = dataList.slice(index * size, (index + 1) * size);
    return {
        'code': '0',    
        'message': 'success',   
        'data': {
          'current': index,
          'pageSize': size,
          'results': newDataList,
          'total': total,
          'totalPages': totalPages
        }
    }
})
