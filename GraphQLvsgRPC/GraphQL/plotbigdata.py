#!/usr/bin/env python

import matplotlib.pyplot as plt
import requests
import matplotlib.mlab as mlab
import time
import argparse as ap

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
    r = requests.post("http://localhost:4000/graphql", headers={"content-type":"application/json"}, data = {"query":"{ data {string1, string2, string3, string4, string5, string6, string7, string8, string9, string10, string11, string12, string13, string14, string15, string16,string17, string18, string19, string20, string21, string22, string23, string24, string25, string26, string27, string28, string29, string30, string31, string32, string33, string34, string35, string36, string37, string38, string39, string40, string41, string42, string43, string44, string45, string46, string47, string48, string49, string50, string51, string52, string53, string54, string55, string56, string57, string58, string59, string60, string61, string62, string63, string64, string65, string66, string67, string68, string69, string70, string71, string72, string73, string74, string75, string76, string77, string78, string79, string80, string81, string82, string83, string84, string85, string86, string87, string88, string89, string90, string91, string92, string93, string94, string95, string96, string97, string98, string99,}" }) 
    totaltime = time.process_time() - start
    graphtimes.append(totaltime*1000)

n, bins, patches = plt.hist(graphtimes, bins=200, density=1, alpha=0.75)

avaragetimegraph = sum(graphtimes)/itterations
print("average GraphQL time is ", avaragetimegraph)

plt.xlabel("time (miliseconds)")

plt.title("GraphQL BIG DATA")

plt.axis([2.0, 8.0, 0, 1.2])

plt.grid()

plt.show()
