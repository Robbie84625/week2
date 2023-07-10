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
        if (messages[name].includes('18 years old')) 
        {
        console.log(name);
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
職位加給：CEO和業務獎金為薪水的0% ，工程師獎金為薪水的10%
績效加給：above average:獎金為2000 ，average:獎金為1000，below average:獎金為0
*/ 

function calculateSumOfBonus(data) 
{
    // 資料清理
    for (let information of data['employees']) 
    {
        // 1 美元 = 30 新台幣，以'USD'清理 並轉換數據類型
        if (information['salary'].toString().includes('USD')) 
        {
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
        if (!(name[1] in dic)) 
        {
            dic[name[1]] = 0;
        } else 
        {
            dic[name[1]] = 1;
        }
    }
    let find = false;
    for (let name of names) 
    {
        if (dic[name[1]] === 0) 
        {
            find = true;
            console.log(name);
        }
    }
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
            data.push(total);
        } 
        else if (i % 2 !== 0) 
        {
            total += 4;
            data.push(total);
        } 
        else 
        {
            total -= 1;
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







