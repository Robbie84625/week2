import {question1,question2} from "./data_json.js";
/*
#第一題
超過18歲關鍵字:
18 years old 
college student 
legal age 
vote
*/ 
function find_and_print(messages) {
for (let name in messages) 
    {
        if (messages[name].includes('years old')) 
        {
            let arr = messages[name].split(' ');
            for (let index=0;index<=arr.length;index++)
            {
                if(arr[index]=='years')
                {
                    let age=parseInt(arr[index-1])
                    if (age>=18)
                    {
                        console.log(name);
                    }
                }
            }
            
        }
        if (messages[name].includes('college student')) 
        {
        console.log(name);
        }
        if (messages[name].includes('legal age')) 
        {
        console.log(name);
        }
        if (messages[name].includes('vote')) 
        {
        console.log(name);
        }
    }
console.log();
}

console.log('=== Answer 1 ===');
find_and_print(question1);

/*
第二題
以薪水比例為獎金標準：
職位加給：CEO和業務為薪水的0% ，工程師為薪水的10%
績效加給：above average:獎金為2000 ，average:獎金為1000，below average:獎金為0
*/ 

function calculateSumOfBonus(data) 
{
    // 資料清理
    for (let information of data['employees']) 
    {
        //js 在迭代陣列使用for...of
        // 1 美元 = 30 新台幣，以'USD'清理 並轉換數據類型
        if (information['salary'].toString().includes('USD')) 
        {
            //假如匹配到非數字將被replace
            information['salary'] = information['salary'].replace(/\D+/g, '') * 30;
        }

        // ',' 清理轉換數據類型
        if (information['salary'].toString().includes(',')) 
        {
            information['salary'] = information['salary'].replace(/,/g, '');
        }

        // 職位加给
        information['bonus'] = 0;
        if (information['role'] === 'CEO' || information['role'] === 'Sales') 
        {
            information['bonus'] += parseInt(information['salary']) * 0;
        }
        if (information['role'] === 'Engineer') 
        {
            information['bonus'] += parseInt(information['salary']) * 0.1;
        }

        // 績效加给
        if (information['performance'] === 'above average')
        {
            information['bonus'] += 2000;
        }
        if (information['performance'] === 'average') 
        {
            information['bonus'] += 1000;
        }
        if (information['performance'] === 'below average') 
        {
            information['bonus'] += 0;
        }
    }
    return data;
}

console.log('=== Answer 2 ===');
let sum=0;
let answer2 = calculateSumOfBonus(question2);
for (let detail of answer2['employees']) {
    sum+=detail['bonus'];
};
console.log(`總獎金: 新台幣${sum}元`);

/*
第三題
找出所有名字中誰的中間名是唯一的。 
假設每輸入一個人輸入2~3個字的中文名字。
如果名稱中只有 2 個單詞，中間名被定義為第二個詞。
 */
function func(...names) 
{
    let dic = {};
    for (let name of names) 
    {
        //姓名第二個字在物件中為False(表示不再物件中)則放入物件，初始值為0
        //這個 !(name[1] in dic)等同於(name[1] in dic)===False
        if (!(name[1] in dic)) 
        {
            dic[name[1]] = 0;
        }
        //已在物件中，值為1
        else 
        {
            dic[name[1]] = 1;
        }
    }
    //宣告布林值
    let find = false;
    //遍歷無限參數name,在迭代陣列使用for...of
    for (let name of names) 
    {
        //已在物件中，值未被改為1，表示唯一
        if (dic[name[1]] === 0) 
        {
            //find改為True表示有找到
            find = true;
            console.log(name);
        }
    }
    //這個 !find等同於find===false表示沒有找到
    if (!find) 
    {
        console.log('沒有');
    }
    console.log();
}

console.log('=== Answer 3 ===');
func("彭⼤牆", "王明雅", "吳明");
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花");
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花");

/*第四題
找出序列的第n項
*/

function get_number(index) {
    let total = 0;
    let data = [];

    for (let i = 0; i <= index; i++) 
    {
        if (i === 0) 
        {
            //push 等同於python的append
            data.push(total);
        } 
        else if (i % 2 !== 0) 
        {
            total += 4;
            //push 等同於python的append
            data.push(total);
        } 
        else 
        {
            total -= 1;
            //push 等同於python的append
            data.push(total);
        }
    }

    console.log(data[index]);
}


console.log('=== Answer 4 ===');
get_number(1);
get_number(5);
get_number(10);

//第五題
function find_index_of_car(seats, status, number) {
    let min_index = null;
    //min_number=無限大
    let min_number = Infinity;

    for (let index = 0; index < seats.length; index++) {
        let seat = seats[index];
        let stat = status[index];

        if (stat !== 0 && seat >= number && min_number > seat) {
            min_number = seat;
            min_index = index;
        }
    }

    if (min_index !== null) {
        console.log(min_index);
    } else {
        console.log(-1);
    }
}

console.log('=== Answer 5 ===');
find_index_of_car([3, 1, 5, 4, 2], [0, 1, 0, 1, 1], 2);
find_index_of_car([1, 0, 5, 1, 3], [0, 1, 0, 1, 1], 4);
find_index_of_car([4, 6, 5, 8], [0, 1, 1, 1], 4);
console.log();

//找出清單或陣列中兩個整數的最大乘積，而無需使用bulit-in排序函數
function maxProduct(num){
    let max_number=-Infinity;
    for (let i of num){
        for(let j of num){
            if (max_number<(i*j) && (i!==j)){
                max_number=i*j
            }     
        }
    }  
    console.log(max_number)
}


console.log('=== Answer 6 ===')
maxProduct([5,20,2,6])
maxProduct([10,-20,0,3])
maxProduct([10,-20,0,-3])
maxProduct([-1,2])
maxProduct([-1,0,2])
maxProduct([5,-1,-2,0])
maxProduct([-5,-2])

//給定一個整數數組，顯示兩個數字的索引，使它們相加達到特定目標。
//您可以假設每個輸入都有一個解決方案，您不能兩次使用相同的元素。
function two_sum(nums,target){
    for(let index1=0;index1<=nums.length;index1++)
    {
        for(let index2=0;index2<=nums.length;index2++)
        {
            if (index1===index2){
                continue
            }
            else if((nums[index1]+nums[index2])===target)
            {
                return `show[${index1},${index2}] because nums[${index1}]+nums[${index2}] is ${target}`;
            }
        }
    }
}

console.log('=== Answer 7 ===');
let result=two_sum([2,11,7,15],9);
console.log(result);






