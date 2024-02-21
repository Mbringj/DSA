def factorilal(n):
  if n <= 1:
    return 1
  else:
    return n*factorilal(n-1)

num = factorilal(5)

print(num)

def printFunction(n):
  if n ==0:
    return 0
  else:
    print(n)
    printFunction(n-1)

print(printFunction(5))
