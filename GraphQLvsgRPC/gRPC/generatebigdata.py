import sys
import json
import random
import string

amount = 100
messagesize = 10000

randomdata = []
i = 0

for x in range (0, amount):
    randomdata.append(''.join(random.choices(string.ascii_uppercase + string.digits, k=messagesize)))
    print("string" + str(i) + ": \"" + randomdata[i] + "\",")
    # print("string " + "string" + str(i) + " = " + str(i) + ";")
    i = i + 1

# print("The size is (in bytes per object): ")
# print(len(randomdata[0].encode('utf-8')))
# print("The size is (in MegaBytes total): ")
# print(len(randomdata[0].encode('utf-8')) * amount / 1000000)

# tip: if you don't want to manually copy paste use | pbcopy (for mac) or | xclip (for linux)