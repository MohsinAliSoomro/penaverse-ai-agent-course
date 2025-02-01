
def add(f:int,s:int)->int:
    # docs
    """
    Add two number and return SUM of them
        arg:
            f int
            s int
        return:
            int
    """
    return f+s

result = add(10,20)
# print(result)



list = [2,3,4,5,6,7,8,9]
# nlist = []
def square(n:int):
    return n * 2

# for element in list:
#     result = square(element)
#     nlist.append(result)
# print(nlist)

# list comprehensive
nlist = [x*x for x in list if x > 5]
print(nlist)

# for element in list:
#     if element > 5:
#         result = square(element)
#         nlist.append(result)
# print(nlist)

