import json
import re

#第一題
# 超過18歲關鍵字
# 18 years old 
# college student 
# legal age 
# vote 
def openFile(file):
    with open (file,mode="r") as file:
        data=json.load(file)
        return data

def find_and_print(messages):
    for name in messages:
        if 'years old' in messages[name]:
            arr=messages[name].split()
            for index,content in enumerate(arr):
                if content=='years':
                    age=arr[index-1]
                    if int(age)>=18:
                        print(name)
        if 'college student' in messages[name]:
            print(name)
        if 'legal age' in messages[name]:
            print(name)
        if 'vote' in messages[name]:
            print(name)
    print()
print('=== Answer 1 ===')
find_and_print(openFile("question1.json"))




#第二題
# 以薪水比例為獎金標準：
# 職位加給：CEO和業務 為薪水的0% ，工程師為薪水的10%
# 績效加給：above average:獎金為2000 ，average:獎金為1000，below average:獎金為0
def calculateSumOfBonus(file):
    data=openFile(file)
    import re
    #資料清理
    for information in data['employees']:
        #1 美元 =30 新台幣，'USD'清理 轉換資料型態
        if 'USD' in str(information['salary']):
            information['salary'] = re.sub(r'\D+','', information['salary'])
            information['salary'] = int(information['salary']) * 30
        #','清理 轉換資料型態
        if ',' in str(information['salary']):
            information['salary'] = re.sub(r'\,','', information['salary'])

        #職位加給
        information['bouns']=0
        if information['role']=='CEO' or information['role']=='Sales':
            information['bouns']=information['bouns']+(int(information['salary'])*0)
        if information['role']=='Engineer':
            information['bouns']=information['bouns']+(int(information['salary'])*0.1)
        
        #績效加給
        if information['performance']=='above average' :
            information['bouns']=information['bouns']+2000
        if information['performance']=='average':
            information['bouns']=information['bouns']+1000
        if information['performance']=='below average':
            information['bouns']=information['bouns']+0
    return data
    
print('=== Answer 2 ===')
answer2=calculateSumOfBonus("question2.json")
sum=0
for detil in answer2['employees']:
    sum+=detil['bouns']
print(f"總獎金:新台幣{sum}元")



#第三題
#找出所有名字中誰的中間名是唯一的。 
#假設每輸入一個人輸入2~3個字的中文名字。
#如果名稱中只有 2 個單詞，中間名被定義為第二個詞。
def func(*names):
    dic = {}
    for name in names:
        if name[1] not in dic:
            dic[name[1]] = 0
        else:
            dic[name[1]] = 1
    find=False
    for name in names:
        if dic[name[1]] ==0:
            find=True
            print(name,end=" ")
    if find==False:
        print('沒有')
    print()
print('=== Answer 3 ===')
func("彭⼤牆", "王明雅", "吳明")
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花")
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花")

#第四題
#找出序列的第n項
def get_number(index):
    total=0
    data=[]
    for i in range(index+1):
        if i==0:
            data.append(total)
        elif i%2!=0:
            total+=4
            data.append(total)
        
        else:
            total-=1
            data.append(total)
    print(data[index])


print('=== Answer 4 ===')
get_number(1)
get_number(5)
get_number(10)
print() 

#第五題
def find_index_of_car(seats, status, number):
    min_index = None
    min_number = float('inf')

    for index, (seat, stat) in enumerate(zip(seats, status)):
        if stat != 0 and seat >= number and min_number >seat:
            min_number = seat
            min_index = index

    if min_index is not None:
        print(min_index)
    else:
        print(-1)

print('=== Answer 5 ===')
find_index_of_car([3, 1, 5, 4, 2], [0, 1, 0, 1, 1], 2) 
find_index_of_car([1, 0, 5, 1, 3], [0, 1, 0, 1, 1], 4) 
find_index_of_car([4, 6, 5, 8], [0, 1, 1, 1], 4)
print() 