""" Start of class """
class Student:
    """ Constructor """
    def __init__(self,name,age):
        print(type(self))
        self.name = name
        self.age = age
        print("run constructor")
    
    """ Get User Info """
    def get_info(self):
        print(f"Name {self.name} and age {self.age}")

    """ Update user Age """
    def update_age(self,age:int):
        self.age = age
    
    """ Update user name """
    def update_name(self,name:str):
        self.name = name

""" End of class """


s1 = Student("Mohsin",27)
s2 = Student("Ali",28)

s1.update_age(30)
s2.update_name("Soomro")


s1.get_info()
s2.get_info()