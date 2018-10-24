import matplotlib.pyplot as plt
import requests
import time
import argparse as ap
import matplotlib.mlab as mlab

plt.rcParams.update({
    "lines.color": "white",
    "patch.edgecolor": "white",
    "text.color": "white",
    "axes.facecolor": "white",
    "axes.edgecolor": "lightgray",
    "axes.labelcolor": "white",
    "xtick.color": "white",
    "ytick.color": "white",
    "grid.color": "darkgrey",
    "figure.facecolor": "black",
    "figure.edgecolor": "black",
    "savefig.facecolor": "black",
    "savefig.edgecolor": "black"})

parser = ap.ArgumentParser(description="JSON vs ProtoBuf timings")
parser.add_argument("--times")
args, leftovers = parser.parse_known_args()

if args.times is not None:
    itterations = int(args.times)
else: 
    itterations = 200

prototimes = []
jsontimes = []

fig = plt.figure()

for x in range(0, itterations):
    start = time.process_time()
    r = requests.get("http://localhost:6666") 
    totaltime = time.process_time() - start
    prototimes.append(totaltime*1000)

ax1 = fig.add_subplot(211)
n, bins, patches = plt.hist(prototimes, bins=100, density=1, alpha=0.75)

for x in range(0, itterations):
    start = time.process_time()
    r = requests.get("http://localhost:3333")
    totaltime = time.process_time() - start
    jsontimes.append(totaltime*1000)

ax2 = fig.add_subplot(212)
n, bins, patches = plt.hist(jsontimes, bins=100, density=1, alpha=0.75)

avaragetimejson = sum(jsontimes)/itterations
avaragetimeproto = sum(prototimes)/itterations
print("average json time is ", avaragetimejson)
print("average proto time is ", avaragetimeproto)

plt.xlabel("time (miliseconds)")

ax1.set_title("PROTO BUFFERS")
ax2.set_title("JSON")

ax1.axis([2.0, 6.0, 0, 10])
ax2.axis([2.0, 6.0, 0, 10])

ax1.grid()
ax2.grid()

plt.show()