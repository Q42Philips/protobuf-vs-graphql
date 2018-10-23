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

parser = ap.ArgumentParser(description="GraphQL times")
parser.add_argument("--times")
args, leftovers = parser.parse_known_args()

if args.times is not None:
    itterations = int(args.times)
else: 
    itterations = 1000

graphtimes = []

fig = plt.figure()

for x in range(0, itterations):
    start = time.process_time()
    r = requests.post("http://localhost:4000/graphql", headers={"content-type":"application/json"}, data = {"query": "{ data{testint, teststring, testdate, teststring2, testbool}" }) 
    totaltime = time.process_time() - start
    graphtimes.append(totaltime*1000)

n, bins, patches = plt.hist(graphtimes, bins=200, density=1, alpha=0.75)

avaragetimegraph = sum(graphtimes)/itterations
print("average GraphQL time is ", avaragetimegraph)

plt.xlabel("time (miliseconds)")

plt.title("GraphQL")

plt.axis([2.0, 6.0, 0, 5])

plt.grid()

plt.show()