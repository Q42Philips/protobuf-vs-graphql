import sys
import json
import random
import string

randomdata = []
amount = 100
messagesize = 100000

test = []
i = 0

for x in range (0, amount):
    randomdata.append(''.join(random.choices(string.ascii_uppercase + string.digits, k=messagesize)))
    test.append(json.dumps({"string" + str(i): randomdata[i]}))
    # print("string" + str(i) + ": String")
    # print("string" + str(i) + ",")
    i = i + 1

print(', '.join(test))

# print("The size is (in bytes per object): ")
# print(len(test[0].encode('utf-8')))
# print("The size is (in MegaBytes total): ")
# print(len(test[0].encode('utf-8')) * amount / 1000000)

# tip: if you don't want to manually copy paste use | pbcopy (for mac) or | xclip (for linux)