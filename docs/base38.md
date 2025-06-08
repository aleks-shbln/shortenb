# Base38 numbers

Let's have identifier as an integer which grows from 1 and then converted to base38 and stored as a string. Base38 is an encoding which consists of character "a–z, 0–9, -, _".

This will allow to have 9 007 199 254 740 992 identifiers with standard JS 'number' primitive. With translation to base38 it will be only 11 characters long string. Still short enough to serve as a short link.

### base10 - base38

00 - 0
01 - 1
02 - 2
03 - 3
04 - 4
05 - 5
06 - 6
07 - 7
08 - 8
09 - 9
10 - a
11 - b
12 - c
13 - d
14 - e
15 - f
16 - g
17 - h
18 - i
19 - j
20 - k
21 - l
22 - m
23 - n
24 - o
25 - p
26 - q
27 - r
28 - s
29 - t
30 - u
31 - v
32 - w
33 - x
34 - y
35 - z
36 - -
37 - _
38 - 10

