import matplotlib.pyplot as plt
import matplotlib.mlab as mlab
import numpy as np

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

fig = plt.figure()

# use pandas to clean this mess up if you have some spare time

# list of strings
timesstrings = [line.rstrip('\n') for line in open('resultsbigdata.txt')]
# array of strings
timesstringarray = np.asarray(timesstrings)
# array of floats
timesarray = [float(numeric_string) for numeric_string in timesstringarray]

filteredarray = [x for x in timesarray if x < 1.0 ]    

itterations = len(filteredarray)

binitter = itterations / 10

n, bins, patches = plt.hist(filteredarray, bins=int(binitter), density=1, alpha=0.75)
avaragetime = sum(filteredarray) / float(len(filteredarray))

print("average gRPC time is ", avaragetime)

plt.xlabel("time (miliseconds)")

plt.title("gRPC BIG DATA")

plt.axis([0, 1, 0, 10])

plt.grid()

plt.show()
