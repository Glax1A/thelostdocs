import random
characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','-','_','+','=','~','`']
cha = ''
ba=[]
for item in characters:
  cha+=item
print("characters: "+cha)
password = input("Enter a four digit password. ").lower()
guessing = True
x=0
q = 11
w=11
e=11
r=11
tens = 0
ones =1 
hundreds = 0
thousands = 0
while guessing:
  
  x+=1
  if r == 63:
    e+=1
    r=11
  if e == 63:
    w+=1
    e=11
  if w == 63:
    q+=1
    w=11

  guess =''
  a = characters[q-11]
  b = characters[w-11]
  c = characters[e-11]
  d = characters[r-11]
  guess +=a
  guess+=b
  guess+=c
  guess+=d
  
  
  
  if guess == password:
    print("Guess number "+str(x))
    print("Guess: "+guess)
    break
  else:
    print("Guess: "+guess)
  
  r+=1